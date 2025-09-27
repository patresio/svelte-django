<script lang="ts">
	import FilmForm from '../../../../components/films/FilmForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Editar Filme</title>
</svelte:head>

<FilmForm film={data.film} formFields={data.formFields} />
