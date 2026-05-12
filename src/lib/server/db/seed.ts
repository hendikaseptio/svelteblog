import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL is not set');
}

async function main() {
	const connection = await mysql.createConnection(process.env.DATABASE_URL!);
	const db = drizzle(connection, { schema, mode: 'default' });

	console.log('Seeding default menu items...');

	const menuItems = [
		{
			label: 'Beranda',
			url: '/',
			order: 1
		},
		{
			label: 'Blog',
			url: '/blog',
			order: 2
		},
		{
			label: 'Harga',
			url: '/harga',
			order: 3
		},
		{
			label: 'Tentang',
			url: '/tentang',
			order: 4
		},
		{
			label: 'Kontak',
			url: '/kontak',
			order: 5
		}
	];

	try {
		// Clear existing data
		await db.delete(schema.menu);
		await db.delete(schema.setting);
		await db.delete(schema.page);
		
		console.log('Seeding default menu items...');
		for (const item of menuItems) {
			await db.insert(schema.menu).values({
				label: item.label,
				url: item.url,
				order: item.order,
				isExternal: false
			});
			console.log(`Inserted menu item: ${item.label}`);
		}

		console.log('Seeding default settings...');
		await db.insert(schema.setting).values({
			siteName: 'SvelteBlog',
			theme: 'auto'
		});
		console.log('Inserted default settings');

		console.log('Seeding default pages...');
		const defaultPages = [
			{ title: 'Beranda', slug: 'home', content: 'Konten halaman beranda' },
			{ title: 'Tentang', slug: 'tentang', content: 'Konten halaman tentang kami' },
			{ title: 'Kontak', slug: 'kontak', content: 'Konten halaman kontak' },
			{ title: 'Harga', slug: 'harga', content: 'Konten halaman harga' }
		];

		for (const p of defaultPages) {
			await db.insert(schema.page).values({
				title: p.title,
				slug: p.slug,
				content: p.content,
				status: 'published'
			});
			console.log(`Inserted page: ${p.title}`);
		}

		console.log('Seeding completed successfully!');
	} catch (error) {
		console.error('Error seeding database:', error);
	} finally {
		await connection.end();
	}
}

main();
