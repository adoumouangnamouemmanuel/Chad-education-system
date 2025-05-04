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
import { useToast } from "@/hooks/use-toast"

export function StudentForm() {
  const [activeTab, setActiveTab] = useState("personal")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Student information saved",
      description: "The student information has been saved successfully.",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Student Information</CardTitle>
          <CardDescription>Enter the details of the student to add them to the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="academic">Academic Information</TabsTrigger>
              <TabsTrigger value="guardian">Guardian Information</TabsTrigger>
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
                    <Label htmlFor="place-of-birth">Place of Birth</Label>
                    <Input id="place-of-birth" placeholder="Enter place of birth" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input id="nationality" placeholder="Enter nationality" defaultValue="Chadian" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter address" />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="academic">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="school">School</Label>
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
                    <Label htmlFor="class">Class</Label>
                    <Select>
                      <SelectTrigger id="class">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="terminal-d">Terminal D</SelectItem>
                        <SelectItem value="terminal-c">Terminal C</SelectItem>
                        <SelectItem value="premiere-d">Première D</SelectItem>
                        <SelectItem value="premiere-c">Première C</SelectItem>
                        <SelectItem value="seconde-a">Seconde A</SelectItem>
                        <SelectItem value="seconde-c">Seconde C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="track">Academic Track</Label>
                    <Select>
                      <SelectTrigger id="track">
                        <SelectValue placeholder="Select academic track" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="literature">Literature</SelectItem>
                        <SelectItem value="general">General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="entry-year">Entry Year</Label>
                    <Input id="entry-year" type="number" placeholder="YYYY" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-id">Student ID</Label>
                    <Input id="student-id" placeholder="Enter student ID" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previous-school">Previous School</Label>
                    <Input id="previous-school" placeholder="Enter previous school (if applicable)" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="academic-notes">Academic Notes</Label>
                  <Textarea id="academic-notes" placeholder="Enter any academic notes or special considerations" />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="guardian">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guardian-name">Guardian Name</Label>
                    <Input id="guardian-name" placeholder="Enter guardian's full name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship</Label>
                    <Select>
                      <SelectTrigger id="relationship">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="father">Father</SelectItem>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="uncle">Uncle</SelectItem>
                        <SelectItem value="aunt">Aunt</SelectItem>
                        <SelectItem value="grandparent">Grandparent</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guardian-phone">Phone Number</Label>
                    <Input id="guardian-phone" placeholder="Enter guardian's phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guardian-email">Email (Optional)</Label>
                    <Input id="guardian-email" type="email" placeholder="Enter guardian's email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guardian-address">Address</Label>
                  <Textarea id="guardian-address" placeholder="Enter guardian's address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guardian-occupation">Occupation</Label>
                  <Input id="guardian-occupation" placeholder="Enter guardian's occupation" />
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">Save Student</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
