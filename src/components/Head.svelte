<script lang="ts">
	export let title;
	export let description;
</script>

<svelte:head>
	<title>{title} | Blog | Zachiah</title>
	{#if description !== null}
		<meta name="description" content={description} />
	{/if}
</svelte:head>
