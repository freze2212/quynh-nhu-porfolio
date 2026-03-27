import Link from "next/link"

export default function NotFound() {
	return (
		<div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 bg-[#21130d] px-4 py-16 text-center text-white">
			<h1 className="text-4xl font-bold text-[#d6ae5b]">404</h1>
			<p className="text-white/80">Trang không tồn tại.</p>
			<Link
				href="/"
				className="rounded-lg bg-[#d6ae5b] px-6 py-2 font-medium text-[#21130d] hover:opacity-90"
			>
				Về trang chủ
			</Link>
		</div>
	)
}
