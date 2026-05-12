<script lang="ts">
	import CrudPage from '$lib/components/custom/crud-page.svelte';

	let { data } = $props();

	// Map data to match CrudPage expected format
	const tableData = $derived(data.pages.map(p => ({
		id: p.id,
		header: p.title,
		status: p.status,
		slug: p.slug
	})));
</script>

<CrudPage 
	title="Manajemen Halaman"
	description="Kelola halaman statis situs Anda seperti Beranda, Tentang, dan lainnya."
	data={tableData} 
	baseUrl="/admin/halaman" 
	addLink="/admin/halaman/tambah"
	addLabel="Tambah Halaman"
	searchPlaceholder="Cari judul halaman..."
/>
