"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

// Sample data
const classes = [
  { id: "terminal-d", name: "Terminal D" },
  { id: "premiere-c", name: "Première C" },
  { id: "seconde-a", name: "Seconde A" },
]

const students = [
  { id: 1, name: "Abakar Mahamat", class: "Terminal D" },
  { id: 2, name: "Fatima Ali", class: "Terminal D" },
  { id: 3, name: "Moussa Ousmane", class: "Seconde A" },
  { id: 4, name: "Amina Youssouf", class: "Première C" },
  { id: 5, name: "Ibrahim Adoum", class: "Seconde A" },
]

export function AttendanceTracker() {
  const [selectedClass, setSelectedClass] = useState("")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [attendance, setAttendance] = useState<Record<number, boolean>>({})
  const { toast } = useToast()

  const filteredStudents = students.filter(
    (student) => classes.find((c) => c.id === selectedClass)?.name === student.class,
  )

  const handleAttendanceChange = (studentId: number, value: boolean) => {
    setAttendance((prev) => ({ ...prev, [studentId]: value }))
  }

  const markAllPresent = () => {
    const newAttendance = { ...attendance }
    filteredStudents.forEach((student) => {
      newAttendance[student.id] = true
    })
    setAttendance(newAttendance)
  }

  const handleSave = () => {
    if (!selectedClass || !date) {
      toast({
        title: "Missing information",
        description: "Please select class and date",
        variant: "destructive",
      })
      return
    }

    // Check if all students have attendance marked
    const missingAttendance = filteredStudents.some((student) => attendance[student.id] === undefined)

    if (missingAttendance) {
      toast({
        title: "Incomplete attendance",
        description: "Please mark attendance for all students",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Attendance saved",
      description: "Attendance has been recorded successfully",
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <Label htmlFor="date">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {selectedClass && (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">No.</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead className="w-[150px] text-center">Present</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <TableRow key={student.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell className="text-center">
                      <Checkbox
                        checked={attendance[student.id] || false}
                        onCheckedChange={(checked) => handleAttendanceChange(student.id, checked as boolean)}
                        className="mx-auto"
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
        <div className="flex justify-between">
          <Button variant="outline" onClick={markAllPresent}>
            Mark All Present
          </Button>
          <Button onClick={handleSave}>Save Attendance</Button>
        </div>
      )}
    </div>
  )
}
