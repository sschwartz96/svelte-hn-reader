<script context="module" lang="ts">
	import type { Item } from '$lib/item';

	// TODO: remove code duplication
	export async function load({ page, fetch }) {
		const id: number = page.params.id;
		const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

		let res = await fetch(url);
		if (!res.ok) {
			return {
				props: {
					errorMessage: 'Failed to retrieve data from API'
				}
			};
		}

		const item: Item = await res.json();
		const commentIds = item.kids;

		const comments = await loadComments(commentIds);

		return {
			props: {}
		};
	}

	type fetchItemResponse = {
		item: Item;
		errorMessage: string;
	};

	// TODO: remove duplication also located in routes/[category].svelte
	// fetchItem fetches an individual item based on its id
	async function fetchItem(
		id: number,
		index: number,
		category: string
	): Promise<fetchItemResponse> {
		const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
		let res = await fetch(url);
		if (res.ok) {
			let val = await res.json();
			val.rank = {};
			val.rank[category] = index;
			return { item: val, errorMessage: undefined };
		} else {
			return { item: undefined, errorMessage: 'Error receiving data from API' };
		}
	}

	// TODO: refactor as comments are just items
	async function loadComments(ids: number[]): Item[] {
		
	}
</script>
