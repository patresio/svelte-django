<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import type { Menu } from '../../models/Menu';

	let { menu }: { menu: Menu } = $props();
</script>

<nav>
	<ul class="flex gap-4 p-4 h-full">
		{#each menu as item}
			<MenuItem name={item.name} href={item.href} />
		{/each}
	</ul>
</nav>
