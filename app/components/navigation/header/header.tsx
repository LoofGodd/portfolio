import React, { useEffect, useState } from "react"
import Profile from "../../ui/profile"
import MagneticWrapper from "../../virtualEffects/magnetic-wrapper"
import FancyButton from "../../ui/fancy-button"
import { FaArrowRight } from "react-icons/fa"
import FullScreenMenu from "./full-screen-meny/full-screen-menu"
import ToggleButton from "./full-screen-meny/toggle-button"
import { AnimatePresence } from "framer-motion"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [showToggle, setShowToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowToggle(true)
      } else setShowToggle(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("Scroll", handleScroll)
    }
  }, [])
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton text="Let's Talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {showToggle ? <ToggleButton open={open} setOpen={setOpen} /> : null}
      <AnimatePresence mode="wait">
        {open ? <FullScreenMenu setOpen={setOpen} /> : null}
      </AnimatePresence>
    </div>
  )
}
