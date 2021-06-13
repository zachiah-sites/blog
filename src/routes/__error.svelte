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
	import Card from '../components/Card.svelte';

	export let error;
	export let status;
</script>

<Card title={status}>
	{error.message}
</Card>
