"use client"

import { useEffect, useState } from "react"

export const SectionFeatures = () => {
	const [initialValue, setInitialValue] = useState(11000)
	const [duration, setDuration] = useState(4000)
	const [targetValue, setTargetValue] = useState(12000)
	const [label, setLabel] = useState("")
	const [count, setCount] = useState(initialValue)

	useEffect(() => {
		let startValue = initialValue || 0
		const intervalTime = Math.floor(duration / (targetValue - initialValue))
		const counter = setInterval(() => {
			startValue += 1
			setCount(startValue)
			if (startValue >= targetValue) {
				clearInterval(counter)
			}
		}, intervalTime)

		return () => clearInterval(counter)
	}, [initialValue, targetValue, duration])

	return (
		<>
			<section className="items-center bg-[#21130d] sm:py-12 py-6">
				<div className="container text-center max-w-7xl">
					<div className="sm:block hidden">
						<div className=" flex sm:flex-row flex-col items-center justify-center gap-10">
							<div className="p-4">
								<h2 className="sm:text-4xl text-3xl font-bold uppercase text-[#d6ae5b]">
									{count}+
								</h2>
								<p className="uppercase mt-3 font-semibold text-lg dark:text-white text-white">
									Người được giúp đỡ
								</p>
							</div>

							<div className="p-4">
								<h2 className="sm:text-4xl text-3xl font-bold uppercase text-[#d6ae5b]">
									10+
								</h2>
								<p className="uppercase mt-3 font-semibold text-lg dark:text-white text-white">
									Năm kinh nghiệm
								</p>
							</div>

							<div className="p-4">
								<h2 className="sm:text-4xl text-3xl font-bold uppercase text-[#d6ae5b]">
									2 triệu $
								</h2>
								<p className="uppercase mt-3 font-semibold text-lg dark:text-white text-white">
									Khách đã kiếm được
								</p>
							</div>
						</div>
					</div>

					<div className="sm:hidden block">
						<div className="flex flex-row items-center justify-center gap-10">
							<div className="p-4">
								<h2 className="text-4xl font-bold uppercase text-[#d6ae5b]">
									{count}+
								</h2>
								<p className="uppercase mt-3 font-semibold text-lg">
									Người được giúp đỡ
								</p>
							</div>

							<div className="p-4">
								<h2 className="text-4xl font-bold uppercase text-[#d6ae5b]">
									10+
								</h2>
								<p className="uppercase mt-3 font-semibold text-lg">
									Năm kinh nghiệm
								</p>
							</div>
						</div>

						<div className="p-4">
							<h2 className="text-4xl font-bold uppercase text-[#d6ae5b]">
								2 triệu $
							</h2>
							<p className="uppercase mt-3 font-semibold text-lg">
								Khách đã kiếm được
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
