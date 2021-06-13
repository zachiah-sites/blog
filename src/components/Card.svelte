<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { SvelteComponent } from 'svelte/internal';
	import { slide } from 'svelte/transition';

	import CardHeading from './CardHeading.svelte';
	import ChevronDownIcon from './ChevronDownIcon.svelte';
	import ChevronUpIcon from './ChevronUpIcon.svelte';
	import Loader from './Loader.svelte';
	import MoreIcon from './MoreIcon.svelte';

	export let title: string;
	export let link: string | undefined = undefined;
	export let header = false;
	export let level = 2;
	export let collapsable = false;
	export let collapsed = false;
	export let icon = null;

	const dispatch = createEventDispatcher();
</script>

<div class="card" class:link class:normal={!link} style="--level: {level}">
	<CardHeading {level}>
		{#if icon}
			<svelte:component this={icon} />
		{/if}
		<span class="title">{title}</span>
		{#if collapsable}
			<button
				on:click={() => {
					collapsed = !collapsed;
					dispatch('click');
				}}
			>
				{#if collapsed}
					<ChevronDownIcon />
				{:else}
					<ChevronUpIcon />
				{/if}
			</button>
		{/if}
	</CardHeading>

	{#if $$slots['banner']}
		<div class="banner">
			<slot name="banner" />
		</div>
	{/if}

	{#if !header && !collapsed}
		<div class="content" transition:slide|local>
			<slot />
			<div class="inner">
				<a href={link}>
					<MoreIcon />
				</a>
			</div>
		</div>
	{/if}
</div>

<style>
	.banner {
		padding: 1em;
		background: var(--secondary-bg);
		color: var(--secondary-color);
		display: flex;
		gap: 0.5em;
	}
	.title {
		margin-right: auto;
		margin-left: 0.5em;
	}

	.title:first-child {
		margin-left: 0;
	}
	.card {
		background: var(--main-bg);
		color: var(--main-color);
		margin: 1em 0 1em calc(1em * calc(var(--level) - 1));
		box-shadow: 0 0 15px 7px black;
		position: relative;
	}

	.content {
		padding: 1em;
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
	}

	a {
		display: flex;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0;
		transition-duration: 1s;
		background-color: rgba(0, 0, 0, 0.5);
	}

	a:hover {
		opacity: 1;
	}
</style>
