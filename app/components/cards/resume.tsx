import React from "react"
import Card from "../ui/card"
import SignatureImage from "@/public/assets/images/signature/s2.png"
import Image from "next/image"
import Button from "../ui/button"
import { FaDownload } from "react-icons/fa"
import Socials from "../ui/socials"

export default function ResumeCard() {
  return (
    <Card className="md:h-full ">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        A fresh gradated student at Royal University of Phnom Penh majoring on
        Computer Science. I mind doing challenges but I love being improved and
        without challenges, there ain&apos;t no improvement, accidentally I
        found coding which is challenges inside passionate make more
        improvement.
      </p>
      <div>
        <Image src={SignatureImage} alt="My Signature" />
      </div>
      {/* social and resume */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        <Socials />
        <form method="get" action="assets/images/CV_ChorndyBunnarot.pdf">
          <button type="submit">
            <Button>
              <FaDownload />
              Resume
            </Button>
          </button>
        </form>
      </div>
    </Card>
  )
}
