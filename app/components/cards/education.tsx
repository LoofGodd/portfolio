import Card from "../ui/card"
import Timeline, { TimelineItem } from "../ui/timeline"

export default function EducationCard() {
  return (
    <Card id="education" title="My Education">
      <Timeline>
        {educationData.map((ed, i) => (
          <TimelineItem
            key={i}
            date={ed.date}
            title={ed.title}
            subTitle={ed.subTitle}
            link={ed.link}
            tag={ed.tag}
          />
        ))}
      </Timeline>
    </Card>
  )
}

const educationData = [
  {
    date: "2023 - now",
    title: "Compute Sciences",
    subTitle: "Self-taught",
    link: "https://www.github.com/loofgodd",
    tag: "CS",
  },

  {
    date: "2024 - 2024",
    title: "Basis Cyber Security",
    subTitle: "SalaCyber",
    link: "https://www.salacyber.com/",
    tag: "CS",
  },
  {
    date: "2020 - 2024",
    title: "Compute Sciences",
    subTitle: "RUPP",
    link: "https://www.rupp.edu.kh/",
    tag: "CS",
  },
  {
    date: "2022 - 2023",
    title: "Coding & Programming",
    subTitle: "RUPP",
    link: "https://www.rupp.edu.kh/",
    tag: "Bootcamp",
  },

  {
    date: "2023 - 2023",
    title: "Big Data",
    subTitle: "RUPP",
    link: "https://www.rupp.edu.kh/",
    tag: "Bootcamp",
  },
]
