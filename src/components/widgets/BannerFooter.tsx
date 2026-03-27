"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { getDefaultQnhuImage, pickRandomQnhuImage } from "@/helpers/qnhu-images"

export const BannerFooter = () => {
	const [imageSrc, setImageSrc] = useState(getDefaultQnhuImage())

	useEffect(() => {
		setImageSrc(pickRandomQnhuImage())
	}, [])

	return (
		<>
			<section className="flex relative flex-col col-span-1 items-center sm:pb-8 pb-5">
				<div className="max-w-3xl lg:max-w-2xl md:max-w-xl m-auto">
					<Image
						src={imageSrc}
						alt="Logo"
						width={1515}
						height={214}
					/>
				</div>
			</section>
		</>
	)
}
