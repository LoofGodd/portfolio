"use client"
import LandingSection from "@/sections/landing"
import FeatureSection from "@/sections/featured"
import AboutSection from "@/sections/about"
import ContactSection from "@/sections/contact"
import dynamic from "next/dynamic"

const WaterWaveWrapper = dynamic(
  () => import("./components/virtualEffects/water-wave-wrapper"),
  { ssr: false }
)
export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="2"
      perturbance="10"
      resolution="2048"
    >
      {() => (
        <div>
          <div className="">
            <LandingSection />
            <FeatureSection />
            <AboutSection />
            <ContactSection />
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  )
}
