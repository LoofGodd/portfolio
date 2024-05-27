import React from "react"
import { FaArrowDown } from "react-icons/fa"

export default function ScrollDown() {
  return (
    <div className="w-[10rem] h-[10rem] border-2 border-primary-foreground grid place-items-center rounded-full">
      <div className="grid place-items-center w-[2.9rem] h-[3.6rem]">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          stroke="white"
        >
          <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
        </svg>
      </div>
    </div>
  )
}
