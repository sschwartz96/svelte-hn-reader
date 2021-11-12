<script lang="ts">
	import { Item, getItems } from './item';
	import { getTimeAgo } from './util';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let children: Item[] = new Array();
	let collapsed = false;

	onMount(() => {
		if (item.kids && item.kids.length > 0) {
			getItems(item.kids).then((vals) => {
				children = vals;
			});
		}
	});

	function toggleCollapse() {
		collapsed = !collapsed;
	}

	export let item: Item;
</script>

<div transition:slide id={item.id} class="mt-4">
	<div class="text-gray-500 dark:text-gray-400">
		<span class="text-lg text-gray-500">&#8593;</span>
		{item.by === undefined ? 'deleted' : item.by}
		{getTimeAgo(item.time)}
		<a href="#{item.parent}">parent</a>
		<button on:click={toggleCollapse}>collapse</button>
	</div>
	<p class="max-w-4xl">{@html item.text === undefined ? 'deleted' : item.text}</p>
	{#if !collapsed}
		<div class="ml-8">
			{#if item.kids !== undefined && item.kids.length > 0 && children.length === 0}
				<p>Loading...</p>
			{/if}
			{#each children as child}
				<svelte:self item={child} />
			{/each}
		</div>
	{/if}
</div>
