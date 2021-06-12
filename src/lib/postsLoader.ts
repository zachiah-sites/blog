/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load({ page, fetch, session, context }) {
	const posts = await (await fetch('/posts/posts.json')).json();

	return { props: { posts } };
}
