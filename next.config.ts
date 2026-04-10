import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
	reactStrictMode: true,
	output: "export",
	eslint: {
		ignoreDuringBuilds: true
	},
	images: {
		unoptimized: true
	},
	webpack(config, { dev }) {
		// On Windows, persistent webpack caching under `.next/cache/webpack`
		// can intermittently throw ENOENT and break runtime/HMR after cleaning `.next`.
		// Disabling it in dev keeps the dev server stable.
		if (dev) {
			config.cache = false
		}

		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
		})

		return config
	}
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
