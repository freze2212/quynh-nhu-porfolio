"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { getDefaultQnhuImage, pickRandomQnhuImage } from "@/helpers/qnhu-images"

export const SectionStorySuccess = () => {
	const [imageSrc, setImageSrc] = useState(getDefaultQnhuImage())

	useEffect(() => {
		setImageSrc(pickRandomQnhuImage())
	}, [])

	return (
		<>
			<section className="items-center bg-[#1b1310] py-12">
				<div className="container max-w-7xl">
					<div className="relative">
						<div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
							<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
								<div className="sm:max-w-lg">
									<h1 className="font text-2xl font-bold tracking-tight text-[#d6ae5b] sm:text-4xl">
										Câu chuyện thành công
									</h1>
									<p className="mt-4 text-xl text-white/80">
										Ít ai biết rằng trước khi trở thành chuyên gia Baccarat được
										cộng đồng ngưỡng mộ,{" "}
										<b className="text-[#d6ae5b]">QUỲNH NHƯ</b> cũng từng
										trải qua không ít thất bại.
										<br />
										<br />
										Có những giai đoạn chị liên tục vấp ngã, thử sai nhiều
										phương pháp nhưng kết quả không như mong muốn. Đã có lúc chị
										nghĩ đến việc dừng lại. Nhưng chính nghị lực và sự quyết tâm
										đã giúp chị đứng dậy. Thay vì bỏ cuộc, chị chọn cách học hỏi
										từ thất bại, kiên trì nghiên cứu và rút ra những bài học quý
										giá.
										<br />
										<br />
										Từng bước một, chị xây dựng cho mình một phương pháp phân
										tích cầu khoa học, vừa logic vừa dễ áp dụng. Ngày hôm nay,
										<b className="text-[#d6ae5b]">QUỲNH NHƯ</b> không chỉ
										thành công trong việc định hình phong cách riêng mà còn tạo
										dựng được một cộng đồng Baccarat tích cực và gắn kết. Hành
										trình của chị là minh chứng rằng:
										<p className="mt-3">
											Thất bại không phải là kết thúc, mà là bàn đạp để bước lên
											đỉnh cao mới
										</p>
									</p>
								</div>
								<div className="max-w-7xl">
									<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
										<div className="flex items-center space-x-6 lg:space-x-8">
											<Image
												alt=""
												src={imageSrc}
												width={100}
												height={100}
												className="h-full w-full object-cover object-center rounded-3xl shadow-2xl"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
