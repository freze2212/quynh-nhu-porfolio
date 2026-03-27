/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: [
		"variant",
		["@media (prefers-color-scheme: dark) { &:not(.light *) }", "&:is(.dark *)"]
	],

	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-opensans)"],
				mono: ["var(--font-roboto-mono)"]
			}
		},
		backgroundImage: {
			slider: "url('/background/slider01.png')"
		}
	},
	plugins: []
}
