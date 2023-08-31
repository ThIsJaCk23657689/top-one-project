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
					100: '#00465a',	// 主題綠
					200: '#002c42',	// 主題藍
				},
			}
		},
	},
	plugins: [],
};
