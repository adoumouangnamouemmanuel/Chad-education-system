"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CheckCircle, UserCheck, UserX } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { fr } from "date-fns/locale";

// Sample data
const classes = [
  { id: "terminal-d", name: "Terminal D" },
  { id: "premiere-c", name: "Première C" },
  { id: "seconde-a", name: "Seconde A" },
];

const students = [
  {
    id: 1,
    name: "Abakar Mahamat",
    class: "Terminal D",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    name: "Fatima Ali",
    class: "Terminal D",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    name: "Moussa Ousmane",
    class: "Seconde A",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    name: "Amina Youssouf",
    class: "Première C",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 5,
    name: "Ibrahim Adoum",
    class: "Seconde A",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 6,
    name: "Hawa Mahamat",
    class: "Terminal D",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 7,
    name: "Oumar Saleh",
    class: "Terminal D",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 8,
    name: "Zara Abdoulaye",
    class: "Terminal D",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

export function AttendanceTracker() {
  const [selectedClass, setSelectedClass] = useState("terminal-d");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [attendance, setAttendance] = useState<Record<number, boolean>>({});
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const filteredStudents = students.filter(
    (student) =>
      classes.find((c) => c.id === selectedClass)?.name === student.class
  );

  const handleAttendanceChange = (studentId: number, value: boolean) => {
    setAttendance((prev) => ({ ...prev, [studentId]: value }));
  };

  const markAllPresent = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newAttendance = { ...attendance };
      filteredStudents.forEach((student) => {
        newAttendance[student.id] = true;
      });
      setAttendance(newAttendance);
      setIsLoading(false);

      toast({
        title: "Tous présents",
        description: "Tous les élèves ont été marqués présents",
      });
    }, 500);
  };

  const handleSave = () => {
    if (!selectedClass || !date) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez sélectionner une classe et une date",
        variant: "destructive",
      });
      return;
    }

    // Check if all students have attendance marked
    const missingAttendance = filteredStudents.some(
      (student) => attendance[student.id] === undefined
    );

    if (missingAttendance) {
      toast({
        title: "Présence incomplète",
        description: "Veuillez marquer la présence pour tous les élèves",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Présence enregistrée",
        description: "La présence a été enregistrée avec succès",
      });
    }, 1000);
  };

  const presentCount = Object.values(attendance).filter(Boolean).length;
  const absentCount = filteredStudents.length - presentCount;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="class" className="text-blue-700 dark:text-blue-300">
            Classe
          </Label>
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger
              id="class"
              className="rounded-lg border-blue-200 focus:ring-blue-500"
            >
              <SelectValue placeholder="Sélectionner une classe" />
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
          <Label htmlFor="date" className="text-blue-700 dark:text-blue-300">
            Date
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal rounded-lg border-blue-200 focus:ring-blue-500",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-blue-500" />
                {date ? (
                  format(date, "PPP", { locale: fr })
                ) : (
                  <span>Choisir une date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="rounded-lg border-blue-200"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {selectedClass && (
        <motion.div
          className="rounded-md border border-blue-100 dark:border-blue-800 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-blue-50 dark:bg-blue-900/50 p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                {filteredStudents.length} élèves
              </Badge>
              <div className="flex items-center gap-1 text-sm text-blue-600">
                <UserCheck className="h-4 w-4" />
                <span>{presentCount} présents</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-red-500">
                <UserX className="h-4 w-4" />
                <span>{absentCount} absents</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllPresent}
              disabled={isLoading}
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
            >
              <CheckCircle className="mr-1 h-4 w-4" />
              Tous présents
            </Button>
          </div>
          <Table>
            <TableHeader className="bg-white dark:bg-blue-950">
              <TableRow>
                <TableHead className="w-[50px]">No.</TableHead>
                <TableHead>Nom de l'élève</TableHead>
                <TableHead className="w-[150px] text-center">Présent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <TableRow
                    key={student.id}
                    className={cn(
                      "transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20",
                      attendance[student.id] === true &&
                        "bg-green-50 dark:bg-green-900/10",
                      attendance[student.id] === false &&
                        "bg-red-50 dark:bg-red-900/10"
                    )}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border border-blue-100">
                          <AvatarImage
                            src={student.avatar || "/placeholder.svg"}
                            alt={student.name}
                          />
                          <AvatarFallback className="bg-blue-100 text-blue-800 text-xs">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span>{student.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Checkbox
                            checked={attendance[student.id] || false}
                            onCheckedChange={(checked) =>
                              handleAttendanceChange(
                                student.id,
                                checked as boolean
                              )
                            }
                            className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                          />
                        </motion.div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center">
                    Aucun élève trouvé dans cette classe.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </motion.div>
      )}

      {selectedClass && filteredStudents.length > 0 && (
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={markAllPresent}
            disabled={isLoading}
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
            Marquer tous présents
          </Button>
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLoading ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Enregistrement...
              </>
            ) : (
              <>Enregistrer la présence</>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
