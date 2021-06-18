<script lang="ts">
	import { onMount } from 'svelte';

	export let tune;

	let abcjs;
	onMount(async () => {
		abcjs = await import('abcjs');
	});

	let paper;
	let audio;

	$: {
		if (paper && abcjs && audio) {
			var visualObj = abcjs.renderAbc(paper, tune, {
				responsive: 'resize'
			})[0];
			if (abcjs.synth.supportsAudio()) {
				var synthControl = new abcjs.synth.SynthController();
				synthControl.load(audio, null, {
					displayRestart: true,
					displayPlay: true,
					displayProgress: true
				});
				synthControl.setTune(visualObj, false);
			} else {
				document.querySelector('#main-midi').innerHTML =
					"<div class='audio-error'>Audio is not supported in this browser.</div>";
			}
		}
	}
</script>

<div bind:this={audio} class="audio" />
<div bind:this={paper} class="paper" />

<style>
	.paper {
		background: white;
		border-radius: 0.5em;
	}

	.audio {
		background: white;
		padding: 0.5em;
		margin: 1em 0;
		border-radius: 0.5em;
	}
</style>
