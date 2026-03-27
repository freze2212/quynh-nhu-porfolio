export const domainConfig: Record<string, { tele: string }> = {
	"kieutrinhmacao.com": {
		tele: "https://t.me/kieutrinhmacao3333z"
	},
	"kieutrinhmacao.net": {
		tele: "https://t.me/KIEUTRINHMC93XX"
	},
	"kieutrinhmacao.org": {
		tele: "https://t.me/Kieutrinhbcr6868"
	},
	"kieutrinhmacao.info": {
		tele: "https://t.me/Kieutrinhbcr_xx888"
	},
	"kieutrinhmacao.co": {
		tele: "https://t.me/Trinhmacao79"
	},
	"kieutrinhmacao.biz": {
		tele: "https://t.me/KIEUTRINHXX886898"
	},
	"kieutrinhmacao.online": {
		tele: "https://t.me/kieutrinhmacao93"
	},
	"kieutrinhmacao.xyz": {
		tele: "https://t.me/KieutrinhMacao9393"
	}
}

export const getConfigByHost = (host: string) => {
	const hostname = host.split(":")[0] ?? host
	return (
		domainConfig[hostname] ?? {
			tele: "https://t.me/kieutrinhmacao3333z"
		}
	)
}
