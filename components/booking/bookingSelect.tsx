"use client"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface BookingSelectProps {
  name: string;
}

export function BookingSelect({ name }: BookingSelectProps) {
  const [time, setTime] = React.useState<string>("");
  return (
    <div>
      <Select value={time} onValueChange={setTime} required>
        <SelectTrigger className="required">
          <SelectValue placeholder="Preferred time" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Preferred time</SelectLabel>
            <SelectItem value="10:00 AM">10:00 AM</SelectItem>
            <SelectItem value="10:30 AM">10:30 AM</SelectItem>
            <SelectItem value="11:00 AM">11:00 AM</SelectItem>
            <SelectItem value="11:30 AM">11:30 AM</SelectItem>
            <SelectItem value="12:00 PM">12:00 PM</SelectItem>
            <SelectItem value="12:30 PM">12:30 PM</SelectItem>
            <SelectItem value="1:00 PM">1:00 PM</SelectItem>
            <SelectItem value="1:30 PM">1:30 PM</SelectItem>
            <SelectItem value="2:00 PM">2:00 PM</SelectItem>
            <SelectItem value="2:30 PM">2:30 PM</SelectItem>
            <SelectItem value="3:00 PM">3:00 PM</SelectItem>
            <SelectItem value="3:30 PM">3:30 PM</SelectItem>
            <SelectItem value="4:00 PM">4:00 PM</SelectItem>
            <SelectItem value="4:30 PM">4:30 PM</SelectItem>
            <SelectItem value="5:00 PM">5:00 PM</SelectItem>
            <SelectItem value="5:30 PM">5:30 PM</SelectItem>
            <SelectItem value="6:00 PM">6:00 PM</SelectItem>
            <SelectItem value="6:30 PM">6:30 PM</SelectItem>
            <SelectItem value="7:00 PM">7:00 PM</SelectItem>
            <SelectItem value="7:30 PM">7:30 PM</SelectItem>
            <SelectItem value="8::00 PM">8:00 PM</SelectItem>
            <SelectItem value="8:30 PM">8:30 PM</SelectItem>
            <SelectItem value="9:00 PM">9:00 PM</SelectItem>
            <SelectItem value="9:30 PM">9:30 PM</SelectItem>
            <SelectItem value="10:00 PM">10:00 PM</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <input type="hidden" name={name} value={time} />
    </div>
  )
}
