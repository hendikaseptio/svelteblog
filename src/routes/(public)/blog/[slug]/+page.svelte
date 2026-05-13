<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from "lucide-svelte";

	let { data } = $props();
	const post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.seoTitle || post.title} | {data.settings?.siteName || 'Blog'}</title>
	{#if post.seoDescription}
		<meta name="description" content={post.seoDescription} />
	{/if}
</svelte:head>

<div class="container mx-auto px-4 py-12">
	<div class="max-w-3xl mx-auto">
		<Button variant="ghost" size="sm" href="/blog" class="mb-8 -ml-4">
			<ArrowLeft class="mr-2 h-4 w-4" /> Kembali ke Blog
		</Button>

		<div class="space-y-4 mb-8">
			<div class="flex items-center gap-2">
				<span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
					{post.categoryName || 'Uncategorized'}
				</span>
			</div>
			<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
				{post.title}
			</h1>
			<div class="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground border-b pb-8">
				<div class="flex items-center gap-2">
					<div class="h-10 w-10 rounded-full bg-muted border overflow-hidden">
						<img src="https://api.dicebear.com/7.x/avataaars/svg?seed={post.authorName}" alt={post.authorName} />
					</div>
					<span class="font-medium text-foreground">{post.authorName || 'Admin'}</span>
				</div>
				<div class="flex items-center gap-2">
					<Calendar class="h-4 w-4" />
					<span>{new Date(post.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
				</div>
				<div class="flex items-center gap-2">
					<Clock class="h-4 w-4" />
					<span>5 menit baca</span>
				</div>
			</div>
		</div>

		{#if post.cover}
			<div class="my-10 aspect-video rounded-3xl overflow-hidden border">
				<img src={post.cover} alt={post.title} class="w-full h-full object-cover" />
			</div>
		{/if}

		<div class="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary">
			{@html post.content}
		</div>

		<div class="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6">
			<div class="flex items-center gap-2">
				<span class="text-sm font-medium">Bagikan:</span>
				<div class="flex gap-2">
					<Button variant="outline" size="icon" class="rounded-full h-9 w-9">
						<Share2 class="h-4 w-4" />
					</Button>
					<Button variant="outline" size="icon" class="rounded-full h-9 w-9">
						<Bookmark class="h-4 w-4" />
					</Button>
				</div>
			</div>
			<div class="flex gap-4">
				<Button variant="outline" href="/blog">Artikel Lainnya</Button>
			</div>
		</div>
	</div>
</div>
