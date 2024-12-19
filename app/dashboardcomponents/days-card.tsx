'use client'

import { addDays } from "date-fns"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker"

export default function DaysCard() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -23),
    to: new Date(),
  })

  return (
    <div className="h-full w-full">
      <Card  className="bg-black text-white rounded-2xl overflow-hidden h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-gray-200 text-sm font-normal">Days Tracker</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[calc(100%-4rem)]">
          <div className="flex flex-col flex-grow space-y-1">
            <h2 className="text-3xl font-semibold">Day <span className='text-green-500'>32</span></h2>
            <p className="text-sm text-gray-400">
              Out 365 Days
            </p>
            <div className="flex-grow mt-4">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={1}
                className="rounded-md border-0"
                classNames={{
                  day_selected: "bg-green-500 text-white hover:bg-green-400 ",
                  day_today: "bg-accent text-accent-foreground",
                  day_range_middle: "bg-green-500/20 text-white",
                  day_range_end: "bg-green-500 text-white hover:bg-green-400 rounded-md",
                  day_range_start: "bg-green-500 text-white hover:bg-green-400 rounded-md",
                  cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
                  day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                  head_cell: "text-gray-400 font-normal text-sm ",
                  table: "w-full border-collapse",
                }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}