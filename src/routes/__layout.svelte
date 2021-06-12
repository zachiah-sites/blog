<script lang="ts">
	import '../globals.css';
	import '../prism-theme.css';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/posts">Posts</a></li>
	</ul>
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		display: contents;
	}
	ul {
		display: flex;
		padding: 1em;
		gap: 1em;
		background: var(--primary-bg);
		color: var(--primary-color);
		position: sticky;
		top: 0;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
		z-index: 1;
	}

	li:first-of-type {
		margin-right: auto;
	}

	main {
		margin: 0 1em;
	}

	a {
		color: var(--primary-color);
	}
</style>
