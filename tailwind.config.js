/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	mode: "jit",
	darkMode: true, // or 'media' or 'class'
	theme: {
		fontFamily: {
			body: '"Roboto", sans-serif',
			header: '"Abril Fatface",  cursive',
			button: '"Kreon", serif',
				// Sans
			sansLight: 'Roboto-Light',
			sans: 'Roboto-Regular',
			sansBold: 'Roboto-Bold',
				// Serif
			serifLight: 'Kreon-Light',
			serif: 'Kreon-Regular',
			serifMedium: 'Kreon-Medium',
			serifSemiBold: 'Kreon-SemiBold',
			serifBold: 'Kreon-Bold',
				// Mono
			mono: 'AbrilFatface-Regular',
			monoBold: 'AbrilFatface-Bold',
			khula: 'Khula-Regular',
		},
		extend: {
			colors:{
			oldYellow: "#F5E7D3",
			transparent: 'transparent',
			transparentLight: '#000000A2',
			white: '#fff',
			black: {
				100: "#000",
				200: "#2D2D2D"
			},
			gray: {
				10:  '#FEE1B3',
				50:  "#777777",
				100: '#C0C5CA',
				200: '#DADADA',
				// New
				300: '#2D2D2D',
				400: '#696969',
				500: '#b8b8b8',
				600: '#b5c3b3',
				700: '#817F7A',
				800: '#cbc7bc',
				900: "#EFEFEF",
				950: "#DAE4E4",
				1000: "#808080"
			},
			yellow: {
				400: '#FFE315',
			},
			orange: {
				100: '#BB852C',
				200: '#F5E7D3',
				300: '#FFF9F0',
				400: '#E9D0B8',
				500: '#E6D2B6',
				600: "#EAD9B9",
				700: "#B3883F",
				800: "#FF8045",
				900: "#F6E6D3",
				1000: "#FEF9F1"
			},
			blue: {
				100: '#0F172A',
				200: '#334155',
				300: '#94A3B8',
				// New
				400: '#4B8991',
				500: '#DAE4E4',
				600: '#5E9C9C',
				700: '#D9E8EA',
				800:  "#DAE4E5"
			},
			teal: {
				400: '#74FAD3',
				500: "#6FA2A4"
			},
			pink: {
				400: '#FF1061',
			},
			green: {
				100: '#526B55',
				200: '#CEDBCC',
				300: "#BDDBC3",
				400: "#5B695E"
			},
			red: {
				400: '#FF4539',
			},
		},
		},
		backgroundColor: (theme) => ({
			...theme('colors'),
			'floral-tint': 'rgba( 0, 0, 0, 0.6)',
		}),
		backgroundSize: {
			auto: 'auto',
			cover: 'cover',
			contain: 'contain',
			'floral-size': 'auto 100%',
		},
	},
	variants: {
		extend: {},
	},
};