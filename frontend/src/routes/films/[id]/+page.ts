import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getFilm } from '../../../lib/api';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const film = await getFilm(params.id, fetch);
		return { film };
	} catch (e) {
		throw error(500, 'Could not fetch the film.');
	}
};
