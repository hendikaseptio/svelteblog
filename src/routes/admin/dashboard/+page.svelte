<script lang="ts">
	import SectionCards from "$lib/components/section-cards.svelte";
	import ChartAreaInteractive from "$lib/components/chart-area-interactive.svelte";
	import DataTable from "$lib/components/custom/data-table.svelte";
	import { Button } from "$lib/components/ui/button";
	import { FileText, Plus } from "lucide-svelte";

	let { data } = $props();

	// Map recent posts to table format
	const tableData = $derived(data.recentPosts.map(p => ({
		id: p.id,
		header: p.title,
		status: p.status,
		target: `/blog/${p.slug}`
	})));
</script>

<div class="flex flex-col gap-6">
	<SectionCards stats={data.stats} />
	
	<div class="px-4 lg:px-6">
		<ChartAreaInteractive />
	</div>

	<div class="px-4 lg:px-6 space-y-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<FileText class="text-primary" />
				<h3 class="text-lg font-bold">Postingan Terbaru</h3>
			</div>
			<Button size="sm" href="/admin/postingan/tambah" variant="outline">
				<Plus size={16} class="mr-1" /> Buat Postingan
			</Button>
		</div>
		<DataTable 
			data={tableData} 
			baseUrl="/admin/postingan" 
			searchPlaceholder="Cari postingan terbaru..."
		/>
	</div>
</div>
