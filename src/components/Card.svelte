<script lang="ts">
	import { createEventDispatcher } from 'svelte';
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

	const dispatch = createEventDispatcher();
</script>

<div class="card" class:link class:normal={!link} style="--level: {level}">
	<CardHeading {level}>
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
	.title {
		margin-right: auto;
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
