<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { ArrowRight, Search } from "lucide-svelte";

	const categories = ["Teknologi", "Desain", "Tutorial", "Opini", "Svelte"];
</script>

<div class="container mx-auto px-4 py-16">
	<div class="flex flex-col items-center text-center mb-16">
		<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">Arsip Blog</h1>
		<p class="mt-4 text-lg text-muted-foreground">Temukan berbagai artikel menarik seputar pengembangan web dan teknologi.</p>
		
		<div class="mt-8 relative w-full max-w-md">
			<Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
			<Input type="search" placeholder="Cari artikel..." class="pl-10" />
		</div>
	</div>

	<div class="flex flex-wrap justify-center gap-2 mb-12">
		<Button variant="secondary" size="sm" class="rounded-full">Semua</Button>
		{#each categories as category}
			<Button variant="ghost" size="sm" class="rounded-full">{category}</Button>
		{/each}
	</div>

	<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
		{#each Array(6) as _, i}
			<article class="group">
				<div class="aspect-video w-full rounded-2xl bg-muted mb-6 overflow-hidden border">
					<img src="https://picsum.photos/seed/{i+20}/800/450" alt="Blog Post" class="h-full w-full object-cover transition-transform group-hover:scale-105" />
				</div>
				<div class="space-y-3">
					<div class="flex items-center gap-2">
						<span class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Teknologi</span>
						<span class="text-xs text-muted-foreground">12 Mei 2026</span>
					</div>
					<h2 class="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
						<a href="/blog/post-{i+1}">Bagaimana Svelte 5 Mengubah Cara Kita Membangun Web</a>
					</h2>
					<p class="text-muted-foreground line-clamp-3">
						Svelte 5 memperkenalkan Runes, sebuah API reaktivitas baru yang lebih eksplisit dan kuat. Dalam artikel ini kita akan membahas detail implementasinya.
					</p>
					<div class="flex items-center gap-3 pt-2">
						<div class="h-8 w-8 rounded-full bg-muted border overflow-hidden">
							<img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hendika" alt="Author" />
						</div>
						<span class="text-sm font-medium">Hendika</span>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<div class="mt-16 flex justify-center">
		<Button variant="outline">Muat Lebih Banyak</Button>
	</div>
</div>
