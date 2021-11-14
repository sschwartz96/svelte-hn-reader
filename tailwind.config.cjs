const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			minWidth: {
				'2': '2rem',
			}
		},
		colors: {
			gray: colors.trueGray,
			black: colors.black,
			white: colors.white,
			green: colors.green,
		}
	},
	plugins: []
};

module.exports = config;
