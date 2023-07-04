<script lang="ts">
	import Head from '$components/Head.svelte';
	import PostLink from '../../components/PostLink.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!--#TODO: Write better description-->
<Head title="Posts" description="A Blog about my interests." />
{#each data.posts as post}
    <a href="/posts/{post.id}/">{post.title}</a>
	<PostLink {post} />
{/each}