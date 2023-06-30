import type { Tag } from '../../datatypes/Tag';

export default async function loadTag(_fetch: typeof fetch, id: string): Promise<Tag> {
	const response = await _fetch(`/tags/${id}`);
	if (response.ok) {
		return await response.json();
	} else {
		throw new Error('No Such Tag');
	}
}
