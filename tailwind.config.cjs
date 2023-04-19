/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			primary: '#002569',
			secondary: '#0073E0'
		}
	},
	plugins: [require('flowbite/plugin')],
}
