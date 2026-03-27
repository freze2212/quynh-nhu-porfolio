"use client"

import { SetStateAction, useState } from "react"
import Image from "next/image"

import {
	ArrowLeft,
	ArrowRight,
	Building2,
	ChartArea,
	ChartNoAxesCombined,
	X
} from "lucide-react"

export const SectionAboutUs = () => {
	const images = [
		"/images/qnhu-main.jpg",
		"/images/qnhu-01.png",
		"/images/qnhu-02.png",
		"/images/qnhu-03.png"
	]

	const [isOpen, setIsOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const openLightbox = (index: SetStateAction<number>) => {
		setCurrentImageIndex(index)
		setIsOpen(true)
	}

	const closeLightbox = () => {
		setIsOpen(false)
	}

	const goToPrevious = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		)
	}

	const goToNext = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		)
	}

	return (
		<>
			<section className="items-center bg-[#21130d] sm:py-12 py-6">
				<div className="container max-w-7xl text-center">
					{/* <h2 className="text-3xl uppercase text-[#d6ae5b] font-medium text-start">
						Giới thiệu
					</h2> */}

					<div className="mb-12 text-center">
						<h2 className="text-3xl font-extrabold text-white sm:text-3xl uppercase">
							Giới thiệu
						</h2>
						{/* <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
								Check out some of our recent work and case studies
							</p> */}
					</div>

					<div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-items-center justify-center text-center gap-4">
						<div className="text-start">
							<div className="max-w-[500px]">
								<Image
									src={images[0]}
									alt=""
									title=""
									width={1021}
									height={1280}
									className="object-cover rounded-2xl shadow-2xl transform transition duration-300 ease-in-out hover:scale-90"
								/>
							</div>
						</div>
						<div className="">
							<h3 className="text-start text-gray-300 mb-3">
								Trong cộng đồng yêu thích Baccarat, cái tên{" "}
								<b className="text-[#d6ae5b]">QUỲNH NHƯ</b> đã trở thành
								một biểu tượng của kiến thức, bản lĩnh và sự sang trọng. Với
								nhiều năm kinh nghiệm trong việc nghiên cứu và phân tích các
								dạng cầu, chị được biết đến như một chuyên gia hàng đầu, luôn
								mang đến những góc nhìn khoa học, dễ hiểu và áp dụng hiệu quả{" "}
								<br />
								<br />
								Điểm đặc biệt của{" "}
								<b className="text-[#d6ae5b]">QUỲNH NHƯ</b> là phong thái
								tự tin, bình tĩnh và tinh tế trong từng buổi chia sẻ. Chị không
								chỉ tập trung vào phân tích cầu Baccarat mà còn nhấn mạnh yếu tố
								giữ vững tâm lý, quản lý chiến lược – những kỹ năng then chốt
								giúp người chơi làm chủ cuộc chơi.
								<br />
								<br />
								👉 Chính vì vậy,{" "}
								<b className="text-[#d6ae5b]">QUỲNH NHƯ</b> không chỉ là
								một chuyên gia, mà còn là nguồn cảm hứng, dẫn dắt cộng đồng đến
								gần hơn với nghệ thuật Baccarat.
							</h3>

							<div className="grid grid-cols-3 gap-4">
								{images &&
									images.map((item, index) => {
										if (index > 0) {
											return (
												<div key={index} className="mt-3">
													<Image
														src={item}
														alt=""
														title=""
														width={1021}
														height={1280}
														className="object-cover rounded-lg shadow-2xl min-h-[150px] transform transition duration-300 ease-in-out hover:scale-90 hover:cursor-pointer"
														onClick={() => openLightbox(index)}
													/>
												</div>
											)
										}
									})}
							</div>

							<div className="grid grid-cols-3 gap-4 mt-6">
								<div className="border border-[#d6ae5b] rounded-lg text-center px-3 py-12">
									<div className="text-center">
										<Building2 size={40} className="text-[#d6ae5b] m-auto" />
									</div>
									<p className="sm:text-lg text-sm font-medium text-center uppercase text-white/80 mt-2">
										Hỗ trợ <br /> khởi nghiệp
									</p>
								</div>

								<div className="border border-[#d6ae5b] rounded-lg text-center px-3 py-12">
									<div className="text-center">
										<ChartArea size={40} className="text-[#d6ae5b] m-auto" />
									</div>
									<p className="sm:text-lg text-sm font-medium text-center uppercase text-white/80 mt-2">
										Kinh doanh <br /> online
									</p>
								</div>

								<div className="border border-[#d6ae5b] rounded-lg text-center px-3 py-12">
									<div className="text-center">
										<ChartNoAxesCombined
											size={40}
											className="text-[#d6ae5b] m-auto"
										/>
									</div>
									<p className="sm:text-lg text-sm font-medium text-center uppercase text-white/80 mt-2">
										Tư vấn gỡ nỡ & <br /> Quản lý tài chính
									</p>
								</div>
							</div>

							{isOpen && (
								<div className="fixed inset-0 bg-white/50 bg-opacity-80 flex items-center justify-center z-50 transition-all duration-300 ease-in-out translate-y-0">
									<div className="relative max-w-7xl w-full mx-4 ">
										<button
											onClick={closeLightbox}
											className="absolute top-4 right-4 text-white text-3xl font-bold bg-transparent rounded-full w-10 h-10 flex items-center justify-center hover:bg-transparent transition"
										>
											<X size={34} />
										</button>

										<div>
											<Image
												src={images[currentImageIndex]}
												alt={`Image ${currentImageIndex + 1}`}
												className="w-full h-auto max-h-[80vh] object-cover rounded-2xl shadow-2xl"
												width={100}
												height={100}
											/>
										</div>

										<button
											onClick={goToPrevious}
											className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-white/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/50 transition"
										>
											<ArrowLeft size={34} />
										</button>
										<button
											onClick={goToNext}
											className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-white/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/50 transition"
										>
											<ArrowRight size={34} />
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
