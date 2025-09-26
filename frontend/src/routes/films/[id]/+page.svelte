<script lang="ts">
	import PaginaFilme from '../../../components/films/PaginaFilme.svelte';

	/** @type {import('./$types').PageData} */

	export let data;
</script>

<svelte:head>
	<title>{data.film.title}</title>
</svelte:head>

<PaginaFilme film={data.film} />
