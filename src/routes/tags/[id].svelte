<script context="module" lang="ts">
	import { getTagPosts } from '$lib/postsLoader';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		return { props: { posts: getTagPosts(fetch, page.params.id) } };
	}
</script>

<script lang="ts">
	import type { Post } from '$lib/Post';
	export let posts: Post[];
</script>
