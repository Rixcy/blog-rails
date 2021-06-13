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
		extend: {
			keyframes: {
				'bounce-x': {
					'0%, 100%': {
						transform: 'translateX(-25%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateX(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
			},
			animation: {
				'bounce-x': 'bounce-x 1s infinite',
			},
		},
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
