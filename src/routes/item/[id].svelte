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
			item = await getItem(id, true);
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
	import { sleep } from '$lib/util';
	import { browser } from '$app/env';

	let items: Item[] = new Array();

	export let parentItem: Item;
	export let importedItems: Item[];
	export let errorMessage: string;

	async function resetState(_items: Item[]) {
		await sleep(10);
		items = _items;
	}

	let finishCount = 0;
	async function onFinish() {
		finishCount++;
		if (finishCount === parentItem.kids.length) {
			if (browser && location.hash) {
				await sleep(500); // need to wait for page to finish rendering
				const element = document.getElementById(location.hash.substring(1));
				element.scrollIntoView(true);
				return;
			}
		}
	}

	$: resetState(importedItems);
</script>

{#if !errorMessage}
	<div class="mb-8">
		<ItemSummary item={parentItem} showText={true} />
	</div>

	{#each items as item, i (item.id)}
		<div class="dark:text-gray-300">
			{#if i + 1 < items.length}
				<ItemDetail
					on:finish={onFinish}
					{item}
					next={items[i + 1].id}
					nextAncestor={items[i + 1].id}
				/>
			{:else}
				<ItemDetail on:finish={onFinish} {item} next={null} nextAncestor={null} />
			{/if}
		</div>
	{/each}
{:else}
	<span>Error retrieving item: {errorMessage}</span>
{/if}
