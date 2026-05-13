<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{#if $navigating}
	<div 
		class="fixed top-0 left-0 right-0 h-1 bg-primary z-[9999] origin-left"
		transition:fade={{ duration: 200 }}
	>
		<div class="h-full bg-primary-foreground/20 animate-pulse w-full"></div>
	</div>
{/if}

{@render children()}
