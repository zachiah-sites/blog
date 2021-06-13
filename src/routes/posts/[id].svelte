<script context="module" lang="ts">
	import loadPost from '$lib/client/loadPost';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		// const postids: string[] = await (await fetch('/posts/posts.json')).json();
		// const postid: string = page.params.id;

		// if (postids.includes(postid)) {
		// 	return { props: { postid } };
		// } else {
		// 	return {
		// 		status: 404,
		// 		error: "That Post Doesn't Exist Sorry"
		// 	};
		// }

		try {
			return { props: { post: await loadPost(fetch, page.params.id) } };
		} catch {
			return {
				status: 404,
				error: "That Post Doesn't Exist Sorry"
			};
		}
	}
</script>

<script lang="ts">
	import Head from '$components/Head.svelte';

	import Post from '../../components/Post.svelte';
	import type { Post as PostType } from '../../datatypes/Post';
	export let post: PostType;
</script>

<Head title={post.title} description={post.description} />
<Post {post} />
