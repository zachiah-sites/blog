<script lang="ts">
	import '../globals.css';
	import '../prism-theme.css';
	import '../abcjs-audio.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<link rel="canonical" href="https://blog.zachiah.com{data.url.pathname.replace(/\/$/, '')}/" />
</svelte:head>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/posts/">Posts</a></li>
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
		margin: 0;
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

	li {
		list-style-type: none;
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
