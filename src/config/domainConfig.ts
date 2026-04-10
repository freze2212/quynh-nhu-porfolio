export const domainConfig: Record<string, { tele: string }> = {
	"kieutrinhmacao.com": {
		tele: "https://t.me/ctquynhnhu"
	},
	"kieutrinhmacao.net": {
		tele: "https://t.me/ctquynhnhu"
	},
	"kieutrinhmacao.org": {
		tele: "https://t.me/ctquynhnhu"
	},
	"kieutrinhmacao.info": {
		tele: "https://t.me/ctquynhnhu"
	},
	"kieutrinhmacao.co": {
		tele: "https://t.me/ctquynhnhu"
	},
	"kieutrinhmacao.biz": {
		tele: "https://t.me/ctquynhnhu"
	},
	"kieutrinhmacao.online": {
		tele: "https://t.me/ctquynhnhu"
	},
	"kieutrinhmacao.xyz": {
		tele: "https://t.me/ctquynhnhu"
	}
}

export const getConfigByHost = (host: string) => {
	const hostname = host.split(":")[0] ?? host
	return (
		domainConfig[hostname] ?? {
			tele: "https://t.me/ctquynhnhu"
		}
	)
}
