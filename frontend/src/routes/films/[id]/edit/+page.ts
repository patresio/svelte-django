import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getFilm } from '../../../../lib/api';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const filmPromise = getFilm(params.id, fetch);
		const formFieldsPromise = fetch('http://localhost:8000/api/options/film-form/').then(res => res.json());

		const [film, formFields] = await Promise.all([filmPromise, formFieldsPromise]);

		return { film, formFields };
	} catch (e) {
		throw error(500, 'Could not fetch the film data.');
	}
};
