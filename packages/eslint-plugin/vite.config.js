import { defineConfig } from 'vite'
import { resolve } from "path";

export default defineConfig({
	build: {
		outDir: 'lib',
		cssCodeSplit: false,
		rollupOptions: {
			external: [],
			output: [
				{
					format: 'es',
					entryFileNames: '[name].es.js',
					inlineDynamicImports: false,
					preserveModules: true,
					preserveModulesRoot: 'src',
					globals: {}
				},
				{
					format: 'umd',
					name: 'index',
					entryFileNames: '[name].umd.js',
					globals: {}
				},
			]
		},
		lib: {
			entry: resolve(__dirname, './src/index.js'),
			name: 'eslint-plugin-fadedinks',
			fileName: (format) => `index.${format}.js`
		},
	},
	plugins: [
	],
})