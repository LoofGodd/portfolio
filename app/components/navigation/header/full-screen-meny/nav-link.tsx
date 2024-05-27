import React, { useState } from "react"
import { scale, slide } from "./animation"
import { MotionConfig, motion } from "framer-motion"
import Link from "next/link"

interface NavLinkProps {
  title: string
  href: string
  index: number
}
export default function NavLink({ title, href, index }: NavLinkProps) {
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <motion.div
      className="relative flex items-center"
      variants={slide}
      custom={index}
      initial="initial"
      animate="enter"
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        variants={scale}
        animate={hovered ? "open" : "closed"}
        className="w-2.5 h-2.5 bg-white rounded-full absolute -left-[13px]"
      ></motion.div>
      <Link
        href={href}
        className="text-[6vw] uppercase leading-[96%] font-bold"
      >
        {title}
      </Link>
    </motion.div>
  )
}
