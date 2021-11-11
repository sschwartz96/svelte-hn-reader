<script context="module" lang="ts">
	import type { Item } from '$lib/item';
	import { createNullItem, createUndefinedItem } from '$lib/item';

	const base_url = 'https://hacker-news.firebaseio.com/v0/';
	const item_url = 'item/{id}.json';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const category = determineCategory(page.params.category);
		const url = 'https://hacker-news.firebaseio.com/v0/' + category;

		let res = await fetch(url);
		if (!res.ok) {
			return {
				props: {
					errorMessage: 'Failed to retrieve data from API'
				}
			};
		}
		let ids = await res.json();

		return {
			props: {
				storyIds: ids,
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
			case 'ask':
				return 'askstories.json';
			case 'show':
				return 'showstories.json';
			case 'jobs':
				return 'jobstories.json';
		}
	}
</script>

<script lang="ts">
	import ItemSummary from '$lib/ItemSummary.svelte';
	import { fly } from 'svelte/transition';
	import { tick } from 'svelte';

	export let category: string;
	export let errorMessage = undefined;
	export let storyIds: number[];

	let showMoreButton = false;
	let prevLength = 0;
	let maxLength = 30;
	let stories: Item[] = new Array<Item>();

	const sleep = (milliseconds: number) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	type fetchItemResponse = {
		item: Item;
		errorMessage: string;
	};

	// fetchItem fetches an individual item based on its id
	async function fetchItem(
		id: number,
		index: number,
		category: string
	): Promise<fetchItemResponse> {
		let url = base_url + item_url.replace('{id}', id.toString());
		let res = await fetch(url);
		if (res.ok) {
			let val = await res.json();
			if (val === null) {
				return { item: createNullItem(id, index), errorMessage: undefined };
			}
			val.rank = {};
			val.rank[category] = index;
			return { item: val, errorMessage: undefined };
		} else {
			return {
				item: createUndefinedItem(id, index),
				errorMessage: 'Error receiving data from API'
			};
		}
	}

	// fetchItems fetches hacker news items based on story ids
	// updates global variable "storyIds"
	function fetchItems(ids: number[]) {
		for (let i = prevLength; i < maxLength; i++) {
			// go ahead and call a fetchItem async function to fetch data
			fetchItem(ids[i], i + 1, category).then(async (data) => {
				// a little hack to keep the news items in order
				let tries = 0;
				const sleepTime = 15;
				while (stories.length != data.item.rank[category] - 1) {
					if (tries * sleepTime > 10000) break; // break out if we are stuck after 10 seconds
					await sleep(sleepTime);
					tries++;
				}

				// once our "turn" we can update "stories" which will update the DOM
				await sleep(5); // added for visual appeal
				stories[data.item.rank[category] - 1] = data.item;

				// check if we are at the end to show the more button
				if (i + 1 == maxLength) showMoreButton = true;
			});
		}
	}

	// fetches more items
	async function fetchMore() {
		prevLength = maxLength;
		maxLength += 30;
		fetchItems(storyIds);

		/* await sleep(100); */
		/* // scroll down half the page */
		/* window.scrollBy(0, window.innerHeight / 2); */
	}

	// reset the state of the page based on the cateogry
	async function resetState(category: string) {
		category = category; // just to prevent linter complain
		prevLength = 0;
		maxLength = 30;
		showMoreButton = false; // hide while loading
		stories = new Array<Item>();
		// awaits (and tick(), but tick() wasn't enough???) to allow out transition
		await sleep(100);
		await tick();
		await sleep(100);
		fetchItems(storyIds);
	}

	// use a reactive statement to update page based on "category"
	$: resetState(category);
</script>

<div class="flex flex-col">
	{#if errorMessage}
		<div class="font-bold text-2xl text-red-800">{errorMessage}</div>
	{/if}

	{#each stories as story, i}
		<div
			class="flex space-x-2 items-baseline mb-2"
			in:fly={{ x: 250, duration: 250 }}
			out:fly={{ x: -250, duration: 250 }}
		>
			<span class="w-8 text-xl text-gray-400 text-right">{i + 1}.</span>
			<ItemSummary item={story} />
		</div>
	{/each}

	<div class="flex-grow" />
	{#if showMoreButton}
		<button on:click={fetchMore} class="pt-2 pb-4 text-left text-gray-500">Load more...</button>
	{/if}
</div>
