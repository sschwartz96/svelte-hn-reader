<script>
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";

	import "../app.css";
</script>

<div class="w-10/12 mt-2 mx-auto">
	<Header />

	<slot />

	<Footer />
</div>
