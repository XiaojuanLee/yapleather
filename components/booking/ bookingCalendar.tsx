"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

interface BookingCalendarProps {
  name: string;
}

export function BookingCalendar({ name }: BookingCalendarProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div> 
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
    <input
        type="hidden"
        name={name}
        value={date ? date.toISOString().split("T")[0] : ""}
      />
    </div>
  )
}
