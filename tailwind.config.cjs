/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
		},
		colors: {
			primary: '#002569',
			secondary: '#0073E0',
			darkblue: '#223645',
		},
		fontFamily: {
			'rubik': ['rubik', 'sans-serif'],
			'poppins': ['poppins']
		}
	},
	plugins: [require('flowbite/plugin')],
}
