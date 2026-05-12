<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from "lucide-svelte";
	import { page } from "$app/stores";

	// In a real app, you would fetch this data based on the slug
	const post = {
		title: "Bagaimana Svelte 5 Mengubah Cara Kita Membangun Web",
		date: "12 Mei 2026",
		readingTime: "5 menit baca",
		author: "Hendika",
		category: "Teknologi",
		content: `
			<p class="text-xl text-muted-foreground mb-8">
				Svelte 5 memperkenalkan Runes, sebuah API reaktivitas baru yang lebih eksplisit dan kuat. Dalam artikel ini kita akan membahas detail implementasinya dan mengapa ini penting bagi masa depan pengembangan web.
			</p>
			<h2 class="text-3xl font-bold mt-12 mb-6">Pendahuluan</h2>
			<p class="mb-6">
				Selama bertahun-tahun, Svelte telah dikenal dengan pendekatan "magical" terhadap reaktivitas menggunakan let dan $. Meskipun sangat intuitif untuk proyek kecil, tim Svelte menyadari adanya keterbatasan saat aplikasi tumbuh menjadi sangat besar dan kompleks.
			</p>
			<p class="mb-6">
				Runes adalah jawaban untuk tantangan tersebut. Dengan menggunakan rune seperti $state, $derived, dan $effect, pengembang kini memiliki kontrol yang lebih baik atas bagaimana data mengalir dalam aplikasi mereka.
			</p>
			<blockquote class="border-l-4 border-primary pl-6 my-10 italic text-lg">
				"Runes bukan hanya tentang sintaks baru, ini tentang paradigma baru dalam membangun antarmuka yang responsif."
			</blockquote>
			<h2 class="text-3xl font-bold mt-12 mb-6">Mengapa Runes?</h2>
			<p class="mb-6">
				Salah satu keunggulan utama Runes adalah universalitasnya. Tidak lagi terbatas pada file .svelte, kini Anda dapat menggunakan logika reaktif yang sama di file .ts atau .js biasa. Ini memungkinkan pembagian logika (logic sharing) yang jauh lebih bersih dan modular.
			</p>
			<div class="my-10 aspect-video rounded-3xl overflow-hidden border">
				<img src="https://picsum.photos/seed/post-detail/1200/675" alt="Blog Illustration" class="w-full h-full object-cover" />
			</div>
			<h2 class="text-3xl font-bold mt-12 mb-6">Kesimpulan</h2>
			<p class="mb-6">
				Meskipun memerlukan sedikit penyesuaian bagi pengguna setia Svelte 3 dan 4, Svelte 5 dengan Runes menjanjikan performa yang lebih baik dan maintainability yang lebih tinggi untuk jangka panjang.
			</p>
		`
	};
</script>

<div class="container mx-auto px-4 py-12">
	<div class="max-w-3xl mx-auto">
		<Button variant="ghost" size="sm" href="/blog" class="mb-8 -ml-4">
			<ArrowLeft class="mr-2 h-4 w-4" /> Kembali ke Blog
		</Button>

		<div class="space-y-4 mb-8">
			<div class="flex items-center gap-2">
				<span class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
					{post.category}
				</span>
			</div>
			<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl leading-tight">
				{post.title}
			</h1>
			<div class="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground border-b pb-8">
				<div class="flex items-center gap-2">
					<div class="h-10 w-10 rounded-full bg-muted border overflow-hidden">
						<img src="https://api.dicebear.com/7.x/avataaars/svg?seed={post.author}" alt={post.author} />
					</div>
					<span class="font-medium text-foreground">{post.author}</span>
				</div>
				<div class="flex items-center gap-2">
					<Calendar class="h-4 w-4" />
					<span>{post.date}</span>
				</div>
				<div class="flex items-center gap-2">
					<Clock class="h-4 w-4" />
					<span>{post.readingTime}</span>
				</div>
			</div>
		</div>

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
				<Button variant="outline">Artikel Sebelumnya</Button>
				<Button variant="outline">Artikel Selanjutnya</Button>
			</div>
		</div>
	</div>
</div>
