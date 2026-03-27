"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { DomainConfigProvider } from "@/contexts/DomainConfigContext"

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="light">
			<QueryClientProvider client={queryClient}>
				<DomainConfigProvider>{children}</DomainConfigProvider>
			</QueryClientProvider>
		</ThemeProvider>
	)
}
