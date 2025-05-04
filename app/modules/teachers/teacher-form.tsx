"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export function TeacherForm() {
  const [activeTab, setActiveTab] = useState("personal")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Teacher information saved",
      description: "The teacher information has been saved successfully.",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Teacher Information</CardTitle>
          <CardDescription>Enter the details of the teacher to add them to the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="professional">Professional Information</TabsTrigger>
              <TabsTrigger value="assignment">School Assignment</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter first name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <RadioGroup defaultValue="male" className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="id-number">National ID Number</Label>
                    <Input id="id-number" placeholder="Enter national ID number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter address" />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="professional">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="qualification">Highest Qualification</Label>
                    <Select>
                      <SelectTrigger id="qualification">
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="certificate">Teaching Certificate</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="0" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="employment-type">Employment Type</Label>
                    <Select>
                      <SelectTrigger id="employment-type">
                        <SelectValue placeholder="Select employment type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="permanent">Permanent</SelectItem>
                        <SelectItem value="contractual">Contractual</SelectItem>
                        <SelectItem value="volunteer">Volunteer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Subjects Taught</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Mathematics",
                      "Physics",
                      "Chemistry",
                      "Biology",
                      "French",
                      "English",
                      "History",
                      "Geography",
                      "Physical Education",
                    ].map((subject) => (
                      <div key={subject} className="flex items-center space-x-2">
                        <Checkbox id={subject.toLowerCase()} />
                        <Label htmlFor={subject.toLowerCase()}>{subject}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Textarea id="specialization" placeholder="Enter specialization or additional skills" />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="assignment">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="school">Assigned School</Label>
                    <Select>
                      <SelectTrigger id="school">
                        <SelectValue placeholder="Select school" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school1">Lycée National de N'Djamena</SelectItem>
                        <SelectItem value="school2">Collège d'Enseignement Général de Moundou</SelectItem>
                        <SelectItem value="school3">École Primaire de Sarh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Select>
                      <SelectTrigger id="position">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="head-teacher">Head Teacher</SelectItem>
                        <SelectItem value="department-head">Department Head</SelectItem>
                        <SelectItem value="vice-principal">Vice Principal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="classes">Classes Taught</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Terminal D", "Terminal C", "Première D", "Première C", "Seconde A", "Seconde C"].map((cls) => (
                        <div key={cls} className="flex items-center space-x-2">
                          <Checkbox id={cls.toLowerCase().replace(" ", "-")} />
                          <Label htmlFor={cls.toLowerCase().replace(" ", "-")}>{cls}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hours">Weekly Teaching Hours</Label>
                    <Input id="hours" type="number" placeholder="0" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea id="notes" placeholder="Enter any additional notes about the teacher's assignment" />
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Save Teacher</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
