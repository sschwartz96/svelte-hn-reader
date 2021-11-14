<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	import '../app.css';
</script>

<div class="flex flex-col min-h-screen w-11/12 xl:w-10/12 mt-2 mx-auto">
	<Header />

	<main class="flex-grow">
		<slot />
	</main>

	<div class="mt-96" />
	<Footer />
</div>
