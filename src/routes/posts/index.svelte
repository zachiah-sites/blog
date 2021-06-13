<script context="module" lang="ts">
	import loadPosts from '../../lib/client/loadPosts';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		const posts = await loadPosts(fetch);

		return { props: { posts } };
	}
</script>

<script lang="ts">
	import Head from '$components/Head.svelte';
	import PostLink from '../../components/PostLink.svelte';
	import type { Post } from '../../datatypes/Post';

	export let posts: Post[];
</script>

<!--#TODO: Write better description-->
<Head title="Posts" description="A Blog about my interests." />
{#each posts as post}
	<PostLink {post} />
{/each}
