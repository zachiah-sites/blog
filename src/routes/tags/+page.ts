import loadTags from "$lib/client/loadTags";

export async function load({ fetch }) {
	return { props: { tags: await loadTags(fetch) } };
}
