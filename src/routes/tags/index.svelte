<script context="module" lang="ts">
	import loadTags from '$lib/client/loadTags';
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		return { props: { tags: await loadTags(fetch) } };
	}
</script>

<script lang="ts">
	import Card from '$components/Card.svelte';
	import PostLink from '$components/PostLink.svelte';
	import Tag from '$components/Tag.svelte';
	import TagIcon from '$components/TagIcon.svelte';
	import type { Tag as TagType } from '../../datatypes/Tag';
	import Head from '$components/Head.svelte';

	export let tags: TagType[];
</script>

<!--TODO: Add better description once I have more articles-->
<Head title="Tags" description="Find content by tag" />

<Card header title="Tags" icon={TagIcon} level={1} />

{#each tags as tag}
	<Tag {tag} />
{/each}
