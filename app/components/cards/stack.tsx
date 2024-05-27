import React, { useState } from "react"
import Card from "../ui/card"
import { stackData } from "@/app/data"
import Tooltip from "../ui/tooltip"

export default function StackCard() {
  return (
    <Card id="tech" title="My Tech Stack">
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((tech, i) => (
          <div
            key={i}
            className="grid items-center gap-[90px]"
            style={{ gridTemplateColumns: "50px 1fr" }}
          >
            <div className="h-auto flex gap-x-8 flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{tech.title}</p>
              <div className="flex gap-4">
                {tech.stack.map((s) => (
                  <Tooltip
                    key={s.id}
                    title={s.title}
                    image={s.image}
                    bgColor={s.bgColor}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
