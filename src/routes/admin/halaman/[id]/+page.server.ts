import { db } from '$lib/server/db';
import { page as pageTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { fail, redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const id = params.id;
	
	if (id === 'tambah') {
		return {
			page: {
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

export const actions = {
	save: async ({ request, params }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string;
		const slug = formData.get('slug') as string;
		const content = formData.get('content') as string;
		const status = formData.get('status') as string;

		if (!title || !slug) {
			return fail(400, { message: 'Judul dan Slug wajib diisi' });
		}

		if (params.id === 'tambah') {
			const [inserted] = await db.insert(pageTable).values({
				title,
				slug,
				content,
				status
			});
			// In Drizzle MySQL, insert returns a result object, but we need the ID if it's not a UUID.
			// But our schema uses UUID $defaultFn, so we should probably generate it here or let it be.
			throw redirect(302, '/admin/halaman');
		} else {
			await db.update(pageTable)
				.set({ title, slug, content, status })
				.where(eq(pageTable.id, params.id));
			
			return { success: true };
		}
	},
	delete: async ({ params }) => {
		if (params.id !== 'tambah') {
			await db.delete(pageTable).where(eq(pageTable.id, params.id));
		}
		throw redirect(302, '/admin/halaman');
	}
};
