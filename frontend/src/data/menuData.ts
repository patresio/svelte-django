import type { Menu } from '../models/Menu';
import { writable } from 'svelte/store';

export const menu = writable<Menu>([
	{
		name: 'Inicio',
		href: '/'
	},
	{
		name: 'Filmes',
		href: '/films'
	},
	{
		name: 'Sobre',
		href: '/about'
	}
]);
