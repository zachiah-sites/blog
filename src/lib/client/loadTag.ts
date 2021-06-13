import type { Tag } from '../../datatypes/Tag';

export default async function loadTag(fetch, id): Promise<Tag> {
	const response = await fetch(`/tags/${id}.json`);
	if (response.ok) {
		return await response.json();
	} else {
		throw new Error('No Such Tag');
	}
}
