<script lang="ts">
	import type {Post} from '$lib/Post';
	import Card from './Card.svelte';
	import TagIcon from './TagIcon.svelte';

	export let post: Post;
</script>

<Card title={post.title} level={1}>
	<svelte:fragment slot="banner">
		<TagIcon --margin="0 0 0 auto" />
		{#each post.tags as tag, index}
			<span><a href="/tags/{tag}">{tag}</a></span>
		{/each}
	</svelte:fragment>

	<svelte:component this={post.content} />

	<hr />
	<p><span>Thanks for Reading!</span> <a href="/posts">All Posts</a></p>
</Card>

<style>
	p {
		display: flex;
	}

	a {
		margin-left: auto;
		background: var(--primary-bg);
		color: var(--primary-color);
		padding: 0.5em;
	}
</style>
