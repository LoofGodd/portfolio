import { cn } from "@/libs/utils"
import React, { ReactNode } from "react"

interface Props {
  title?: string
  children: ReactNode
  className?: string
  id?: string
}

export default function Card({ id, children, className, title }: Props) {
  return (
    <div
      id={id}
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2xl border border-border p-6 text-primary-foreground",
        className
      )}
    >
      <div className="flex flex-col gap-y-6 ">
        {title ? (
          <div className="font-pixel">
            <p className="uppercase text-lg">{title}</p>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  )
}
