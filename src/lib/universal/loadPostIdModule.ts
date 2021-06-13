export default async function loadPostIdModule(loadPostIds: () => Promise<string[]>, id: string) {
	const postIds = await loadPostIds();
	if (postIds.includes(id)) {
		return await import(`../../data/posts/${id}.svx`);
	} else {
		throw new Error('404 Post not found');
	}
}
