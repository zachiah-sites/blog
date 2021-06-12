<script lang="ts">
	export let title: string;
	export let link: string | undefined = undefined;
</script>

<div class="card" class:link class:normal={!link}>
	<h2>{title}</h2>
	<div class="content">
		<slot />
		<div class="inner">
			<a href={link}>{title}</a>
		</div>
	</div>
</div>

<style>
	.card {
		background: var(--main-bg);
		color: var(--main-color);
		margin: 1em 0;
		box-shadow: 0 0 15px 7px black;
		position: relative;
	}

	h2 {
		border-bottom-width: 0px;
		background-color: var(--primary-bg);
		color: var(--primary-color);
		padding: 1em;
		margin: 0;
	}

	.content {
		padding: 1em;
	}

	.link .content {
		max-height: 20em;
		overflow: hidden;
	}

	.inner {
		display: none;
	}

	.link .inner {
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(180deg, transparent 60%, black);
	}

	a {
		display: block;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0;
	}
</style>
