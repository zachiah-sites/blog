<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const postids: string[] = await (await fetch('/posts/posts.json')).json();
		const postid: string = page.params.id;

		if (postids.includes(postid)) {
			return { props: { postid } };
		} else {
			return {
				status: 404,
				error: "That Post Doesn't Exist Sorry"
			};
		}
	}
</script>

<script lang="ts">
	import Post from '../../components/Post.svelte';
	export let postid: string[];
</script>

<Post {postid} />
