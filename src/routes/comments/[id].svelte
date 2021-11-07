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
		const commentIds = item.kids;

		const commentsRes = await loadComments(commentIds, fetch);
		const comments = commentsRes.map((val) => val.item);

		return {
			props: {
				importedComments: comments
			}
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
		category: string,
		fetch
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
	async function loadComments(ids: number[], fetch) {
		let loadFns = ids.map((val, index) => fetchItem(val, index, 'comment', fetch));
		// TODO: make sure to handle error handling
		return Promise.all(loadFns);
	}
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';

	let comments: Item[] = new Array();

	export let importedComments: Item[];

	const sleep = (milliseconds: number) => {
		return new Promise((resolve) => setTimeout(resolve, milliseconds));
	};

	async function resetState(c: Item[]) {
		await sleep(10);
		comments = c;
	}

	$: resetState(importedComments);
</script>

<!-- TODO: add parent item -->

{#each comments as comment (comment.id)}
	<div
		class="mb-4 dark:text-gray-300"
		in:fly|local={{ x: 250, duration: 250 }}
		out:fly={{ x: -250, duration: 250 }}
	>
		<p class="max-w-4xl comment">{@html comment.text}</p>
	</div>
{/each}
