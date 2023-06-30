import loadPost from './loadPost';
import type { Post } from '../../datatypes/Post';
import type { ApiPost } from '../../datatypes/ApiPost';

export default async function loadPosts(_fetch: typeof fetch): Promise<Post[]> {
	const apiPosts: ApiPost[] = await (await _fetch('/posts')).json();

	return await Promise.all(apiPosts.map(async (apiPost) => await loadPost(_fetch, apiPost.id)));
}
