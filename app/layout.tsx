import type { Metadata } from "next"
import { cn } from "@/libs/utils"
import { Bricolage_Grotesque, Oswald, Inter } from "next/font/google"
import "./globals.css"
import GrainEffect from "./components/virtualEffects/grain-effect"
import localFont from "next/font/local"
import Cursor from "./components/cursor/cursor"

const inter = Inter({ subsets: ["latin"] })
const mainFont = Bricolage_Grotesque({ subsets: ["latin"] })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })

const pixel = localFont({
  src: "../public/assets/fonts/pixel.ttf",
  variable: "--font-pixel",
})
export const metadata: Metadata = {
  title: "portfolio",
  description: "Make better website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          mainFont.className,
          oswald.variable,
          pixel.variable,
          inter.className
        )}
      >
        <GrainEffect /> <Cursor color="#fff" /> {children}
      </body>
    </html>
  )
}
