"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Download, GraduationCap, RefreshCw, Trophy } from "lucide-react"
import { StudentSchedule } from "@/components/dashboard/student-schedule"
import { StudentGrades } from "@/components/dashboard/student-grades"
import { StudentAttendance } from "@/components/dashboard/student-attendance"

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Student. Here's an overview of your academic performance.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Current Class", value: "Terminal D", icon: <BookOpen className="h-5 w-5" />, color: "blue" },
          { title: "Overall Average", value: "14.5/20", icon: <Trophy className="h-5 w-5" />, color: "amber" },
          { title: "Attendance Rate", value: "95%", icon: <Calendar className="h-5 w-5" />, color: "green" },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-2 rounded-full bg-${stat.color}-100 text-${stat.color}-600`}>{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Academic Performance
            </CardTitle>
            <CardDescription>Your grades for the current academic year</CardDescription>
          </CardHeader>
          <CardContent>
            <StudentGrades />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Tabs defaultValue="schedule">
          <TabsList className="mb-4">
            <TabsTrigger value="schedule">Class Schedule</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
          </TabsList>
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Your class schedule for the current week</CardDescription>
              </CardHeader>
              <CardContent>
                <StudentSchedule />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="attendance">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Record</CardTitle>
                <CardDescription>Your attendance record for the current term</CardDescription>
              </CardHeader>
              <CardContent>
                <StudentAttendance />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
