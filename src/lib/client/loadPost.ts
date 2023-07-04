import loadPostIds from './loadPostIds';
import loadPostIdModule from '$lib/universal/loadPostIdModule';
import type { Post } from '../../datatypes/Post';
import type { ApiPost } from '../../datatypes/ApiPost';


export default async function loadPost(_fetch: typeof fetch, id: string): Promise<Post> {
	const response = await _fetch(`/posts/${id}.json`);
	if (response.ok) {
		const apiPost: ApiPost = await response.json();
		const postModule = await loadPostIdModule(() => loadPostIds(_fetch), id);
		return {
			...apiPost,
			id,
			content: postModule.default
		};
	} else {
		throw new Error('No Such Post');
	}
}
