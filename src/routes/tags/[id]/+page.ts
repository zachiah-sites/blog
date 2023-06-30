import loadTag from '$lib/client/loadTag';
import loadPost from '$lib/client/loadPost';
import type { Tag } from '../../../datatypes/Tag';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const tag: Tag = await loadTag(fetch, params.id);
		const posts = await Promise.all(tag.postIds.map((postId) => loadPost(fetch, postId)));
		return {
			tag,
			posts
		};
	} catch(e) {
		throw error(404, 'Tag not found');
	}
}
