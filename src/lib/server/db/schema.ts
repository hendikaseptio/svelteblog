import { mysqlTable, varchar, text, int, timestamp, boolean } from 'drizzle-orm/mysql-core';
import { user } from './auth.schema';

export const task = mysqlTable('task', {
	id: varchar('id', { length: 36 })
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	priority: int('priority').notNull().default(1)
});

export const post = mysqlTable('post', {
	id: varchar('id', { length: 36 })
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	slug: varchar('slug', { length: 255 }).notNull().unique(),
	content: text('content').notNull(),
	excerpt: text('excerpt'),
	cover: text('cover'),
	status: varchar('status', { length: 20 }).notNull().default('draft'), // draft, published
	publishedAt: timestamp('published_at').$defaultFn(() => new Date()),
	authorId: varchar('author_id', { length: 36 }).references(() => user.id),
	categoryId: varchar('category_id', { length: 36 }).references(() => category.id)
});

export const category = mysqlTable('category', {
	id: varchar('id', { length: 36 })
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: varchar('name', { length: 255 }).notNull(),
	slug: varchar('slug', { length: 255 }).notNull().unique(),
	description: text('description'),
	createdAt: timestamp('created_at').$defaultFn(() => new Date())
});

export const page = mysqlTable('page', {
	id: varchar('id', { length: 36 })
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	slug: varchar('slug', { length: 255 }).notNull().unique(),
	content: text('content').notNull(),
	sections: text('sections'), // JSON array of sections
	status: varchar('status', { length: 20 }).notNull().default('draft'), // draft | published
	createdAt: timestamp('created_at').$defaultFn(() => new Date())
});

export const media = mysqlTable('media', {
	id: varchar('id', { length: 36 })
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	path: text('path').notNull(),
	type: varchar('type', { length: 50 }).notNull(),
	size: int('size').notNull(),
	createdAt: timestamp('created_at').$defaultFn(() => new Date())
});

export const setting = mysqlTable('setting', {
	id: int('id').primaryKey().autoincrement(),
	siteName: varchar('site_name', { length: 255 }).notNull().default('My SvelteKit Blog'),
	siteLogo: text('site_logo'),
	theme: varchar('theme', { length: 20 }).notNull().default('auto'), // light, dark, auto
	address: text('address'),
	phone: varchar('phone', { length: 20 }),
	facebook: varchar('facebook', { length: 255 }),
	instagram: varchar('instagram', { length: 255 }),
	x: varchar('x', { length: 255 }),
	updatedAt: timestamp('updated_at').$defaultFn(() => new Date())
});

export const postCategory = mysqlTable('post_category', {
	postId: varchar('post_id', { length: 36 })
		.notNull()
		.references(() => post.id, { onDelete: 'cascade' }),
	categoryId: varchar('category_id', { length: 36 })
		.notNull()
		.references(() => category.id, { onDelete: 'cascade' })
});

export const menu = mysqlTable('menu', {
	id: varchar('id', { length: 36 })
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	label: varchar('label', { length: 255 }).notNull(),
	url: text('url').notNull(),
	order: int('order').notNull().default(0),
	parentId: varchar('parent_id', { length: 36 }),
	isExternal: boolean('is_external').notNull().default(false),
	createdAt: timestamp('created_at').$defaultFn(() => new Date())
});

export * from './auth.schema';

