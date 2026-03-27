export const QNHU_IMAGES = [
	"/images/qnhu-01.png",
	"/images/qnhu-02.png",
	"/images/qnhu-03.png",
	"/images/qnhu-04.png",
	"/images/qnhu-05.png",
	"/images/qnhu-06.png",
	"/images/qnhu-07.jpg",
	"/images/qnhu-08.jpg"
] as const

export type QnhuImageSrc = (typeof QNHU_IMAGES)[number]

export function getDefaultQnhuImage(): QnhuImageSrc {
	return QNHU_IMAGES[0]
}

export function getDefaultQnhuImages(count: number): QnhuImageSrc[] {
	return QNHU_IMAGES.slice(0, Math.max(0, Math.min(count, QNHU_IMAGES.length)))
}

export function pickRandomQnhuImage(): QnhuImageSrc {
	return QNHU_IMAGES[Math.floor(Math.random() * QNHU_IMAGES.length)]!
}

export function pickQnhuImages(count: number): QnhuImageSrc[] {
	const shuffled = [...QNHU_IMAGES].sort(() => Math.random() - 0.5)
	return shuffled.slice(0, Math.max(0, Math.min(count, shuffled.length)))
}

