"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, MoreHorizontal, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data
const teachers = [
  {
    id: 1,
    name: "Jean Dupont",
    gender: "Male",
    subjects: ["Mathematics", "Physics"],
    qualification: "Master's Degree",
    experience: 8,
    status: "Active",
  },
  {
    id: 2,
    name: "Marie Koné",
    gender: "Female",
    subjects: ["French", "History"],
    qualification: "Bachelor's Degree",
    experience: 5,
    status: "Active",
  },
  {
    id: 3,
    name: "Ibrahim Hassan",
    gender: "Male",
    subjects: ["Biology", "Chemistry"],
    qualification: "PhD",
    experience: 12,
    status: "Active",
  },
  {
    id: 4,
    name: "Fatima Ousmane",
    gender: "Female",
    subjects: ["English", "Geography"],
    qualification: "Bachelor's Degree",
    experience: 3,
    status: "On Leave",
  },
  {
    id: 5,
    name: "Ahmed Mahamat",
    gender: "Male",
    subjects: ["Physical Education"],
    qualification: "Bachelor's Degree",
    experience: 6,
    status: "Active",
  },
]

export function TeachersOverview() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subjects.some((subject) => subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
      teacher.qualification.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "On Leave":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      case "Transferred":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search teachers..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Subjects</TableHead>
              <TableHead>Qualification</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell className="font-medium">{teacher.name}</TableCell>
                  <TableCell>{teacher.gender}</TableCell>
                  <TableCell>{teacher.subjects.join(", ")}</TableCell>
                  <TableCell>{teacher.qualification}</TableCell>
                  <TableCell>{teacher.experience} years</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(teacher.status)}>{teacher.status}</Badge>
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
                  No teachers found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>{filteredTeachers.length}</strong> of <strong>{teachers.length}</strong> teachers
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
