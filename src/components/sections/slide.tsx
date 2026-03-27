import Image from "next/image"

export const SectionSlide = () => {
	return (
		<>
			<section className="bg-slider items-center mt-[80px]">
				<div className="w-full mx-auto">
					<Image
						src="/images/qnhu-banner.png"
						alt="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
						title="Quỳnh Như - Tư duy làm chủ cuộc chơi, thay đổi vận mệnh"
						width={100}
						height={100}
						className="bg-cover w-full h-full"
					/>
				</div>
			</section>
		</>
	)
}
