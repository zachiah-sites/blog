<script>
	export let refresh = '';

	function fly(node, { delay = 0, duration = 400 }) {
		return {
			delay,
			duration,
			css: (t) => `left: ${0 - t * 500}px;opacity: ${t}`
		};
	}
</script>

<div class="wrapper">
	{#key refresh}
		<div class="inner">
			<div class="inner-inner" out:fly|local={{ duration: 500 }} in:fly|local={{ duration: 500 }}>
				<slot />
			</div>
		</div>
	{/key}
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}

	.inner {
		grid-area: 1 / 1 / 1 / 1;
	}
	.inner-inner {
		position: relative;
	}
</style>
