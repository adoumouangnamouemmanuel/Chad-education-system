"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ClassSchedule } from "@/components/dashboard/class-schedule";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export default function TeacherClassesClientPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/teacher"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Retour au Tableau de Bord</span>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-50">
              Mes Classes
            </h1>
            <p className="text-muted-foreground">
              Consultez et gérez vos classes et emploi du temps
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <Calendar className="mr-2 h-4 w-4 text-blue-600" />
            Calendrier
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <Download className="mr-2 h-4 w-4 text-blue-600" />
            Exporter
          </Button>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
        >
          <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
            <div className="h-1 bg-blue-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-500" />
                Total des classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                5
              </div>
              <p className="text-xs text-muted-foreground">
                Classes assignées pour l'année scolaire 2023-2024
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
        >
          <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
            <div className="h-1 bg-green-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-green-500" />
                Total des étudiants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                187
              </div>
              <p className="text-xs text-muted-foreground">
                Étudiants dans toutes vos classes
              </p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
        >
          <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
            <div className="h-1 bg-purple-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-500" />
                Heures d'enseignement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                18
              </div>
              <p className="text-xs text-muted-foreground">
                Heures d'enseignement par semaine
              </p>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progression</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2 bg-blue-100" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{
          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
            <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Emploi du temps
            </CardTitle>
            <CardDescription>
              Votre emploi du temps hebdomadaire
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <ClassSchedule />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
            <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-500" />
              Mes classes
            </CardTitle>
            <CardDescription>
              Liste des classes que vous enseignez
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="rounded-lg border border-blue-100 dark:border-blue-800 overflow-hidden">
              <Table>
                <TableHeader className="bg-blue-50 dark:bg-blue-900/50">
                  <TableRow>
                    <TableHead>Classe</TableHead>
                    <TableHead>Matière</TableHead>
                    <TableHead>Niveau</TableHead>
                    <TableHead>Nombre d'élèves</TableHead>
                    <TableHead>Horaire</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      class: "Terminale A",
                      subject: "Mathématiques",
                      level: "Lycée",
                      students: 42,
                      schedule: "Lun, Mer, Ven 8h-10h",
                      id: "terminale-a",
                    },
                    {
                      class: "Terminale D",
                      subject: "Mathématiques",
                      level: "Lycée",
                      students: 38,
                      schedule: "Mar, Jeu 10h-12h",
                      id: "terminale-d",
                    },
                    {
                      class: "1ère C",
                      subject: "Mathématiques",
                      level: "Lycée",
                      students: 45,
                      schedule: "Lun, Mer 14h-16h",
                      id: "1ere-c",
                    },
                    {
                      class: "2nde A",
                      subject: "Mathématiques",
                      level: "Lycée",
                      students: 32,
                      schedule: "Mar, Jeu 14h-16h",
                      id: "2nde-a",
                    },
                    {
                      class: "2nde C",
                      subject: "Mathématiques",
                      level: "Lycée",
                      students: 30,
                      schedule: "Ven 14h-18h",
                      id: "2nde-c",
                    },
                  ].map((classItem, index) => (
                    <TableRow
                      key={classItem.id}
                      className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8 border border-blue-100">
                            <AvatarFallback className="bg-blue-100 text-blue-800 text-xs">
                              {classItem.class.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          {classItem.class}
                        </div>
                      </TableCell>
                      <TableCell>{classItem.subject}</TableCell>
                      <TableCell>{classItem.level}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-blue-500" />
                          {classItem.students}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="font-normal border-blue-200"
                        >
                          {classItem.schedule}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                            asChild
                          >
                            <Link href={`/grades?class=${classItem.id}`}>
                              <FileText className="mr-1 h-3.5 w-3.5 text-blue-600" />
                              Notes
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                            asChild
                          >
                            <Link href={`/attendance?class=${classItem.id}`}>
                              <Users className="mr-1 h-3.5 w-3.5 text-blue-600" />
                              Présence
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="bg-blue-50 dark:bg-blue-900/50 p-4 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Affichage de 5 classes sur 5
            </div>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Gérer les classes
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
