import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OfflineImpacto - Agencia de Marketing Offline en España",
  description:
    "Agencia especializada en marketing offline: vallas publicitarias, publicidad en transporte, material promocional, folletos y eventos en toda España.",
  keywords:
    "marketing offline, publicidad exterior, vallas publicitarias, publicidad en transporte, material promocional, eventos, Madrid, España",
  authors: [{ name: "OfflineImpacto" }],
  creator: "OfflineImpacto",
  publisher: "OfflineImpacto",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
