import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import { goto } from '$app/navigation';
import { useForm, type FormField } from './useForm';
import { useFileHandling } from './useFileHandling';
import { addFilm, updateFilm } from '../lib/api';
import type { Film } from '../models/Film';
import { get } from 'svelte/store';

export function useFilmForm(film: Film | null, textInputs: FormField[]) {
	const isEditMode = !!film;
	const { inputs, validate, validateAll, reset, setInputs } = useForm(textInputs);
	const { imageFile, imagePreviewUrl, handleFileChange, setImagePreviewUrl } = useFileHandling();

	onMount(() => {
		if (isEditMode && film) {
			const filmDataForForm = textInputs.map((input) => {
				let value = film[input.id as keyof Film] as string;
				if (input.id === 'duration' && typeof value === 'string') {
					value = value.replace(' min', '');
				}
				return {
					...input,
					value: value
				};
			});
			setInputs(filmDataForForm);
			if (film.image) {
				setImagePreviewUrl(film.image);
			}
		}
	});

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

		const hasTextError = get(inputs).some((input: FormField) => input.error);
		const imageFileValue = get(imageFile);

		if (hasTextError || (!isEditMode && !imageFileValue)) {
			if (!isEditMode && !imageFileValue) {
				alert('Please select an image.');
			}
			return;
		}

		let response;
		if (isEditMode && film?.id !== undefined) {
			response = await updateFilm(film.id.toString(), get(inputs), imageFileValue);
		} else {
			response = await addFilm(get(inputs), imageFileValue);
		}

		if (response.success) {
			reset();
			await goto('/films');
		} else {
			console.error('Failed to process film:', response.error);
			alert(`Error: ${JSON.stringify(response.error)}`);
		}
	}

	return {
		inputs,
		imagePreviewUrl,
		handleFileChange,
		handleBlur,
		handleSubmit,
		isEditMode
	};
}
