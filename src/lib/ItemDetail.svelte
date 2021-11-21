<script lang="ts">
	import { Item, getItems, getTotalDescendents } from './item';
	import { getTimeAgo, sleep } from './util';
	import { onMount } from 'svelte';
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

	/*** START expansion and contraction of item ***/
	let expandText = ' - ';
	let expanded = true;
	let descendentCount = 0;
	let childrenElem: HTMLElement;
	let childrenElemInitialHeight: string;

	async function toggle() {
		getTotalDescendents(item.id).then((amount) => {
			descendentCount = amount;
			expandText = expandText === ' - ' ? descendentCount.toString() + ' more' : ' - ';
		});
		expanded = !expanded;

		// need to dispatch this to its parent so we can load more comments if necessary
		dispatch('toggled');

		if (!expanded) {
			// update height each time to ensure proper height if children are collapse
			childrenElemInitialHeight = childrenElem.offsetHeight.toString() + 'px';
			await sleep(10);
			childrenElem.style.height = childrenElemInitialHeight;
			await sleep(10);
			childrenElem.style.height = '0';
		} else {
			childrenElem.style.height = childrenElemInitialHeight;
			await sleep(250);
			childrenElem.style.height = 'auto';
		}
	}

	export let next: number; // next is the next item in the list
	export let nextAncestor: number; // nextAncestor is the next "ancestor of the list" only null if we are at the bottom
	/*** END expansion and contraction ***/

	// basic functionality
	let children: Item[] = [];

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

	// scrollToId scrolls to the item id and updates window history
	function scrollToId(id: number) {
		// update window history
		let url = window.location.toString();
		if (window.location.toString().includes('#')) {
			url = url.split('#')[0];
		}
		window.history.pushState('', id.toString(), url + `#${id}`);

		// find element and smooth scroll
		const el = document.getElementById(id.toString());
		if (el === null) {
			console.log("this shouldn't happen");
		}
		window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
	}

	export let item: Item;
</script>

<div id={item.id.toString()} class="mt-4">
	<div class="text-gray-500 dark:text-gray-400">
		<!-- <span class="text-lg text-gray-500">&#8593;</span> -->
		{item.by === undefined ? 'deleted' : item.by}
		{getTimeAgo(item.time)}

		<button on:click={() => scrollToId(item.parent)}>parent</button>
		{#if next !== null || nextAncestor !== null}
			<button on:click={() => scrollToId(next)}>next</button>
		{/if}
		<button on:click={toggle}>[{expandText}]</button>
	</div>
</div>

<!-- 
---- Extremely necessary to ensure that the children of the item are not rendered in the 
---- same container as the content. Breaks the slide transition!
--->

<div bind:this={childrenElem} class="children">
	<p class="max-w-4xl">
		{@html item.text === undefined ? 'deleted' : item.text}
	</p>

	{#if item.kids}
		<div class="ml-8">
			{#if children.length === 0}
				<p>Loading...</p>
			{:else}
				{#each children as child, i (child.id)}
					{#if i + 1 < children.length}
						<svelte:self
							on:finish={onFinish}
							on:toggled={() => dispatch('toggled')}
							item={child}
							next={children[i + 1].id}
							nextAncestor={children[i + 1].id}
						/>
					{:else}
						<svelte:self
							on:finish={onFinish}
							on:toggled={() => dispatch('toggled')}
							item={child}
							next={nextAncestor}
							{nextAncestor}
						/>
					{/if}
				{/each}
			{/if}
		</div>
	{/if}
</div>

<style>
	.children {
		transition: height 0.3s ease-in-out;
		overflow: hidden;
	}
</style>
