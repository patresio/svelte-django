import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getFilms } from '../../lib/api';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const films = await getFilms(fetch);
		return { films };
	} catch (e) {
		throw error(500, 'Could not fetch films.');
	}
};
