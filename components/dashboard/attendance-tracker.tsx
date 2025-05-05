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
import { useToast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  CheckCircle,
  Filter,
  UserCheck,
  UserX,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { fr } from "date-fns/locale";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Sample data
const classes = [
  { id: "terminale-a", name: "Terminale A" },
  { id: "terminale-d", name: "Terminale D" },
  { id: "premiere-c", name: "Première C" },
  { id: "seconde-a", name: "Seconde A" },
  { id: "seconde-c", name: "Seconde C" },
];

const subjects = [
  { id: "math", name: "Mathématiques" },
  { id: "physics", name: "Physique" },
  { id: "french", name: "Français" },
  { id: "english", name: "Anglais" },
  { id: "history", name: "Histoire-Géographie" },
];

const students = {
  "terminale-a": [
    {
      id: 1,
      name: "Abakar Mahamat",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      name: "Fatima Ali",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 6,
      name: "Hawa Mahamat",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 7,
      name: "Oumar Saleh",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 8,
      name: "Zara Abdoulaye",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ],
  "terminale-d": [
    {
      id: 9,
      name: "Ahmed Hassan",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 10,
      name: "Mariam Idriss",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 11,
      name: "Youssouf Abdelkerim",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ],
  "premiere-c": [
    {
      id: 4,
      name: "Amina Youssouf",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 12,
      name: "Moussa Ibrahim",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 13,
      name: "Aisha Deby",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ],
  "seconde-a": [
    {
      id: 3,
      name: "Moussa Ousmane",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 5,
      name: "Ibrahim Adoum",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 14,
      name: "Khadija Mahamat",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ],
  "seconde-c": [
    {
      id: 15,
      name: "Ali Hassane",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 16,
      name: "Fatouma Oumar",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 17,
      name: "Mahamat Saleh",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ],
};

export function AttendanceTracker() {
  const [selectedClass, setSelectedClass] = useState("terminale-a");
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [attendance, setAttendance] = useState<Record<number, string>>({});
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleAttendanceChange = (studentId: number, value: string) => {
    setAttendance((prev) => ({ ...prev, [studentId]: value }));
  };

  const markAllPresent = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newAttendance = { ...attendance };
      students[selectedClass as keyof typeof students].forEach((student) => {
        newAttendance[student.id] = "present";
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
    if (!date) {
      toast({
        title: "Date manquante",
        description: "Veuillez sélectionner une date",
        variant: "destructive",
      });
      return;
    }

    // Check if all students have attendance marked
    const missingAttendance = students[
      selectedClass as keyof typeof students
    ].some((student) => !attendance[student.id]);

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

  const presentCount = Object.values(attendance).filter(
    (status) => status === "present"
  ).length;
  const absentCount = Object.values(attendance).filter(
    (status) => status === "absent"
  ).length;
  const excusedCount = Object.values(attendance).filter(
    (status) => status === "excused"
  ).length;

  const selectedClassName =
    classes.find((c) => c.id === selectedClass)?.name || "";
  const selectedSubjectName =
    subjects.find((s) => s.id === selectedSubject)?.name || "";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
            {selectedClassName} - {selectedSubjectName}
          </h3>
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            {date ? format(date, "PPP", { locale: fr }) : "Aujourd'hui"}
          </Badge>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsFiltersVisible(!isFiltersVisible)}
          className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
        >
          <Filter className="mr-2 h-4 w-4 text-blue-600" />
          Filtres
        </Button>
      </div>

      <AnimatePresence>
        {isFiltersVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden"
          >
            <div className="space-y-2">
              <Label
                htmlFor="class"
                className="text-blue-700 dark:text-blue-300"
              >
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
              <Label
                htmlFor="subject"
                className="text-blue-700 dark:text-blue-300"
              >
                Matière
              </Label>
              <Select
                value={selectedSubject}
                onValueChange={setSelectedSubject}
              >
                <SelectTrigger
                  id="subject"
                  className="rounded-lg border-blue-200 focus:ring-blue-500"
                >
                  <SelectValue placeholder="Sélectionner une matière" />
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
              <Label
                htmlFor="date"
                className="text-blue-700 dark:text-blue-300"
              >
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
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="rounded-md border border-blue-100 dark:border-blue-800 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-blue-50 dark:bg-blue-900/50 p-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              {students[selectedClass as keyof typeof students].length} élèves
            </Badge>
            <div className="flex items-center gap-1 text-sm text-blue-600">
              <UserCheck className="h-4 w-4" />
              <span>{presentCount} présents</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-red-500">
              <UserX className="h-4 w-4" />
              <span>{absentCount} absents</span>
            </div>
            {excusedCount > 0 && (
              <div className="flex items-center gap-1 text-sm text-amber-500">
                <CheckCircle className="h-4 w-4" />
                <span>{excusedCount} excusés</span>
              </div>
            )}
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
              <TableHead className="w-[250px] text-center">Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students[selectedClass as keyof typeof students].length > 0 ? (
              students[selectedClass as keyof typeof students].map(
                (student, index) => (
                  <TableRow
                    key={student.id}
                    className={cn(
                      "transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20",
                      attendance[student.id] === "present" &&
                        "bg-green-50 dark:bg-green-900/10",
                      attendance[student.id] === "absent" &&
                        "bg-red-50 dark:bg-red-900/10",
                      attendance[student.id] === "excused" &&
                        "bg-amber-50 dark:bg-amber-900/10"
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
                    <TableCell>
                      <RadioGroup
                        value={attendance[student.id] || ""}
                        onValueChange={(value) =>
                          handleAttendanceChange(student.id, value)
                        }
                        className="flex justify-center space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="present"
                            id={`present-${student.id}`}
                            className="border-green-500 text-green-500 focus:ring-green-500"
                          />
                          <Label
                            htmlFor={`present-${student.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-green-600"
                          >
                            Présent
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="absent"
                            id={`absent-${student.id}`}
                            className="border-red-500 text-red-500 focus:ring-red-500"
                          />
                          <Label
                            htmlFor={`absent-${student.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-red-600"
                          >
                            Absent
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="excused"
                            id={`excused-${student.id}`}
                            className="border-amber-500 text-amber-500 focus:ring-amber-500"
                          />
                          <Label
                            htmlFor={`excused-${student.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-amber-600"
                          >
                            Excusé
                          </Label>
                        </div>
                      </RadioGroup>
                    </TableCell>
                  </TableRow>
                )
              )
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

      {students[selectedClass as keyof typeof students].length > 0 && (
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
