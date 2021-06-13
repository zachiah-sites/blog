import type { Tag } from './Tag';

export type ApiPost = {
	id: string;
	title: string;
	description: string;
	tags: Tag[];
};
