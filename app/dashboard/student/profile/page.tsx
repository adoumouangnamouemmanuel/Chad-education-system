"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  BookOpen,
  Calendar,
  Check,
  Clock,
  Edit2,
  FileText,
  GraduationCap,
  Home,
  Lock,
  Mail,
  Phone,
  School,
  User,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

// Sample data for charts
const gradeData = [
  { subject: "Mathematics", grade: 16, average: 14 },
  { subject: "French", grade: 15, average: 13 },
  { subject: "Physics", grade: 14, average: 12 },
  { subject: "Chemistry", grade: 17, average: 13 },
  { subject: "Biology", grade: 18, average: 14 },
  { subject: "History", grade: 13, average: 12 },
  { subject: "Geography", grade: 15, average: 13 },
];

const attendanceData = [
  { month: "Sep", attendance: 98 },
  { month: "Oct", attendance: 100 },
  { month: "Nov", attendance: 95 },
  { month: "Dec", attendance: 97 },
  { month: "Jan", attendance: 92 },
  { month: "Feb", attendance: 96 },
  { month: "Mar", attendance: 98 },
];

export default function StudentProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and academic records
          </p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Save Changes
            </>
          ) : (
            <>
              <Edit2 className="mr-2 h-4 w-4" /> Edit Profile
            </>
          )}
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="md:col-span-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-green-600 to-green-400"></div>
              <CardContent className="p-6 -mt-12 relative">
                <div className="absolute right-6 top-0">
                  <Badge className="bg-green-500 hover:bg-green-600">
                    Active
                  </Badge>
                </div>
                <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Student"
                  />
                  <AvatarFallback className="text-2xl">AM</AvatarFallback>
                </Avatar>
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-bold">Abakar Mahamat</h2>
                  <p className="text-muted-foreground">
                    Student ID: STD-2023-4567
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <School className="mr-1 h-4 w-4" />
                    Lycée National de N'Djamena
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Class: Terminal D</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">abakar.m@student.edu.td</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+235 65 XX XX XX</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Quartier Diguel, N'Djamena</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Enrolled: September 2020</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <h3 className="font-medium">Academic Summary</h3>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
                      <div className="flex justify-center">
                        <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold">14.5/20</div>
                      <div className="text-xs text-muted-foreground">
                        Overall Average
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                      <div className="flex justify-center">
                        <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="mt-1 font-semibold">95%</div>
                      <div className="text-xs text-muted-foreground">
                        Attendance
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-lg">
                      <div className="flex justify-center">
                        <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="mt-1 font-semibold">12</div>
                      <div className="text-xs text-muted-foreground">
                        Subjects
                      </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-lg">
                      <div className="flex justify-center">
                        <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div className="mt-1 font-semibold">3rd</div>
                      <div className="text-xs text-muted-foreground">
                        Class Rank
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="personal">
                  <User className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger value="academic">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Academic</span>
                </TabsTrigger>
                <TabsTrigger value="attendance">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Attendance</span>
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Settings</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                          id="fullName"
                          defaultValue="Abakar Mahamat"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input
                          id="studentId"
                          defaultValue="STD-2023-4567"
                          disabled={true}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="abakar.m@student.edu.td"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          defaultValue="+235 65 XX XX XX"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          defaultValue="2005-07-12"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Input
                          id="gender"
                          defaultValue="Male"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Home Address</Label>
                        <Input
                          id="address"
                          defaultValue="Quartier Diguel, N'Djamena"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Parent/Guardian Name</Label>
                        <Input
                          id="parentName"
                          defaultValue="Mahamat Ibrahim"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentContact">
                          Parent/Guardian Contact
                        </Label>
                        <Input
                          id="parentContact"
                          defaultValue="+235 66 XX XX XX"
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">
                          Emergency Contact
                        </Label>
                        <Input
                          id="emergencyContact"
                          defaultValue="+235 66 XX XX XX"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="healthInfo">Health Information</Label>
                      <Textarea
                        id="healthInfo"
                        rows={3}
                        defaultValue="No known allergies or medical conditions."
                        disabled={!isEditing}
                        className="resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="academic">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Performance</CardTitle>
                    <CardDescription>
                      View your academic records and performance metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Current Term Grades
                      </h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={gradeData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="subject" />
                            <YAxis domain={[0, 20]} />
                            <Tooltip />
                            <Legend />
                            <Bar
                              dataKey="grade"
                              name="Your Grade"
                              fill="#4ade80"
                            />
                            <Bar
                              dataKey="average"
                              name="Class Average"
                              fill="#93c5fd"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Academic History</h3>
                      <div className="space-y-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">
                                2022-2023 Academic Year
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Class: Première D
                              </div>
                              <div className="text-sm mt-1">
                                <span className="font-medium">
                                  Overall Average:
                                </span>{" "}
                                14.2/20
                              </div>
                              <div className="text-sm">
                                <span className="font-medium">Class Rank:</span>{" "}
                                5th out of 42
                              </div>
                            </div>
                            <Badge>Completed</Badge>
                          </div>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">
                                2021-2022 Academic Year
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Class: Seconde C
                              </div>
                              <div className="text-sm mt-1">
                                <span className="font-medium">
                                  Overall Average:
                                </span>{" "}
                                13.8/20
                              </div>
                              <div className="text-sm">
                                <span className="font-medium">Class Rank:</span>{" "}
                                7th out of 45
                              </div>
                            </div>
                            <Badge>Completed</Badge>
                          </div>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">
                                2020-2021 Academic Year
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Class: Troisième
                              </div>
                              <div className="text-sm mt-1">
                                <span className="font-medium">
                                  Overall Average:
                                </span>{" "}
                                15.1/20
                              </div>
                              <div className="text-sm">
                                <span className="font-medium">Class Rank:</span>{" "}
                                3rd out of 48
                              </div>
                            </div>
                            <Badge>Completed</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Certificates & Achievements
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-amber-500" />
                          <div>
                            <div className="font-medium">
                              BEPC (Brevet d'Études du Premier Cycle)
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Obtained with Distinction - June 2021
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-blue-500" />
                          <div>
                            <div className="font-medium">
                              Mathematics Competition - Regional Winner
                            </div>
                            <div className="text-sm text-muted-foreground">
                              N'Djamena Regional Contest - March 2022
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Award className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="font-medium">
                              Science Fair - First Prize
                            </div>
                            <div className="text-sm text-muted-foreground">
                              School Science Exhibition - December 2022
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="attendance">
                <Card>
                  <CardHeader>
                    <CardTitle>Attendance Record</CardTitle>
                    <CardDescription>
                      Track your attendance and punctuality
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Attendance Overview
                      </h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={attendanceData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis domain={[0, 100]} />
                            <Tooltip />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="attendance"
                              name="Attendance Rate (%)"
                              stroke="#10b981"
                              activeDot={{ r: 8 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Attendance Details
                      </h3>
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Card className="bg-green-50 dark:bg-green-950">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                                95%
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Overall Attendance
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="bg-amber-50 dark:bg-amber-950">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                                3
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Absences This Term
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="bg-blue-50 dark:bg-blue-950">
                            <CardContent className="p-4 text-center">
                              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                2
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Late Arrivals
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Recent Attendance</h3>
                      <div className="space-y-3">
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">
                                Monday, March 20, 2023
                              </div>
                              <div className="text-sm text-muted-foreground">
                                All classes attended
                              </div>
                            </div>
                            <Badge className="bg-green-500">Present</Badge>
                          </div>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">
                                Tuesday, March 21, 2023
                              </div>
                              <div className="text-sm text-muted-foreground">
                                All classes attended
                              </div>
                            </div>
                            <Badge className="bg-green-500">Present</Badge>
                          </div>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">
                                Wednesday, March 22, 2023
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Arrived 15 minutes late to first class
                              </div>
                            </div>
                            <Badge className="bg-amber-500">Late</Badge>
                          </div>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">
                                Thursday, March 23, 2023
                              </div>
                              <div className="text-sm text-muted-foreground">
                                All classes attended
                              </div>
                            </div>
                            <Badge className="bg-green-500">Present</Badge>
                          </div>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">
                                Friday, March 24, 2023
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Absent due to illness (excused)
                              </div>
                            </div>
                            <Badge className="bg-red-500">Absent</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account security and notification preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">
                            Current Password
                          </Label>
                          <Input
                            id="currentPassword"
                            type="password"
                            disabled={!isEditing}
                            placeholder="••••••••"
                          />
                        </div>
                        <div></div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input
                            id="newPassword"
                            type="password"
                            disabled={!isEditing}
                            placeholder="••••••••"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">
                            Confirm New Password
                          </Label>
                          <Input
                            id="confirmPassword"
                            type="password"
                            disabled={!isEditing}
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Notification Preferences
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              Email Notifications
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Receive important updates via email
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">SMS Notifications</div>
                            <div className="text-sm text-muted-foreground">
                              Receive urgent notifications via SMS
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">Grade Updates</div>
                            <div className="text-sm text-muted-foreground">
                              Receive notifications when new grades are posted
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">Attendance Alerts</div>
                            <div className="text-sm text-muted-foreground">
                              Receive alerts about attendance issues
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              Parent/Guardian Updates
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Send copies of notifications to parent/guardian
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Privacy Settings</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              Show My Rank in Class
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Allow your rank to be visible to other students
                            </div>
                          </div>
                          <Switch checked={false} disabled={!isEditing} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <div className="font-medium">
                              Share Academic Achievements
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Allow your achievements to be shared on school
                              platforms
                            </div>
                          </div>
                          <Switch checked={true} disabled={!isEditing} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}