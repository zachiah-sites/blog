import loadApiPost from './loadApiPost';
import loadPostIds from './loadPostIds';
import type { ApiPost } from '../../datatypes/ApiPost';

export default async function loadApiPosts(): Promise<ApiPost[]> {
	return await Promise.all((await loadPostIds()).map(async (postId) => await loadApiPost(postId)));
}
