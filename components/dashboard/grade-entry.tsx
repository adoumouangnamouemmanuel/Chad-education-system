"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"

// Sample data
const classes = [
  { id: "terminal-d", name: "Terminal D" },
  { id: "premiere-c", name: "Première C" },
  { id: "seconde-a", name: "Seconde A" },
]

const subjects = [
  { id: "math", name: "Mathematics" },
  { id: "physics", name: "Physics" },
]

const terms = [
  { id: "term1", name: "1st Term" },
  { id: "term2", name: "2nd Term" },
  { id: "term3", name: "3rd Term" },
]

const students = [
  { id: 1, name: "Abakar Mahamat", class: "Terminal D" },
  { id: 2, name: "Fatima Ali", class: "Terminal D" },
  { id: 3, name: "Moussa Ousmane", class: "Seconde A" },
  { id: 4, name: "Amina Youssouf", class: "Première C" },
  { id: 5, name: "Ibrahim Adoum", class: "Seconde A" },
]

export function GradeEntry() {
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedTerm, setSelectedTerm] = useState("")
  const [grades, setGrades] = useState<Record<number, string>>({})
  const { toast } = useToast()

  const filteredStudents = students.filter(
    (student) => classes.find((c) => c.id === selectedClass)?.name === student.class,
  )

  const handleGradeChange = (studentId: number, value: string) => {
    // Only allow numbers between 0 and 20
    if (value === "" || (/^\d+$/.test(value) && Number.parseInt(value) >= 0 && Number.parseInt(value) <= 20)) {
      setGrades((prev) => ({ ...prev, [studentId]: value }))
    }
  }

  const handleSave = () => {
    if (!selectedClass || !selectedSubject || !selectedTerm) {
      toast({
        title: "Missing information",
        description: "Please select class, subject, and term",
        variant: "destructive",
      })
      return
    }

    // Check if all students have grades
    const missingGrades = filteredStudents.some((student) => !grades[student.id])

    if (missingGrades) {
      toast({
        title: "Missing grades",
        description: "Please enter grades for all students",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Grades saved",
      description: "All grades have been saved successfully",
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="class">Class</Label>
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger id="class">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              {classes.map((cls) => (
                <SelectItem key={cls.id} value={cls.id}>
                  {cls.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger id="subject">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject.id} value={subject.id}>
                  {subject.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="term">Term</Label>
          <Select value={selectedTerm} onValueChange={setSelectedTerm}>
            <SelectTrigger id="term">
              <SelectValue placeholder="Select term" />
            </SelectTrigger>
            <SelectContent>
              {terms.map((term) => (
                <SelectItem key={term.id} value={term.id}>
                  {term.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {selectedClass && (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">No.</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead className="w-[150px] text-right">Grade (0-20)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <TableRow key={student.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell className="text-right">
                      <Input
                        type="text"
                        value={grades[student.id] || ""}
                        onChange={(e) => handleGradeChange(student.id, e.target.value)}
                        className="w-20 ml-auto text-right"
                        placeholder="0-20"
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center">
                    No students found in this class.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}

      {selectedClass && filteredStudents.length > 0 && (
        <div className="flex justify-end">
          <Button onClick={handleSave}>Save Grades</Button>
        </div>
      )}
    </div>
  )
}
