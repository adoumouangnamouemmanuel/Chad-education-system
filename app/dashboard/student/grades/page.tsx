"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart2,
  BookOpen,
  Calendar,
  Download,
  FileText,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function StudentGradesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/student"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Retour au Tableau de Bord</span>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-50">
              Mes Notes
            </h1>
            <p className="text-muted-foreground">
              Consultez vos notes et évaluations
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <BarChart2 className="mr-2 h-4 w-4 text-blue-600" />
            Statistiques
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
                Moyenne générale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                14.5/20
              </div>
              <p className="text-xs text-muted-foreground">
                1er Trimestre 2023-2024
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
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
        >
          <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
            <div className="h-1 bg-green-500"></div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <FileText className="h-4 w-4 text-green-500" />
                Meilleure matière
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                16/20
              </div>
              <p className="text-xs text-muted-foreground">Français</p>
              <div className="mt-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-none">
                  +2.5 pts
                </Badge>
              </div>
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
                <Calendar className="h-4 w-4 text-purple-500" />
                Rang de classe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                8/42
              </div>
              <p className="text-xs text-muted-foreground">Terminale A</p>
              <div className="mt-2">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-none">
                  Top 20%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
            <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              Filtrer les notes
            </CardTitle>
            <CardDescription>
              Sélectionnez une période et une matière pour voir vos notes
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select defaultValue="t1">
                <SelectTrigger className="rounded-lg border-blue-200">
                  <SelectValue placeholder="Trimestre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="t1">1er Trimestre</SelectItem>
                  <SelectItem value="t2">2ème Trimestre</SelectItem>
                  <SelectItem value="t3">3ème Trimestre</SelectItem>
                  <SelectItem value="year">Année complète</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="rounded-lg border-blue-200">
                  <SelectValue placeholder="Matière" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les matières</SelectItem>
                  <SelectItem value="math">Mathématiques</SelectItem>
                  <SelectItem value="french">Français</SelectItem>
                  <SelectItem value="physics">Physique-Chimie</SelectItem>
                  <SelectItem value="english">Anglais</SelectItem>
                  <SelectItem value="history">Histoire-Géographie</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="rounded-lg border-blue-200">
                  <SelectValue placeholder="Type d'évaluation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  <SelectItem value="test">Contrôles</SelectItem>
                  <SelectItem value="exam">Examens</SelectItem>
                  <SelectItem value="project">Projets</SelectItem>
                  <SelectItem value="oral">Oraux</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-blue-900 dark:text-blue-50">
                  Notes du 1er Trimestre
                </CardTitle>
                <CardDescription>Année scolaire 2023-2024</CardDescription>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher une matière..."
                  className="pl-8 rounded-lg border-blue-200 focus:ring-blue-500"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="all">
              <TabsList className="mb-6 p-1 bg-blue-50 dark:bg-blue-900 rounded-full">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Toutes les matières
                </TabsTrigger>
                <TabsTrigger
                  value="tests"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Contrôles
                </TabsTrigger>
                <TabsTrigger
                  value="exams"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Examens
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Projets
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="rounded-lg border border-blue-100 dark:border-blue-800 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-blue-50 dark:bg-blue-900/50">
                      <TableRow>
                        <TableHead>Matière</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Note</TableHead>
                        <TableHead>Moyenne classe</TableHead>
                        <TableHead>Commentaire</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          subject: "Mathématiques",
                          type: "Contrôle",
                          date: "15/09/2023",
                          grade: "15/20",
                          classAvg: "12.5/20",
                          comment: "Bon travail, quelques erreurs de calcul",
                        },
                        {
                          subject: "Français",
                          type: "Dissertation",
                          date: "22/09/2023",
                          grade: "16/20",
                          classAvg: "13.2/20",
                          comment: "Excellente analyse, style fluide",
                        },
                        {
                          subject: "Physique-Chimie",
                          type: "TP",
                          date: "28/09/2023",
                          grade: "13/20",
                          classAvg: "12.8/20",
                          comment: "Bonne manipulation, rapport à améliorer",
                        },
                        {
                          subject: "Anglais",
                          type: "Oral",
                          date: "05/10/2023",
                          grade: "14/20",
                          classAvg: "12.1/20",
                          comment: "Bonne prononciation, vocabulaire riche",
                        },
                        {
                          subject: "Histoire-Géographie",
                          type: "Examen",
                          date: "12/10/2023",
                          grade: "15/20",
                          classAvg: "11.9/20",
                          comment: "Très bonne analyse des documents",
                        },
                        {
                          subject: "Mathématiques",
                          type: "Examen",
                          date: "19/10/2023",
                          grade: "14/20",
                          classAvg: "11.5/20",
                          comment: "Bonne maîtrise des concepts",
                        },
                      ].map((grade, index) => (
                        <TableRow
                          key={index}
                          className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          <TableCell className="font-medium">
                            {grade.subject}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={`font-normal ${
                                grade.type === "Contrôle"
                                  ? "border-blue-200 bg-blue-50 text-blue-700"
                                  : grade.type === "Examen"
                                  ? "border-purple-200 bg-purple-50 text-purple-700"
                                  : grade.type === "TP"
                                  ? "border-green-200 bg-green-50 text-green-700"
                                  : "border-amber-200 bg-amber-50 text-amber-700"
                              }`}
                            >
                              {grade.type}
                            </Badge>
                          </TableCell>
                          <TableCell>{grade.date}</TableCell>
                          <TableCell>
                            <Badge
                              className={`${
                                Number.parseFloat(grade.grade) >= 14
                                  ? "bg-green-100 text-green-800"
                                  : Number.parseFloat(grade.grade) >= 10
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-red-100 text-red-800"
                              } hover:bg-opacity-80 border-none`}
                            >
                              {grade.grade}
                            </Badge>
                          </TableCell>
                          <TableCell>{grade.classAvg}</TableCell>
                          <TableCell className="max-w-xs truncate">
                            {grade.comment}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="tests">
                <div className="rounded-lg border border-blue-100 dark:border-blue-800 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-blue-50 dark:bg-blue-900/50">
                      <TableRow>
                        <TableHead>Matière</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Note</TableHead>
                        <TableHead>Moyenne classe</TableHead>
                        <TableHead>Commentaire</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <TableCell className="font-medium">
                          Mathématiques
                        </TableCell>
                        <TableCell>15/09/2023</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-none">
                            15/20
                          </Badge>
                        </TableCell>
                        <TableCell>12.5/20</TableCell>
                        <TableCell className="max-w-xs truncate">
                          Bon travail, quelques erreurs de calcul
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="exams">
                <div className="rounded-lg border border-blue-100 dark:border-blue-800 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-blue-50 dark:bg-blue-900/50">
                      <TableRow>
                        <TableHead>Matière</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Note</TableHead>
                        <TableHead>Moyenne classe</TableHead>
                        <TableHead>Commentaire</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <TableCell className="font-medium">
                          Histoire-Géographie
                        </TableCell>
                        <TableCell>12/10/2023</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-none">
                            15/20
                          </Badge>
                        </TableCell>
                        <TableCell>11.9/20</TableCell>
                        <TableCell className="max-w-xs truncate">
                          Très bonne analyse des documents
                        </TableCell>
                      </TableRow>
                      <TableRow className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <TableCell className="font-medium">
                          Mathématiques
                        </TableCell>
                        <TableCell>19/10/2023</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-none">
                            14/20
                          </Badge>
                        </TableCell>
                        <TableCell>11.5/20</TableCell>
                        <TableCell className="max-w-xs truncate">
                          Bonne maîtrise des concepts
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="projects">
                <div className="rounded-lg border border-blue-100 dark:border-blue-800 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-blue-50 dark:bg-blue-900/50">
                      <TableRow>
                        <TableHead>Matière</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Note</TableHead>
                        <TableHead>Moyenne classe</TableHead>
                        <TableHead>Commentaire</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <TableCell className="font-medium">
                          Physique-Chimie
                        </TableCell>
                        <TableCell>28/09/2023</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">
                            13/20
                          </Badge>
                        </TableCell>
                        <TableCell>12.8/20</TableCell>
                        <TableCell className="max-w-xs truncate">
                          Bonne manipulation, rapport à améliorer
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="bg-blue-50 dark:bg-blue-900/50 p-4 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Affichage de 6 notes sur 12
            </div>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
              <FileText className="mr-2 h-4 w-4" />
              Voir toutes les notes
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
