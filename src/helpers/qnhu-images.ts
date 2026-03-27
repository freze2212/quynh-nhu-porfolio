/**
 * Danh sách ảnh qnhu có thật trong `public/images/` (không random, không 404).
 * File trong repo: qnnhu-07.jpg (chữ nn) — giữ đúng tên file.
 */
export const QNHU_IMAGES = [
	"/images/qnhu-01.png",
	"/images/qnhu-02.png",
	"/images/qnhu-03.png",
	"/images/qnhu-04.png",
	"/images/qnhu-05.png",
	"/images/qnhu-06.png",
	"/images/qnnhu-07.jpg",
	"/images/qnhu-08.jpg"
] as const

export type QnhuImageSrc = (typeof QNHU_IMAGES)[number]

/** Blog / Tin tức — 3 ảnh cố định, không trùng trong section */
export const SECTION_BLOG_IMAGES = [
	"/images/qnhu-04.png",
	"/images/qnhu-05.png",
	"/images/qnhu-06.png"
] as const

/** Sự kiện — 3 ảnh cố định, không trùng blog & không trùng thumbnail Giới thiệu (01–03) */
export const SECTION_EVENT_IMAGES = [
	"/images/qnhu-08.jpg",
	"/images/qnnhu-07.jpg",
	"/images/anh11.jpg"
] as const

/** Câu chuyện thành công — 1 ảnh bên phải */
export const SECTION_STORY_IMAGE = "/images/anh-111.jpg"

/** Banner strip footer widget */
export const SECTION_BANNER_FOOTER_IMAGE = "/images/qnhu-banner.png"

/** Modal giới hạn IP */
export const SECTION_LIMIT_IP_IMAGE = "/images/qnhu-01.png"
