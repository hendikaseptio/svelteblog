import { db } from '$lib/server/db';
import { post, category, user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const [blogPost] = await db.select({
		id: post.id,
		title: post.title,
		content: post.content,
		publishedAt: post.publishedAt,
		cover: post.cover,
		categoryName: category.name,
		authorName: user.name,
	})
	.from(post)
	.leftJoin(category, eq(post.categoryId, category.id))
	.leftJoin(user, eq(post.authorId, user.id))
	.where(eq(post.slug, params.slug));

	if (!blogPost) {
		throw error(404, 'Artikel tidak ditemukan');
	}

	return {
		post: blogPost
	};
};
