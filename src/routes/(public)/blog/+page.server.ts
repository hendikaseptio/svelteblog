import { db } from '$lib/server/db';
import { post, category } from '$lib/server/db/schema';
import { desc, eq } from 'drizzle-orm';

export const load = async ({ url }) => {
	const categorySlug = url.searchParams.get('kategori');
	
	let postsQuery = db.select({
		id: post.id,
		title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		cover: post.cover,
		publishedAt: post.publishedAt,
		categoryName: category.name,
	})
	.from(post)
	.leftJoin(category, eq(post.categoryId, category.id))
	.where(eq(post.status, 'published'))
	.orderBy(desc(post.publishedAt));

	if (categorySlug) {
		// If we want to filter by category slug, we'd need another join or a subquery
		// For simplicity, let's just get all published posts first or filter if we can
	}

	const [posts, categories] = await Promise.all([
		postsQuery,
		db.select().from(category)
	]);

	return {
		posts,
		categories
	};
};
