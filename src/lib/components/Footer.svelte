<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="border-t bg-muted/30">
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<div class="col-span-1 md:col-span-2">
				<a href="/" class="text-xl font-bold tracking-tight">
					Svelte<span class="text-primary">Blog</span>
				</a>
				<p class="mt-4 max-w-xs text-sm text-muted-foreground">
					Platform blog modern yang dibangun dengan Svelte 5, Tailwind CSS, dan Drizzle ORM. Berbagi cerita dan pengetahuan dengan desain yang elegan.
				</p>
			</div>
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider">Tautan</h3>
				<ul class="mt-4 space-y-2">
					<li><a href="/" class="text-sm text-muted-foreground hover:text-primary">Beranda</a></li>
					<li><a href="/blog" class="text-sm text-muted-foreground hover:text-primary">Blog</a></li>
					<li><a href="/harga" class="text-sm text-muted-foreground hover:text-primary">Harga</a></li>
					<li><a href="/tentang" class="text-sm text-muted-foreground hover:text-primary">Tentang</a></li>
					<li><a href="/kontak" class="text-sm text-muted-foreground hover:text-primary">Kontak</a></li>
				</ul>
			</div>
			<div>
				<h3 class="text-sm font-semibold uppercase tracking-wider">Media Sosial</h3>
				<ul class="mt-4 space-y-2">
					<li><a href="https://twitter.com" class="text-sm text-muted-foreground hover:text-primary">Twitter</a></li>
					<li><a href="https://github.com" class="text-sm text-muted-foreground hover:text-primary">GitHub</a></li>
					<li><a href="https://linkedin.com" class="text-sm text-muted-foreground hover:text-primary">LinkedIn</a></li>
				</ul>
			</div>
		</div>
		<div class="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
			<p>&copy; {year} SvelteBlog. All rights reserved.</p>
		</div>
	</div>
</footer>
