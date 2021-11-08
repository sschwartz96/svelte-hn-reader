<script lang="ts">
	import type { Item } from './item';

	export let item: Item;
</script>

<div>
	<div class="dark:text-gray-400">TODO: add details here</div>
	<p class="max-w-4xl">{@html item.text}</p>
</div>
