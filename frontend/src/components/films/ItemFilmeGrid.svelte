<script lang="ts">
	import type { Film } from '../../models/Film';

	export let film: Film;
</script>

<a
	href="/films/{film.id}"
	class="group relative flex flex-col rounded-md w-[44rem] h-96 overflow-hidden text-white"
>
	<img class="h-96 object-cover" src={film.image} alt={film.title} />
	<div
		class="bottom-0 absolute inset-x-0 flex flex-col justify-start bg-black/70 p-4 h-16 group-hover:h-full transition-all duration-300 ease-out"
	>
		<div class="flex flex-col items-end gap-2 h-full">
			<span class="mb-2 font-black text-xl">{film.title}</span>
			<div class="flex flex-col justify-between h-full">
				<p
					class="opacity-0 group-hover:opacity-100 text-md text-right transition-opacity duration-300 delay-150"
				>
					{film.sinopse}
				</p>
				<p
					class="opacity-0 group-hover:opacity-100 font-semibold text-md text-right transition-opacity duration-300 delay-150"
				>
					Duração:{film.duration}
				</p>
			</div>
		</div>
	</div>
</a>
