<script lang="ts">
	import type { item } from '$lib/item';

	function getBaseURL(url: string): string {
		if (url === undefined) return '';
		url = url.replace('https://', '').replace('http://', '').replace('www.', '');
		let parts = url.split('/');
		return parts.length > 1 ? parts[0] : url;
	}

	function getTimeAgo(time: number): string {
		let sub = new Date().getTime() - time * 1000;
		let minutes = Math.round(sub / 60000);
		let a = minutes;
		let b = 'm ago';

		if (minutes >= 518400) {
			a = Math.floor(minutes / 518400);
			b = 'y';
		} else if (minutes >= 43200) {
			a = Math.floor(minutes / 43200);
			b = 'mon';
		} else if (minutes >= 1440) {
			a = Math.floor(minutes / 1440);
			b = 'd';
		} else if (minutes >= 60) {
			a = Math.floor(minutes / 60);
			b = 'h';
		}

		return a + b + ' ' + 'ago';
	}

	export let pageCategory: string; // pageRank is the number displayed to the left of the item
	export let item: item;
</script>

<div class="wrapper">
	<span class="rank">{item.rank[pageCategory]}.</span>
	<span class="text-lg text-gray-500">&#8593;</span>
	<div class="flex flex-col space-x-0">
		<div>
			<a href={item.url} class="text-lg">{item.title}</a>
			{#if item.url}
				<span class="text-gray-500 text-sm">({getBaseURL(item.url)})</span>
			{/if}
		</div>
		<div class="text-gray-500 text-xs">
			{item.score} points by {item.by}
			{getTimeAgo(item.time)}
		</div>
	</div>
</div>

<style lang="postcss">
	.wrapper {
		@apply pt-1 flex space-x-1;
	}
	.rank {
		min-width: 30px;
		@apply inline-block text-xl text-gray-400 text-right;
	}
</style>
