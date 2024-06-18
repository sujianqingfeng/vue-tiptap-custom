import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
	content: {
		pipeline: {
			include: [/\.(vue|[jt]sx)($|\?)/, /status-paragraph\.js/],
		},
	},
	presets: [presetUno()],
	rules: [],
})
