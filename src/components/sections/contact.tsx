"use client"

import Link from "next/link"
import Image from "next/image"

import { facebookData } from "@/data/facebook-data"
import { useDomainConfig } from "@/contexts/DomainConfigContext"

export const SectionContact = () => {
	const { tele } = useDomainConfig()

	return (
		<>
			<section className="px-4 py-12 sm:px-6 lg:px-8 bg-[#1b1310]">
				<div className="container">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 text-center">
							<h2 className="text-3xl font-extrabold text-white sm:text-3xl uppercase">
								Liên hệ với QUỲNH NHƯ
							</h2>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:gap-3 gap-6 text-center items-center justify-center">
							<Link
								href={facebookData[0].link}
								className="flex flex-col items-center justify-center text-center animate-pulse hover:animate-bounce"
							>
								{facebookData[0].icon}
								<figcaption className="capitalize font-black text-white sm:text-lg text-sm">
									Click Here
								</figcaption>
							</Link>

							<figure>
								<Link
									href={tele}
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-col items-center justify-center text-center animate-pulse hover:animate-bounce"
								>
									<Image
										src="./socials/telegram.svg"
										width={80}
										height={80}
										alt="QUỲNH NHƯ"
										title="QUỲNH NHƯ"
										unoptimized
									/>
									<figcaption className="sm:text-lg text-sm capitalize font-black text-white">
										Click Here
									</figcaption>
								</Link>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
