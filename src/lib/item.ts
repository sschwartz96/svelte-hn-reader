type Item = {
	id: number; // The item's unique id
	deleted: boolean; // true if item is deleted.
	type: string; // The type of item. One of "job", "story", "comment", "poll", or "pollopt".
	by: string; // The username of the item's author.
	time: number; //Creation date of the item, in Unix Time.
	text: string; //The comment, story or poll text. HTML.
	dead: boolean; // true if the item is dead.
	parent: number; //The comment's parent: either another comment or the relevant story.
	poll: number; // The pollopt's associated poll.
	kids: number[]; //The ids of the item's comments, in ranked display order.
	url: string; // The URL of the story.
	score: number; // The story's score, or the votes for a pollopt.
	title: string; // The title of the story, poll or job. HTML.
	parts: number[]; // A list of related pollopts, in display order.
	descendants: number; // In the case of stories or polls, the total comment count.

	// additional
	lastUpdated: number; // last time the item was downloaded from API in milliseconds
	rank: Record<string, number>; // Number that the item is ranked on the current page
};

export type { Item };

const itemStore: Record<number, Item> = {};

// getTotalDescendents returns the total amount of descendants of an item including itself
export async function getTotalDescendents(id: number): Promise<number> {
	const item = await getItem(id, false);
	let sum = 1;
	if (item.kids) {
		for (const childId of item.kids) {
			sum += await getTotalDescendents(childId);
		}
	}
	return sum;
}

// getItem returns the item with of the following id
// caches for 1 minute
// invalidate ignores the cache limit
export async function getItem(id: number, invalidate: boolean): Promise<Item> {
	const currentTime = (new Date()).getTime();
	if (itemStore[id] && (!invalidate || (currentTime - itemStore[id].lastUpdated) < 60000)) {
		return itemStore[id];
	}
	const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
	const res = await fetch(url);
	if (!res.ok) throw 'Error fetching data from API';

	let item: Item = await res.json();
	if (item === null) item = createNullItem(id, 0);
	if (item === undefined) item = createUndefinedItem(id, 0);
	item.lastUpdated = currentTime;

	itemStore[id] = item;

	return item;
}

export async function getItems(ids: number[]): Promise<Item[]> {
	try {
		const getItemFns = ids.map((val) => getItem(val, true));
		return await Promise.all(getItemFns);
	} catch (err) {
		console.log('getItems() error: ', err);
	}
	return [];
}

export function createNullItem(id: number, index: number): Item {
	return {
		id: id,
		by: 'null',
		url: '',
		type: '',
		time: 0,
		text: 'API return null for this item',
		dead: false,
		poll: 0,
		kids: [],
		rank: { category: index },
		score: 0,
		title: 'API return null for this item',
		parts: [],
		parent: 0,
		deleted: false,
		descendants: 0,
		lastUpdated: (new Date()).getTime(),
	};
}

export function createUndefinedItem(id: number, index: number): Item {
	return {
		id: id,
		by: 'undefined',
		url: '',
		type: '',
		time: 0,
		text: 'Error while retrieving this item',
		dead: false,
		poll: 0,
		kids: [],
		rank: { category: index },
		score: 0,
		title: 'Error while retrieving this item',
		parts: [],
		parent: 0,
		deleted: false,
		descendants: 0,
		lastUpdated: (new Date()).getTime(),
	};
}
