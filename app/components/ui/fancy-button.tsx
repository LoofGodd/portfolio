import { ReactNode } from "react"

interface BUttonProps {
  text: string
  icon: ReactNode
}
export default function FancyButton({ text, icon }: BUttonProps) {
  return (
    <a href="#contact" className="fancy-btn">
      <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[100em] py-[1vw] px-[2vw] flex items-center gap-2 font-bold text-3xl cursor-pointer transition-all duration-75 ">
        <span>{text}</span>
        <span className="group-hover:translate-x-[.75vw] transition-transform duration-100">
          {icon}
        </span>
      </div>
    </a>
  )
}
