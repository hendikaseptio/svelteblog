<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Search } from "lucide-svelte";
	import { page } from '$app/stores';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - {data.settings?.siteName || 'SvelteBlog'}</title>
	<meta name="description" content="Temukan berbagai artikel menarik seputar teknologi dan pengembangan web." />
</svelte:head>

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
		<Button 
			variant={$page.url.searchParams.get('kategori') ? 'ghost' : 'secondary'} 
			size="sm" 
			class="rounded-full"
			href="/blog"
		>
			Semua
		</Button>
		{#each data.categories as cat (cat.id)}
			<Button 
				variant={$page.url.searchParams.get('kategori') === cat.slug ? 'secondary' : 'ghost'} 
				size="sm" 
				class="rounded-full"
				href="/blog?kategori={cat.slug}"
			>
				{cat.name}
			</Button>
		{/each}
	</div>

	{#if data.posts.length > 0}
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post (post.id)}
				<article class="group">
					<div class="aspect-video w-full rounded-2xl bg-muted mb-6 overflow-hidden border">
						{#if post.cover}
							<img src={post.cover} alt={post.title} class="h-full w-full object-cover transition-transform group-hover:scale-105" />
						{:else}
							<div class="h-full w-full flex items-center justify-center bg-muted text-muted-foreground">
								No Cover
							</div>
						{/if}
					</div>
					<div class="space-y-3">
						<div class="flex items-center gap-2">
							<span class="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
								{post.categoryName || 'Uncategorized'}
							</span>
							<span class="text-xs text-muted-foreground">
								{new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
							</span>
						</div>
						<h2 class="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
							<a href="/blog/{post.slug}">{post.title}</a>
						</h2>
						<p class="text-muted-foreground line-clamp-3">
							{post.excerpt || ''}
						</p>
					</div>
				</article>
			{/each}
		</div>
	{:else}
		<div class="text-center py-20">
			<p class="text-muted-foreground text-lg">Belum ada artikel yang diterbitkan.</p>
		</div>
	{/if}

	<div class="mt-16 flex justify-center">
		<Button variant="outline">Muat Lebih Banyak</Button>
	</div>
</div>
