import loadPosts from '$lib/client/loadPosts';

export async function load({ fetch }) {
	return { posts: await loadPosts(fetch) };
}
