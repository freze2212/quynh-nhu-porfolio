"use client"

import Player from "@vimeo/player"
import { useEffect, useMemo, useRef, useState } from "react"

import { Building2, ChartArea, ChartNoAxesCombined } from "lucide-react"

export const SectionServices = () => {
	const vimeoIds = useMemo(
		() => [1177361704, 1177361560, 1177361442, 1177361332],
		[]
	)
	const [videoIndex, setVideoIndex] = useState(0)
	const playerContainerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		setVideoIndex(Math.floor(Math.random() * vimeoIds.length))
	}, [vimeoIds.length])

	useEffect(() => {
		if (!playerContainerRef.current) return

		playerContainerRef.current.innerHTML = ""
		const player = new Player(playerContainerRef.current, {
			id: vimeoIds[videoIndex],
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

		const onEnded = () => {
			setVideoIndex((prev) => (prev + 1) % vimeoIds.length)
		}

		player.on("ended", onEnded)
		return () => {
			player.off("ended", onEnded)
			player.destroy().catch(() => {})
		}
	}, [videoIndex, vimeoIds])

	return (
		<section className="items-center bg-[#1b1310] py-12">
			<div className="container max-w-7xl text-center">
				<div className="flex sm:flex-row flex-col items-start justify-start w-full gap-10">
					<div className="sm:w-1/2 w-full">
						<h2 className="text-3xl uppercase text-[#d6ae5b] font-medium text-start">
							Dịch vụ
						</h2>
						<div className="inline-flex items-center justify-center border border-[#d6ae5b] rounded-lg text-center px-3 py-8 w-full gap-6 mt-6">
							<div className="text-center">
								<Building2 size={40} className="text-[#d6ae5b] m-auto" />
							</div>
							<p className="text-lg text-start font-medium uppercase text-gray-300 mt-2">
								Hỗ trợ <br /> khởi nghiệp
							</p>
						</div>

						<div className="inline-flex items-center justify-center border border-[#d6ae5b] rounded-lg text-center px-3 py-8 w-full gap-6 mt-6">
							<div className="text-center">
								<ChartArea size={40} className="text-[#d6ae5b] m-auto" />
							</div>
							<p className="text-lg text-start font-medium uppercase text-gray-300 mt-2">
								Kinh doanh <br /> online
							</p>
						</div>

						<div className="inline-flex items-center justify-center border border-[#d6ae5b] rounded-lg text-center px-3 py-8 w-full gap-6 mt-6">
							<div className="text-center">
								<ChartNoAxesCombined
									size={40}
									className="text-[#d6ae5b] m-auto"
								/>
							</div>
							<p className="text-lg text-start font-medium uppercase text-gray-300 mt-2">
								Tư vấn gỡ nỡ & <br /> Quản lý tài chính
							</p>
						</div>
					</div>
					<div className="sm:w-1/2 w-full">
						<div className="">
							<h2 className="text-3xl uppercase text-[#d6ae5b] font-medium text-start">
								IDOL QUỲNH NHƯ NỔI TIẾNG
							</h2>
							<div className="relative mt-6 h-[60vh] min-h-[420px] w-full overflow-hidden rounded-2xl bg-black shadow-2xl lg:h-[75vh]">
								<div
									ref={playerContainerRef}
									className="absolute inset-0 h-full w-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
