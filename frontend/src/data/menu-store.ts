import type { Menu } from '../models/Menu';
import { writable } from 'svelte/store';

export const menu = writable<Menu>([
	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'Films',
		href: '/films'
	},
	{
		name: 'About',
		href: '/about'
	}
]);
