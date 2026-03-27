"use client"

import Image from "next/image"
import Link from "next/link"

import { SECTION_EVENT_IMAGES } from "@/helpers/qnhu-images"

export const SectionEvents = () => {
	const [eventImg1, eventImg2, eventImg3] = SECTION_EVENT_IMAGES

	return (
		<>
			<section className="px-4 py-12 sm:px-6 lg:px-8 bg-[#1b1310]">
				<div className="container">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 text-center">
							<h2 className="text-3xl font-extrabold text-white sm:text-3xl uppercase">
								Sự kiện / truyền thông
							</h2>
							<p className="mx-auto mt-3 max-w-2xl text-xl text-white/80 sm:mt-4">
								Những hoạt động và truyền thông của QUỲNH NHƯ
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							<div className="overflow-hidden bg-white/10 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
								<div className="h-100 overflow-hidden">
									<Image
										src={eventImg1}
										alt="Project 3"
										className="h-full w-full object-cover"
										width={100}
										height={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-[#d6ae5b] uppercase">
										Lịch livestream phân tích cầu Baccarat
									</h3>
									<p className="mt-2 text-white">
										Điểm nhấn của chương trình là phần phân tích trực quan, mini
										game hấp dẫn và cơ hội Q&A trực tiếp với chuyên gia. Đây là
										không gian học hỏi, chia sẻ kinh nghiệm và kết nối cộng đồng
										yêu thích Baccarat.
									</p>
								</div>
							</div>

							<div className="overflow-hidden bg-white/10 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
								<div className="h-100 overflow-hidden">
									<Image
										src={eventImg2}
										alt="Project 3"
										className="h-full w-full object-cover"
										width={100}
										height={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-[#d6ae5b] uppercase">
										Sự kiện workshop/đào tạo
									</h3>
									<p className="mt-2 text-white">
										Bạn yêu thích Baccarat và muốn nâng cao kỹ năng để tăng tỷ
										lệ chiến thắng? Hãy tham gia Workshop Baccarat: Bí Quyết Làm
										Chủ Cuộc Chơi,nơi bạn sẽ được học hỏi từ các chuyên gia hàng
										đầu, thực hành soi cầu thực tế
									</p>
								</div>
							</div>

							<div className="overflow-hidden bg-white/10 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
								<div className="h-100 overflow-hidden">
									<Image
										src={eventImg3}
										alt="Project 3"
										className="h-full w-full object-cover"
										width={100}
										height={100}
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-[#d6ae5b] uppercase">
										Hình ảnh talkshow, báo chí
									</h3>
									<p className="mt-2 text-white">
										Bí Quyết Phân Tích Cầu Baccarat và Chiến Lược Chơi Hiệu Quả
										Bạn đam mê Baccarat và muốn nâng tầm kỹ năng chơi bài? Hãy
										tham gia Talkshow Báo Chí: Bí Quyết Phân Tích Cầu Baccarat
										và Chiến Lược Chơi Hiệu Quả
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
