"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MoreHorizontal, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data
const students = [
  {
    id: 1,
    name: "Abakar Mahamat",
    gender: "Male",
    class: "Terminal D",
    entryYear: 2020,
    guardian: "Mahamat Ibrahim",
    status: "Enrolled",
  },
  {
    id: 2,
    name: "Fatima Ali",
    gender: "Female",
    class: "Terminal A",
    entryYear: 2020,
    guardian: "Ali Hassan",
    status: "Enrolled",
  },
  {
    id: 3,
    name: "Moussa Ousmane",
    gender: "Male",
    class: "Seconde C",
    entryYear: 2022,
    guardian: "Ousmane Abdelkerim",
    status: "Enrolled",
  },
  {
    id: 4,
    name: "Amina Youssouf",
    gender: "Female",
    class: "Première D",
    entryYear: 2021,
    guardian: "Youssouf Mahamat",
    status: "Suspended",
  },
  {
    id: 5,
    name: "Ibrahim Adoum",
    gender: "Male",
    class: "Seconde A",
    entryYear: 2022,
    guardian: "Adoum Hassane",
    status: "Enrolled",
  },
]

export function StudentsOverview() {
  const [searchTerm, setSearchTerm] = useState("")
  const [classFilter, setClassFilter] = useState("all")

  const filteredStudents = students.filter(
    (student) =>
      (searchTerm === "" ||
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.guardian.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (classFilter === "all" || student.class === classFilter),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Enrolled":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Suspended":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "Transferred":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const classes = ["all", ...new Set(students.map((student) => student.class))]

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={classFilter} onValueChange={setClassFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            {classes
              .filter((c) => c !== "all")
              .map((className) => (
                <SelectItem key={className} value={className}>
                  {className}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Entry Year</TableHead>
              <TableHead>Guardian</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.entryYear}</TableCell>
                  <TableCell>{student.guardian}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>View Performance</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Transfer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No students found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>{filteredStudents.length}</strong> of <strong>{students.length}</strong> students
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
