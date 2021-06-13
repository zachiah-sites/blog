import loadTags from '$lib/server/loadTags';

export async function get() {
	return { body: await loadTags() };
}
