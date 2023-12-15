/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			sm: '100px',
			md: '700px',
			lg: '976px',
			xl: '1440px',
		  }
	},
	plugins: [],
}
