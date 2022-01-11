import path from 'path';
import { defineConfig, createServer } from 'vite';
import vue from '@vitejs/plugin-vue';
import { Alias, Paths } from './shared';

async function bootstrap() {
	const configs = defineConfig({
		root: Paths.root,
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

	const server = await createServer({
		server: {
			port: 3000,
		},
		...configs,
		publicDir: path.resolve(Paths.src, 'public'),
	});
	const res = await server.listen();

	res.printUrls();
}

bootstrap();
