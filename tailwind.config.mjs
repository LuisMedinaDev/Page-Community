/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'color-primario': '#dfe2ea'
			},
		
			backgroundSize: {
		     	
				'100%': '100%',
				
			  },
			  dropShadow: {
				'custom': '0 0 20px #4e08ffc0', 
				'custom2': '0 0 20px #bd08ffc0',
			  },
			  
		},
	},
	plugins: [],
}
