<script context="module" lang="ts">
	import { getItem, Item } from '$lib/item';

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
					storyIds: [],
					category: category,
					errorMessage: 'Failed to retrieve data from API'
				}
			};
		}
		let ids = await res.json();

		return {
			props: {
				storyIds: ids,
				category: category,
				errorMessage: ''
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
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { prettifyCategory, sleep } from '$lib/util';
	import { browser } from '$app/env';
	import { currentCategory, currentCategoryItemIds, currentCategoryItems } from '$lib/stores';

	export let category: string;
	export let errorMessage = undefined;
	export let storyIds: number[];

	let showMoreButton = false;
	let prevLength = 0;
	let maxLength = 30;
	let stories: Item[] = new Array<Item>();
	let scrollY: number;
	let fetching = false;
	let mounted = false;
	let capped = false; // capped only set to true if we are at the end of the storyIds length

	// ran everytime we navigate to a category
	onMount(async () => {
		await sleep(250);
		mounted = true;
	});

	async function fetchItems() {
		fetching = true;
		showMoreButton = false;
		for (let i = 0; i < maxLength - prevLength; i++) {
			const index = prevLength + i;
			const item = await getItem(storyIds[index], true);
			await sleep(10);
			$currentCategoryItems = stories = [...stories, item];
		}
		fetching = false;
		showMoreButton = true;
	}

	async function fetchMore(amount: number) {
		if (!fetching && !capped && mounted) {
			if (maxLength + amount > storyIds.length) {
				prevLength = maxLength;
				maxLength = storyIds.length;
				capped = true;
			} else {
				prevLength = maxLength;
				maxLength += amount;
			}
			fetchItems();
		}
	}

	// reset the state of the page based on the cateogry
	async function resetState(category: string) {
		if ($currentCategory === category) {
			storyIds = $currentCategoryItemIds;
			stories = $currentCategoryItems;
			return;
		}
		$currentCategoryItemIds = storyIds;
		$currentCategory = category = category; // just to prevent linter complain
		prevLength = 0;
		maxLength = 30;
		showMoreButton = false; // hide while loading

		stories = new Array<Item>();
		fetchItems();
	}

	function checkScroll(y: number) {
		if (!fetching && browser && stories.length > 0) {
			const fifteenAway = document.getElementById(stories[stories.length - 16].id + '_scroll');
			if (fifteenAway !== null && y > fifteenAway.offsetTop) fetchMore(3);
		}
	}

	// use a reactive statement to update page based on "category"
	$: resetState(category);
	$: checkScroll(scrollY);
</script>

<svelte:window bind:scrollY />

<title>{prettifyCategory(category)}</title>

<div out:fade|local={{ duration: 250 }} class="flex flex-col overflow-x-hidden">
	{#if errorMessage}
		<div class="font-bold text-2xl text-red-800">{errorMessage}</div>
	{/if}

	{#each stories as story, i}
		<div
			in:fly|local={{ x: 50, duration: 500 }}
			id="{story.id}_scroll"
			class="flex space-x-2 items-baseline mb-2"
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
