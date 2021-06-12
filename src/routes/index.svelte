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
	import { getPostData } from '$lib/blogClient';
	import Card from '../components/Card.svelte';

	export let postids: string[];
</script>

{#each postids as postid}
	{#await getPostData(postid) then post}
		<Card title={post.title} link="h">
			<svelte:component this={post.content} />
		</Card>
	{/await}
{/each}
