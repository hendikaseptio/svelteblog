import { db } from '$lib/server/db';
import { menu, setting } from '$lib/server/db/schema';
import { asc } from 'drizzle-orm';

export const load = async () => {
	const [menus, settings] = await Promise.all([
		db.select().from(menu).orderBy(asc(menu.order)),
		db.select().from(setting).limit(1)
	]);

	return {
		menus,
		settings: settings[0]
	};
};
