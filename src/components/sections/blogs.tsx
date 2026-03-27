"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { getDefaultQnhuImages, pickQnhuImages } from "@/helpers/qnhu-images"

export const SectionBlogs = () => {
	const [images, setImages] = useState(getDefaultQnhuImages(3))

	useEffect(() => {
		setImages(pickQnhuImages(3))
	}, [])

	const [img1, img2, img3] = images

	return (
		<>
			<section className="px-4 py-12 sm:px-6 lg:px-8 bg-[#21130d]">
				<div className="container">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 text-center">
							<h2 className="text-3xl font-extrabold text-white sm:text-3xl uppercase">
								Blog / Tin Tức
							</h2>
							<p className="mx-auto mt-3 max-w-2xl text-xl text-white/80 sm:mt-4">
								Những tin tức và nội dung mới nhất
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							<div className="overflow-hidden bg-white/10 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
								<div className="h-100 overflow-hidden">
									<Image
										src={img1}
										alt="Project 3"
										className="h-full w-full object-cover"
										width={100}
										height={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-[#d6ae5b] uppercase">
										Tư duy thành công
									</h3>
									<p className="mt-2 text-white">
										Thành công trong Baccarat không chỉ dựa vào may mắn mà đòi
										hỏi tư duy chiến lược, kỷ luật và quản lý vốn hiệu quả.
										Trước hết, nắm vững luật chơi là nền tảng. Hiểu rõ cách tính
										điểm, quy tắc rút bài thứ ba giúp bạn đưa ra quyết định
										chính xác. Tiếp theo, quản lý vốn là yếu tố then chốt
									</p>
								</div>
							</div>

							<div className="overflow-hidden bg-white/10 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
								<div className="h-100 overflow-hidden">
									<Image
										src={img2}
										alt="Project 3"
										className="h-full w-full object-cover"
										width={100}
										height={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-[#d6ae5b] uppercase">
										Kinh nghiệm chơi
									</h3>
									<p className="mt-2 text-white">
										Để chơi Baccarat hiệu quả, đầu tiên hãy nắm rõ luật chơi và
										tỷ lệ thắng của các cửa (Banker, Player, Tie). Ưu tiên cược
										Banker vì xác suất thắng cao hơn (khoảng 45.8%). Quản lý vốn
										chặt chẽ, chia nhỏ ngân sách, không cược toàn bộ tiền trong
										một ván
									</p>
								</div>
							</div>

							<div className="overflow-hidden bg-white/10 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
								<div className="h-100 overflow-hidden">
									<Image
										src={img3}
										alt="Project 3"
										className="h-full w-full object-cover"
										width={100}
										height={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-[#d6ae5b] uppercase">
										Quản lý vốn
									</h3>
									<p className="mt-2 text-white">
										Quản lý vốn là chìa khóa để chơi Baccarat bền vững. Đầu
										tiên, xác định ngân sách cố định, chỉ dùng số tiền bạn chấp
										nhận mất. Chia vốn thành nhiều phần nhỏ, cược 1-2% mỗi ván
										để giảm rủi ro. Đặt giới hạn thắng/thua, ví dụ dừng khi
										thắng 50% hoặc thua 30% vốn. Tránh cược cảm tính hoặc tăng
										cược khi thua để gỡ.
									</p>
								</div>
							</div>
						</div>

						<div className="mt-12 text-center">
							<Link
								href="#"
								className="px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-500 to-yellow-500 text-white font-semibold rounded-4xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-lg"
							>
								Xem thêm
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
