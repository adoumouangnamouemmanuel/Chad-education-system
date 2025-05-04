"use client"

import { Card, CardContent } from "@/components/ui/card"

// Sample schedule data
const schedule = [
  {
    day: "Monday",
    periods: [
      { time: "08:00 - 10:00", subject: "Mathematics", teacher: "Mr. Jean Dupont", room: "Room 12" },
      { time: "10:15 - 12:15", subject: "Physics", teacher: "Mr. Ibrahim Hassan", room: "Lab 2" },
      { time: "14:00 - 16:00", subject: "French", teacher: "Ms. Marie Koné", room: "Room 8" },
    ],
  },
  {
    day: "Tuesday",
    periods: [
      { time: "08:00 - 10:00", subject: "Chemistry", teacher: "Mr. Ibrahim Hassan", room: "Lab 1" },
      { time: "10:15 - 12:15", subject: "English", teacher: "Ms. Fatima Ousmane", room: "Room 9" },
      { time: "14:00 - 16:00", subject: "History", teacher: "Mr. Ahmed Mahamat", room: "Room 5" },
    ],
  },
  {
    day: "Wednesday",
    periods: [
      { time: "08:00 - 10:00", subject: "Mathematics", teacher: "Mr. Jean Dupont", room: "Room 12" },
      { time: "10:15 - 12:15", subject: "Biology", teacher: "Mr. Ibrahim Hassan", room: "Lab 3" },
    ],
  },
  {
    day: "Thursday",
    periods: [
      { time: "08:00 - 10:00", subject: "Geography", teacher: "Ms. Fatima Ousmane", room: "Room 7" },
      { time: "10:15 - 12:15", subject: "Physics", teacher: "Mr. Ibrahim Hassan", room: "Lab 2" },
      { time: "14:00 - 16:00", subject: "French", teacher: "Ms. Marie Koné", room: "Room 8" },
    ],
  },
  {
    day: "Friday",
    periods: [
      { time: "08:00 - 10:00", subject: "Mathematics", teacher: "Mr. Jean Dupont", room: "Room 12" },
      { time: "10:15 - 12:15", subject: "Physical Education", teacher: "Mr. Ahmed Mahamat", room: "Sports Field" },
      { time: "14:00 - 16:00", subject: "English", teacher: "Ms. Fatima Ousmane", room: "Room 9" },
    ],
  },
]

export function StudentSchedule() {
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
                  <div className="text-xs text-muted-foreground">{period.teacher}</div>
                  <div className="text-xs text-muted-foreground">{period.room}</div>
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
