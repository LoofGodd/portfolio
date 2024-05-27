import ContactCard from "@/app/components/cards/contact"
import Heading from "@/app/components/heading/heading"
import Button from "@/app/components/ui/button"
import Card from "@/app/components/ui/card"
import Input from "@/app/components/ui/input"
import Textarea from "@/app/components/ui/text-area"
import React, { FormEvent, useRef, useState } from "react"
import {
  FaPhoneVolume,
  FaProjectDiagram,
  FaTelegram,
  FaUser,
  FaVoicemail,
} from "react-icons/fa"
import { MdEmail, MdSubject } from "react-icons/md"
import { SiMinutemailer } from "react-icons/si"
import emailjs from "@emailjs/browser"
import { TiTick } from "react-icons/ti"
export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null!)
  const btnRef = useRef<HTMLButtonElement>(null)
  const [sent, setSent] = useState(false)
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_9x9fzyg",
        "template_tpso5ie",
        formRef.current,
        "wSvuzCw8n3PGmX1K9"
      )
      .then(
        (res) => {
          console.log(res.text)
          console.log("Email send successfully")
          setSent(true)
          setTimeout(() => {
            setSent(false)
          }, 10000)
        },
        (error) => {
          console.log(error.text)
          setSent(false)
        }
      )
  }
  return (
    <div id="contact" className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Connect Us directly at"
              icon={<FaTelegram className="fill-[#333] text-lg" />}
              btnText="call us"
              text={"@Chorn_D_Bunnarot"}
            />

            <ContactCard
              title="Email Us"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              btnText="Fill the form"
              text={"chorndy.bunnarot@gmail.com"}
            />
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            method="POST"
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden  px-[25px] py-5 shadow-md"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                icon={<MdSubject />}
              />
            </div>

            <Textarea
              name="message"
              placeholder="tell us about your project"
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end">
              <div onClick={() => btnRef.current?.click()}>
                <Button className="!w-44 !py-3 !text-xl">
                  {sent ? (
                    <p className="flex gap-x-4 items-center">
                      Sent <TiTick />
                    </p>
                  ) : (
                    <p className="flex gap-x-4 items-center">
                      Send <SiMinutemailer />
                    </p>
                  )}
                </Button>
              </div>
              <button hidden ref={btnRef} type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}
