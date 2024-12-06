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
      <Select name={name} value={time} onValueChange={setTime} required>
        <SelectTrigger >
          <SelectValue placeholder="10:00 AM" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Preferred time</SelectLabel>
            <SelectItem value="10:00:00">10:00 AM</SelectItem>
            <SelectItem value="10:30:00">10:30 AM</SelectItem>
            <SelectItem value="11:00:00">11:00 AM</SelectItem>
            <SelectItem value="11:30:00">11:30 AM</SelectItem>
            <SelectItem value="12:00:00">12:00 PM</SelectItem>
            <SelectItem value="12:30:00">12:30 PM</SelectItem>
            <SelectItem value="13:00:00">1:00 PM</SelectItem>
            <SelectItem value="13:30:00">1:30 PM</SelectItem>
            <SelectItem value="14:00:00">2:00 PM</SelectItem>
            <SelectItem value="14:30:00">2:30 PM</SelectItem>
            <SelectItem value="15:00:00">3:00 PM</SelectItem>
            <SelectItem value="15:30:00">3:30 PM</SelectItem>
            <SelectItem value="16:00:00">4:00 PM</SelectItem>
            <SelectItem value="16:30:00">4:30 PM</SelectItem>
            <SelectItem value="17:00:00">5:00 PM</SelectItem>
            <SelectItem value="17:30:00">5:30 PM</SelectItem>
            <SelectItem value="18:00:00">6:00 PM</SelectItem>
            <SelectItem value="18:30:00">6:30 PM</SelectItem>
            <SelectItem value="19:00:00">7:00 PM</SelectItem>
            <SelectItem value="19:30:00">7:30 PM</SelectItem>
            <SelectItem value="20::00:00">8:00 PM</SelectItem>
            <SelectItem value="20:30:00">8:30 PM</SelectItem>
            <SelectItem value="21:00:00">9:00 PM</SelectItem>
            <SelectItem value="21:30:00">9:30 PM</SelectItem>
            <SelectItem value="22:00:00">10:00 PM</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
