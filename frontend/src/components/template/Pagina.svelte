<script lang="ts">
	import Header from './Header.svelte';
	import Rodape from './Rodape.svelte';
</script>

<div class="flex flex-col gap-4 min-h-screen">
	<Header />
	<main class="flex-1 px-4">
		<div class="mx-auto container">
			<slot />
		</div>
	</main>
	<Rodape />
</div>
