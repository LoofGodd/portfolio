import React, { ReactNode } from "react"

interface Props {
  icon?: ReactNode
  placeholder: string
  name: string
}
export default function Textarea({ icon, placeholder, name }: Props) {
  return (
    <div className="relative w-full">
      <div className="absolute flex items-center inset-y-0 start-0 ps-3.5 pointer-events-none">
        {icon}
      </div>
      <textarea
        name={name}
        placeholder={placeholder}
        className="bg-primary-background w-full rounded-lg text-sm ps-10 px-2.5 pt-12 py-4 focus:outline-none"
      />
    </div>
  )
}
