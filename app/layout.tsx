import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { SideNav } from "@/components/side-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sales Anomaly Dashboard",
  description: "AI-powered auditing system for detecting and analyzing sales data anomalies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b bg-background">
              <div className="container flex h-16 items-center">
                <MainNav />
              </div>
            </header>
            <div className="flex flex-1">
              <SideNav />
              <main className="flex-1">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'