import { cn } from "@/libs/utils"
import React, { useEffect, useRef } from "react"

interface VideoProps {
  video: string
  active: boolean
}
export default function Video({ active, video }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      if (active) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [active])
  return (
    <div className="absolute top-0 left-0 right-0 rounded-3xl w-full h-full">
      <video
        src={video}
        ref={videoRef}
        loop={active}
        muted
        className={cn(
          "h-full w-full object-cover rounded-3xl",
          active ? "" : "grayscale"
        )}
      />
    </div>
  )
}
