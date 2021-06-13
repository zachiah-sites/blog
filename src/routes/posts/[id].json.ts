import loadApiPost from '$lib/server/loadApiPost';

export async function get({ params }) {
	try {
		return { body: await loadApiPost(params.id) };
	} catch {
		return { status: 404, message: 'Post not Found' };
	}
}
