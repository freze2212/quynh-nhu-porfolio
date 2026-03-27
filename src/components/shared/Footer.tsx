"use client"

import Image from "next/image"
import Link from "next/link"

import { useDomainConfig } from "@/contexts/DomainConfigContext"

export default function Footer() {
	const { tele } = useDomainConfig()
	return (
		<>
			<footer className="bg-[#21130d] font-sans">
				<div className="container max-w-7xl px-6 py-12 mx-auto">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
						<div className="sm:col-span-2 sm:text-start text-center">
							<div className="mb-3">
								<Image
									src="/images/logo.png"
									alt="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
									title="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
									width={300}
									height={150}
								/>
							</div>

							<h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
								Đăng ký bản tin của Quỳnh Như
							</h1>

							<div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
								<input
									id="email"
									type="text"
									className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
									placeholder="Địa chỉ Email của bạn"
								/>

								<button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#d6ae5b] rounded-lg hover:bg-[#d6ae5b] focus:ring focus:ring-[#d6ae5b] focus:ring-opacity-80">
									Gửi
								</button>
							</div>
						</div>

						<div>
							<p className="font-semibold text-[#d6ae5b] uppercase">
								Về Quỳnh Như
							</p>
							<div className="flex flex-col items-start mt-5 space-y-2">
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Trang chủ
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Giới thiệu
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Liên hệ
								</p>
							</div>
						</div>

						<div>
							<p className="font-semibold text-[#d6ae5b] uppercase">
								Dịch vụ / Chương trình hỗ trợ
							</p>
							<div className="flex flex-col items-start mt-5 space-y-2">
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Công thức Baccarat & Chiến lược vốn
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Câu chuyện thành công
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Blog / Chia sẻ
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Sự kiện & Truyền thông
								</p>
								<p className="text-white transition-colors duration-300   hover:underline hover:cursor-pointer hover:text-amber-500">
									Mẹo tăng uy tín
								</p>
							</div>
						</div>
					</div>

					<hr className="my-6 border-white/10 md:my-8 dark:border-white/10 h-2" />

					<div className="sm:flex sm:items-center sm:justify-between justify-items-center">
						<div className="flex flex-1 gap-4 hover:cursor-pointer">
							<Image
								src="./socials/google-play.svg"
								width="130"
								height="110"
								alt="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
								title="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
							/>
							<Image
								src="./socials/apple-store.svg"
								width="130"
								height="110"
								alt="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
								title="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
							/>
						</div>

						<div className="flex gap-4 hover:cursor-pointer">
							<Link href="#">
								<Image
									src="./socials/facebook.svg"
									width="30"
									height="30"
									alt="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
									title="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
								/>
							</Link>

							<Link href={tele} target="_blank" rel="noopener noreferrer">
								<Image
									src="./socials/telegram.svg"
									width="30"
									height="30"
									alt="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
									title="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
								/>
							</Link>
						</div>
					</div>
					<p className="font-sans p-8 text-center md:text-center md:p-4 text-white">
						© {new Date().getFullYear()} QUỲNH NHƯ. All rights reserved
					</p>
				</div>

				{/* <div>
					<Link
						href="tel:0704096666"
						className="fixed bottom-10 right-5 bg-amber-500 text-[#fff] p-4 rounded-full shadow-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 flex items-center justify-center animate-bounce"
						aria-label="QUỲNH NHƯ"
					>
						<Phone size={23} />
					</Link>
				</div> */}
			</footer>
		</>
	)
}
