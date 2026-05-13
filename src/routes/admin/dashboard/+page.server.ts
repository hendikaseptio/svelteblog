import { db } from '$lib/server/db';
import { post, page, category, media } from '$lib/server/db/schema';
import { count, desc } from 'drizzle-orm';

export const load = async () => {
	const [
		postsCount,
		pagesCount,
		categoriesCount,
		mediaCount,
		recentPosts
	] = await Promise.all([
		db.select({ value: count() }).from(post),
		db.select({ value: count() }).from(page),
		db.select({ value: count() }).from(category),
		db.select({ value: count() }).from(media),
		db.select().from(post).orderBy(desc(post.publishedAt)).limit(5)
	]);

	return {
		stats: {
			posts: postsCount[0].value,
			pages: pagesCount[0].value,
			categories: categoriesCount[0].value,
			media: mediaCount[0].value
		},
		recentPosts
	};
};
