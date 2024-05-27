import React, { useEffect, useState } from "react"

import moment from "moment-timezone"
interface LiveClockProps {
  timezone: string
}
export default function LiveClock({ timezone }: LiveClockProps) {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateClock = () => {
      const currentTime = moment().tz(timezone).format("HH:mm:sa")
      setTime(currentTime)
    }
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [timezone])
  return (
    <div className="flex items-center gap-[0.5vw] text-3xl text-secondary-foreground font-semibold mx-auto">
      {time ? `${timezone}: ${time}` : <div>Loading...</div>}
    </div>
  )
}
