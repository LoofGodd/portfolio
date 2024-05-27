import React, { ReactNode } from "react"
import Header from "./featured/header"
import Video from "./featured/video"

interface FeaturedCardProps {
  logo?: ReactNode
  title: string
  tag: string
  video: string
  active: boolean
}
export default function FeaturedCard({
  logo,
  title,
  tag,
  video,
  active,
}: FeaturedCardProps) {
  return (
    <div className="link w-full h-full bg-secondary-background border border-border p-2 shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap">
      <Header title={title} tag={tag} />
      <div className="relative flex flex-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
        <Video video={video} active={active} />
      </div>
    </div>
  )
}
