/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
			fontFamily: {
					sans: ['Montserrat', 'sans-serif'],
			},
			colors: {
					current: 'currentColor',
					transparent: 'transparent',
					white: '#ffffff',
					black: '#000000',
					neutral: {
							100: '#f1f2f6',
							200: '#dfe4ea',
							300: '#ced6e0',
							400: '#a4b0be',
							500: '#747d8c',
							600: '#57606f',
							700: '#2f3542',
							800: '#191e29',
					},
					green: {
							100: '#7bed9f',
							200: '#2ed573',
					},
					blue: {
							100: '#70a1ff',
							200: '#1e90ff',
							300: '#5352ed',
							400: '#3742fa',
					},
					gold: '#eccc68',
					orange: '#ffa502',
					red: {
							100: '#ff7f50',
							200: '#ff6348',
							300: '#ff6b81',
							400: '#ff4757',
					},
					vsoc: '#A29BFE',
					gw: '#04bdba',
			},
			extend: {},
	},
	plugins: [],
};
