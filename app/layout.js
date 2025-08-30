import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata = {
  title: "Vision Distribution Pvt. Ltd.",
  description: "Leading distribution house in India with 30+ years of experience in telecom and consumer electronics",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
