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
	webpack(config) {
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
