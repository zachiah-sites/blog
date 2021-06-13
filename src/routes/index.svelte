<script lang="ts">
	import Card from '../components/Card.svelte';
</script>

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
