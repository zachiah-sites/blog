<script>
	import { page } from '$app/stores';
	import Head from '$components/Head.svelte';
	import Card from '../components/Card.svelte';
</script>

<Head title="{$page.status} - {$page.error?.message}" description={null} />

<Card title={'' + $page.status}>
	<svelte:fragment slot="banner">
		There was an error. If you think there shouldn't be, try reloading the page.
	</svelte:fragment>

	{$page.error?.message}
</Card>
