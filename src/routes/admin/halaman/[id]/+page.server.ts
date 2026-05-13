import { db } from '$lib/server/db';
import { page as pageTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const id = params.id;
	
	if (id === 'tambah') {
		return {
			page: {
				id: undefined,
				title: '',
				slug: '',
				content: '',
				status: 'draft'
			}
		};
	}

	const [page] = await db.select().from(pageTable).where(eq(pageTable.id, id));

	if (!page) {
		throw redirect(302, '/admin/halaman');
	}

	return {
		page
	};
};

export const actions: Actions = {
	save: async ({ request, params }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string;
		const slug = formData.get('slug') as string;
		const content = formData.get('content') as string;
		const status = formData.get('status') as string;

		const seoTitle = formData.get('seoTitle') as string;
		const seoDescription = formData.get('seoDescription') as string;

		if (!title || !slug) {
			return fail(400, { message: 'Judul dan Slug wajib diisi' });
		}

		if (params.id === 'tambah') {
			await db.insert(pageTable).values({
				id: crypto.randomUUID(),
				title,
				slug,
				content,
				status,
				seoTitle,
				seoDescription
			});
			throw redirect(302, '/admin/halaman');
		} else {
			await db.update(pageTable)
				.set({ 
					title, 
					slug, 
					content, 
					status,
					seoTitle,
					seoDescription 
				})
				.where(eq(pageTable.id, params.id!));
			
			return { success: true };
		}
	},
	delete: async ({ params }) => {
		if (params.id !== 'tambah') {
			await db.delete(pageTable).where(eq(pageTable.id, params.id!));
		}
		throw redirect(302, '/admin/halaman');
	}
};
