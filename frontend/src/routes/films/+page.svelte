<script lang="ts">
	import Filmes from '../../components/films/Filmes.svelte';
	export let data;
</script>

<svelte:head>
	<title>Films</title>
</svelte:head>

<Filmes films={data.films} />
