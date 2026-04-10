import type { Metadata } from "next"

import { SectionMegaliveVimeo } from "@/components/sections/megalive-vimeo"

export const metadata: Metadata = {
	title: "Sự kiện Megalive"
}

export default function SuKienMegalivePage() {
	return (
		<div className="flex min-h-screen flex-col justify-center">
			<div className="mt-[80px]">
				<SectionMegaliveVimeo />
			</div>
		</div>
	)
}
