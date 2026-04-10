"use client"

import Player from "@vimeo/player"
import { useEffect, useRef } from "react"

export const MEGALIVE_VIMEO_ID = 1181845100

export const SectionMegaliveVimeo = () => {
	const playerContainerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!playerContainerRef.current) return

		playerContainerRef.current.innerHTML = ""
		const player = new Player(playerContainerRef.current, {
			id: MEGALIVE_VIMEO_ID,
			autoplay: true,
			muted: true,
			controls: true,
			responsive: false,
			width: 1920
		})

		player.ready().then(() => {
			const iframe = playerContainerRef.current?.querySelector("iframe")
			if (iframe) {
				iframe.style.width = "100%"
				iframe.style.height = "100%"
				iframe.style.position = "absolute"
				iframe.style.inset = "0"
				iframe.style.border = "0"
			}
		})

		return () => {
			player.destroy().catch(() => {})
		}
	}, [])

	return (
		<section className="items-center bg-[#1b1310] py-12">
			<div className="container max-w-7xl text-center">
				<h2 className="mx-auto text-center font-extrabold uppercase text-[#d6ae5b]">
					<span className="block text-4xl sm:text-5xl">MEGA LIVE 10 TỶ</span>
					<span className="mt-2 block text-base font-semibold text-white/90 sm:text-xl">
						EVENT DIỄN RA TỪ NGÀY 30/4 - 01/5/2026
					</span>
				</h2>
				<div className="relative mt-8 h-[60vh] min-h-[420px] w-full overflow-hidden rounded-2xl bg-black shadow-2xl lg:h-[75vh]">
					<div
						ref={playerContainerRef}
						className="absolute inset-0 h-full w-full"
					/>
				</div>
			</div>
		</section>
	)
}
