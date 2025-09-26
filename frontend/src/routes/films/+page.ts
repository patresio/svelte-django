import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const endpoint = 'http://localhost:8000/api/v1/films/';
	const response = await fetch(endpoint);

	if (!response.ok) {
		throw error(response.status, 'Could not fetch films.');
	}

	const films = await response.json();
	return { films };
};
