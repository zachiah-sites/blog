<script lang="ts">
	import Head from '$components/Head.svelte';
	import Card from '../components/Card.svelte';
</script>

<Head
	title="Home"
	description="A Blog by me (Zachiah Sawyer), about anything I'm interested in. Expect articles about web development and piano."
/>
<Card level={2} title="Zachiah">
	Hi, my name is Zachiah, Sawyer. This is my personal blog. Topics you should expect to find include
	<ul>
		<li>HTML</li>
		<li>CSS</li>
		<li>JavaScipt</li>
		<li>SvelteJs</li>
		<li>Piano</li>
	</ul>

	<div><a href="/posts">Posts</a></div>
</Card>

<style>
	div {
		display: flex;
	}
	a {
		margin-left: auto;
		width: min-content;
	}
</style>
