<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { ArrowRight } from "lucide-svelte";
	
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.page?.seoTitle || data.page?.title || 'Beranda'} | {data.settings?.siteName || 'SvelteBlog'}</title>
	{#if data.page?.seoDescription}
		<meta name="description" content={data.page.seoDescription} />
	{/if}
</svelte:head>

{#if data.page && data.page.content && data.page.content !== 'Konten halaman beranda'}
	<div class="container mx-auto px-4 py-16 prose prose-lg dark:prose-invert max-w-none">
		{@html data.page.content}
	</div>
{:else}
	<section class="relative overflow-hidden py-24 sm:py-32">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center text-center">
			<div class="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm font-medium">
				<span class="mr-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">Baru</span>
				Svelte 5 Runes telah hadir!
			</div>
			<h1 class="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl">
				Berbagi Cerita dalam <span class="text-primary">Kesederhanaan</span>
			</h1>
			<p class="mt-6 max-w-2xl text-lg text-muted-foreground">
				Platform blog modern yang dirancang untuk performa dan kenyamanan menulis. Fokus pada konten Anda, biarkan kami menangani sisanya.
			</p>
			<div class="mt-10 flex flex-wrap justify-center gap-4">
				<Button size="lg" href="/blog">
					Mulai Membaca <ArrowRight class="ml-2 h-4 w-4" />
				</Button>
				<Button size="lg" variant="outline" href="/tentang">
					Pelajari Selengkapnya
				</Button>
			</div>
		</div>

		<!-- Featured Posts Section -->
		<div class="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each data.latestPosts as post (post.id)}
				<div class="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-lg">
					<div class="aspect-video w-full rounded-lg bg-muted mb-4 overflow-hidden">
						{#if post.cover}
							<img src={post.cover} alt={post.title} class="h-full w-full object-cover transition-transform group-hover:scale-105" />
						{:else}
							<div class="h-full w-full flex items-center justify-center bg-muted text-muted-foreground">
								No Image
							</div>
						{/if}
					</div>
					<div class="flex items-center gap-2 text-xs text-muted-foreground mb-2">
						<span>{new Date(post.publishedAt).toLocaleDateString('id-ID')}</span>
						<span>•</span>
						<span>5 menit baca</span>
					</div>
					<h3 class="text-xl font-bold">{post.title}</h3>
					<p class="mt-2 text-sm text-muted-foreground line-clamp-2">
						{post.excerpt || ''}
					</p>
					<a href="/blog/{post.slug}" class="mt-4 inline-flex items-center text-sm font-semibold text-primary">
						Baca Selengkapnya <ArrowRight class="ml-1 h-3 w-3" />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
{/if}
