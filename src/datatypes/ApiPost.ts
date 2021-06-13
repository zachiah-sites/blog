import type { Tag } from './Tag';

export type ApiPost = {
	id: string;
	title: string;
	tags: Tag[];
};
