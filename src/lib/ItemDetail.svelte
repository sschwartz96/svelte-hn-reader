<script lang="ts">
	import { Item, getItems, getTotalDescendents } from './item';
	import { getTimeAgo, sleep } from './util';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	let children: Item[] = new Array();
	let expandText = ' - ';
	let expanded = true;
	let descendentCount = 0;

	onMount(async () => {
		if (item.kids && item.kids.length > 0) {
			getItems(item.kids).then((vals) => {
				children = vals;
			});
		}
	});

	async function toggle() {
		descendentCount = await getTotalDescendents(item.id);
		expanded = !expanded;
		expandText = expandText === ' - ' ? descendentCount.toString() + ' more' : ' - ';
	}

	export let item: Item;
	export let next: number; // next is the next item in the list
	export let nextAncestor: number; // nextAncestor is the next "ancestor of the list" only null if we are at the bottom
</script>

<div id={item.id.toString()} class="mt-4" transition:slide={{ easing: sineInOut }}>
	<div class="text-gray-500 dark:text-gray-400">
		<span class="text-lg text-gray-500">&#8593;</span>
		{item.by === undefined ? 'deleted' : item.by}
		{getTimeAgo(item.time)}

		<a href="#{item.parent}">parent</a>
		{#if next !== null || nextAncestor !== null}
			<a href="#{next ?? nextAncestor}">next</a>
		{/if}
		<button on:click={toggle}>[{expandText}]</button>
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
		{:else}
			{#each children as child, i (child.id)}
				{#if i + 1 < children.length}
					<svelte:self item={child} next={children[i + 1].id} nextAncestor={children[i + 1].id} />
				{:else}
					<svelte:self item={child} next={nextAncestor} {nextAncestor} />
				{/if}
			{/each}
		{/if}
	</div>
{/if}
