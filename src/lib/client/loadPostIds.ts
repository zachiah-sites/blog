export default async function loadPostIds(fetch) {
	return (await (await fetch('/posts.json')).json()).map((i) => i.id);
}
