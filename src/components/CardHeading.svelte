<script>
	export let level;
</script>

{#if level === 1}
	<h1><slot /></h1>
{:else if level === 2}
	<h2><slot /></h2>
{:else if level === 3}
	<h3><slot /></h3>
{:else if level === 4}
	<h4><slot /></h4>
{:else if level === 5}
	<h5><slot /></h5>
{:else}
	<h6><slot /></h6>
{/if}

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		display: flex;
		align-items: center;
		border-bottom-width: 0px;
		background-color: var(--primary-bg);
		color: var(--primary-color);
		padding: 0.5em;
		margin: 0;
	}
</style>
