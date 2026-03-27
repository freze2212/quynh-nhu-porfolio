import Balancer from "react-wrap-balancer"
import Image from "next/image"

export const Logo = () => {
	return (
		<section className="flex flex-col gap-6 items-center">
			<div className="sm:w-auto md:w-[500px] lg:w-[600px] w-[300px] m-auto">
				<Balancer as="h1" className="text-center text-gray-500 md:text-xl">
					<Image
						src="/images/logo.png"
						alt="Quỳnh Như"
						title="Quỳnh Như"
						width={2247}
						height={711}
						priority
					/>
				</Balancer>
			</div>
		</section>
	)
}
