import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const id = params.id;
	const endpoint = `http://localhost:8000/api/v1/films/${id}/`;

	try {
		const response = await fetch(endpoint);

		if (!response.ok) {
			throw error(response.status, 'No film found with the given ID');
		}

		const film = await response.json();

		return {
			film
		};
	} catch (e) {
		console.error('An error occurred:', e);
		throw error(404, 'No film found with the given ID');
	}
};
