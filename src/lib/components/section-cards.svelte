<script lang="ts">
	import { TrendingUp, FileText, File, Layers, Image } from 'lucide-svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	let { stats } = $props();
</script>

<div
	class="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card"
>
	<Card.Root class="@container/card">
		<Card.Header>
			<Card.Description>Total Postingan</Card.Description>
			<Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
				{stats?.posts || 0}
			</Card.Title>
			<Card.Action>
				<Badge variant="outline" class="bg-primary/10 text-primary border-primary/20">
					<FileText size={14} class="mr-1" /> Artikel
				</Badge>
			</Card.Action>
		</Card.Header>
		<Card.Footer class="flex-col items-start gap-1.5 text-sm">
			<div class="line-clamp-1 flex gap-2 font-medium">
				Semua postingan blog
			</div>
		</Card.Footer>
	</Card.Root>

	<Card.Root class="@container/card">
		<Card.Header>
			<Card.Description>Total Halaman</Card.Description>
			<Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
				{stats?.pages || 0}
			</Card.Title>
			<Card.Action>
				<Badge variant="outline">
					<File size={14} class="mr-1" /> Page
				</Badge>
			</Card.Action>
		</Card.Header>
		<Card.Footer class="flex-col items-start gap-1.5 text-sm">
			<div class="line-clamp-1 flex gap-2 font-medium">
				Halaman statis aktif
			</div>
		</Card.Footer>
	</Card.Root>

	<Card.Root class="@container/card">
		<Card.Header>
			<Card.Description>Kategori</Card.Description>
			<Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
				{stats?.categories || 0}
			</Card.Title>
			<Card.Action>
				<Badge variant="outline">
					<Layers size={14} class="mr-1" /> Taxon
				</Badge>
			</Card.Action>
		</Card.Header>
		<Card.Footer class="flex-col items-start gap-1.5 text-sm">
			<div class="line-clamp-1 flex gap-2 font-medium">
				Pengelompokan artikel
			</div>
		</Card.Footer>
	</Card.Root>

	<Card.Root class="@container/card">
		<Card.Header>
			<Card.Description>Media Terupload</Card.Description>
			<Card.Title class="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
				{stats?.media || 0}
			</Card.Title>
			<Card.Action>
				<Badge variant="outline">
					<Image size={14} class="mr-1" /> Asset
				</Badge>
			</Card.Action>
		</Card.Header>
		<Card.Footer class="flex-col items-start gap-1.5 text-sm">
			<div class="line-clamp-1 flex gap-2 font-medium">
				Gambar & file di storage
			</div>
		</Card.Footer>
	</Card.Root>
</div>
