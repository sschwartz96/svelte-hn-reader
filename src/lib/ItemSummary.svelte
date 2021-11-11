<script lang="ts">
	import type { Item } from '$lib/item';
	import { getTimeAgo } from './util';

	function getBaseURL(url: string): string {
		if (url === undefined) return '';
		url = url.replace('https://', '').replace('http://', '').replace('www.', '');
		let parts = url.split('/');
		return parts.length > 1 ? parts[0] : url;
	}

	export let item: Item;
</script>

<div class="wrapper" id={item.id}>
	<span class="text-lg text-gray-500">&#8593;</span>
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
				| <a sveltekit:prefetch sveltekit:noscroll href="/item/{item.id}"
					>{item.kids.length} comments</a
				>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.wrapper {
		@apply pt-1 flex space-x-1;
	}
</style>
