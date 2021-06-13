<script context="module" lang="ts">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	import Head from '$components/Head.svelte';
	import Card from '../components/Card.svelte';

	export let error;
	export let status;
</script>

<Head title="{status} - {error.message}" description={null} />

<Card title={status}>
	<svelte:fragment slot="banner">
		There was an error. If you think there shouldn't be, try reloading the page.
	</svelte:fragment>

	{error.message}
</Card>
