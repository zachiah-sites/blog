import { getAllPosts } from '../../lib/blog';

export async function get() {
	//return { body: await getAllPosts() };
	return { body: ['1-dry-css-interactive-elements.svx'] };
}
