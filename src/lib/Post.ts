import type { SvelteComponent } from 'svelte';

export type Post = {
	id: string;
	content: SvelteComponent;
	title: string;
	tags: string[];
};
