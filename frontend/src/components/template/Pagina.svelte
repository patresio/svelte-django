<script lang="ts">
	import Header from './Header.svelte';
	import Rodape from './Rodape.svelte';

	let { menu, children } = $props();
</script>

<div class="flex flex-col gap-4 min-h-screen">
	<Header {menu} />
	<main class="flex-1 px-4">
		<div class="mx-auto container">{@render children?.()}</div>
	</main>
	<Rodape />
</div>
