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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

// Sample data for students
const students = [
  {
    id: 1,
    full_name: "Abdoulaye Mahamat",
    gender: "Male",
    dob: "2005-03-15",
    school: "Lycée National de N'Djamena",
    current_class: "Terminale",
    academic_track: "Science",
    guardian_name: "Mahamat Ibrahim",
    entry_year: 2018,
    status: "Enrolled",
  },
  {
    id: 2,
    full_name: "Fatima Ousmane",
    gender: "Female",
    dob: "2006-07-22",
    school: "Lycée National de N'Djamena",
    current_class: "Première",
    academic_track: "Literature",
    guardian_name: "Ousmane Ali",
    entry_year: 2019,
    status: "Enrolled",
  },
  {
    id: 3,
    full_name: "Jean-Pierre Ndoubadoum",
    gender: "Male",
    dob: "2007-11-05",
    school: "Collège d'Enseignement Général de Moundou",
    current_class: "4ème",
    academic_track: "General",
    guardian_name: "Ndoubadoum Pascal",
    entry_year: 2020,
    status: "Enrolled",
  },
  {
    id: 4,
    full_name: "Mariam Hassan",
    gender: "Female",
    dob: "2008-02-18",
    school: "Collège d'Enseignement Général de Moundou",
    current_class: "5ème",
    academic_track: "General",
    guardian_name: "Hassan Abakar",
    entry_year: 2021,
    status: "Enrolled",
  },
  {
    id: 5,
    full_name: "Ibrahim Youssouf",
    gender: "Male",
    dob: "2010-09-30",
    school: "École Primaire de Sarh",
    current_class: "CM2",
    academic_track: "Primary",
    guardian_name: "Youssouf Mahamat",
    entry_year: 2016,
    status: "Enrolled",
  },
  {
    id: 6,
    full_name: "Aisha Deby",
    gender: "Female",
    dob: "2011-05-12",
    school: "École Primaire de Sarh",
    current_class: "CM1",
    academic_track: "Primary",
    guardian_name: "Deby Itno",
    entry_year: 2017,
    status: "Enrolled",
  },
  {
    id: 7,
    full_name: "Paul Mbainaissem",
    gender: "Male",
    dob: "2006-12-03",
    school: "Lycée Privé Excellence",
    current_class: "Seconde",
    academic_track: "Science",
    guardian_name: "Mbainaissem David",
    entry_year: 2019,
    status: "Transferred",
  },
  {
    id: 8,
    full_name: "Halima Djimet",
    gender: "Female",
    dob: "2009-08-25",
    school: "Collège Évangélique d'Abéché",
    current_class: "6ème",
    academic_track: "General",
    guardian_name: "Djimet Adoum",
    entry_year: 2022,
    status: "Enrolled",
  },
]

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStudents, setSelectedStudents] = useState<number[]>([])

  const filteredStudents = students.filter((student) =>
    student.full_name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleStudentSelection = (id: number) => {
    if (selectedStudents.includes(id)) {
      setSelectedStudents(selectedStudents.filter((studentId) => studentId !== id))
    } else {
      setSelectedStudents([...selectedStudents, id])
    }
  }

  const toggleAllStudents = () => {
    if (selectedStudents.length === filteredStudents.length) {
      setSelectedStudents([])
    } else {
      setSelectedStudents(filteredStudents.map((student) => student.id))
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Students</h2>
          <p className="text-muted-foreground">Manage and view all students in the system</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/students/add">
            <Plus className="mr-2 h-4 w-4" /> Add Student
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Students</TabsTrigger>
            <TabsTrigger value="primary">Primary</TabsTrigger>
            <TabsTrigger value="secondary">Secondary</TabsTrigger>
            <TabsTrigger value="transferred">Transferred</TabsTrigger>
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
              placeholder="Search students..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="School" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Schools</SelectItem>
              <SelectItem value="lycee_ndjamena">Lycée National de N&apos;Djamena</SelectItem>
              <SelectItem value="college_moundou">Collège d&apos;Enseignement Général de Moundou</SelectItem>
              <SelectItem value="ecole_sarh">École Primaire de Sarh</SelectItem>
              <SelectItem value="lycee_excellence">Lycée Privé Excellence</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="all">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>All Students</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox
                        checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                        onCheckedChange={toggleAllStudents}
                        aria-label="Select all students"
                      />
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Name</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Track</TableHead>
                    <TableHead>Guardian</TableHead>
                    <TableHead>Entry Year</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="h-24 text-center text-muted-foreground">
                        No students found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedStudents.includes(student.id)}
                            onCheckedChange={() => toggleStudentSelection(student.id)}
                            aria-label={`Select ${student.full_name}`}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {student.full_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{student.full_name}</div>
                              <div className="text-sm text-muted-foreground">
                                {student.gender}, {new Date().getFullYear() - new Date(student.dob).getFullYear()} years
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{student.school}</TableCell>
                        <TableCell>{student.current_class}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-muted">
                            {student.academic_track}
                          </Badge>
                        </TableCell>
                        <TableCell>{student.guardian_name}</TableCell>
                        <TableCell>{student.entry_year}</TableCell>
                        <TableCell>
                          <Badge variant={student.status === "Enrolled" ? "default" : "secondary"}>
                            {student.status}
                          </Badge>
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
                                Edit Student
                              </DropdownMenuItem>
                              <DropdownMenuItem>Transfer Student</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Student
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

        <TabsContent value="primary">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Primary School Students</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox aria-label="Select all primary students" />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Guardian</TableHead>
                    <TableHead>Entry Year</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents
                    .filter((student) => student.academic_track === "Primary")
                    .map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedStudents.includes(student.id)}
                            onCheckedChange={() => toggleStudentSelection(student.id)}
                            aria-label={`Select ${student.full_name}`}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {student.full_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{student.full_name}</div>
                              <div className="text-sm text-muted-foreground">
                                {student.gender}, {new Date().getFullYear() - new Date(student.dob).getFullYear()} years
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{student.school}</TableCell>
                        <TableCell>{student.current_class}</TableCell>
                        <TableCell>{student.guardian_name}</TableCell>
                        <TableCell>{student.entry_year}</TableCell>
                        <TableCell>
                          <Badge variant={student.status === "Enrolled" ? "default" : "secondary"}>
                            {student.status}
                          </Badge>
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
                                Edit Student
                              </DropdownMenuItem>
                              <DropdownMenuItem>Transfer Student</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Student
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

        <TabsContent value="secondary">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Secondary School Students</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox aria-label="Select all secondary students" />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Track</TableHead>
                    <TableHead>Guardian</TableHead>
                    <TableHead>Entry Year</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents
                    .filter(
                      (student) =>
                        student.academic_track === "Science" ||
                        student.academic_track === "Literature" ||
                        student.academic_track === "General",
                    )
                    .map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedStudents.includes(student.id)}
                            onCheckedChange={() => toggleStudentSelection(student.id)}
                            aria-label={`Select ${student.full_name}`}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {student.full_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{student.full_name}</div>
                              <div className="text-sm text-muted-foreground">
                                {student.gender}, {new Date().getFullYear() - new Date(student.dob).getFullYear()} years
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{student.school}</TableCell>
                        <TableCell>{student.current_class}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-muted">
                            {student.academic_track}
                          </Badge>
                        </TableCell>
                        <TableCell>{student.guardian_name}</TableCell>
                        <TableCell>{student.entry_year}</TableCell>
                        <TableCell>
                          <Badge variant={student.status === "Enrolled" ? "default" : "secondary"}>
                            {student.status}
                          </Badge>
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
                                Edit Student
                              </DropdownMenuItem>
                              <DropdownMenuItem>Transfer Student</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Student
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

        <TabsContent value="transferred">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Transferred Students</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox aria-label="Select all transferred students" />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Track</TableHead>
                    <TableHead>Guardian</TableHead>
                    <TableHead>Entry Year</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents
                    .filter((student) => student.status === "Transferred")
                    .map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedStudents.includes(student.id)}
                            onCheckedChange={() => toggleStudentSelection(student.id)}
                            aria-label={`Select ${student.full_name}`}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {student.full_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{student.full_name}</div>
                              <div className="text-sm text-muted-foreground">
                                {student.gender}, {new Date().getFullYear() - new Date(student.dob).getFullYear()} years
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{student.school}</TableCell>
                        <TableCell>{student.current_class}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-muted">
                            {student.academic_track}
                          </Badge>
                        </TableCell>
                        <TableCell>{student.guardian_name}</TableCell>
                        <TableCell>{student.entry_year}</TableCell>
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
                                Edit Student
                              </DropdownMenuItem>
                              <DropdownMenuItem>Revert Transfer</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Student
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
