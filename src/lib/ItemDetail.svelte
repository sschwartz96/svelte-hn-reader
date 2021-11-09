<script lang="ts">
	import { Item, getItems } from './item';
	import { getTimeAgo } from './util';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let children: Item[] = new Array();

	onMount(() => {
		if (item.kids && item.kids.length > 0) {
			getItems(item.kids).then((vals) => {
				children = vals;
			});
		}
	});

	export let item: Item;
</script>

<div
	id={item.id}
	class="mt-4"
	in:fly|local={{ x: 250, duration: 250 }}
	out:fly={{ x: -250, duration: 250 }}
>
	<div class="dark:text-gray-400">
		{item.by === undefined ? 'deleted' : item.by}
		{getTimeAgo(item.time)}
		<a href="#{item.parent}">parent</a>
	</div>
	<p class="max-w-4xl">{@html item.text === undefined ? 'deleted' : item.text}</p>
	<div class="ml-8">
		{#each children as child}
			<svelte:self item={child} />
		{/each}
	</div>
</div>
