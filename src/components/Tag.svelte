<script lang="ts">
	import type { Tag } from '../datatypes/Tag';

	export let tag: Tag;
	export let nolink: boolean = false;
</script>

<span>
	{#if nolink}
		<span class="inner">{tag.id} ({tag.count})</span>
	{:else}
		<a class="inner" href="/tags/{tag.id}/">{tag.id} ({tag.count})</a>
	{/if}
</span>

<style>
	.inner {
		white-space: nowrap;
		display: block;
		background: var(--primary-bg);
		color: var(--primary-color);
		padding: 0.5em;;
		border-radius: 0.5em;
	}
</style>
