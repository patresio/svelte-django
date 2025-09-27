<script lang="ts">
	import '../app.css';
	import Pagina from '../components/template/Pagina.svelte';
	let { children, data } = $props();
</script>

<svelte:head>
	<title>My Films</title>
</svelte:head>

<Pagina menu={data.menu}>
	{@render children?.()}
</Pagina>
