"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart3, Building2, Download, GraduationCap, MapPin, RefreshCw, Users } from "lucide-react"
import { RegionalMap } from "@/components/dashboard/regional-map"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { SchoolsTable } from "@/components/dashboard/schools-table"
import { RegionalNeeds } from "@/components/dashboard/regional-needs"

export default function InspectorDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Regional Inspector Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Inspector. Here's an overview of your regional education system.
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Total Schools",
            value: "245",
            icon: <Building2 className="h-5 w-5" />,
            change: "+3",
            color: "blue",
          },
          {
            title: "Total Teachers",
            value: "1,245",
            icon: <Users className="h-5 w-5" />,
            change: "+12",
            color: "green",
          },
          {
            title: "Total Students",
            value: "28,567",
            icon: <GraduationCap className="h-5 w-5" />,
            change: "+156",
            color: "purple",
          },
          {
            title: "Regional Rank",
            value: "3rd",
            icon: <BarChart3 className="h-5 w-5" />,
            change: "+1",
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Regional Map
              </CardTitle>
              <CardDescription>School distribution across your region</CardDescription>
            </CardHeader>
            <CardContent>
              <RegionalMap />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Regional Performance
              </CardTitle>
              <CardDescription>Average student performance by school</CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceChart />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Tabs defaultValue="schools">
          <TabsList className="mb-4">
            <TabsTrigger value="schools">Schools</TabsTrigger>
            <TabsTrigger value="needs">Regional Needs</TabsTrigger>
          </TabsList>
          <TabsContent value="schools">
            <Card>
              <CardHeader>
                <CardTitle>Schools in Your Region</CardTitle>
                <CardDescription>Overview of all schools under your supervision</CardDescription>
              </CardHeader>
              <CardContent>
                <SchoolsTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="needs">
            <Card>
              <CardHeader>
                <CardTitle>Regional Needs</CardTitle>
                <CardDescription>Infrastructure and resource needs across your region</CardDescription>
              </CardHeader>
              <CardContent>
                <RegionalNeeds />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
