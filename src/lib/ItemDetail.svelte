<script lang="ts">
	import { Item, getItems, getTotalDescendents } from './item';
	import { getTimeAgo } from './util';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import { createEventDispatcher } from 'svelte';

	/*** for page load finish ***/
	let finishedCount = 0;
	const dispatch = createEventDispatcher();

	// onFinish is a callback function for items with children, once all
	// children are done loading then the finished is disptached
	function onFinish() {
		finishedCount++;
		if (finishedCount === item.kids.length) {
			dispatch('finish');
		}
	}
	/*** page load finish ***/

	/*** for expansion and contraction of item ***/
	let expandText = ' - ';
	let expanded = true;
	let descendentCount = 0;

	async function toggle() {
		descendentCount = await getTotalDescendents(item.id);
		expanded = !expanded;
		expandText = expandText === ' - ' ? descendentCount.toString() + ' more' : ' - ';
	}

	export let next: number; // next is the next item in the list
	export let nextAncestor: number; // nextAncestor is the next "ancestor of the list" only null if we are at the bottom
	/*** expansion and contraction ***/

	// basic functionality
	let children: Item[] = new Array();

	onMount(async () => {
		if (item.kids && item.kids.length > 0) {
			getItems(item.kids).then(async (vals) => {
				children = vals;
			});
		} else {
			// base case is that the element has no children, dispatch finish
			dispatch('finish');
		}
	});
	export let item: Item;
</script>

<div id={item.id.toString()} class="mt-4" transition:slide={{ easing: sineInOut }}>
	<div class="text-gray-500 dark:text-gray-400">
		<!-- <span class="text-lg text-gray-500">&#8593;</span> -->
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
					<svelte:self
						on:finish={onFinish}
						item={child}
						next={children[i + 1].id}
						nextAncestor={children[i + 1].id}
					/>
				{:else}
					<svelte:self on:finish={onFinish} item={child} next={nextAncestor} {nextAncestor} />
				{/if}
			{/each}
		{/if}
	</div>
{/if}
