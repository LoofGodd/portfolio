import Card from "../ui/card"
import Timeline, { TimelineItem } from "../ui/timeline"

export default function InstructorCard() {
  return (
    <Card title="Instructor">
      <Timeline>
        {experienceData.map((experience, i) => (
          <TimelineItem
            key={i}
            isCourse="true"
            title={experience.title}
            subTitle={experience.subTitle}
            link={experience.link}
            tag={experience.tag}
          />
        ))}
      </Timeline>
    </Card>
  )
}

const experienceData = [
  {
    date: "2022 - Now",
    title: "Student",
    subTitle: "RUPP",
    link: "link",
    tag: "CS",
  },

  {
    date: "2022 - Now",
    title: "Student",
    subTitle: "RUPP",
    link: "link",
    tag: "CS",
  },
]
