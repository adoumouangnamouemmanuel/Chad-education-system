"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search, SortAsc, SortDesc } from "lucide-react"

// Sample data
const schools = [
  {
    id: 1,
    name: "Lycée National",
    type: "Public",
    location: "N'Djamena",
    students: 1250,
    teachers: 45,
    lastUpdated: "2023-04-15",
  },
  {
    id: 2,
    name: "Collège Évangélique",
    type: "Private",
    location: "Moundou",
    students: 780,
    teachers: 28,
    lastUpdated: "2023-04-12",
  },
  {
    id: 3,
    name: "École Primaire Centrale",
    type: "Public",
    location: "Abéché",
    students: 560,
    teachers: 18,
    lastUpdated: "2023-04-10",
  },
  {
    id: 4,
    name: "Institut Supérieur",
    type: "Public",
    location: "Sarh",
    students: 890,
    teachers: 32,
    lastUpdated: "2023-04-08",
  },
  {
    id: 5,
    name: "Lycée Félix Éboué",
    type: "Public",
    location: "N'Djamena",
    students: 1100,
    teachers: 40,
    lastUpdated: "2023-04-05",
  },
]

export function SchoolsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const filteredSchools = schools.filter(
    (school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedSchools = [...filteredSchools].sort((a, b) => {
    const fieldA = a[sortField]
    const fieldB = b[sortField]

    if (typeof fieldA === "string" && typeof fieldB === "string") {
      return sortDirection === "asc" ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA)
    }

    return sortDirection === "asc" ? fieldA - fieldB : fieldB - fieldA
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search schools..."
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
              <TableHead className="w-[250px] cursor-pointer" onClick={() => handleSort("name")}>
                <div className="flex items-center gap-1">
                  School Name
                  {sortField === "name" &&
                    (sortDirection === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />)}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("type")}>
                <div className="flex items-center gap-1">
                  Type
                  {sortField === "type" &&
                    (sortDirection === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />)}
                </div>
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("location")}>
                <div className="flex items-center gap-1">
                  Location
                  {sortField === "location" &&
                    (sortDirection === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />)}
                </div>
              </TableHead>
              <TableHead className="text-right cursor-pointer" onClick={() => handleSort("students")}>
                <div className="flex items-center justify-end gap-1">
                  Students
                  {sortField === "students" &&
                    (sortDirection === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />)}
                </div>
              </TableHead>
              <TableHead className="text-right cursor-pointer" onClick={() => handleSort("teachers")}>
                <div className="flex items-center justify-end gap-1">
                  Teachers
                  {sortField === "teachers" &&
                    (sortDirection === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />)}
                </div>
              </TableHead>
              <TableHead className="text-right cursor-pointer" onClick={() => handleSort("lastUpdated")}>
                <div className="flex items-center justify-end gap-1">
                  Last Updated
                  {sortField === "lastUpdated" &&
                    (sortDirection === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />)}
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedSchools.length > 0 ? (
              sortedSchools.map((school) => (
                <TableRow key={school.id}>
                  <TableCell className="font-medium">{school.name}</TableCell>
                  <TableCell>{school.type}</TableCell>
                  <TableCell>{school.location}</TableCell>
                  <TableCell className="text-right">{school.students.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{school.teachers}</TableCell>
                  <TableCell className="text-right">{new Date(school.lastUpdated).toLocaleDateString()}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No schools found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>{sortedSchools.length}</strong> of <strong>{schools.length}</strong> schools
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
