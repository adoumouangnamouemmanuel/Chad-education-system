"use client"

import { useState } from "react"
import { ArrowUpDown, Download, Filter, MoreHorizontal, Plus, Search, Trash, FileEdit, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

// Sample data for schools
const schools = [
  {
    id: 1,
    name: "Lycée National de N'Djamena",
    type: "Public",
    region: "N'Djamena",
    department: "N'Djamena",
    established_year: 1965,
    student_count: 1250,
    teacher_count: 78,
    status: "Active",
    electricity: true,
    water_source: true,
    internet_access: true,
  },
  {
    id: 2,
    name: "Collège d'Enseignement Général de Moundou",
    type: "Public",
    region: "Logone Occidental",
    department: "Moundou",
    established_year: 1972,
    student_count: 980,
    teacher_count: 52,
    status: "Active",
    electricity: true,
    water_source: true,
    internet_access: false,
  },
  {
    id: 3,
    name: "École Primaire de Sarh",
    type: "Public",
    region: "Moyen-Chari",
    department: "Sarh",
    established_year: 1980,
    student_count: 650,
    teacher_count: 28,
    status: "Active",
    electricity: false,
    water_source: true,
    internet_access: false,
  },
  {
    id: 4,
    name: "Lycée Privé Excellence",
    type: "Private",
    region: "N'Djamena",
    department: "N'Djamena",
    established_year: 2005,
    student_count: 780,
    teacher_count: 45,
    status: "Active",
    electricity: true,
    water_source: true,
    internet_access: true,
  },
  {
    id: 5,
    name: "Collège Évangélique d'Abéché",
    type: "Private",
    region: "Ouaddaï",
    department: "Abéché",
    established_year: 1995,
    student_count: 520,
    teacher_count: 32,
    status: "Active",
    electricity: true,
    water_source: true,
    internet_access: false,
  },
  {
    id: 6,
    name: "École Primaire de Bongor",
    type: "Public",
    region: "Mayo-Kebbi Est",
    department: "Bongor",
    established_year: 1978,
    student_count: 420,
    teacher_count: 18,
    status: "Active",
    electricity: false,
    water_source: true,
    internet_access: false,
  },
  {
    id: 7,
    name: "Lycée de Doba",
    type: "Public",
    region: "Logone Oriental",
    department: "Doba",
    established_year: 1985,
    student_count: 680,
    teacher_count: 38,
    status: "Active",
    electricity: true,
    water_source: true,
    internet_access: false,
  },
  {
    id: 8,
    name: "École Communautaire de Mongo",
    type: "Public",
    region: "Guéra",
    department: "Mongo",
    established_year: 2000,
    student_count: 320,
    teacher_count: 15,
    status: "Active",
    electricity: false,
    water_source: true,
    internet_access: false,
  },
]

export default function SchoolsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSchools, setSelectedSchools] = useState<number[]>([])

  const filteredSchools = schools.filter((school) => school.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const toggleSchoolSelection = (id: number) => {
    if (selectedSchools.includes(id)) {
      setSelectedSchools(selectedSchools.filter((schoolId) => schoolId !== id))
    } else {
      setSelectedSchools([...selectedSchools, id])
    }
  }

  const toggleAllSchools = () => {
    if (selectedSchools.length === filteredSchools.length) {
      setSelectedSchools([])
    } else {
      setSelectedSchools(filteredSchools.map((school) => school.id))
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Schools</h2>
          <p className="text-muted-foreground">Manage and view all schools in the system</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/schools/add">
            <Plus className="mr-2 h-4 w-4" /> Add School
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Schools</TabsTrigger>
            <TabsTrigger value="public">Public</TabsTrigger>
            <TabsTrigger value="private">Private</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search schools..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="ndjamena">N&apos;Djamena</SelectItem>
              <SelectItem value="logone">Logone Occidental</SelectItem>
              <SelectItem value="moyen">Moyen-Chari</SelectItem>
              <SelectItem value="ouaddai">Ouaddaï</SelectItem>
              <SelectItem value="mayo">Mayo-Kebbi Est</SelectItem>
              <SelectItem value="logone-oriental">Logone Oriental</SelectItem>
              <SelectItem value="guera">Guéra</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="all">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>All Schools</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox
                        checked={selectedSchools.length === filteredSchools.length && filteredSchools.length > 0}
                        onCheckedChange={toggleAllSchools}
                        aria-label="Select all schools"
                      />
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Name</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Teachers</TableHead>
                    <TableHead>Facilities</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSchools.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="h-24 text-center text-muted-foreground">
                        No schools found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredSchools.map((school) => (
                      <TableRow key={school.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedSchools.includes(school.id)}
                            onCheckedChange={() => toggleSchoolSelection(school.id)}
                            aria-label={`Select ${school.name}`}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{school.name}</TableCell>
                        <TableCell>
                          <Badge variant={school.type === "Public" ? "secondary" : "outline"}>{school.type}</Badge>
                        </TableCell>
                        <TableCell>{school.region}</TableCell>
                        <TableCell>{school.student_count}</TableCell>
                        <TableCell>{school.teacher_count}</TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            {school.electricity && (
                              <Badge variant="outline" className="bg-blue-50">
                                Electricity
                              </Badge>
                            )}
                            {school.water_source && (
                              <Badge variant="outline" className="bg-cyan-50">
                                Water
                              </Badge>
                            )}
                            {school.internet_access && (
                              <Badge variant="outline" className="bg-purple-50">
                                Internet
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={school.status === "Active" ? "default" : "secondary"}>{school.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileEdit className="mr-2 h-4 w-4" />
                                Edit School
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete School
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="public">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Public Schools</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox aria-label="Select all public schools" />
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Name</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Teachers</TableHead>
                    <TableHead>Facilities</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSchools
                    .filter((school) => school.type === "Public")
                    .map((school) => (
                      <TableRow key={school.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedSchools.includes(school.id)}
                            onCheckedChange={() => toggleSchoolSelection(school.id)}
                            aria-label={`Select ${school.name}`}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{school.name}</TableCell>
                        <TableCell>{school.region}</TableCell>
                        <TableCell>{school.student_count}</TableCell>
                        <TableCell>{school.teacher_count}</TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            {school.electricity && (
                              <Badge variant="outline" className="bg-blue-50">
                                Electricity
                              </Badge>
                            )}
                            {school.water_source && (
                              <Badge variant="outline" className="bg-cyan-50">
                                Water
                              </Badge>
                            )}
                            {school.internet_access && (
                              <Badge variant="outline" className="bg-purple-50">
                                Internet
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="default">{school.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileEdit className="mr-2 h-4 w-4" />
                                Edit School
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete School
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="private">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Private Schools</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox aria-label="Select all private schools" />
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Name</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Teachers</TableHead>
                    <TableHead>Facilities</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSchools
                    .filter((school) => school.type === "Private")
                    .map((school) => (
                      <TableRow key={school.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedSchools.includes(school.id)}
                            onCheckedChange={() => toggleSchoolSelection(school.id)}
                            aria-label={`Select ${school.name}`}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{school.name}</TableCell>
                        <TableCell>{school.region}</TableCell>
                        <TableCell>{school.student_count}</TableCell>
                        <TableCell>{school.teacher_count}</TableCell>
                        <TableCell>
                          <div className="flex space-x-1">
                            {school.electricity && (
                              <Badge variant="outline" className="bg-blue-50">
                                Electricity
                              </Badge>
                            )}
                            {school.water_source && (
                              <Badge variant="outline" className="bg-cyan-50">
                                Water
                              </Badge>
                            )}
                            {school.internet_access && (
                              <Badge variant="outline" className="bg-purple-50">
                                Internet
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="default">{school.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileEdit className="mr-2 h-4 w-4" />
                                Edit School
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete School
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
