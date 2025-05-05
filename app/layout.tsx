import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from '@/app/context/AuthContext'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {

  title: "SehatNama - Digital Healthcare Database",
  description: "A comprehensive healthcare database system for managing patient information",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
