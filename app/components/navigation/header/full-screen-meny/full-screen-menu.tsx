import React from "react"
import { motion } from "framer-motion"
import { menuSlide } from "./animation"
import Curve from "./curve"
import Profile from "@/app/components/ui/profile"
import NavLink from "./nav-link"
import Link from "next/link"
import MenuCard from "./menu-card"

export default function FullScreenMenu({
  setOpen,
}: {
  setOpen: (open: boolean) => void
}) {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
    >
      <div className="relative w-full mx-auto">
        <div className="absolute top-8">
          <Profile />
        </div>
      </div>
      <div className="absolute bottom-32 w-full lg:px-[5%]">
        <div
          className="grid relative"
          style={{ gridTemplateColumns: "1fr 500px" }}
        >
          <div
            className="pl-4 flex flex-col justify-end"
            onClick={() => setOpen(false)}
          >
            {navItems.map((navItem, index) => (
              <NavLink key={index} {...navItem} index={index} />
            ))}
          </div>
          <MenuCard setOpen={setOpen} />
        </div>
      </div>
      <div className="w-[95%] absolute pl-[5%] bottom-8">
        <div className="flex flex-wrap items-center justify-between uppercase text-white">
          <div className="flex items-center gap-4">
            <Link href="/">LEGAL NOTICE</Link>
            <Link href="/">404</Link>
            <Link href="/">LEGALSTYLES</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">Github</Link>
            <Link href="/">X</Link>
            <Link href="/">YOUTUBE</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">&copy;2024</Link>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  )
}

const navItems = [
  { title: "Home", href: "#home" },
  { title: "Featured", href: "#featured" },
  { title: "About", href: "#about" },
  { title: "Project", href: "#project" },
  { title: "Contact", href: "#contact" },
]
