import { db } from '$lib/server/db';
import { media } from '$lib/server/db/schema';
import { json } from '@sveltejs/kit';
import fs from 'node:fs';
import path from 'node:path';

export const POST = async ({ request }) => {
	const formData = await request.formData();
	const file = formData.get('file') as File;

	if (!file || file.size === 0) {
		return json({ error: 'File tidak ditemukan' }, { status: 400 });
	}

	const fileName = `${Date.now()}-${file.name}`;
	const filePath = path.join('static', 'uploads', fileName);
	const publicPath = `/uploads/${fileName}`;

	try {
		const buffer = Buffer.from(await file.arrayBuffer());
		fs.writeFileSync(filePath, buffer);

		const id = crypto.randomUUID();
		await db.insert(media).values({
			id,
			name: file.name,
			path: publicPath,
			type: file.type,
			size: file.size
		});

		return json({ 
			success: true, 
			url: publicPath,
			name: file.name,
			id 
		});
	} catch (e) {
		console.error(`Gagal mengupload ${file.name}:`, e);
		return json({ error: 'Gagal mengupload file ke server' }, { status: 500 });
	}
};
