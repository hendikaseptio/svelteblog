<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.page?.seoTitle || data.page?.title || 'Tentang Kami'} | {data.settings?.siteName || 'SvelteBlog'}</title>
	{#if data.page?.seoDescription}
		<meta name="description" content={data.page.seoDescription} />
	{/if}
</svelte:head>

{#if data.page && data.page.content && data.page.content !== 'Konten halaman tentang kami'}
	<div class="container mx-auto px-4 py-16 prose prose-lg dark:prose-invert max-w-none">
		{@html data.page.content}
	</div>
{:else}
	<div class="container mx-auto px-4 py-24">
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
		<div>
			<h1 class="text-4xl font-extrabold tracking-tight sm:text-6xl">Tentang <span class="text-primary">SvelteBlog</span></h1>
			<p class="mt-6 text-lg text-muted-foreground">
				SvelteBlog adalah sebuah proyek eksperimental yang bertujuan untuk menciptakan platform blogging yang sangat cepat, ringan, dan mudah digunakan menggunakan teknologi terbaru di ekosistem Svelte.
			</p>
			<p class="mt-4 text-lg text-muted-foreground">
				Kami percaya bahwa menulis harus menjadi pengalaman yang menyenangkan tanpa distraksi teknis yang rumit. Dengan Svelte 5, kami menghadirkan performa terbaik untuk penulis dan pembaca.
			</p>
			<div class="mt-8 flex gap-4">
				<Button href="/kontak">Hubungi Kami</Button>
				<Button variant="outline" href="https://github.com">GitHub Kami</Button>
			</div>
		</div>
		<div class="relative">
			<div class="aspect-square rounded-3xl bg-primary/10 p-8">
				<img src="https://picsum.photos/seed/about/800/800" alt="Tim SvelteBlog sedang bekerja" class="h-full w-full rounded-2xl object-cover shadow-2xl" />
			</div>
			<div class="absolute -bottom-6 -left-6 rounded-2xl border bg-card p-6 shadow-xl hidden md:block">
				<div class="flex items-center gap-4">
					<div class="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">10k+</div>
					<div>
						<p class="text-sm font-bold">Pembaca Aktif</p>
						<p class="text-xs text-muted-foreground">Setiap bulannya</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-32 grid grid-cols-1 gap-8 md:grid-cols-3">
		<div class="rounded-2xl border bg-card p-8 text-center">
			<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
			</div>
			<h3 class="text-xl font-bold">Kecepatan Maksimal</h3>
			<p class="mt-2 text-muted-foreground">Dibangun dengan SvelteKit untuk waktu muat yang instan dan interaksi yang mulus.</p>
		</div>
		<div class="rounded-2xl border bg-card p-8 text-center">
			<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
			</div>
			<h3 class="text-xl font-bold">Desain Responsif</h3>
			<p class="mt-2 text-muted-foreground">Tampilan yang cantik di semua perangkat, mulai dari ponsel hingga desktop.</p>
		</div>
		<div class="rounded-2xl border bg-card p-8 text-center">
			<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
			</div>
			<h3 class="text-xl font-bold">Aman & Terpercaya</h3>
			<p class="mt-2 text-muted-foreground">Menggunakan praktik keamanan terbaik untuk melindungi data dan konten Anda.</p>
		</div>
	</div>
</div>
{/if}
