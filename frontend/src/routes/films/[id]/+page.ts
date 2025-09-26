import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getFilm } from '../../../lib/api';

export const load: PageLoad = async ({ params }) => {
	try {
		const film = await getFilm(params.id);
		return { film };
	} catch (e) {
		throw error(500, 'Could not fetch the film.');
	}
};
