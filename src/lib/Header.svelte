<script lang="ts">
	import { browser } from '$app/env';
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

<header class="flex bg-green-400 dark:bg-green-800 dark:text-gray-300 p-1">
	<h1 class="mr-4"><a sveltekit:prefetch sveltekit:noscroll href="/top">svelte-hn-reader</a></h1>
	<nav class="flex flex-grow space-x-1">
		<a sveltekit:prefetch sveltekit:noscroll href="/top">top</a> <span>|</span>
		<a sveltekit:prefetch sveltekit:noscroll href="/newest">new</a><span>|</span>
		<!--
		<a href="/past">past</a> <span>|</span>
		<a href="/newcomments">comments</a><span>|</span>
		-->
		<a sveltekit:prefetch sveltekit:noscroll href="/ask">ask</a> <span>|</span>
		<a sveltekit:prefetch sveltekit:noscroll href="/show">show</a> <span>|</span>
		<a sveltekit:prefetch sveltekit:noscroll href="/jobs">jobs</a>
		<!--<a href="/submit">submit</a>-->
		<div class="flex-grow" />
		<button on:click={toggleTheme}>{themeText}</button>
		<!--<a href="/login">login</a>-->
	</nav>
</header>
