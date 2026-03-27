"use client"

import Image from "next/image"

export const SectionMedia = () => {
	return (
		<>
			<section className="px-4 py-12 sm:px-6 lg:px-8 bg-[#1b1310]">
				<div className="container max-w-7xl">
					<div className="mx-auto">
						<div className="mb-12 text-center">
							<h2 className="text-3xl font-extrabold text-white sm:text-3xl uppercase">
								Các Idol xôn xao về QUỲNH NHƯ
							</h2>
							{/* <p className="mx-auto mt-3 max-w-2xl text-xl text-white/80 sm:mt-4">
								Nhiều người đã thay đổi vận mệnh nhờ tư duy làm chủ, phía dưới
								là chia sẻ
							</p> */}
						</div>

						<div className="">
							<div className="relative w-full max-w-full overflow-hidden rounded-2xl bg-black">
								<Image
									src="/images/qnhu-banner.png"
									alt="Quỳnh Như"
									width={1920}
									height={1080}
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
