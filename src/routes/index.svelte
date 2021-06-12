<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const postids = await (await fetch('/posts/posts.json')).json();

		return { props: { postids } };
	}
</script>

<script lang="ts">
	import RecentPosts from '../components/RecentPosts.svelte';

	export let postids: string[];
</script>

<RecentPosts {postids} />
