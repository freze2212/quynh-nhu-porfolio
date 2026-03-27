export const APP_CONFIG = {
	GA_ID: process.env.NEXT_PUBLIC_GA_ID,
	API_TIMEOUT: 10000,
	APP_NAME: "QUỲNH NHƯ - TƯ DUY LÀM CHỦ CUỘC CHƠI - THAY ĐỔI VẬN MỆNH",
	APP_VERSION: "1.2.2",
	DEFAULT_LANGUAGE: "vi",
	DEFAULT_THEME: "light",
	SITE_URL: process.env.NEXT_PUBLIC_APP_URL || "",
	APP_DESCRIPTION:
		"QUỲNH NHƯ - CÂU CHUYỆN THÀNH CÔNG - HÌNH MẪU NGƯỜI PHỤ NỮ HIỆN ĐẠI - TRUYỀN CẢM HỨNG - GIÚP NGƯỜI KIẾM TIỀN & GỠ NỢ - THAY ĐỔI VẬN MỆNH - TƯ DUY LÀM CHỦ CUỘC CHƠI",
	APP_KEYWORDS: [
		"Quỳnh Như",
		"Boss Quỳnh Như",
		"Quản lý tài chính",
		"Công thức Baccarat",
		"Chiến lược vốn",
		"Câu chuyện thành công",
		"Hình mẫu người phụ nữ hiện đại",
		"Truyền cảm hứng",
		"Giúp người kiếm tiền & gỡ nợ",
		"Thay đổi vận mệnh"
	] as string[],
	CREATOR: "KHANHVY",
	TWITTER_HANDLE: "@KHANHVY"
} as const

export type AppConfig = keyof typeof APP_CONFIG

export const CURRENCY_CONFIG = {
	VND: {
		locale: "vi",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	},
	USD: {
		locale: "en",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}
} as const

export const DEFAULT_CURRENCY = "VND" as const
export type CurrencyCode = keyof typeof CURRENCY_CONFIG
