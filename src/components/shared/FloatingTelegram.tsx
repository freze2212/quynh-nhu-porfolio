"use client"

import Image from "next/image"
import Link from "next/link"

const TELEGRAM_URL = "https://t.me/ctquynhnhu"

export default function FloatingTelegram() {
	return (
		<Link
			href={TELEGRAM_URL}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-5 left-4 z-30 flex size-14 items-center justify-center rounded-full bg-white/95 shadow-lg ring-2 ring-[#38B7FF]/40 transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#38B7FF]/50 animate-bounce"
			aria-label="Mở Telegram @ctquynhnhu"
		>
			<Image
				src="/socials/telegram.svg"
				width={44}
				height={44}
				alt=""
				aria-hidden
				unoptimized
			/>
		</Link>
	)
}
