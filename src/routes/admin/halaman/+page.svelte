<script lang="ts">
	import CrudPage from '$lib/components/custom/crud-page.svelte';
	import { renderComponent } from '$lib/components/ui/data-table/index.js';
	import DataTableActions from '$lib/components/custom/data-table-actions.svelte';
	import type { ColumnDef } from '@tanstack/table-core';

	let { data } = $props();

	// Map data to match CrudPage expected format
	const tableData = $derived(data.pages.map(p => ({
		id: p.id,
		header: p.title,
		status: p.status,
		slug: p.slug
	})));

	const columns: ColumnDef<any>[] = [
		{
			accessorKey: 'header',
			header: 'Judul'
		},
		{
			accessorKey: 'slug',
			header: 'Slug'
		},
		{
			accessorKey: 'status',
			header: 'Status'
		},
		{
			id: 'actions',
			cell: ({ row }) => renderComponent(DataTableActions, { id: row.original.id, baseUrl: '/admin/halaman' })
		}
	];
</script>

<CrudPage 
	title="Manajemen Halaman"
	description="Kelola halaman statis situs Anda seperti Beranda, Tentang, dan lainnya."
	data={tableData} 
	{columns}
	baseUrl="/admin/halaman" 
	addLink="/admin/halaman/tambah"
	addLabel="Tambah Halaman"
	searchPlaceholder="Cari judul halaman..."
/>
