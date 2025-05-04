"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample schedule data
const schedule = [
  {
    day: "Monday",
    periods: [
      { time: "08:00 - 10:00", class: "Terminal D", subject: "Mathematics", room: "Room 12" },
      { time: "10:15 - 12:15", class: "Première C", subject: "Mathematics", room: "Room 8" },
      { time: "14:00 - 16:00", class: "Seconde A", subject: "Mathematics", room: "Room 5" },
    ],
  },
  {
    day: "Tuesday",
    periods: [
      { time: "08:00 - 10:00", class: "Terminal C", subject: "Physics", room: "Lab 2" },
      { time: "10:15 - 12:15", class: "Première D", subject: "Mathematics", room: "Room 9" },
    ],
  },
  {
    day: "Wednesday",
    periods: [
      { time: "08:00 - 10:00", class: "Terminal D", subject: "Mathematics", room: "Room 12" },
      { time: "10:15 - 12:15", class: "Seconde A", subject: "Mathematics", room: "Room 5" },
    ],
  },
  {
    day: "Thursday",
    periods: [
      { time: "08:00 - 10:00", class: "Première C", subject: "Mathematics", room: "Room 8" },
      { time: "10:15 - 12:15", class: "Terminal C", subject: "Physics", room: "Lab 2" },
      { time: "14:00 - 16:00", class: "Première D", subject: "Mathematics", room: "Room 9" },
    ],
  },
  {
    day: "Friday",
    periods: [
      { time: "08:00 - 10:00", class: "Terminal D", subject: "Mathematics", room: "Room 12" },
      { time: "10:15 - 12:15", class: "Seconde A", subject: "Mathematics", room: "Room 5" },
    ],
  },
]

export function ClassSchedule() {
  // Determine current day for highlighting
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const currentDay = days[new Date().getDay()]

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {schedule.map((day) => (
        <Card key={day.day} className={day.day === currentDay ? "border-blue-500" : ""}>
          <CardContent className="p-4">
            <div className="font-semibold mb-3">{day.day}</div>
            <div className="space-y-3">
              {day.periods.map((period, index) => (
                <div key={index} className="text-sm p-2 rounded-md bg-muted">
                  <div className="text-xs text-muted-foreground">{period.time}</div>
                  <div className="font-medium">{period.subject}</div>
                  <div className="flex items-center justify-between mt-1">
                    <Badge variant="outline">{period.class}</Badge>
                    <span className="text-xs text-muted-foreground">{period.room}</span>
                  </div>
                </div>
              ))}
              {day.periods.length === 0 && (
                <div className="text-sm text-muted-foreground text-center py-4">No classes</div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
