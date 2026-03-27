import Image from "next/image"

import { SECTION_BANNER_FOOTER_IMAGE } from "@/helpers/qnhu-images"

export const BannerFooter = () => {
	return (
		<>
			<section className="flex relative flex-col col-span-1 items-center sm:pb-8 pb-5">
				<div className="max-w-3xl lg:max-w-2xl md:max-w-xl m-auto">
					<Image
						src={SECTION_BANNER_FOOTER_IMAGE}
						alt="Logo"
						width={1515}
						height={214}
					/>
				</div>
			</section>
		</>
	)
}
