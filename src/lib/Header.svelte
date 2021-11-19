<script lang="ts">
	import { browser } from '$app/env';
	import { page } from '$app/stores';

	let themeText = '';

	if (browser) {
		if (!('theme' in localStorage)) {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
			themeText = 'light';
		} else {
			if (localStorage.theme === 'dark') {
				themeText = 'light';
				document.documentElement.classList.add('dark');
			} else {
				themeText = 'dark';
				document.documentElement.classList.remove('dark');
			}
		}
	}

	function toggleTheme() {
		if (localStorage.theme === 'dark') {
			localStorage.theme = 'light';
			themeText = 'dark';
			document.documentElement.classList.remove('dark');
		} else {
			localStorage.theme = 'dark';
			themeText = 'light';
			document.documentElement.classList.add('dark');
		}
	}
</script>

<header class="flex items-center bg-green-400 dark:bg-green-800 dark:text-gray-300 p-1">
	<h1 class="hidden">SvelteKit Hacker News Reader</h1>
	<img src="/logo.png" alt="logo" class="p-0.5 mr-2 w-7 h-7" />
	<nav class="flex flex-grow space-x-1">
		<a sveltekit:prefetch class={$page.params.category === 'top' ? 'selected' : ''} href="/top"
			>top</a
		>
		<span>|</span>
		<a
			sveltekit:prefetch
			class={$page.params.category === 'newest' ? 'selected' : ''}
			href="/newest">new</a
		><span>|</span>
		<!--
		<a href="/past">past</a> <span>|</span>
		<a href="/newcomments">comments</a><span>|</span>
		-->
		<a sveltekit:prefetch class={$page.params.category === 'ask' ? 'selected' : ''} href="/ask"
			>ask</a
		> <span>|</span>
		<a sveltekit:prefetch class={$page.params.category === 'show' ? 'selected' : ''} href="/show"
			>show</a
		> <span>|</span>
		<a sveltekit:prefetch class={$page.params.category === 'jobs' ? 'selected' : ''} href="/jobs"
			>jobs</a
		>
		<!--<a href="/submit">submit</a>-->
		<div class="flex-grow" />
		<button on:click={toggleTheme}>{themeText}</button>
		<!--<a href="/login">login</a>-->
	</nav>
</header>

<style>
	.selected {
		@apply font-bold;
	}
</style>
