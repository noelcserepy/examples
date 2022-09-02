/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: "#FFFFFF",
				background: "#EAEEF5",
				lowContrastBlue: "#D4DBE8",
				lowContrastOrange: "#ECDED4",
				primary: "#0D1823",
				secondary: "#556883",
				orange: "#BF4D00",
				mainBlue: "#0075ff",
				maroon: "#b8336a",
				yellow: "#ffbc0a",
				lightBlue: "#17bebb",
			},
			borderWidth: {
				16: "16px",
			},
		},
		fontFamily: {
			header: ["Roboto Slab", "serif"],
			title: ["Squada One", "cursive"],
			text: ["Rasa", "serif"],
			example: ["Work Sans", "sans-serif"],
		},
	},
	plugins: [],
};
