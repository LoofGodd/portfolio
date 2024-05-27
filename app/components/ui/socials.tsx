import React from "react"
import { BsGithub } from "react-icons/bs"
import { FaYoutube } from "react-icons/fa"
import { RiYoutubeFill } from "react-icons/ri"
import Button from "./button"

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
        </Button>
      ))}
    </div>
  )
}
const socials = [
  {
    icon: <BsGithub className="w-4 h-4" />,
    link: "https://github.com/loofgodd",
    username: "loofgodd",
  },

  {
    icon: <RiYoutubeFill className="w-4 h-4" />,
    link: "https://www.youtube.com/channel/UC624Ii1ZDzG3KUuGgG2NFig",
    username: "loofgodd",
  },
]
