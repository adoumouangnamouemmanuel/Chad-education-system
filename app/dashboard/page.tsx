"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts"
import { AlertTriangle, Building, GraduationCap, School, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Sample data for charts
const schoolsByRegion = [
  { name: "N'Djamena", value: 450 },
  { name: "Logone Oriental", value: 380 },
  { name: "Mayo-Kebbi Est", value: 320 },
  { name: "Ouaddaï", value: 280 },
  { name: "Moyen-Chari", value: 250 },
  { name: "Other Regions", value: 1200 },
]

const studentsByYear = [
  { year: "2018", students: 750000 },
  { year: "2019", students: 820000 },
  { year: "2020", students: 780000 },
  { year: "2021", students: 850000 },
  { year: "2022", students: 920000 },
  { year: "2023", students: 980000 },
]

const schoolPerformance = [
  {
    name: "Jan",
    public: 65,
    private: 78,
  },
  {
    name: "Feb",
    public: 59,
    private: 80,
  },
  {
    name: "Mar",
    public: 62,
    private: 82,
  },
  {
    name: "Apr",
    public: 68,
    private: 79,
  },
  {
    name: "May",
    public: 71,
    private: 83,
  },
  {
    name: "Jun",
    public: 75,
    private: 85,
  },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

const recentAlerts = [
  {
    id: 1,
    school: "Lycée National de N'Djamena",
    issue: "Infrastructure needs urgent repair",
    priority: "High",
    date: "2023-05-10",
  },
  {
    id: 2,
    school: "École Primaire de Moundou",
    issue: "Shortage of teaching staff",
    priority: "Medium",
    date: "2023-05-08",
  },
  {
    id: 3,
    school: "Collège d'Abéché",
    issue: "Need for additional classrooms",
    priority: "High",
    date: "2023-05-05",
  },
  {
    id: 4,
    school: "École de Sarh",
    issue: "Water supply issues",
    priority: "Medium",
    date: "2023-05-03",
  },
]

const recentUpdates = [
  {
    id: 1,
    user: "Regional Inspector",
    action: "Completed inspection at Lycée de Bongor",
    time: "2 hours ago",
    avatar: "RI",
  },
  {
    id: 2,
    user: "School Director",
    action: "Updated school profile for École de Doba",
    time: "5 hours ago",
    avatar: "SD",
  },
  {
    id: 3,
    user: "Teacher",
    action: "Submitted grades for Term 2 at Collège de Mongo",
    time: "Yesterday",
    avatar: "T",
  },
  {
    id: 4,
    user: "System Admin",
    action: "Added 3 new schools to the database",
    time: "2 days ago",
    avatar: "SA",
  },
]

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome to the Chad National School Digital Management System</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="ndjamena">N&apos;Djamena</SelectItem>
              <SelectItem value="logone">Logone Oriental</SelectItem>
              <SelectItem value="mayo">Mayo-Kebbi Est</SelectItem>
              <SelectItem value="ouaddai">Ouaddaï</SelectItem>
              <SelectItem value="moyen">Moyen-Chari</SelectItem>
            </SelectContent>
          </Select>
          <Button>Export Report</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
                  <School className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,856</div>
                  <p className="text-xs text-muted-foreground">+156 from last year</p>
                  <div className="mt-4 h-1 w-full rounded-full bg-muted">
                    <div className="h-1 w-[75%] rounded-full bg-primary"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42,385</div>
                  <p className="text-xs text-muted-foreground">+2,145 from last year</p>
                  <div className="mt-4 h-1 w-full rounded-full bg-muted">
                    <div className="h-1 w-[65%] rounded-full bg-primary"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">982,547</div>
                  <p className="text-xs text-muted-foreground">+62,354 from last year</p>
                  <div className="mt-4 h-1 w-full rounded-full bg-muted">
                    <div className="h-1 w-[85%] rounded-full bg-primary"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Infrastructure Needs</CardTitle>
                  <Building className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">356 high priority</p>
                  <div className="mt-4 h-1 w-full rounded-full bg-muted">
                    <div className="h-1 w-[45%] rounded-full bg-destructive"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Student Enrollment Trends</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={studentsByYear}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="#0ea5e9" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Schools by Region</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart>
                    <Pie
                      data={schoolsByRegion}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {schoolsByRegion.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Academic Performance Comparison</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={schoolPerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="public"
                      stroke="#0ea5e9"
                      name="Public Schools"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="private" stroke="#10b981" name="Private Schools" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center space-x-4 rounded-md border p-4">
                      <AlertTriangle
                        className={alert.priority === "High" ? "h-5 w-5 text-destructive" : "h-5 w-5 text-amber-500"}
                      />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{alert.school}</p>
                        <p className="text-sm text-muted-foreground">{alert.issue}</p>
                      </div>
                      <Badge variant={alert.priority === "High" ? "destructive" : "outline"}>{alert.priority}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <Card>
              <CardHeader>
                <CardTitle>Recent System Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUpdates.map((update) => (
                    <div key={update.id} className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{update.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{update.user}</p>
                        <p className="text-sm text-muted-foreground">{update.action}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">{update.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Detailed analytics content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Reports Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Detailed reports content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Alerts Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Detailed alerts content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
