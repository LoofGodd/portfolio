import featureData from "@/app/data/featured"
import React, { useState } from "react"
import FeaturedCard from "../cards/featured-card"
import { cn } from "@/libs/utils"

export default function ExpandableFeatured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>()
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }
  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }
  return (
    <div className="w-full mt-20 grid lg:flex lg:justify-between lg:gap-x-4">
      {featureData.slice(1).map((featured, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out",
            i === hoveredIndex ? "lg:w-[44%]" : ""
          )}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <FeaturedCard active={i === hoveredIndex} {...featured} />
        </div>
      ))}
    </div>
  )
}
