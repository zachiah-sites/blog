import type { Tag } from '../../datatypes/Tag';

export default async function loadTags(fetch): Promise<Tag[]> {
	return await (await fetch('/tags.json')).json();
}
