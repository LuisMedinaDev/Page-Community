/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'color-primario': '#dfe2ea'
			},
			backgroundImage:{
				'hero-principal': 'url(public/images/Hero-p.webp)',
				'hero-principal-2': 'url(public/images/Hero-p-2.png)',
				
			},
			backgroundSize: {
		     	
				'100%': '100%',
				
			  },
			  dropShadow: {
				'custom': '0 0 40px #4e08ffc0', 
				'custom2': '0 0 40px #bd08ffc0',
			  },
		},
	},
	plugins: [],
}
