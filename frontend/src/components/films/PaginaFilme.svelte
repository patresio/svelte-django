<script lang="ts">
	import { IconClockHour4, IconTrash } from '@tabler/icons-svelte';
	import type { Film } from '../../models/Film';
	export let film: Film;
	import { goto } from '$app/navigation';

	import { deleteFilm } from '$lib/api';

	const handleDelete = async () => {
		if (film.id !== undefined) {
			const response = await deleteFilm(film.id.toString());
			if (response.success) {
				goto('/films');
			} else {
				console.error('Failed to delete film');
			}
		}
	};
</script>

<div class="flex w-full container">
	<div class="relative flex rounded-md w-72 h-96">
		<img class="h-96 object-cover" src={film.image} alt={film.title} />
	</div>
	<div class="flex justify-between w-full">
		<div class="flex flex-col gap-5 px-10 py-4 w-full h-full">
			<div class="flex flex-col gap-2">
				<h2 class="font-black text-4xl">{film.title}</h2>
				<p class="font-thin text-zinc-400 text-2xl">{film.director}</p>
			</div>
			<div class="flex flex-col gap-2">
				<p class="font-black text-md text-zinc-500">Sinopse:</p>
				<p class="text-zinc-300 text-lg">{film.sinopse}</p>
			</div>
			<div class="flex flex-col gap-2">
				<p class="font-black text-md text-zinc-500">Descrição:</p>
				<p class="text-zinc-300 text-lg">{film.description}</p>
			</div>
		</div>
		<div class="flex flex-col gap-4 w-48">
			<div class="flex flex-col justify-center items-center">
				<div class="flex flex-col justify-center items-center bg-zinc-600 rounded-full w-22 h-22">
					<p class="font-black text-2xl">{film.rating}</p>
					<p class="font-bold text-zinc-400 text-sm">Nota</p>
				</div>
			</div>
			<div class="flex flex-col justify-center items-center px-8 w-full">
				<div
					class="flex flex-col items-center bg-zinc-700 px-4 py-1 border border-zinc-600 rounded-lg w-full"
				>
					<div class="flex justify-end-safe items-center gap-2 w-full">
						<IconClockHour4 size={30} />
						<p class="font-bold">Duração:</p>
					</div>
					<div class="flex justify-end-safe items-center gap-2 w-full">
						<p class="font-bold">{film.duration}</p>
					</div>
				</div>
			</div>
			<div>
				<p>Editar</p>
			</div>
			<div>
				<button
					on:click={handleDelete}
					class="flex justify-center items-center gap-2 bg-red-500 hover:bg-red-700 px-4 py-2 rounded w-full font-bold text-white"
				>
					<IconTrash size={30} />
					Excluir
				</button>
			</div>
		</div>
	</div>
</div>
