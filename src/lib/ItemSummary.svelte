<script lang="ts">
	import type { Item } from '$lib/item';
	import { getBaseURL, getTimeAgo } from './util';

	export let item: Item;
	export let showText: boolean;
</script>

<div class="wrapper" id={item.id.toString()}>
	<!-- <span class="text-lg text-gray-500">&#8593;</span> -->
	<div class="flex flex-col space-x-0">
		<div>
			<a
				href={item.url}
				class="text-lg text-black dark:text-gray-200 visited:text-gray-500 dark:visited:text-gray-400"
				>{item.title}</a
			>
			{#if item.url}
				<span class="text-gray-500 dark:text-gray-400 text-sm">({getBaseURL(item.url)})</span>
			{/if}
		</div>
		<div class="text-gray-500 dark:text-gray-400 text-xs">
			{item.score} points by {item.by}
			{getTimeAgo(item.time)}
			{#if item.kids}
				| <a sveltekit:prefetch href="/item/{item.id}">{item.descendants} comments</a>
			{:else}
				| <a sveltekit:prefetch href="/item/{item.id}"> comments</a>
			{/if}
		</div>
		{#if showText && item.text}
			<div>
				{@html item.text}
			</div>
		{/if}
	</div>
</div>
