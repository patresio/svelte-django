<script lang="ts">
	import { writable } from 'svelte/store';
	import ItemFilme from '../components/films/ItemFilme.svelte';
	import { onMount } from 'svelte';

	export let dataFilms = writable([]);

	onMount(async () => {
		if (!$dataFilms.length) {
			const endpoint = 'http://localhost:8000/api/v1/films/';
			const response = await fetch(endpoint);
			const data = await response.json();
			dataFilms.set(data);
		}
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#each $dataFilms.slice(0, 5) as film}
	<ItemFilme {film} />
{/each}
