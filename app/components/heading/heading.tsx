import SvgCurve from "../virtualEffects/svg-curve"
import { HeadingAnimatedSvg } from "./heading-animated-svg"

interface HeadingProps {
  number: string
  title_1: string
  title_2: string
}
export default function Heading({ number, title_1, title_2 }: HeadingProps) {
  return (
    <div className="relative my-10 px-8 z-20">
      <div className="outline-none flex flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-13 absolute whitespace-pre">
        <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p-4">
            {number}
          </span>
        </h2>
      </div>
      {/* heading text wrapper */}
      <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3">
          {title_1}
        </p>
        <HeadingAnimatedSvg text={"LEARN MORE ABOUT OUR PROJECT"} />
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3">
          {title_2}
        </p>
      </div>
      {/* svg curve */}
      <SvgCurve />
    </div>
  )
}
