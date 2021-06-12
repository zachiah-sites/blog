<script lang="ts">
	import PostHOC from './PostHOC.svelte';
	import Card from './Card.svelte';

	export let postid;
</script>

<PostHOC {postid} let:post>
	<Card title={post.title} level={1}>
		<svelte:component this={post.content} />
	</Card>
</PostHOC>
