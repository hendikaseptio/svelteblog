import { db } from '$lib/server/db';
import { page as pageTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load = async () => {
	const [page] = await db.select().from(pageTable).where(eq(pageTable.slug, 'tentang'));
	return {
		page
	};
};
