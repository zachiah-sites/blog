import loadApiPosts from '$lib/server/loadApiPosts';

export async function get() {
	return { body: await loadApiPosts() };
}
