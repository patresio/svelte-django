<script lang="ts">
	import Input from '../shared/Input.svelte';
	import { goto } from '$app/navigation';
	import inputAdd from '../../data/inputAddFilm';
	import { useForm } from '../../hooks/useForm';
	import type { FormField } from '../../hooks/useForm';
	import { useFileHandling } from '../../hooks/useFileHandling';
	import { addFilm } from '../../lib/api';

	// Filter out the file input to handle it separately
	let textInputs = inputAdd.filter((input: FormField) => input.type !== 'file');
	const { inputs, validate, validateAll, reset } = useForm(textInputs);
	const { imageFile, imagePreviewUrl, handleFileChange } = useFileHandling();

	function handleBlur(index: number) {
		inputs.update((currentInputs: FormField[]) => {
			return currentInputs.map((input: FormField, i: number) => {
				if (i === index) {
					return validate(input);
				}
				return input;
			});
		});
	}

	async function handleSubmit() {
		validateAll();

		const hasTextError = $inputs.some((input: FormField) => input.error);
		if (hasTextError || !$imageFile) {
			if (!$imageFile) {
				alert('Please select an image.');
			}
			return;
		}

		const { success, error } = await addFilm($inputs, $imageFile);

		if (success) {
			reset();
			await goto('/films');
		} else {
			console.error('Failed to add film:', error);
			alert(`Error: ${JSON.stringify(error)}`);
		}
	}
</script>

<form
	class="flex flex-col gap-4 bg-zinc-950 p-4 border border-zinc-600 rounded-md"
	on:submit|preventDefault={handleSubmit}
>
	<h1 class="mb-4 font-bold text-2xl">Adicionar um Filme:</h1>

	<!-- Separate File Input -->
	<div class="flex justify-between h-32">
		<div class="flex flex-col">
			<label for="image" class="mb-1 font-semibold text-zinc-300">Imagem:</label>
			<input
				type="file"
				id="image"
				accept="image/*"
				required
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
		>Add Film</button
	>
</form>
