import { db } from '$lib/server/db';
import { page as pageTable } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export const load = async () => {
	const pages = await db.select().from(pageTable).orderBy(desc(pageTable.createdAt));
	return {
		pages
	};
};
