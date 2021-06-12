import fs from 'fs';
import { promisify } from 'util';
import type { SvelteComponent } from 'svelte';

const readdir = promisify(fs.readdir);

export async function getAllPosts() {
	const files = (await readdir(`src/data/posts`)).map((i) => i.replace(/.svx$/, ''));
	return files;
}
