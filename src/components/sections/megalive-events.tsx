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

export const SectionMegaliveEvents = () => {
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
		<section className="items-center bg-[#21130d] py-6 sm:py-12">
			<div className="container max-w-7xl text-center">
				<div className="mb-12 text-center">
					<h1 className="text-3xl font-extrabold uppercase text-white sm:text-4xl">
						Sự kiện Megalive
					</h1>
					<p className="mx-auto mt-4 max-w-2xl text-gray-400">
						Không gian livestream nơi{" "}
						<b className="text-[#d6ae5b]">QUỲNH NHƯ</b> gặp gỡ khán giả, chia
						sẻ tư duy Baccarat và những khoảnh khắc nổi bật cùng cộng đồng.
					</p>
				</div>

				<div className="grid grid-cols-1 items-center justify-center justify-items-center gap-4 text-center sm:grid-cols-2">
					<div className="text-start">
						<div className="max-w-[500px]">
							<Image
								src={images[0]}
								alt="Quỳnh Như — sự kiện Megalive"
								title="Quỳnh Như — sự kiện Megalive"
								width={1021}
								height={1280}
								className="transform rounded-2xl object-cover shadow-2xl transition duration-300 ease-in-out hover:scale-90"
							/>
						</div>
					</div>
					<div>
						<h2 className="mb-3 text-start text-gray-300">
							Tại các buổi <b className="text-[#d6ae5b]">Megalive</b>,{" "}
							<b className="text-[#d6ae5b]">QUỲNH NHƯ</b> mang đến phong thái
							chuyên nghiệp, gần gũi: phân tích cầu, quản lý vốn và giữ vững tâm
							lý — phù hợp cả người mới lẫn người chơi lâu năm.
							<br />
							<br />
							Sự kiện thu hút sự quan tâm của đông đảo khán giả và nhiều gương
							mặt quen thuộc trong cộng đồng. Phần video bên dưới tổng hợp các
							clip tiêu biểu và phản ứng tích cực từ các idol dành cho{" "}
							<b className="text-[#d6ae5b]">QUỲNH NHƯ</b>.
						</h2>

						<div className="grid grid-cols-3 gap-4">
							{images.slice(1).map((item, sliceIndex) => {
								const index = sliceIndex + 1
								return (
									<div key={item} className="mt-3">
										<Image
											src={item}
											alt=""
											title=""
											width={1021}
											height={1280}
											className="min-h-[150px] transform cursor-pointer rounded-lg object-cover shadow-2xl transition duration-300 ease-in-out hover:scale-90"
											onClick={() => openLightbox(index)}
										/>
									</div>
								)
							})}
						</div>

						<div className="mt-6 grid grid-cols-3 gap-4">
							<div className="rounded-lg border border-[#d6ae5b] px-3 py-12 text-center">
								<div className="text-center">
									<Building2 size={40} className="m-auto text-[#d6ae5b]" />
								</div>
								<p className="mt-2 text-center text-sm font-medium uppercase text-white/80 sm:text-lg">
									Hỗ trợ <br /> khởi nghiệp
								</p>
							</div>

							<div className="rounded-lg border border-[#d6ae5b] px-3 py-12 text-center">
								<div className="text-center">
									<ChartArea size={40} className="m-auto text-[#d6ae5b]" />
								</div>
								<p className="mt-2 text-center text-sm font-medium uppercase text-white/80 sm:text-lg">
									Kinh doanh <br /> online
								</p>
							</div>

							<div className="rounded-lg border border-[#d6ae5b] px-3 py-12 text-center">
								<div className="text-center">
									<ChartNoAxesCombined
										size={40}
										className="m-auto text-[#d6ae5b]"
									/>
								</div>
								<p className="mt-2 text-center text-sm font-medium uppercase text-white/80 sm:text-lg">
									Tư vấn gỡ nỡ & <br /> Quản lý tài chính
								</p>
							</div>
						</div>

						{isOpen && (
							<div className="fixed inset-0 z-50 flex translate-y-0 items-center justify-center bg-white/50 bg-opacity-80 transition-all duration-300 ease-in-out">
								<div className="relative mx-4 w-full max-w-7xl">
									<button
										type="button"
										onClick={closeLightbox}
										className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-3xl font-bold text-white transition hover:bg-transparent"
									>
										<X size={34} />
									</button>

									<div>
										<Image
											src={images[currentImageIndex]}
											alt={`Ảnh ${currentImageIndex + 1}`}
											className="max-h-[80vh] w-full rounded-2xl object-cover shadow-2xl"
											width={100}
											height={100}
										/>
									</div>

									<button
										type="button"
										onClick={goToPrevious}
										className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/30 text-3xl text-white transition hover:bg-white/50"
									>
										<ArrowLeft size={34} />
									</button>
									<button
										type="button"
										onClick={goToNext}
										className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/30 text-3xl text-white transition hover:bg-white/50"
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
	)
}
