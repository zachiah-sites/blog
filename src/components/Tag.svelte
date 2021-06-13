<script lang="ts">
	import type { Tag } from '../datatypes/Tag';

	export let tag: Tag;
</script>

<span><a href="/tags/{tag.id}">{tag.id} ({tag.count})</a></span>

<style>
	a {
		background: var(--primary-bg);
		color: var(--primary-color);
		padding: 0.5em;
	}
</style>
