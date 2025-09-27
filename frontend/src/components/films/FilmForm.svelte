<script lang="ts">
	import type { Film } from '../../models/Film';
	import Input from '../shared/Input.svelte';
	import type { FormField } from '../../hooks/useForm';
	import { useFilmForm } from '../../hooks/useFilmForm';

	let { film = null, formFields }: { film: Film | null; formFields: FormField[] } = $props();

	let textInputs = formFields.filter((input: FormField) => input.type !== 'file');
	const { inputs, imagePreviewUrl, handleFileChange, handleBlur, handleSubmit, isEditMode } =
		useFilmForm(film, textInputs);
</script>

<form
	class="gap-4 bg-zinc-950 p-4 border border-zinc-600 rounded-md fleinputsFilmol"
	on:submit|preventDefault={handleSubmit}
>
	<h1 class="mb-4 font-bold text-2xl">{isEditMode ? 'Editar Filme' : 'Adicionar um Filme:'}</h1>

	<!-- Separate File Input -->
	<div class="flex justify-between h-32">
		<div class="flex flex-col">
			<label for="image" class="mb-1 font-semibold text-zinc-300">Imagem:</label>
			<input
				type="file"
				id="image"
				accept="image/*"
				required={!isEditMode}
				on:change={handleFileChange}
				class="p-2 border border-zinc-600 rounded-md w-full text-zinc-300"
			/>
		</div>
		{#if $imagePreviewUrl}
			<img src={$imagePreviewUrl} class="mt-4 rounded-md max-h-60 object-contain" alt="" />
		{/if}
	</div>

	<!-- Text-based Inputs -->
	{#each $inputs as input, i}
		<div on:blur={() => handleBlur(i)}>
			<Input
				type={input.type}
				placeholder={input.placeholder}
				bind:value={input.value}
				id={input.id}
				label={input.label}
				min={input.min}
				max={input.max}
				step={input.step}
				required={input.required}
				bind:error={input.error}
			/>
		</div>
	{/each}

	<button type="submit" class="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
		>{isEditMode ? 'Salvar Alterações' : 'Adicionar Novo Filme'}</button
	>
</form>
