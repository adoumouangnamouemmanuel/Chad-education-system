"use client"

import { useState } from "react"
import { ArrowUpDown, Download, Filter, MoreHorizontal, Plus, Search, FileEdit, Eye, BarChart3 } from "lucide-react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

// Sample data for academic performance
const performances = [
  {
    id: 1,
    student_name: "Abdoulaye Mahamat",
    school: "Lycée National de N'Djamena",
    class: "Terminale",
    subject: "Mathematics",
    grade: 16.5,
    class_average: 12.8,
    class_rank: 3,
    term: "First Trimester",
    school_year: "2023-2024",
    teacher_comment: "Excellent work, very promising student.",
    passed: true,
  },
  {
    id: 2,
    student_name: "Abdoulaye Mahamat",
    school: "Lycée National de N'Djamena",
    class: "Terminale",
    subject: "Physics",
    grade: 15.0,
    class_average: 11.5,
    class_rank: 5,
    term: "First Trimester",
    school_year: "2023-2024",
    teacher_comment: "Good understanding of concepts, needs to improve on practical applications.",
    passed: true,
  },
  {
    id: 3,
    student_name: "Abdoulaye Mahamat",
    school: "Lycée National de N'Djamena",
    class: "Terminale",
    subject: "Chemistry",
    grade: 14.5,
    class_average: 12.0,
    class_rank: 7,
    term: "First Trimester",
    school_year: "2023-2024",
    teacher_comment: "Good performance, but needs to be more consistent.",
    passed: true,
  },
  {
    id: 4,
    student_name: "Fatima Ousmane",
    school: "Lycée National de N'Djamena",
    class: "Première",
    subject: "French Literature",
    grade: 18.0,
    class_average: 13.2,
    class_rank: 1,
    term: "First Trimester",
    school_year: "2023-2024",
    teacher_comment: "Outstanding performance, exceptional writing skills.",
    passed: true,
  },
  {
    id: 5,
    student_name: "Fatima Ousmane",
    school: "Lycée National de N'Djamena",
    class: "Première",
    subject: "History",
    grade: 17.5,
    class_average: 12.8,
    class_rank: 2,
    term: "First Trimester",
    school_year: "2023-2024",
    teacher_comment: "Excellent analytical skills and critical thinking.",
    passed: true,
  },
  {
    id: 6,
    student_name: "Jean-Pierre Ndoubadoum",
    school: "Collège d'Enseignement Général de Moundou",
    class: "4ème",
    subject: "Mathematics",
    grade: 12.5,
    class_average: 11.0,
    class_rank: 8,
    term: "First Trimester",
    school_year: "2023-2024",
    teacher_comment: "Average performance, needs to practice more.",
    passed: true,
  },
  {
    id: 7,
    student_name: "Jean-Pierre Ndoubadoum",
    school: "Collège d'Enseignement Général de Moundou",
    class: "4ème",
    subject: "English",
    grade: 9.5,
    class_average: 10.2,
    class_rank: 15,
    term: "First Trimester",
    school_year: "2023-2024",
    teacher_comment: "Struggling with the language, needs additional support.",
    passed: false,
  },
  {
    id: 8,
    student_name: "Mariam Hassan",
    school: "Collège d'Enseignement Général de Moundou",
    class: "5ème",
    subject: "Science",
    grade: 14.0,
    class_average: 11.5,
    class_rank: 4,
    term: "First Trimester",
    school_year: "2023-2024",
    teacher_comment: "Good understanding of scientific concepts.",
    passed: true,
  },
]

export default function AcademicPerformancePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTerm, setSelectedTerm] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")

  const filteredPerformances = performances.filter(
    (performance) =>
      performance.student_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTerm === "all" || performance.term === selectedTerm) &&
      (selectedSubject === "all" || performance.subject === selectedSubject),
  )

  const uniqueSubjects = Array.from(new Set(performances.map((performance) => performance.subject)))

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Academic Performance</h2>
          <p className="text-muted-foreground">View and analyze student academic performance</p>
        </div>
        <Button asChild>
          <Link href="/dashboard/academic/performance/add">
            <Plus className="mr-2 h-4 w-4" /> Add Grades
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="grades" className="space-y-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="grades">Grades</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
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

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <Select value={selectedTerm} onValueChange={setSelectedTerm}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Term" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Terms</SelectItem>
                <SelectItem value="First Trimester">First Trimester</SelectItem>
                <SelectItem value="Second Trimester">Second Trimester</SelectItem>
                <SelectItem value="Third Trimester">Third Trimester</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {uniqueSubjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="grades">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Student Grades</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Student</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>School</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Term</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Class Avg</TableHead>
                    <TableHead>Rank</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPerformances.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={10} className="h-24 text-center text-muted-foreground">
                        No performance records found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredPerformances.map((performance) => (
                      <TableRow key={performance.id}>
                        <TableCell>
                          <div className="font-medium">{performance.student_name}</div>
                        </TableCell>
                        <TableCell>{performance.school}</TableCell>
                        <TableCell>{performance.class}</TableCell>
                        <TableCell>{performance.subject}</TableCell>
                        <TableCell>{performance.term}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              performance.grade >= 14
                                ? "default"
                                : performance.grade >= 10
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {performance.grade.toFixed(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>{performance.class_average.toFixed(1)}</TableCell>
                        <TableCell>{performance.class_rank}</TableCell>
                        <TableCell>
                          <Badge
                            variant={performance.passed ? "outline" : "destructive"}
                            className={performance.passed ? "bg-green-50" : ""}
                          >
                            {performance.passed ? "Passed" : "Failed"}
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
                                Edit Grade
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <BarChart3 className="mr-2 h-4 w-4" />
                                View Analytics
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

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Detailed analytics content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Academic Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Detailed reports content will be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
