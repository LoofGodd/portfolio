import BackgroundCard from "@/app/components/cards/background"
import CertificationCard from "@/app/components/cards/certification"
import EducationCard from "@/app/components/cards/education"
import ExperienceCard from "@/app/components/cards/experience"
import InstructorCard from "@/app/components/cards/instructor"
import MeCard from "@/app/components/cards/me"
import ResumeCard from "@/app/components/cards/resume"
import StackCard from "@/app/components/cards/stack"
import Heading from "@/app/components/heading/heading"
import Card from "@/app/components/ui/card"
import Gallery from "@/app/components/ui/gallery"
import React from "react"

export default function AboutSection() {
  return (
    <div id="about" className="pt-24 px-3 lg:px-8">
      <Heading number="02" title_1="About" title_2="Me" />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <ResumeCard />
          <BackgroundCard />
          <div className="2xl:hidden">
            <Gallery />
          </div>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <CertificationCard />
            <StackCard />
          </div>
          <div className="space-y-4">
            <ExperienceCard />
            <EducationCard />
          </div>
          <div className="hidden 2xl:flex">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  )
}
