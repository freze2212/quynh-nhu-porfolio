"use client"

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode
} from "react"

import { getConfigByHost } from "@/config/domainConfig"

type DomainConfig = { tele: string }

const defaultConfig: DomainConfig = {
	tele: "https://t.me/ctquynhnhu"
}

const DomainConfigContext = createContext<DomainConfig>(defaultConfig)

export function DomainConfigProvider({ children }: { children: ReactNode }) {
	const [config, setConfig] = useState<DomainConfig>(defaultConfig)

	useEffect(() => {
		if (typeof window === "undefined") return
		const host = window.location.host
		setConfig(getConfigByHost(host))
	}, [])

	return (
		<DomainConfigContext.Provider value={config}>
			{children}
		</DomainConfigContext.Provider>
	)
}

export function useDomainConfig() {
	return useContext(DomainConfigContext)
}
