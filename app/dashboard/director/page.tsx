"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Building2, Download, GraduationCap, PlusCircle, RefreshCw, Users } from "lucide-react"
import { SchoolProfile } from "@/components/dashboard/school-profile"
import { TeachersOverview } from "@/components/dashboard/teachers-overview"
import { StudentsOverview } from "@/components/dashboard/students-overview"

export default function DirectorDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">School Director Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Director. Here's an overview of your school.</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Total Students",
            value: "1,234",
            icon: <GraduationCap className="h-5 w-5" />,
            change: "+12",
            color: "blue",
          },
          { title: "Total Teachers", value: "45", icon: <Users className="h-5 w-5" />, change: "+2", color: "green" },
          { title: "Classrooms", value: "28", icon: <Building2 className="h-5 w-5" />, change: "+0", color: "purple" },
          {
            title: "Urgent Needs",
            value: "3",
            icon: <AlertTriangle className="h-5 w-5" />,
            change: "-1",
            color: "amber",
          },
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
                <div className="mt-4 flex items-center text-sm">
                  <span className={`font-medium ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle>School Profile</CardTitle>
            <CardDescription>Overview of your school's information and infrastructure</CardDescription>
          </CardHeader>
          <CardContent>
            <SchoolProfile />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Tabs defaultValue="teachers">
          <TabsList className="mb-4">
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>
          <TabsContent value="teachers">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Teachers Overview</CardTitle>
                  <CardDescription>Manage your school's teaching staff</CardDescription>
                </div>
                <Button size="sm">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Teacher
                </Button>
              </CardHeader>
              <CardContent>
                <TeachersOverview />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="students">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Students Overview</CardTitle>
                  <CardDescription>Manage your school's student body</CardDescription>
                </div>
                <Button size="sm">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Student
                </Button>
              </CardHeader>
              <CardContent>
                <StudentsOverview />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
