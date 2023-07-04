import type { ApiPost } from '../../datatypes/ApiPost';

export default async function loadPostIds(_fetch: typeof fetch) {
	return (await (await _fetch('/posts.json')).json()).map((i: ApiPost) => i.id);
}
