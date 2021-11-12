<script context="module" lang="ts">
	import type { Item } from '$lib/item';
	import { getItem, getItems } from '$lib/item';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		const id: number = page.params.id;
		/* const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`; */
		let item: Item;
		let items: Item[];

		// get parent item
		try {
			item = await getItem(id);
		} catch (err) {
			return {
				props: {
					errorMessage: 'Failed to retrieve data from API'
				}
			};
		}

		// get all children
		try {
			items = await getItems(item.kids);
		} catch (err) {
			return {
				props: {
					errorMessage: 'Failed to retrieve data from API'
				}
			};
		}

		return {
			props: {
				parentItem: item,
				importedItems: items
			}
		};
	}
</script>

<script lang="ts">
	import ItemDetail from '$lib/ItemDetail.svelte';
	import ItemSummary from '$lib/ItemSummary.svelte';

	let items: Item[] = new Array();

	export let parentItem: Item;
	export let importedItems: Item[];
	export let errorMessage: string;

	const sleep = (milliseconds: number) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	async function resetState(_items: Item[]) {
		await sleep(10);
		items = _items;
	}

	$: resetState(importedItems);
</script>

{#if !errorMessage}
	<div class="mb-8">
		<ItemSummary item={parentItem} showText={true} />
	</div>

	{#each items as item (item.id)}
		<div class="dark:text-gray-300">
			<ItemDetail {item} />
		</div>
	{/each}
{/if}
<span>Error retrieving item: {errorMessage}</span>
