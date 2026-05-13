<script lang="ts">
	import { page } from "$app/stores";
	const year = new Date().getFullYear();
	const settings = $derived($page.data.settings);
	const navItems = $derived($page.data.menus || []);
</script>

<footer class="border-t bg-muted/30">
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<div class="col-span-1 md:col-span-2">
				<a href="/" class="text-xl font-bold tracking-tight">
					{#if settings?.siteLogo}
						<img src={settings.siteLogo} alt={settings.siteName} class="h-8 w-auto" />
				{:else}
					{settings?.siteName || 'Svelte'}<span class="text-primary">Blog</span>
				{/if}
				</a>
				<p class="mt-4 max-w-xs text-sm text-muted-foreground">
					Platform blog modern yang dibangun dengan Svelte 5, Tailwind CSS, dan Drizzle ORM. Berbagi cerita dan pengetahuan dengan desain yang elegan.
				</p>
			</div>
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider">Tautan</h3>
				<ul class="mt-4 space-y-2">
					{#each navItems as item}
						<li><a href={item.url} class="text-sm text-muted-foreground hover:text-primary">{item.label}</a></li>
					{/each}
				</ul>
			</div>
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider">Media Sosial</h3>
				<ul class="mt-4 space-y-2">
					{#if settings?.facebook}
						<li><a href={settings.facebook} class="text-sm text-muted-foreground hover:text-primary">Facebook</a></li>
					{/if}
					{#if settings?.instagram}
						<li><a href={settings.instagram} class="text-sm text-muted-foreground hover:text-primary">Instagram</a></li>
					{/if}
					{#if settings?.x}
						<li><a href={settings.x} class="text-sm text-muted-foreground hover:text-primary">Twitter / X</a></li>
					{/if}
				</ul>
			</div>
		</div>
		<div class="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
			<p>&copy; {year} {settings?.siteName || 'SvelteBlog'}. All rights reserved.</p>
		</div>
	</div>
</footer>
