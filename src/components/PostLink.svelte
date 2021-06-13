<script lang="ts">
	import Card from './Card.svelte';

	export let post;
</script>

<Card title={post.title} link="/posts/{post.id}" level={2}>
	<svelte:component this={post.content} />
</Card>
