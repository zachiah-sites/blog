<script lang="ts">
	import type { Post } from '../datatypes/Post';
	import Card from './Card.svelte';
	import Tag from './Tag.svelte';
	import TagIcon from './TagIcon.svelte';

	export let post: Post;
</script>

<Card title={post.title} level={1}>
	<svelte:fragment slot="banner">
		<TagIcon --margin="0 0 0 auto" />
		{#each post.tags as tag, index}
			<Tag {tag} />
		{/each}
	</svelte:fragment>

	<svelte:component this={post.content} />

	<hr />
	<footer>
		<p>Thanks for Reading!</p>
		<a href="/posts">All Posts</a>
	</footer>
</Card>

<style>
	footer {
		display: flex;
	}

	a {
		margin-left: auto;
	}
</style>
