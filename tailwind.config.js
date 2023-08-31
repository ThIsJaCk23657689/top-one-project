/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html", 
		"./src/**/*.{vue,js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					100: '#F0F4F8',
				},
			}
		},
	},
	plugins: [],
};
