<script context="module" lang="ts">
	import type { Item } from '$lib/item';

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
	import { getItems } from '$lib/item';
	import { sleep } from '$lib/util';
	import { browser } from '$app/env';

	export let category: string;
	export let errorMessage = undefined;
	export let storyIds: number[];

	let showMoreButton = false;
	let prevLength = 0;
	let maxLength = 30;
	let stories: Item[] = new Array<Item>();
	let scrollY: number;
	let fetching = false;
	let prevCateogry: string;

	if (prevCateogry === '') prevCateogry = category;

	async function fetchItems() {
		fetching = true;
		showMoreButton = false;
		const items = await getItems(storyIds.slice(prevLength, maxLength));
		for (let i = 0; i < items.length; i++) {
			await sleep(25);
			stories = [...stories, items[i]];
		}
		fetching = false;
		showMoreButton = true;
	}

	async function fetchMore(amount: number) {
		if (!fetching) {
			prevLength = maxLength;
			maxLength += amount;
			sleep(100);
			fetchItems();
		}
	}

	// reset the state of the page based on the cateogry
	async function resetState(category: string) {
		if (prevCateogry === category) {
			console.log('in the same category');
			return;
		}
		category = category; // just to prevent linter complain
		prevLength = 0;
		maxLength = 30;
		showMoreButton = false; // hide while loading

		stories = new Array<Item>();
		// awaits (and tick(), but tick() wasn't enough???) to allow out transition
		await sleep(100);
		await tick();
		await sleep(100);
		fetchItems();
	}

	function checkScroll(y: number) {
		if (!fetching && browser && stories.length > 0) {
			const fifteenAway = document.getElementById(stories[stories.length - 16].id + '_scroll');
			if (y > fifteenAway.offsetTop) fetchMore(3);
		}
	}

	// use a reactive statement to update page based on "category"
	$: resetState(category);
	$: checkScroll(scrollY);
</script>

<svelte:window bind:scrollY />

<div class="flex flex-col overflow-x-hidden">
	{#if errorMessage}
		<div class="font-bold text-2xl text-red-800">{errorMessage}</div>
	{/if}

	{#each stories as story, i}
		<div
			id="{story.id}_scroll"
			class="flex space-x-2 items-baseline mb-2"
			in:fly={{ x: 250, duration: 250 }}
			out:fly={{ x: -250, duration: 250 }}
		>
			<span class="min-w-2 text-xl text-gray-400 text-right">{i + 1}.</span>
			<ItemSummary item={story} showText={false} />
		</div>
	{/each}

	<div class="flex-grow" />
	{#if showMoreButton}
		<button on:click={() => fetchMore(10)} class="pt-2 pb-4 text-left text-gray-500"
			>Load more...</button
		>
	{/if}
</div>
