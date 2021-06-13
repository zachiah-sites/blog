import loadApiPostsWithIdTags from './loadApiPostsWithIdTags';
import loadTags from './loadTags';
import type { Tag } from '../../datatypes/Tag';

export default async function loadTag(id: string): Promise<Tag> {
	let tag = (await loadTags()).find((t) => t.id === id);

	if (tag) {
		return tag;
	} else {
		throw new Error('No Such Tag');
	}
}
