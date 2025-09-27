import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('http://localhost:8000/api/options/film-form/');
    const formFields = await res.json();

    return { formFields };
};