import React, { ReactNode } from "react"

interface Props {
  icon?: ReactNode
  placeholder: string
  type: "email" | "text" | "password"
  name: string
}
export default function Input({ name, icon, placeholder, type }: Props) {
  return (
    <div className="relative w-full">
      <div className="absolute flex items-center inset-y-0 start-0 ps-3.5 pointer-events-none">
        {icon}
      </div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="bg-primary-background w-full rounded-lg text-sm ps-10 px-2.5 py-4 focus:outline-none"
      />
    </div>
  )
}
