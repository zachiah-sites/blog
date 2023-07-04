<script lang="ts">
	import Card from '$components/Card.svelte';
	import PostLink from '$components/PostLink.svelte';
	import Tag from '$components/Tag.svelte';
	import TagIcon from '$components/TagIcon.svelte';
	import Head from '$components/Head.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!--TODO: Add better description once I have more articles-->
<Head title="Tags" description="Find content by tag" />

<Card title="Tags" icon={TagIcon} level={1} />

{#each data.tags as tag (tag.id)}
	<Tag {tag} />
{/each}
