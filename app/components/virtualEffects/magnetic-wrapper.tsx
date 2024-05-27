"use client"
import React, { ReactNode, useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticWrapperProps {
  className?: string
  children: ReactNode
}

export default function MagneticWrapper({
  className,
  children,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleMouse = (e: MouseEvent) => {
    const { clientX, clientY } = e
    const boundingRect = ref.current?.getBoundingClientRect()
    if (boundingRect) {
      const { width, height, top, left } = boundingRect
      const middleX = clientX - (left + width / 4)
      const middleY = clientY - (top + height / 4)
      setPosition({ x: middleX, y: middleY })
    }
  }
  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }
  return (
    <motion.div
      className={className}
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 100, damping: 15, mass: 0.1 }}
      onMouseOver={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  )
}
