import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FFFAFA',
				'secondary': '#fff',
				'logonmt': '#4AC7F1',
				'twitch': '#6441a4',
				'logodark': '#0A195F',
				'fondolight': '#0091E7',
				'fondodark': '#252626',

			},
			blur: {
				xs: '0.5px',
			}
		},
	},
	plugins: [animations],
}
