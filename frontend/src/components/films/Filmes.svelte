<script lang="ts">
	import ItemFilmeGrid from './ItemFilmeGrid.svelte';
	import type { Films } from '../../models/Film';
	import { goto } from '$app/navigation';

	export let films: Films = [];

	let searchTerm = '';

	$: filteredFilms = films.filter((film) => {
		if (searchTerm.length === 0) return true;
		const lowerSearchTerm = searchTerm.toLowerCase();
		return (
			film.title.toLowerCase().includes(lowerSearchTerm) ||
			film.description.toLowerCase().includes(lowerSearchTerm) ||
			film.sinopse.toLowerCase().includes(lowerSearchTerm)
		);
	});
</script>

<div class="flex flex-col gap-2 mb-4 w-full">
	<div class="flex justify-between items-center gap-1 bg-zinc-700 px-6 py-4 rounded-sm">
		<input
			type="search"
			placeholder=""
			class="shadow px-2 rounded-sm w-full text-blue-900"
			bind:value={searchTerm}
		/>
		<p class="font-thin text-zinc-400 text-2xl">|</p>
		<button
			on:click={() => goto('/films/add')}
			class="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
		>
			Adicionar
		</button>
	</div>
	<div class="flex flex-wrap justify-center items-center gap-5 w-full">
		{#each filteredFilms as film}
			<ItemFilmeGrid {film} />
		{/each}
	</div>
</div>
