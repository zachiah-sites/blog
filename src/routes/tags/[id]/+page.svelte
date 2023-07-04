<script lang="ts">
	import Card from '$components/Card.svelte';
	import PostLink from '$components/PostLink.svelte';
	import TagIcon from '$components/TagIcon.svelte';

	import type { Post } from '../../../datatypes/Post';
	import type { Tag } from '../../../datatypes/Tag';
	import Head from '$components/Head.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Head title="{data.tag.id} | tags" description="View Posts with tag &ldquo;{data.tag.id}&rdquo;" />
<Card title={data.tag.id} icon={TagIcon} level={1} />
{#each data.posts as post}
	<PostLink {post} />
{/each}
