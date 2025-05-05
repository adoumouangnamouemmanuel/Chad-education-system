"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  CheckCircle,
  Download,
  FileText,
  Save,
  Upload,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample data
const classes = [
  { id: "terminal-d", name: "Terminal D" },
  { id: "premiere-c", name: "Première C" },
  { id: "seconde-a", name: "Seconde A" },
];

const subjects = [
  { id: "math", name: "Mathématiques" },
  { id: "physics", name: "Physique" },
];

const terms = [
  { id: "term1", name: "1er Trimestre" },
  { id: "term2", name: "2ème Trimestre" },
  { id: "term3", name: "3ème Trimestre" },
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

export function GradeEntry() {
  const [selectedClass, setSelectedClass] = useState("terminal-d");
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [selectedTerm, setSelectedTerm] = useState("term1");
  const [grades, setGrades] = useState<Record<number, string>>({});
  const [errors, setErrors] = useState<Record<number, string>>({});
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const filteredStudents = students.filter(
    (student) =>
      classes.find((c) => c.id === selectedClass)?.name === student.class
  );

  const handleGradeChange = (studentId: number, value: string) => {
    // Clear error when user starts typing
    if (errors[studentId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[studentId];
        return newErrors;
      });
    }

    // Only allow numbers between 0 and 20
    if (
      value === "" ||
      (/^\d+(\.\d{0,2})?$/.test(value) &&
        Number.parseFloat(value) >= 0 &&
        Number.parseFloat(value) <= 20)
    ) {
      setGrades((prev) => ({ ...prev, [studentId]: value }));
    }
  };

  const validateGrades = () => {
    const newErrors: Record<number, string> = {};
    let hasErrors = false;

    filteredStudents.forEach((student) => {
      const grade = grades[student.id];

      if (!grade || grade.trim() === "") {
        newErrors[student.id] = "Note requise";
        hasErrors = true;
      } else if (
        Number.parseFloat(grade) < 0 ||
        Number.parseFloat(grade) > 20
      ) {
        newErrors[student.id] = "Entre 0-20";
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    return !hasErrors;
  };

  const handleSave = () => {
    if (!selectedClass || !selectedSubject || !selectedTerm) {
      toast({
        title: "Informations manquantes",
        description:
          "Veuillez sélectionner une classe, une matière et un trimestre",
        variant: "destructive",
      });
      return;
    }

    if (!validateGrades()) {
      toast({
        title: "Notes invalides",
        description: "Veuillez corriger les erreurs avant d'enregistrer",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Notes enregistrées",
        description: "Toutes les notes ont été enregistrées avec succès",
      });
    }, 1000);
  };

  const calculateAverage = () => {
    const validGrades = filteredStudents
      .map((student) => grades[student.id])
      .filter((grade) => grade && !isNaN(Number.parseFloat(grade)))
      .map((grade) => Number.parseFloat(grade));

    if (validGrades.length === 0) return "N/A";

    const sum = validGrades.reduce((acc, curr) => acc + curr, 0);
    return (sum / validGrades.length).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <Label htmlFor="subject" className="text-blue-700 dark:text-blue-300">
            Matière
          </Label>
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
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
          <Label htmlFor="term" className="text-blue-700 dark:text-blue-300">
            Trimestre
          </Label>
          <Select value={selectedTerm} onValueChange={setSelectedTerm}>
            <SelectTrigger
              id="term"
              className="rounded-lg border-blue-200 focus:ring-blue-500"
            >
              <SelectValue placeholder="Sélectionner un trimestre" />
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
                <FileText className="h-4 w-4" />
                <span>Moyenne: {calculateAverage()}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Importer des notes</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-800 hover:bg-blue-100"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Exporter les notes</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <Table>
            <TableHeader className="bg-white dark:bg-blue-950">
              <TableRow>
                <TableHead className="w-[50px]">No.</TableHead>
                <TableHead>Nom de l'élève</TableHead>
                <TableHead className="w-[150px] text-right">
                  Note (0-20)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <TableRow
                    key={student.id}
                    className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
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
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <AnimatePresence>
                          {errors[student.id] && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="text-xs text-red-500 flex items-center"
                            >
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {errors[student.id]}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Input
                            type="text"
                            value={grades[student.id] || ""}
                            onChange={(e) =>
                              handleGradeChange(student.id, e.target.value)
                            }
                            className={`w-20 ml-auto text-right rounded-lg border-blue-200 focus:ring-blue-500 ${
                              errors[student.id]
                                ? "border-red-300 focus:ring-red-500"
                                : ""
                            }`}
                            placeholder="0-20"
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
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
            Vérifier les notes
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
              <>
                <Save className="mr-2 h-4 w-4" />
                Enregistrer les notes
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
