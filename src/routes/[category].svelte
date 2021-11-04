<script context="module" lang="ts">
	import type { Item } from '$lib/item';

	const base_url = 'https://hacker-news.firebaseio.com/v0/';
	const item_url = 'item/{id}.json';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const category = determineCategory(page.params.category);
		const url = 'https://hacker-news.firebaseio.com/v0/' + category;

		let res = await fetch(url);
		let ids = await res.json();

		return {
			props: {
				storyIds: ids,
				/* stories: stories, */
				category: category
			}
		};
	}

	function determineCategory(category: string) {
		switch (category) {
			case 'top':
				return 'topstories.json';
			case 'newest':
				return 'newstories.json';
		}
	}
</script>

<script lang="ts">
	import ItemSummary from '$lib/ItemSummary.svelte';

	export let category: string;
	export let errorMessage = undefined;
	export let storyIds: number[];

	let prevLength = 0;
	let maxLength = 30;
	let stories: Item[] = new Array<Item>(30);

	type fetchItemResponse = {
		item: Item;
		errorMessage: string;
	};

	async function fetchItem(
		url: string,
		index: number,
		category: string
	): Promise<fetchItemResponse> {
		let res = await fetch(url);
		if (res.ok) {
			let val = await res.json();
			val.rank = {};
			val.rank[category] = index;
			return { item: val, errorMessage: undefined };
		}
	}

	function fetchItems(ids: number[]) {
		for (let i = prevLength; i < maxLength; i++) {
			let url = base_url + item_url.replace('{id}', ids[i].toString());
			fetchItem(url, i + 1, category).then((data) => {
				stories[data.item.rank[category] - 1] = data.item;
				stories = stories;
			});
		}
	}

	function fetchMore() {
		prevLength = maxLength;
		maxLength += 30;
		stories.length = maxLength;
		fetchItems(storyIds);
	}

	// when storyIds changes we want to update what is shown
	$: fetchItems(storyIds);
</script>

{#if errorMessage}
	<div class="font-bold text-2xl text-red-800">{errorMessage}</div>
{/if}

{#each stories as story}
	{#if story !== undefined && story['id'] !== ''}
		<ItemSummary item={story} pageCategory={category} />
	{/if}
{/each}

<button on:click={fetchMore} class="text-gray-500">Load more...</button>
