import loadTags from '$lib/server/loadTags';

export async function GET() {
	return { body: await loadTags() };
}
