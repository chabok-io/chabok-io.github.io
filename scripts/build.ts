import path from 'path';
import consola from 'consola';
import { defineConfig, build } from 'vite';
import vue from '@vitejs/plugin-vue';
import { Alias, Paths } from './shared';

async function bootstrap() {
	const configs = await defineConfig({
		root: Paths.root,
		build: {
			outDir: path.resolve(Paths.root, 'dist'),
			emptyOutDir: true,
			
		},
		publicDir: Paths.publicDir,
		plugins: [vue()],
		resolve: {
			alias: Alias,
		},
		css: {
			postcss: {
				plugins: [
					require('tailwindcss')({ config: path.resolve(Paths.root, 'tailwind.config.js') }),
					require('autoprefixer'),
				],
			},
		},
	});

	await build({ ...configs });
	consola.success('\n', 'Builds are ready!', '🎉', '\n');
}

bootstrap();
