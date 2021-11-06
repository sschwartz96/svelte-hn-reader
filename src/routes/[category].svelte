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
	import { page } from '$app/stores';
	import ItemSummary from '$lib/ItemSummary.svelte';
	import { fade } from 'svelte/transition';

	export let category: string;
	export let errorMessage = undefined;
	export let storyIds: number[];

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
		} else {
			return { item: undefined, errorMessage: 'Error receiving data from API' };
		}
	}

	function fetchItems(ids: number[]) {
		console.log('fetchItems() =' + category);
		for (let i = prevLength; i < maxLength; i++) {
			let url = base_url + item_url.replace('{id}', ids[i].toString());
			fetchItem(url, i + 1, category).then(async (data) => {
				while (stories.length != data.item.rank[category] - 1) {
					console.log('stories: ' + stories.length);
					console.log('rank: ' + data.item.rank[category]);
					await sleep(50);
				}
				stories[data.item.rank[category] - 1] = data.item;
			});
		}
	}

	function fetchMore() {
		prevLength = maxLength;
		maxLength += 30;
		/* stories.length = maxLength; */
		fetchItems(storyIds);
	}

	// reset the state of the page based on the cateogry
	async function resetState(category: string) {
		console.log('resetState:  cat =' + category);
		console.log('resetState2: page =' + $page.path);
		category = category; // just to prevent linter complain
		prevLength = 0;
		maxLength = 30;
		stories = new Array<Item>();
		//stories = new Array<Item>(30);
	}

	$: resetState(category);
	$: fetchItems(storyIds);
</script>

{#if errorMessage}
	<div class="font-bold text-2xl text-red-800">{errorMessage}</div>
{/if}

{#if stories.length > 0}
	{#each stories as story (story.id)}
		<div transition:fade|local>
			<ItemSummary item={story} pageCategory={category} />
		</div>
	{/each}
{/if}
<button on:click={fetchMore} class="pt-2 pb-4 text-gray-500">Load more...</button>
