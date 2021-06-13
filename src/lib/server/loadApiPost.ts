import loadPostIdModule from '../universal/loadPostIdModule';
import loadPostIds from './loadPostIds';
import loadTag from './loadTag';
import type { ApiPost } from '../../datatypes/ApiPost';

export default async function loadApiPost(id: string): Promise<ApiPost> {
	const postModule = await loadPostIdModule(loadPostIds, id);
	return {
		id,
		title: postModule.metadata.title,
		description: postModule.metadata.description,
		tags: await Promise.all(postModule.metadata.tags.map(async (t) => await loadTag(t)))
	};
}
