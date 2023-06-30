import type { Tag } from '../../datatypes/Tag';

export default async function loadTags(_fetch: typeof fetch): Promise<Tag[]> {
	return await (await _fetch('/tags')).json();
}
