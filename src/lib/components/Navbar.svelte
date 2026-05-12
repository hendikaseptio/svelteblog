<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { page } from "$app/stores";

	const navItems = [
		{ name: "Beranda", href: "/" },
		{ name: "Blog", href: "/blog" },
		{ name: "Harga", href: "/harga" },
		{ name: "Tentang", href: "/tentang" },
		{ name: "Kontak", href: "/kontak" },
	];
</script>

<nav class="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
	<div class="container mx-auto flex h-16 items-center justify-between px-4">
		<div class="flex items-center gap-2">
			<a href="/" class="text-xl font-bold tracking-tight">
				Svelte<span class="text-primary">Blog</span>
			</a>
		</div>

		<div class="hidden md:flex items-center gap-6">
			{#each navItems as item}
				<a
					href={item.href}
					class="text-sm font-medium transition-colors hover:text-primary {$page.url.pathname === item.href ? 'text-primary' : 'text-muted-foreground'}"
				>
					{item.name}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-4">
			<Button variant="outline" size="sm" href="/admin">Admin</Button>
			<Button size="sm">Berlangganan</Button>
		</div>
	</div>
</nav>
