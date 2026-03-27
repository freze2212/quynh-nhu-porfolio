"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Menu, Phone, X } from "lucide-react"

import { useDomainConfig } from "@/contexts/DomainConfigContext"
import { menuData } from "@/data/menu-data"

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { tele } = useDomainConfig()

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className="fixed top-0 left-0 w-full bg-[#21130d]/50 backdrop-blur-md sm:shadow-md shadow-none z-20 sm:px-4 sm:py-2 px-4 py-2">
			<div className="flex flex-row items-center justify-between justify-items-center gap-10 max-w-7xl mx-auto">
				<Link href="/" className="text-xl font-bold text-gray-800">
					<div className="w-[80px]">
						<Image
							src="/images/logo.png"
							alt="Quỳnh Như"
							title="Quỳnh Như"
							width={512}
							height={512}
							priority
						/>
					</div>
				</Link>

				<nav className="hidden space-x-6 md:flex items-center justify-center">
					{menuData &&
						menuData.map((item) => (
							<Link
								key={item.id}
								href={item.title === "Telegram" ? tele : item.link}
								className="text-white hover:text-[#d6ae5b]"
								{...(item.title === "Telegram"
									? { target: "_blank", rel: "noopener noreferrer" }
									: {})}
							>
								{item.title}
							</Link>
						))}

					<Link
						href="tel:0788473333"
						className="px-3 py-2 bg-gradient-to-r from-orange-500 via-orange-500 to-yellow-500 text-white font-semibold rounded-3xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-sm"
					>
						<span className="inline-flex items-center gap-2">
							<Phone size={16} /> 078 847 3333
						</span>
					</Link>
				</nav>

				<div className="hidden md:block">
					{/* <Button
					className="bg-[#d6ae5b]"
					type="button"
					size={"lg"}
					variant={"outline"}
				>
					Liên hệ
				</Button> */}

					{/* <Link
					href={"/"}
					className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#d6ae5b] rounded-lg hover:bg-[#d6ae5b] focus:ring focus:ring-[#d6ae5b] focus:ring-opacity-80"
				>
					Liên hệ
				</Link> */}
				</div>

				<button
					className="md:hidden"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X size={24} className="text-white" />
					) : (
						<Menu size={24} className="text-white" />
					)}
				</button>
			</div>

			{isMenuOpen && (
				<div className="">
					<div className="absolute inset-0 z-[-5] left-0 bottom-0 bg-[#21130d] min-h-screen min-w-screen"></div>
					<nav className="relative inset-0 left-0 top-16 min-w-full min-h-full flex-col backdrop-blur-md p-4 md:hidden flex items-center justify-between gap-2">
						{menuData &&
							menuData.map((item) => (
								<Link
									key={item.id}
									href={item.title === "Telegram" ? tele : item.link}
									className="py-2 text-white hover:text-[#d6ae5b]"
									{...(item.title === "Telegram"
										? { target: "_blank", rel: "noopener noreferrer" }
										: {})}
								>
									{item.title}
								</Link>
							))}

						{/* <Link
							href="tel:0704096666"
							className="px-3 py-2 bg-gradient-to-r from-orange-500 via-orange-500 to-yellow-500 text-white font-semibold rounded-3xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-sm"
						>
							<span className="inline-flex items-center gap-2">
								<Phone size={16} /> 070 409 6666
							</span>
						</Link> */}
					</nav>
				</div>
			)}
		</header>
	)
}
