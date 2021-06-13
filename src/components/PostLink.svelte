<script lang="ts">
	import Card from './Card.svelte';
	import TagIcon from './TagIcon.svelte';
	import Tag from './Tag.svelte';

	export let post;
</script>

<Card title={post.title} link="/posts/{post.id}" level={2}>
	<svelte:fragment slot="banner">
		<TagIcon --margin="0 0 0 auto" />
		{#each post.tags as tag, index}
			<Tag {tag} />
		{/each}
	</svelte:fragment>

	<svelte:component this={post.content} />
</Card>
