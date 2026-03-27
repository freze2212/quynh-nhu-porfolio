import type { Metadata } from "next"
import { Open_Sans, Roboto_Mono } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"

import { APP_CONFIG } from "@/constants"

import { Providers } from "@/providers"

import { Footer, Header } from "@/shared"

import "./globals.css"

const geistSans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-opensans"
})

const geistRoboto = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-mono"
})

export const metadata: Metadata = {
	title: {
		default: APP_CONFIG.APP_NAME,
		template: `%s | ${APP_CONFIG.APP_NAME}`
	},
	description: APP_CONFIG.APP_DESCRIPTION,
	keywords: APP_CONFIG.APP_KEYWORDS,
	authors: [{ name: APP_CONFIG.CREATOR }],
	creator: APP_CONFIG.CREATOR,
	metadataBase: new URL(APP_CONFIG.SITE_URL),
	openGraph: {
		type: "website",
		locale: APP_CONFIG.DEFAULT_LANGUAGE,
		url: APP_CONFIG.SITE_URL,
		title: APP_CONFIG.APP_NAME,
		description: APP_CONFIG.APP_DESCRIPTION,
		siteName: APP_CONFIG.APP_NAME,
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: APP_CONFIG.APP_NAME
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: APP_CONFIG.APP_NAME,
		description: APP_CONFIG.APP_DESCRIPTION,
		creator: APP_CONFIG.TWITTER_HANDLE,
		images: ["/twitter-image.png"]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1
		}
	},
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
	}
}

interface RootLayoutProps {
	children: React.ReactNode
}
export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="vi-VN"
			className="light"
			style={{ colorScheme: "light" }}
			suppressHydrationWarning
		>
			<body
				className={`${geistRoboto.variable} ${geistSans.variable} antialiased flex flex-col min-h-screen w-full bg-[#463725]`}
				suppressHydrationWarning
			>
				<Providers>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</Providers>
			</body>

			{APP_CONFIG.GA_ID && <GoogleAnalytics gaId={APP_CONFIG.GA_ID} />}
		</html>
	)
}
