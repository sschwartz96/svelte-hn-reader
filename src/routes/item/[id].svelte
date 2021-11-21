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
				importedItems: items,
				errorMessage: ''
			}
		};
	}
</script>

<script lang="ts">
	import ItemDetail from '$lib/ItemDetail.svelte';
	import ItemSummary from '$lib/ItemSummary.svelte';
	import { sleep } from '$lib/util';
	import { browser } from '$app/env';
	import { onMount, tick } from 'svelte';
	import { fade } from 'svelte/transition';

	let items: Item[] = [];
	let renderItems: Item[] = [];
	let rendering = false;
	let scrollY = 0;
	let alreadyScrolled = false;

	export let parentItem: Item;
	export let importedItems: Item[];
	export let errorMessage: string;

	onMount(async () => await sleep(10));

	async function resetState(_items: Item[]) {
		/* await sleep(10); */
		items = _items;
		initialRender();
	}

	let finishCount = 0;
	async function onFinish() {
		finishCount++;
		if (!alreadyScrolled && finishCount === renderItems.length) {
			if (browser && location.hash) {
				await sleep(250); // initial wait for the first few comments to load
				let element = document.getElementById(location.hash.substring(1));
				while (element === null) {
					await sleep(100);
					element = document.getElementById(location.hash.substring(1));
					await loadNextItem();
				}
				alreadyScrolled = true;
				element.scrollIntoView(true); // TODO: manually set smooth here
				return;
			}
		}
	}

	// checkScroll waits for slide transition to complete and then loads more comments if necessary
	async function checkScroll(y: number) {
		if (browser && !rendering && renderItems.length > 0) {
			console.log('checking scroll');
			await sleep(300); // must wait for animation to  be performed
			const lastRenderedComment = document.getElementById(
				renderItems[renderItems.length - 1].id.toString()
			);
			if (
				lastRenderedComment !== null &&
				lastRenderedComment.offsetTop < y + window.innerHeight * 2
			) {
				initialRender();
			}
		}
	}

	// initialRender renders enough items to show on 2 * screen heights
	async function initialRender() {
		if (rendering) return;
		while (browser && renderItems.length < items.length) {
			rendering = true;
			renderItems = [...renderItems, items[renderItems.length]];
			let lastItem = document.getElementById(renderItems[renderItems.length - 1].id.toString());
			let count = 0;
			while (lastItem === null && count < 100) {
				lastItem = document.getElementById(renderItems[renderItems.length - 1].id.toString());
				await sleep(100);
				count++;
			}
			await sleep(100);
			if (lastItem.offsetTop > scrollY + window.innerHeight * 2) {
				console.log(renderItems[renderItems.length - 1].id.toString());
				console.log('lastItem top position is greater than window height');
				console.log(`${lastItem.offsetTop} > ${scrollY} + ${window.innerHeight} * 2`);
				break;
			}
		}
		rendering = false;
	}

	async function loadNextItem() {
		rendering = true;
		renderItems = [...renderItems, items[renderItems.length]];
	}

	$: resetState(importedItems);
	$: checkScroll(scrollY);
</script>

<svelte:window bind:scrollY />

<title>{parentItem.title}</title>

{#if !errorMessage}
	<div class="mb-8">
		<ItemSummary item={parentItem} showText={true} />
	</div>

	{#each renderItems as item, i (item.id)}
		<div transition:fade|local class="dark:text-gray-300">
			{#if i + 1 < items.length}
				<ItemDetail
					on:finish={onFinish}
					on:toggled={() => checkScroll(scrollY)}
					{item}
					next={items[i + 1].id}
					nextAncestor={items[i + 1].id}
				/>
			{:else}
				<ItemDetail
					on:finish={onFinish}
					on:toggled={() => checkScroll(scrollY)}
					{item}
					next={null}
					nextAncestor={null}
				/>
			{/if}
		</div>
	{/each}
{:else}
	<span>Error retrieving item: {errorMessage}</span>
{/if}
