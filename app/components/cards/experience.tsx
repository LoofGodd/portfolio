import Card from "../ui/card"
import Timeline, { TimelineItem } from "../ui/timeline"

export default function ExperienceCard() {
  return (
    <Card id="experience" title="My Experiences">
      <Timeline>
        {experienceData.map((experience, i) => (
          <TimelineItem
            key={i}
            date={experience.date}
            title={experience.title}
            subTitle={experience.subTitle}
            tag={experience.tag}
          />
        ))}
      </Timeline>
    </Card>
  )
}

const experienceData = [
  {
    date: "school Projects",
    title: "CMS, React, PHP, Laravel",
    subTitle: "RUPP",
    tag: "CS",
  },

  {
    date: "Side Project    ",
    title: "React Typescript Remix.run NextJs",
    subTitle: "",
    tag: "CS",
  },
]
