import loadApiPostsWithIdTags from './loadApiPostsWithIdTags';
import type { Tag } from '../../datatypes/Tag';

export default async function loadTags(): Promise<Tag[]> {
	const apiPostsWithIdTags = await loadApiPostsWithIdTags();

	let tagHash: { [k: string]: { count: number; postIds: string[] } } = {};

	for (let apiPostWithIdTags of apiPostsWithIdTags) {
		for (let tagId of apiPostWithIdTags.tagIds) {
			tagHash[tagId] = tagHash[tagId] || { count: 0, postIds: [] };
			tagHash[tagId].count++;
			tagHash[tagId].postIds.push(apiPostWithIdTags.id);
		}
	}
	return Object.entries(tagHash).map(([id, { count, postIds }]) => ({ id, count, postIds }));
}
