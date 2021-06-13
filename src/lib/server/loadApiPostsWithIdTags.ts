import loadApiPostWithIdTags from './loadApiPostWithIdTags';
import loadPostIds from './loadPostIds';
import type { ApiPostWithIdTags } from '../../datatypes/ApiPostWithIdTags';

export default async function loadApiPostsWithIdTags(): Promise<ApiPostWithIdTags[]> {
	return await Promise.all(
		(await loadPostIds()).map(async (postId) => await loadApiPostWithIdTags(postId))
	);
}
