<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import TextEditor from '$lib/components/custom/text-editor.svelte';
	import { ArrowLeft, Save, Trash2 } from 'lucide-svelte';
	import { toast } from "svelte-sonner";

	let { data, form } = $props();

	let title = $state(data.page.title);
	let slug = $state(data.page.slug);
	let content = $state(data.page.content);
	let status = $state(data.page.status);

	$effect(() => {
		if (form?.success) {
			toast.success("Perubahan berhasil disimpan");
		}
		if (form?.message) {
			toast.error(form.message);
		}
	});

	function generateSlug() {
		if (!slug && title) {
			slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
		}
	}
</script>

<div class="flex flex-col gap-6 p-4 lg:p-6 max-w-5xl mx-auto">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-4">
			<Button variant="ghost" size="icon" href="/admin/halaman">
				<ArrowLeft size={20} />
			</Button>
			<div>
				<h1 class="text-2xl font-bold tracking-tight">
					{data.page.id ? 'Edit Halaman' : 'Tambah Halaman Baru'}
				</h1>
				<p class="text-sm text-muted-foreground">
					{title || 'Judul Halaman'}
				</p>
			</div>
		</div>
		<div class="flex items-center gap-2">
			{#if data.page.id}
				<form method="POST" action="?/delete" use:enhance={() => {
					return async ({ result }) => {
						if (result.type === 'redirect') {
							toast.success("Halaman berhasil dihapus");
						}
					};
				}}>
					<Button variant="outline" type="submit" class="text-destructive hover:text-destructive">
						<Trash2 class="mr-2 h-4 w-4" /> Hapus
					</Button>
				</form>
			{/if}
			<form method="POST" action="?/save" use:enhance>
				<input type="hidden" name="title" value={title} />
				<input type="hidden" name="slug" value={slug} />
				<input type="hidden" name="content" value={content} />
				<input type="hidden" name="status" value={status} />
				<Button type="submit">
					<Save class="mr-2 h-4 w-4" /> Simpan Perubahan
				</Button>
			</form>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<div class="md:col-span-2 space-y-6">
			<div class="space-y-2">
				<Label for="title">Judul Halaman</Label>
				<Input id="title" bind:value={title} onblur={generateSlug} placeholder="Contoh: Tentang Kami" />
			</div>

			<div class="space-y-2">
				<Label for="content">Konten</Label>
				<TextEditor bind:value={content} />
			</div>
		</div>

		<div class="space-y-6">
			<div class="rounded-xl border bg-card p-6 space-y-4">
				<h3 class="font-semibold">Pengaturan</h3>
				
				<div class="space-y-2">
					<Label for="slug">Slug / URL</Label>
					<Input id="slug" bind:value={slug} placeholder="tentang-kami" />
					<p class="text-[10px] text-muted-foreground">URL halaman: /halaman/{slug}</p>
				</div>

				<div class="space-y-2">
					<Label>Status</Label>
					<Select.Root type="single" bind:value={status}>
						<Select.Trigger class="w-full">
							{status === 'published' ? 'Diterbitkan' : 'Draft'}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="draft">Draft</Select.Item>
							<Select.Item value="published">Diterbitkan</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
			</div>
		</div>
	</div>
</div>
