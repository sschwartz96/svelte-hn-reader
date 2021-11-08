<script context="module" lang="ts">
	import type { Item } from '$lib/item';

	// TODO: remove code duplication
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
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
		const itemIds = item.kids;

		const itemRes = await loadComments(itemIds, fetch);
		const items = itemRes.map((val) => val.item);

		return {
			props: {
				importedItems: items
			}
		};
	}

	type fetchItemResponse = {
		item: Item;
		errorMessage: string;
	};

	type fetchFnType = (input: RequestInfo, init?: RequestInit) => Promise<Response>;

	// TODO: remove duplication also located in routes/[category].svelte
	// fetchItem fetches an individual item based on its id
	async function fetchItem(
		id: number,
		index: number,
		category: string,
		fetch: fetchFnType
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
	async function loadComments(ids: number[], fetch: fetchFnType) {
		let loadFns = ids.map((val, index) => fetchItem(val, index, 'comment', fetch));
		// TODO: make sure to handle error handling
		return Promise.all(loadFns);
	}
</script>

<script lang="ts">
	import ItemDetail from '$lib/ItemDetail.svelte';
	import { fly } from 'svelte/transition';

	let items: Item[] = new Array();

	export let importedItems: Item[];

	const sleep = (milliseconds: number) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	async function resetState(_items: Item[]) {
		await sleep(10);
		items = _items;
	}

	$: resetState(importedItems);
</script>

<p class="mb-8 text-white">TODO: add parent item</p>

{#each items as item (item.id)}
	<div
		class="mb-4 dark:text-gray-300"
		in:fly|local={{ x: 250, duration: 250 }}
		out:fly={{ x: -250, duration: 250 }}
	>
		<ItemDetail {item} />
	</div>
{/each}
