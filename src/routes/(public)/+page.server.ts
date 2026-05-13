import { db } from '$lib/server/db';
import { page as pageTable, post } from '$lib/server/db/schema';
import { eq, desc } from 'drizzle-orm';

export const load = async () => {
	const [homePage, latestPosts] = await Promise.all([
		db.select().from(pageTable).where(eq(pageTable.slug, 'home')),
		db.select().from(post).where(eq(post.status, 'published')).orderBy(desc(post.publishedAt)).limit(3)
	]);

	return {
		page: homePage[0],
		latestPosts
	};
};
