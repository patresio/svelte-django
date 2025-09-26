<script lang="ts">
	import { goto } from '$app/navigation';

	export let film;

	const handleClick = async () => {
		await goto(`/films/${film.id}`);
	};

	$: truncatedSinopse =
		film.sinopse.length > 360 ? film.sinopse.slice(0, 360) + '...' : film.sinopse;
</script>

<div class="relative flex shadow-md mb-4 border border-zinc-600 rounded-lg w-full">
	<img src={film.image} alt={film.title} class="w-1/3 h-64 object-cover" />
	<div class="w-2/3">
		<div class="flex flex-col justify-between gap-3 p-4 h-full">
			<div class="flex flex-col gap-2">
				<h2 class="font-black text-3xl">{film.title}</h2>
				<p class="font-thin text-zinc-400 text-xl">{film.director}</p>
				<p class="text-zinc-300 text-justify">{truncatedSinopse}</p>
			</div>
			<div class="flex flex-col justify-between gap-2">
				<!-- <p class="font-bold text-lg text-justify">{film.description}</p> -->
				<div class="flex justify-between items-center gap-5">
					<p class="font-extrabold text-zinc-400">Duração: {film.duration}</p>
					<p class="font-extrabold text-zinc-400">Nota: {film.rating}</p>
					<button
						class="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
						type="button"
						on:click={handleClick}>Detalhes</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
