import loadTags from "$lib/client/loadTags";

export async function load({ fetch }) {
	return { tags: await loadTags(fetch) };
}
