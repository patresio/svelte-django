<script lang="ts">
	import FilmForm from '../../../components/films/FilmForm.svelte';
	let { data } = $props();
</script>

<svelte:head>
	<title>Adicionar Filme</title>
</svelte:head>

<FilmForm formFields={data.formFields} />
