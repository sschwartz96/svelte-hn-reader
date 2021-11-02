<script lang="ts">
	import type { item } from '$lib/item';
	import Item from '$lib/Item.svelte';

	const base = 'https://hacker-news.firebaseio.com/v0/';
	const top = 'topstories.json';
	const item = 'item/{id}.json';

	let errorMessage = undefined;
	let storyIds: number[] = [];
	let stories: item[] = new Array(30);
	let lastMax = 0;
	let currentMax = 30;

	function fetchItems() {
		for (let i = lastMax; i < currentMax; i++) {
			fetchItem(base + item.replace('{id}', storyIds[i].toString()), i + 1);
		}
	}

	function fetchItem(url: string, index: number) {
		fetch(url)
			.then((res) => res.json())
			.then((val: item) => {
				val.rank = {};
				val.rank[top] = index;
				stories[index] = val;
			})
			.catch((err) => {
				errorMessage = 'Error retrieving data from HackerNews API';
				console.error(err);
			});
	}

	fetch(base + top)
		.then((res) => res.json())
		.then((data) => {
			storyIds = data;
			fetchItems();
		})
		.catch((err) => {
			errorMessage = 'Error retrieving data from HackerNews API';
			console.error(err);
		});
</script>

{#if errorMessage}
	<div class="font-bold text-2xl text-red-800">{errorMessage}</div>
{/if}

{#each stories as story}
	{#if story !== undefined}
		<Item item={story} pageCategory={top} />
	{/if}
{/each}
