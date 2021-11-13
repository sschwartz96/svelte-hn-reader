<script lang="ts">
	import { Item, getItems } from './item';
	import { getTimeAgo } from './util';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	let children: Item[] = new Array();
	let expanded = true;

	onMount(async () => {
		if (item.kids && item.kids.length > 0) {
			getItems(item.kids).then((vals) => {
				children = vals;
			});
		}
	});

	function toggle() {
		expanded = !expanded;
	}

	export let item: Item;
</script>

<div id={item.id} class="mt-4" transition:slide={{ easing: sineInOut }}>
	<div class="text-gray-500 dark:text-gray-400">
		<span class="text-lg text-gray-500">&#8593;</span>

		{item.by === undefined ? 'deleted' : item.by}
		{getTimeAgo(item.time)}

		<a href="#{item.parent}">parent</a>
		<button on:click={toggle}>collapse</button>
	</div>

	{#if expanded}
		<p transition:slide|local class="max-w-4xl">
			{@html item.text === undefined ? 'deleted' : item.text}
		</p>
	{/if}
</div>

<!-- 
---- Extremely necessary to ensure that the children of the item are not rendered in the 
---- same container as the content. Breaks the slide transition!
--->

{#if expanded && item.kids}
	<div class="ml-8">
		{#if children.length === 0}
			<p>Loading...</p>
		{/if}
		{#each children as child}
			<svelte:self item={child} />
		{/each}
	</div>
{/if}
