import { getAllPosts } from '../../lib/blog';

export async function get() {
	return { body: await getAllPosts() };
}
