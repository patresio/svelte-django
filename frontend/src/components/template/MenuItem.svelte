<script lang="ts">
	import { page } from '$app/stores';
	export let name: string;
	export let href: string;
</script>

<li>
	<a
		{href}
		class="text-lg font-bold flex items-center gap-2 hover:bg-white/10 px-4 py-2 rounded-md text-zinc-400 hover:text-white transition-colors cursor-pointer {href ===
		$page.url.pathname
			? 'bg-white/10 text-white'
			: ''}"
	>
		<span>{name}</span>
	</a>
</li>
