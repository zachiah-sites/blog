<script context="module" lang="ts">
	import loadTag from '$lib/client/loadTag';
	import loadPost from '$lib/client/loadPost';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		try {
			const tag: Tag = await loadTag(fetch, page.params.id);
			const posts = await Promise.all(tag.postIds.map((postId) => loadPost(fetch, postId)));
			return {
				props: {
					tag,
					posts
				}
			};
		} catch {
			return { status: 404, message: '404 No Such Tag' };
		}
	}
</script>

<script lang="ts">
	import Card from '$components/Card.svelte';
	import PostLink from '$components/PostLink.svelte';
	import TagIcon from '$components/TagIcon.svelte';

	import type { Post } from '../../datatypes/Post';
	import type { Tag } from '../../datatypes/Tag';
	import Head from '$components/Head.svelte';

	export let posts: Post[];
	export let tag: Tag;
</script>

<Head title="{tag.id} | tags" description="View Posts with tag &ldquo;{tag.id}&rdquo;" />
<Card header title={tag.id} icon={TagIcon} level={1} />
{#each posts as post}
	<PostLink {post} />
{/each}
