import { cn } from "@/libs/utils"
import Link from "next/link"
import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
  link?: string
  isIcon?: boolean
  className?: string
}

export default function Button({
  className,
  children,
  link,
  isIcon,
  ...props
}: Props) {
  return (
    <>
      {link ? (
        <Link href={link} target="_blank" className="w-10 h-10 cursor-pointer">
          <ButtonBody className={className} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <ButtonBody className={className} isIcon={isIcon}>
          {children}
        </ButtonBody>
      )}
    </>
  )
}

interface ButtonBodyProps {
  children: ReactNode
  isIcon?: boolean
  className?: string
}

function ButtonBody({ children, isIcon, className }: ButtonBodyProps) {
  return (
    <div className="flex-none w-auto h-full">
      <div
        className={cn(
          "flex items-center justify-center gap-2 bg-primary-background whitespace-nowrap text-primary-foreground text-sm font-medium hove:bg-white/[0.1] transition-colors duration-100  rounded-full",
          className,
          isIcon ? "h-10 w-10" : "h-full w-max px-3 py-2"
        )}
      >
        {children}
      </div>
    </div>
  )
}
