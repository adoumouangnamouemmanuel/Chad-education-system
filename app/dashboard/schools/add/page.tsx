"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function AddSchoolPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/dashboard/schools")
    }, 1500)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/schools">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Add New School</h2>
            <p className="text-muted-foreground">Create a new school profile in the system</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="staff">Staff & Students</TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit}>
          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the basic details about the school</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">School Name</Label>
                    <Input id="name" placeholder="Enter school name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">School Type</Label>
                    <Select required>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="established_year">Establishment Year</Label>
                    <Input id="established_year" type="number" placeholder="Year established" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registration_number">Registration Number</Label>
                    <Input id="registration_number" placeholder="Official registration number" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Brief description of the school" rows={3} />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-end">
              <Button type="button" onClick={() => document.getElementById("location-tab")?.click()}>
                Next: Location
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="location" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Location Information</CardTitle>
                <CardDescription>Enter the location details of the school</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Select required>
                      <SelectTrigger id="region">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ndjamena">N&apos;Djamena</SelectItem>
                        <SelectItem value="logone_occidental">Logone Occidental</SelectItem>
                        <SelectItem value="logone_oriental">Logone Oriental</SelectItem>
                        <SelectItem value="mayo_kebbi_est">Mayo-Kebbi Est</SelectItem>
                        <SelectItem value="mayo_kebbi_ouest">Mayo-Kebbi Ouest</SelectItem>
                        <SelectItem value="moyen_chari">Moyen-Chari</SelectItem>
                        <SelectItem value="ouaddai">Ouaddaï</SelectItem>
                        <SelectItem value="guera">Guéra</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select required>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ndjamena">N&apos;Djamena</SelectItem>
                        <SelectItem value="moundou">Moundou</SelectItem>
                        <SelectItem value="sarh">Sarh</SelectItem>
                        <SelectItem value="abeche">Abéché</SelectItem>
                        <SelectItem value="bongor">Bongor</SelectItem>
                        <SelectItem value="doba">Doba</SelectItem>
                        <SelectItem value="mongo">Mongo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prefecture">Prefecture</Label>
                    <Input id="prefecture" placeholder="Prefecture" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sub_prefecture">Sub-Prefecture</Label>
                    <Input id="sub_prefecture" placeholder="Sub-Prefecture" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="canton">Canton</Label>
                    <Input id="canton" placeholder="Canton" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city_village">City/Village</Label>
                    <Input id="city_village" placeholder="City or Village" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="gps_coordinates">GPS Coordinates</Label>
                    <Input id="gps_coordinates" placeholder="GPS coordinates (optional)" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => document.getElementById("basic-tab")?.click()}>
                Previous: Basic Info
              </Button>
              <Button type="button" onClick={() => document.getElementById("infrastructure-tab")?.click()}>
                Next: Infrastructure
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="infrastructure" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Information</CardTitle>
                <CardDescription>Enter details about the school&apos;s infrastructure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="num_classrooms">Total Classrooms</Label>
                    <Input id="num_classrooms" type="number" placeholder="Total number of classrooms" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="num_usable_classrooms">Usable Classrooms</Label>
                    <Input
                      id="num_usable_classrooms"
                      type="number"
                      placeholder="Number of usable classrooms"
                      required
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="electricity" />
                      <Label htmlFor="electricity">Electricity Available</Label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="water_source" />
                      <Label htmlFor="water_source">Water Source Available</Label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="toilets" />
                      <Label htmlFor="toilets">Toilets Available</Label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="library" />
                      <Label htmlFor="library">Library Available</Label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lab" />
                      <Label htmlFor="lab">Laboratory Available</Label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sports_facilities" />
                      <Label htmlFor="sports_facilities">Sports Facilities Available</Label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="canteen" />
                      <Label htmlFor="canteen">Canteen Available</Label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="boarding" />
                      <Label htmlFor="boarding">Boarding Available</Label>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="internet_access" />
                      <Label htmlFor="internet_access">Internet Access Available</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={() => document.getElementById("location-tab")?.click()}>
                Previous: Location
              </Button>
              <Button type="button" onClick={() => document.getElementById("staff-tab")?.click()}>
                Next: Staff & Students
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="staff" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Staff & Students Information</CardTitle>
                <CardDescription>Enter details about staff and students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="student_count">Total Students</Label>
                    <Input id="student_count" type="number" placeholder="Total number of students" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teacher_count">Total Teachers</Label>
                    <Input id="teacher_count" type="number" placeholder="Total number of teachers" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="declared_needs">Declared Needs</Label>
                    <Textarea
                      id="declared_needs"
                      placeholder="Any specific needs for materials, infrastructure, or personnel"
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("infrastructure-tab")?.click()}
                >
                  Previous: Infrastructure
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Saving..."
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save School
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </form>
      </Tabs>
    </div>
  )
}
