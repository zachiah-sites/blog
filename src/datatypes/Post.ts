import type { ComponentType } from 'svelte';
import type { Tag } from './Tag';

export type Post = {
	id: string;
	content: ComponentType;
	title: string;
	description: string;
	tags: Tag[];
};
