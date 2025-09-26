<script lang="ts">
	import Input from '../shared/Input.svelte';
	import { goto } from '$app/navigation';
	import inputAdd from '../../data/input-add-film';

	// Filter out the file input to handle it separately
	let textInputs = inputAdd.filter((input) => input.type !== 'file');

	let imageFile: File | null = null;
	let imagePreviewUrl: string | null = null;

	function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target.files && target.files[0]) {
			imageFile = target.files[0];
			imagePreviewUrl = URL.createObjectURL(imageFile);
		} else {
			imageFile = null;
			imagePreviewUrl = null;
		}
	}

	async function handleSubmit() {
		// Validate text inputs
		textInputs.forEach((input) => {
			input.error = input.required && !input.value;
		});
		textInputs = [...textInputs]; // Trigger reactivity

		const hasTextError = textInputs.some((input) => input.error);
		if (hasTextError || !imageFile) {
			if (!imageFile) {
				alert('Please select an image.');
			}
			return;
		}

		const formData = new FormData();
		formData.append('image', imageFile);

		// Append other fields from the textInputs array
		textInputs.forEach((input) => {
			let valueToAppend = input.value;
			if (input.id === 'duration') {
				valueToAppend = `${input.value} min`;
			}
			formData.append(input.id, valueToAppend);
		});

		try {
			const response = await fetch('http://localhost:8000/api/v1/films/', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				await goto('/films');
			} else {
				const errorData = await response.json();
				console.error('Failed to add film:', errorData);
				alert(`Error: ${JSON.stringify(errorData)}`);
			}
		} catch (error) {
			console.error('An error occurred:', error);
			alert('An unexpected error occurred. Please check the console.');
		}
	}
</script>

<form
	class="flex flex-col gap-4 bg-zinc-950 p-4 border border-zinc-600 rounded-md"
	on:submit|preventDefault={handleSubmit}
>
	<h1 class="mb-4 font-bold text-2xl">Add Film</h1>

	<!-- Separate File Input -->
	<div class="flex justify-between h-32">
		<div class="flex flex-col">
			<label for="image" class="mb-1 font-semibold text-zinc-300">Image</label>
			<input
				type="file"
				id="image"
				accept="image/*"
				required
				on:change={handleFileChange}
				class="text-zinc-300"
			/>
		</div>
		{#if imagePreviewUrl}
			<img src={imagePreviewUrl} class="mt-4 rounded-md max-h-60 object-contain" alt="" />
		{/if}
	</div>

	<!-- Text-based Inputs -->
	{#each textInputs as input}
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
	{/each}

	<button type="submit" class="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white"
		>Add Film</button
	>
</form>
