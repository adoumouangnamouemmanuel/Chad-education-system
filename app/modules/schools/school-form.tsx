"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"

export function SchoolForm() {
  const [activeTab, setActiveTab] = useState("basic")
  const { toast } = useToast()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "School information saved",
      description: "The school information has been saved successfully.",
    })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>School Information</CardTitle>
          <CardDescription>
            Enter the details of the school to add it to the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="basic">Basic Information</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="needs">Declared Needs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">School Name</Label>
                    <Input id="name" placeholder="Enter school name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">School Type</Label>
                    <Select>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="established">Establishment Year</Label>
                    <Input id="established" type="number" placeholder="YYYY" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="registration">Registration Number</Label>
                    <Input id="registration" placeholder="Enter registration number" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Brief description of the school" />
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="location">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <Select>
                      <SelectTrigger id="region">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ndjamena">N'Djamena</SelectItem>
                        <SelectItem value="logone">Logone Oriental</SelectItem>
                        <SelectItem value="mayo-kebbi">Mayo-Kebbi</SelectItem>
                        <SelectItem value="ouaddai">Ouaddaï</SelectItem>
                        <SelectItem value="kanem">Kanem</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dept1">Department 1</SelectItem>
                        <SelectItem value="dept2">Department 2</SelectItem>
                        <SelectItem value="dept3">Department 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prefecture">Prefecture</Label>
                    <Select>
                      <SelectTrigger id="prefecture">
                        <SelectValue placeholder="Select prefecture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pref1">Prefecture 1</SelectItem>
                        <SelectItem value="pref2">Prefecture 2</SelectItem>
                        <SelectItem value="pref3">Prefecture 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sub-prefecture">Sub-Prefecture</Label>
                    <Select>
                      <SelectTrigger id="sub-prefecture">
                        <SelectValue placeholder="Select sub-prefecture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="subpref1">Sub-Prefecture 1</SelectItem>
                        <SelectItem value="subpref2">Sub-Prefecture 2</SelectItem>
                        <SelectItem value="subpref3">Sub-Prefecture 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="canton">Canton</Label>
                    <Input id="canton" placeholder="Enter canton" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">City/Village</Label>
                    <Input id="city" placeholder="Enter city or village" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gps">GPS Coordinates</Label>
                  <Input id="gps" placeholder="Latitude, Longitude" />
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="infrastructure">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="classrooms">Total Classrooms</Label>
                    <Input id="classrooms" type="number" placeholder="0" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="usable-classrooms">Usable Classrooms</Label>
                    <Input id="usable-classrooms" type="number" placeholder="0" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="water-source">Water Source</Label>
                    <Select>
                      <SelectTrigger id="water-source">
                        <SelectValue placeholder="Select water source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="municipal">Municipal Water Supply</SelectItem>
                        <SelectItem value="well">Well</SelectItem>
                        <SelectItem value="borehole">Borehole</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="toilets">Number of Toilets</Label>
                    <Input id="toilets" type="number" placeholder="0" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="electricity" />
                    <Label htmlFor="electricity">Electricity</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="library" />
                    <Label htmlFor="library">Library</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="laboratory" />
                    <Label htmlFor="laboratory">Laboratory</Label>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="sports" />
                    <Label htmlFor="sports">Sports Facility</Label>
                  </div>
                

\
