module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{vue,js,ts,jsx,tsx,.html}'],
		options: {
			keyframes: true,
		},
	},
	presets: [
		require('@chabok/ui/dist/utils/tailwind.preset'),
	],
};
