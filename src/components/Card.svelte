<script lang="ts">
	import { createEventDispatcher, type ComponentType } from 'svelte';
	import { slide } from 'svelte/transition';

	import CardHeading from './CardHeading.svelte';

	export let title: string;
	export let level: 1 | 2 | 3 | 4 | 5 | 6 = 2;
	export let icon: ComponentType | null = null;
	export let link: string | null = null;

	const dispatch = createEventDispatcher();
</script>

<svelte:element this={link ? 'a' : 'article'} href={link}
	class="card"
	style="--level: {level}"
>
	<CardHeading {level}>
		{#if icon}
			<svelte:component this={icon} />
		{/if}
		<span class="title">{title}</span>
	</CardHeading>

	{#if $$slots['banner']}
		<div class="banner">
			<slot name="banner" />
		</div>
	{/if}

	<div class="content">
		<slot />
	</div>
</svelte:element>

<style>
	.banner {
		padding: 1em;
		background: var(--secondary-bg);
		color: var(--secondary-color);
		display: flex;
		gap: 0.5em;
		flex-wrap: wrap;
	}
	.title {
		margin-right: auto;
		margin-left: 0.5em;
	}

	.title:first-child {
		margin-left: 0;
	}
	.card {
		display: block;
		background: var(--main-bg);
		color: var(--main-color);
		margin: 1em 0 1em calc(1em * calc(var(--level) - 1));
		box-shadow: 0 0 15px 7px black;
		position: relative;
	}

	.content {
		padding: 1em;
	}

	a.card:hover {
		text-decoration: underline;
	}
</style>
