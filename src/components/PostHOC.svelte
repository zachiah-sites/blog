<script lang="ts">
	import { getPostData } from '$lib/blogClient';
	import Card from './Card.svelte';
	import Loader from './Loader.svelte';

	export let postid;
</script>

{#await getPostData(postid)}
	<Card title="Loading..." level={1}>
		<Loader />
	</Card>
{:then post}
	<slot {post} />
{/await}
