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
					300: '#017b8e', // 主題淺綠
					400: '#9c9d9d', // 淺灰
					500: '#f4eca2', // 淺黃
				},
			}
		},
	},
	plugins: [],
};
