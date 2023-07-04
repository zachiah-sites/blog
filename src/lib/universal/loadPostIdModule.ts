import { error } from "@sveltejs/kit";

export default async function loadPostIdModule(loadPostIds: () => Promise<string[]>, id: string) {
	const postIds = await loadPostIds();
	if (postIds.includes(id)) {
		return await import(`../../data/posts/${id}.svx`);
	} else {
		throw error(404,"Post not found")
	}
}
