"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Clock, Download, GraduationCap, PenLine, RefreshCw } from "lucide-react"
import { ClassSchedule } from "@/components/dashboard/class-schedule"
import { GradeEntry } from "@/components/dashboard/grade-entry"
import { AttendanceTracker } from "@/components/dashboard/attendance-tracker"

export default function TeacherDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Teacher. Here's an overview of your classes and students.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Classes", value: "5", icon: <BookOpen className="h-5 w-5" />, color: "blue" },
          { title: "Students", value: "187", icon: <GraduationCap className="h-5 w-5" />, color: "green" },
          { title: "Hours This Week", value: "24", icon: <Clock className="h-5 w-5" />, color: "purple" },
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
              <Calendar className="h-5 w-5" />
              Weekly Schedule
            </CardTitle>
            <CardDescription>Your teaching schedule for the current week</CardDescription>
          </CardHeader>
          <CardContent>
            <ClassSchedule />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Tabs defaultValue="grades">
          <TabsList className="mb-4">
            <TabsTrigger value="grades">Grade Entry</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
          </TabsList>
          <TabsContent value="grades">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PenLine className="h-5 w-5" />
                  Grade Entry
                </CardTitle>
                <CardDescription>Enter and manage student grades</CardDescription>
              </CardHeader>
              <CardContent>
                <GradeEntry />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="attendance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Attendance Tracker
                </CardTitle>
                <CardDescription>Track student attendance for your classes</CardDescription>
              </CardHeader>
              <CardContent>
                <AttendanceTracker />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
