import loadPost from './loadPost';
import type { ApiPost } from 'src/datatypes/ApiPost';
import type { Post } from '../../datatypes/Post';

export default async function loadPosts(fetch): Promise<Post[]> {
	const apiPosts: ApiPost[] = await (await fetch('/posts.json')).json();

	return await Promise.all(apiPosts.map(async (apiPost) => await loadPost(fetch, apiPost.id)));
}
