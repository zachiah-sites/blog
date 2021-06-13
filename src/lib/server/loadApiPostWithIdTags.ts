import loadPostIdModule from '../universal/loadPostIdModule';
import loadPostIds from './loadPostIds';
import loadTag from './loadTag';
import type { ApiPostWithIdTags } from '../../datatypes/ApiPostWithIdTags';

export default async function loadApiPostWithIdTags(id: string): Promise<ApiPostWithIdTags> {
	const postModule = await loadPostIdModule(loadPostIds, id);
	return {
		id,
		title: postModule.metadata.title,
		tagIds: postModule.metadata.tags
	};
}
