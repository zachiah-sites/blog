<script lang="ts">
	import Head from '$components/Head.svelte';

	import Post from '$components/Post.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Head title={data.post.title} description={data.post.description} />
<Post post={data.post} />
