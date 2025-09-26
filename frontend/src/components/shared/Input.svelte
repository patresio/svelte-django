<script lang="ts">
	export let type = 'text';
	export let placeholder = '';
	export let value = '';
	export let id = '';
	export let label = '';
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let step: number | undefined = undefined;
	export let error: string;
	export let required: boolean;
</script>

<div class="flex flex-col gap-2 w-full">
	<label for={id} class="font-bold text-zinc-400 text-lg">{label} {required ? '*' : ''}</label>
	<input
		{type}
		{placeholder}
		bind:value
		{id}
		{min}
		{max}
		{step}
		class="bg-zinc-700 shadow px-2 rounded-sm"
		class:border-red-500={error}
		class:border={error}
	/>
	{#if error}
		<p class="text-red-500">{error}</p>
	{/if}
</div>
