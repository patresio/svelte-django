<script lang="ts">
	import '../app.css';
	import Pagina from '../components/template/Pagina.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>My Films</title>
</svelte:head>

<Pagina>
	{@render children?.()}
</Pagina>
