<script lang="ts">
	import { getPostData } from '$lib/blogClient';

	export let postid;
</script>

{#await getPostData(postid)}
	Loading...
{:then post}
	<slot {post} />
{/await}
