import loadPostIds from './loadPostIds';
import loadPostIdModule from '$lib/universal/loadPostIdModule';
import type { Post } from '../../datatypes/Post';
import type { ApiPost } from 'src/datatypes/ApiPost';

export default async function loadPost(fetch, id: string): Promise<Post> {
	const response = await fetch(`/posts/${id}.json`);
	if (response.ok) {
		const apiPost: ApiPost = await response.json();
		const postModule = await loadPostIdModule(() => loadPostIds(fetch), id);
		return {
			...apiPost,
			id,
			content: postModule.default
		};
	} else {
		throw new Error('No Such Post');
	}
}
