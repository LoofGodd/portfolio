import Link from "next/link"
import { FC, ReactNode } from "react"
import { FiArrowUpRight } from "react-icons/fi"

interface TimeLineProps {
  children: ReactNode
}
export default function Timeline({ children }: TimeLineProps) {
  return <div className="flex items-start flex-col gap-y-6">{children}</div>
}

interface TimeLineItemProps {
  date?: string
  title: string
  subTitle: string
  link?: string
  tag?: string
  isCourse?: string
}
export const TimelineItem: FC<TimeLineItemProps> = ({
  date,
  title,
  subTitle,
  link,
  tag,
  isCourse,
}) => {
  return (
    <div
      className="h-auto flex gap-8 break-words whitespace-pre"
      style={{ width: `${isCourse ? "0" : ""}` }}
    >
      <p className="text-secondary-foreground">{date}</p>
      <div
        className="flex gap-x-2"
        style={{ transform: `${isCourse ? "translateX(-45px)" : ""}` }}
      >
        <div className="flex flex-col gap-0.5">
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          <div className="flex items-center gap-2 w-min">
            {link ? (
              <Link href={link} target="_blank">
                {<Body link={link} subTitle={subTitle} tag={tag}></Body>}
              </Link>
            ) : (
              <Body subTitle={subTitle} tag={tag} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface BodyProps {
  subTitle: string
  tag?: string
  link?: string
}
function Body({ subTitle, link, tag }: BodyProps) {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] font-normal text-secondary-foreground">
            {tag}
          </p>
        </div>
      ) : null}
    </div>
  )
}
