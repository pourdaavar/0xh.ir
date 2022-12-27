import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';
import { mdsvex, escapeSvelte } from 'mdsvex';
import hljs from 'highlight.js';

const extensions = [`.svelte`, '.md', `.mdx`, '.svx'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),

		mdsvex({
			// Breaks svelte-select when .svelte extension is included
			extensions: extensions.filter((ext) => ext !== '.svelte'),
			layout: {},
			highlight: {
				highlighter: (code) => {
					const highlighted = escapeSvelte(hljs.highlightAuto(code).value);
					return `{@html \`<pre class="hljs"><code>${highlighted}</code></pre>\`}`;
				}
			}
		})
	],

	extensions,

	kit: {
		adapter: adapter(),

		alias: {
			$components: path.resolve('./src/lib/components'),
			$layouts: path.resolve('./src/lib/layouts'),
      $types: path.resolve('./src/lib/types.d.ts'),
      $appConfig: path.resolve('./src/lib/appConfig.ts')
		}
	}
};

export default config;
