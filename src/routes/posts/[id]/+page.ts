import loadPost from '$lib/client/loadPost';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		return {post: await loadPost(fetch, params.id) };
	} catch {
		throw error(404, 'Post not found');
	}
}
