/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			poppins: ['Poppins', 'sans-serif'],
		},
		extend: {
			screens: {
				xxl: '1440px',
			},
			colors: {
				primary: '#3369DE',
				primaryContent: '#FFFFFF',
				primaryLight: '#5F89E5',
				primaryDark: '#1F51BF',
				secondary: '#6633DE',
				secondaryContent: '#FFFFFF',
				secondaryLight: '#875FE5',
				secondaryDark: '#4F1FBF',
				whiteBg: '#F6F6F6',
				defaultBg: '#F0F0F0',
				foreground: '#FBFBFB',
				borderClr: '#DFDFDF',
				textDark: '#262626',
				textLight: '#666666',
				textLighter: '#8C8C8C',
				success: '#33DE33',
				successContent: '#030F03',
				warning: '#DEDE33',
				warningContent: '#0F0F03',
				error: '#DE3333',
				errorContent: '#FFFFFF',
			},
		},
	},
	plugins: [],
};
