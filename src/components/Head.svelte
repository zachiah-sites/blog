<script lang="ts">
	export let title: string;
	export let description: string | null = null;
</script>

<svelte:head>
	<title>{title} | Blog | Zachiah</title>
	{#if description !== null}
		<meta name="description" content={description} />
	{/if}
</svelte:head>
