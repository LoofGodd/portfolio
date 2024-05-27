import FeaturedCard from "@/app/components/cards/featured-card"
import ExpandableFeatured from "@/app/components/expandabes/expandable-featured"
import Heading from "@/app/components/heading/heading"
import { featuredData } from "@/app/data"
import React from "react"

const MainFeatured = featuredData[0]

export default function FeatureSection() {
  return (
    <div id="featured" className="pt-24 px-3 lg:px-8">
      <Heading number={"2"} title_1={"feature"} title_2={"Work"} />
      <FeaturedCard active={true} {...MainFeatured} />
      <ExpandableFeatured />
    </div>
  )
}
