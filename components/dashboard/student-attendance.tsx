"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"

// Sample data
const months = ["January", "February", "March", "April", "May"]

const attendanceData = {
  January: { present: 20, absent: 2, late: 1, total: 23 },
  February: { present: 18, absent: 0, late: 2, total: 20 },
  March: { present: 22, absent: 1, late: 0, total: 23 },
  April: { present: 19, absent: 1, late: 1, total: 21 },
  May: { present: 10, absent: 0, late: 0, total: 10 },
}

// Sample absence dates
const absenceDates = [new Date(2023, 0, 15), new Date(2023, 2, 8), new Date(2023, 3, 12)]

// Sample late dates
const lateDates = [new Date(2023, 0, 22), new Date(2023, 1, 10), new Date(2023, 1, 24), new Date(2023, 3, 5)]

export function StudentAttendance() {
  return (
    <Tabs defaultValue="January">
      <TabsList className="mb-4">
        {months.map((month) => (
          <TabsTrigger key={month} value={month}>
            {month}
          </TabsTrigger>
        ))}
      </TabsList>

      {months.map((month) => (
        <TabsContent key={month} value={month}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm font-medium text-muted-foreground">Attendance Rate</div>
                    <div className="text-3xl font-bold mt-1">
                      {Math.round((attendanceData[month].present / attendanceData[month].total) * 100)}%
                    </div>
                    <div className="mt-2">
                      <Progress
                        value={(attendanceData[month].present / attendanceData[month].total) * 100}
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium text-muted-foreground">Present</div>
                      <div className="text-2xl font-bold mt-1">{attendanceData[month].present}</div>
                      <Badge className="mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        {Math.round((attendanceData[month].present / attendanceData[month].total) * 100)}%
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium text-muted-foreground">Absent</div>
                      <div className="text-2xl font-bold mt-1">{attendanceData[month].absent}</div>
                      <Badge className="mt-2 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                        {Math.round((attendanceData[month].absent / attendanceData[month].total) * 100)}%
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium text-muted-foreground">Late</div>
                      <div className="text-2xl font-bold mt-1">{attendanceData[month].late}</div>
                      <Badge className="mt-2 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                        {Math.round((attendanceData[month].late / attendanceData[month].total) * 100)}%
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-sm font-medium mb-4">Attendance Calendar</div>
                <Calendar
                  mode="single"
                  selected={new Date()}
                  className="rounded-md border"
                  modifiers={{
                    absent: absenceDates,
                    late: lateDates,
                  }}
                  modifiersStyles={{
                    absent: {
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      color: "rgb(185, 28, 28)",
                      fontWeight: "bold",
                    },
                    late: {
                      backgroundColor: "rgba(245, 158, 11, 0.1)",
                      color: "rgb(180, 83, 9)",
                      fontWeight: "bold",
                    },
                  }}
                />
                <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Present</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span>Absent</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <span>Late</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
