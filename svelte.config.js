import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { join, resolve } from 'path';
import { cwd } from 'process';
import static from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(), preprocess()],
	extensions: ['.svelte', '.svx'],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: static(),
		vite: {
			resolve: {
				alias: {
					$lib: resolve('./src/lib'),
					$components: resolve('./src/components')
				}
			}
		}
	}
};

export default config;
