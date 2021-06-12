<script lang="ts">
	import '../globals.css';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/archives">Archives</a></li>
		<li><a href="/about">About</a></li>
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
		background: #3f51b5;
		color: white;
		position: sticky;
		top: 0;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
	}

	li:first-of-type {
		margin-right: auto;
	}

	main {
		margin: 0 1em;
	}
</style>
