import fs from 'fs';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);

export default async function loadPostIds() {
	const postids = (await readdir(`src/data/posts`)).map((i) => i.replace(/.svx$/, ''));
	return postids;
}
