module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{js,ts,jsx,tsx}'],
		options: {
			safelist: [/^(bg|text)-(?:.+)-(1|5|6|9)00$/],
		},
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			ringOffsetColor: ['group-hover'],
			ringOffsetWidth: ['group-hover'],
			ringWidth: ['group-hover'],
			ringColor: ['group-hover'],
		},
	},
	plugins: [],
}
