import Image from "next/image"
import Card from "../ui/card"
import MyImage from "@/public/assets/images/gallery/me1.jpg"
import { cn } from "@/libs/utils"
export default function MeCard() {
  return (
    <Card className="2xl:h-full overflow-hidden">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        <Image
          src={MyImage}
          alt="Chorn D. Bunnarot"
          className="absolute top-0 left-0 bottom-0 right-0 h-full object-cover"
        />
        <div className="absolute top-[65%] space-y-2">
          <Tag text="Hello, universe✋" className="rounded-2xl" />

          <Tag
            text="I'm Chorndy Bunnarot"
            className="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />

          <Tag
            text="Full Stack Developer"
            className="rounded-tl-2xl  rounded-br-2xl rounded-bl-2xl"
          />
        </div>
      </div>
    </Card>
  )
}
const Tag = ({ text, className }: { text: string; className: string }) => {
  return (
    <div
      className={cn("bg-black/[0.7] w-fit py-1.5 px-3 rounded-full", className)}
    >
      <p className="text-primary-foreground leading-[110%] font-oswald">
        {text}
      </p>
    </div>
  )
}
