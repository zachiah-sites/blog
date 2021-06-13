import type { SvelteComponent } from 'svelte';
import type { Tag } from './Tag';

export type Post = {
	id: string;
	content: SvelteComponent;
	title: string;
	tags: Tag[];
};
