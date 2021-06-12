<script lang="ts">
	import PostHOC from './PostHOC.svelte';
	import { slide } from 'svelte/transition';

	import Card from './Card.svelte';
	import PostLink from './PostLink.svelte';

	export let postids: string[];

	let collapsed = false;
</script>

<Card title="Recent Posts" header level={2} collapsable bind:collapsed />

{#if !collapsed}
	<div transition:slide|local>
		{#each postids as postid}
			<PostLink {postid} />
		{/each}
	</div>
{/if}
