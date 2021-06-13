<script context="module" lang="ts">
	import { getTagPosts } from '$lib/postsLoader';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		return { props: { posts: await getTagPosts(fetch, page.params.id), tag: page.params.id } };
	}
</script>

<script lang="ts">
	import Card from '$components/Card.svelte';
	import PostLink from '$components/PostLink.svelte';
	import TagIcon from '$components/TagIcon.svelte';

	import type { SvelteComponent } from 'svelte/internal';

	$: _TagIcon = (TagIcon as any) as SvelteComponent;

	import type { Post } from '$lib/Post';
	export let posts: Post[];
	export let tag: string;
</script>

<Card header title={tag} icon={_TagIcon} level={1} />
{#each posts as post}
	<PostLink {post} />
{/each}
