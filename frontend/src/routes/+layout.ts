import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
    const res = await fetch('http://localhost:8000/api/options/menu/');
    const menu = await res.json();

    return { menu };
};