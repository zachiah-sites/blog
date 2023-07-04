import loadTags from '$lib/server/loadTags';
import { json } from '@sveltejs/kit';

export async function GET() {
	return json(await loadTags());
}
