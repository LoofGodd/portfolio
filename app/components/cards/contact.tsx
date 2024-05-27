import React, { ReactNode } from "react"
import Button from "../ui/button"

interface ContactProps {
  title: string
  icon: ReactNode
  text: string
  btnText: string
}
export default function ContactCard({
  title,
  icon,
  text,
  btnText,
}: ContactProps) {
  return (
    <div
      className="bg-secondary-background border border-border rounded-lg relative overflow-y-hidden
   py-5 pl-[25px] shadow-md"
    >
      <div className="z-20 flex flex-col gap-8 justify-between items-start">
        <div className="flex items-center gap-x-2">
          <span className="bg-white w-8 h-8 rounded-lg grid place-items-center">
            {icon}
          </span>
          <h1>{title}</h1>
        </div>
        <div>
          <h2 className="font-bold text-2xl">{text}</h2>
        </div>
        <Button className="!w-24">{btnText}</Button>
      </div>
    </div>
  )
}