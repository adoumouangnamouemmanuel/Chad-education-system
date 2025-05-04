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

// Sample data for teachers
const teachers = [
  {
    id: 1,
    full_name: "Jean Dupont",
    gender: "Male",
    school: "Lycée National de N'Djamena",
    subjects: ["Mathematics", "Physics"],
    employment_type: "Permanent",
    experience_years: 12,
    qualification: "Master's Degree",
    status: "Active",
  },
  {
    id: 2,
    full_name: "Marie Koumba",
    gender: "Female",
    school: "Collège d'Enseignement Général de Moundou",
    subjects: ["French", "History"],
    employment_type: "Permanent",
    experience_years: 8,
    qualification: "Bachelor's Degree",
    status: "Active",
  },
  {
    id: 3,
    full_name: "Ibrahim Hassan",
    gender: "Male",
    school: "École Primaire de Sarh",
    subjects: ["General Education"],
    employment_type: "Contractual",
    experience_years: 5,
    qualification: "Teaching Certificate",
    status: "Active",
  },
  {
    id: 4,
    full_name: "Fatima Youssouf",
    gender: "Female",
    school: "Lycée Privé Excellence",
    subjects: ["Biology", "Chemistry"],
    employment_type: "Permanent",
    experience_years: 10,
    qualification: "PhD",
    status: "Active",
  },
  {
    id: 5,
    full_name: "Paul Mbainaissem",
    gender: "Male",
    school: "Collège Évangélique d'Abéché",
    subjects: ["English", "Geography"],
    employment_type: "Contractual",
    experience_years: 6,
    qualification: "Bachelor's Degree",
    status: "Active",
  },
  {
    id: 6,
    full_name: "Aisha Mahamat",
    gender: "Female",
    school: "École Primaire de Bongor",
    subjects: ["General Education"],
    employment_type: "Volunteer",
    experience_years: 3,
    qualification: "Teaching Certificate",
    status: "Active",
  },
  {
    id: 7,
    full_name: "Thomas Ndoubadoum",
    gender: "Male",
    school: "Lycée de Doba",
    subjects: ["Mathematics", "Computer Science"],
    employment_type: "Permanent",
    experience_years: 9,
    qualification: "Master's Degree",
    status: "On Leave",
  },
  {
    id: 8,
    full_name: "Hawa Oumar",
    gender: "Female",
    school: "École Communautaire de Mongo",
    subjects: ["General Education"],
    employment_type: "Volunteer",
    experience_years: 2,
    qualification: "Teaching Certificate",
    status: "Active",
  },
]

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTeachers, setSelectedTeachers] = useState<number[]>([])

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.full_name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleTeacherSelection = (id: number) => {
    if (selectedTeachers.includes(id)) {
      setSelectedTeachers(selectedTeachers.filter((teacherId) => teacherId !== id))
    } else {
      setSelectedTeachers([...selectedTeachers, id])
    }
  }

  const toggleAllTeachers = () => {
    if (selectedTeachers.length === filteredTeachers.length) {
      setSelectedTeachers([])
    } else {
      setSelectedTeachers(filteredTeachers.map((teacher) => teacher.id))
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Teachers</h2>
          <p className="text-muted-foreground">Manage and view all teachers in the system</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/teachers/add">
            <Plus className="mr-2 h-4 w-4" /> Add Teacher
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="all">All Teachers</TabsTrigger>
            <TabsTrigger value="permanent">Permanent</TabsTrigger>
            <TabsTrigger value="contractual">Contractual</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
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
              placeholder="Search teachers..."
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
              <CardTitle>All Teachers</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox
                        checked={selectedTeachers.length === filteredTeachers.length && filteredTeachers.length > 0}
                        onCheckedChange={toggleAllTeachers}
                        aria-label="Select all teachers"
                      />
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Name</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Employment</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Qualification</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTeachers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="h-24 text-center text-muted-foreground">
                        No teachers found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredTeachers.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedTeachers.includes(teacher.id)}
                            onCheckedChange={() => toggleTeacherSelection(teacher.id)}
                            aria-label={`Select ${teacher.full_name}`}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {teacher.full_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{teacher.full_name}</div>
                              <div className="text-sm text-muted-foreground">{teacher.gender}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{teacher.school}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {teacher.subjects.map((subject) => (
                              <Badge key={subject} variant="outline" className="bg-muted">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              teacher.employment_type === "Permanent"
                                ? "default"
                                : teacher.employment_type === "Contractual"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {teacher.employment_type}
                          </Badge>
                        </TableCell>
                        <TableCell>{teacher.experience_years} years</TableCell>
                        <TableCell>{teacher.qualification}</TableCell>
                        <TableCell>
                          <Badge variant={teacher.status === "Active" ? "default" : "secondary"}>
                            {teacher.status}
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
                                Edit Teacher
                              </DropdownMenuItem>
                              <DropdownMenuItem>Transfer Teacher</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Teacher
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

        <TabsContent value="permanent">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Permanent Teachers</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox aria-label="Select all permanent teachers" />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Qualification</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTeachers
                    .filter((teacher) => teacher.employment_type === "Permanent")
                    .map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedTeachers.includes(teacher.id)}
                            onCheckedChange={() => toggleTeacherSelection(teacher.id)}
                            aria-label={`Select ${teacher.full_name}`}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {teacher.full_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{teacher.full_name}</div>
                              <div className="text-sm text-muted-foreground">{teacher.gender}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{teacher.school}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {teacher.subjects.map((subject) => (
                              <Badge key={subject} variant="outline" className="bg-muted">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{teacher.experience_years} years</TableCell>
                        <TableCell>{teacher.qualification}</TableCell>
                        <TableCell>
                          <Badge variant={teacher.status === "Active" ? "default" : "secondary"}>
                            {teacher.status}
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
                                Edit Teacher
                              </DropdownMenuItem>
                              <DropdownMenuItem>Transfer Teacher</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Teacher
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

        <TabsContent value="contractual">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Contractual Teachers</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox aria-label="Select all contractual teachers" />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Qualification</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTeachers
                    .filter((teacher) => teacher.employment_type === "Contractual")
                    .map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedTeachers.includes(teacher.id)}
                            onCheckedChange={() => toggleTeacherSelection(teacher.id)}
                            aria-label={`Select ${teacher.full_name}`}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {teacher.full_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{teacher.full_name}</div>
                              <div className="text-sm text-muted-foreground">{teacher.gender}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{teacher.school}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {teacher.subjects.map((subject) => (
                              <Badge key={subject} variant="outline" className="bg-muted">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{teacher.experience_years} years</TableCell>
                        <TableCell>{teacher.qualification}</TableCell>
                        <TableCell>
                          <Badge variant={teacher.status === "Active" ? "default" : "secondary"}>
                            {teacher.status}
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
                                Edit Teacher
                              </DropdownMenuItem>
                              <DropdownMenuItem>Transfer Teacher</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Teacher
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

        <TabsContent value="volunteer">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Volunteer Teachers</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">
                      <Checkbox aria-label="Select all volunteer teachers" />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Qualification</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTeachers
                    .filter((teacher) => teacher.employment_type === "Volunteer")
                    .map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedTeachers.includes(teacher.id)}
                            onCheckedChange={() => toggleTeacherSelection(teacher.id)}
                            aria-label={`Select ${teacher.full_name}`}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {teacher.full_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{teacher.full_name}</div>
                              <div className="text-sm text-muted-foreground">{teacher.gender}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{teacher.school}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {teacher.subjects.map((subject) => (
                              <Badge key={subject} variant="outline" className="bg-muted">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{teacher.experience_years} years</TableCell>
                        <TableCell>{teacher.qualification}</TableCell>
                        <TableCell>
                          <Badge variant={teacher.status === "Active" ? "default" : "secondary"}>
                            {teacher.status}
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
                                Edit Teacher
                              </DropdownMenuItem>
                              <DropdownMenuItem>Transfer Teacher</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Teacher
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
