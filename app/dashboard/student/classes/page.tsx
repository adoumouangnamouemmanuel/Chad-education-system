"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Clock,
  Download,
  FileText,
  GraduationCap,
  Home,
  Users,
} from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StudentClassesPage() {
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
              Mes Classes
            </h1>
            <p className="text-muted-foreground">
              Consultez vos cours et emploi du temps
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
                Total des cours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                8
              </div>
              <p className="text-xs text-muted-foreground">
                Cours pour ce trimestre
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
                <Clock className="h-4 w-4 text-green-500" />
                Heures par semaine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                32
              </div>
              <p className="text-xs text-muted-foreground">
                Heures de cours hebdomadaires
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
                <GraduationCap className="h-4 w-4 text-purple-500" />
                Moyenne générale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                14.5/20
              </div>
              <p className="text-xs text-muted-foreground">
                Pour le trimestre en cours
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
            <Tabs defaultValue="week" className="mb-6">
              <TabsList className="grid grid-cols-3 mb-4 p-1 bg-blue-50 dark:bg-blue-900 rounded-full w-full sm:w-auto">
                <TabsTrigger
                  value="week"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Semaine
                </TabsTrigger>
                <TabsTrigger
                  value="month"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Mois
                </TabsTrigger>
                <TabsTrigger
                  value="trimester"
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  Trimestre
                </TabsTrigger>
              </TabsList>
              <TabsContent value="week">
                <div className="grid grid-cols-5 gap-4">
                  {["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"].map(
                    (day) => (
                      <div key={day} className="space-y-3">
                        <div className="text-center font-medium text-blue-900 dark:text-blue-50 bg-blue-50 dark:bg-blue-900/30 py-2 rounded-lg">
                          {day}
                        </div>
                        {day === "Lundi" && (
                          <>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Mathématiques
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  8h - 10h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle 12
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Physique
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  10h - 12h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Labo 2
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Histoire
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  14h - 16h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle 5
                                </div>
                              </CardContent>
                            </Card>
                          </>
                        )}
                        {day === "Mardi" && (
                          <>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Français
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  8h - 10h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle 15
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Anglais
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  10h - 12h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle 8
                                </div>
                              </CardContent>
                            </Card>
                          </>
                        )}
                        {day === "Mercredi" && (
                          <>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Mathématiques
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  8h - 10h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle 12
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">SVT</div>
                                <div className="text-xs text-muted-foreground">
                                  10h - 12h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Labo 1
                                </div>
                              </CardContent>
                            </Card>
                          </>
                        )}
                        {day === "Jeudi" && (
                          <>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Français
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  8h - 10h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle 15
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Anglais
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  10h - 12h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle 8
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Informatique
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  14h - 16h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle Info
                                </div>
                              </CardContent>
                            </Card>
                          </>
                        )}
                        {day === "Vendredi" && (
                          <>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Mathématiques
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  8h - 10h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle 12
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">
                                  Géographie
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  10h - 12h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Salle 5
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                              <CardContent className="p-3">
                                <div className="font-medium text-sm">Sport</div>
                                <div className="text-xs text-muted-foreground">
                                  14h - 16h
                                </div>
                                <div className="text-xs text-blue-600 mt-1">
                                  Terrain
                                </div>
                              </CardContent>
                            </Card>
                          </>
                        )}
                      </div>
                    )
                  )}
                </div>
              </TabsContent>
              <TabsContent value="month">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Calendar className="h-16 w-16 text-blue-200 mb-4" />
                  <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                    Calendrier mensuel
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Visualisez votre emploi du temps sur tout le mois
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    Voir le calendrier mensuel
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="trimester">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Calendar className="h-16 w-16 text-blue-200 mb-4" />
                  <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                    Calendrier trimestriel
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Visualisez votre emploi du temps sur tout le trimestre
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    Voir le calendrier trimestriel
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
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
              Mes cours
            </CardTitle>
            <CardDescription>Liste des cours pour ce trimestre</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="rounded-lg border border-blue-100 dark:border-blue-800 overflow-hidden">
              <Table>
                <TableHeader className="bg-blue-50 dark:bg-blue-900/50">
                  <TableRow>
                    <TableHead>Matière</TableHead>
                    <TableHead>Enseignant</TableHead>
                    <TableHead>Horaire</TableHead>
                    <TableHead>Salle</TableHead>
                    <TableHead>Moyenne</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      subject: "Mathématiques",
                      teacher: "Dr. Abdoulaye Hassan",
                      schedule: "Lun, Mer, Ven 8h-10h",
                      room: "Salle 12",
                      grade: "15/20",
                      id: "math",
                    },
                    {
                      subject: "Français",
                      teacher: "Mme. Khadija Moussa",
                      schedule: "Mar, Jeu 10h-12h",
                      room: "Salle 15",
                      grade: "16/20",
                      id: "french",
                    },
                    {
                      subject: "Physique-Chimie",
                      teacher: "M. Ibrahim Saleh",
                      schedule: "Lun, Mer 14h-16h",
                      room: "Labo 2",
                      grade: "13/20",
                      id: "physics",
                    },
                    {
                      subject: "Anglais",
                      teacher: "M. John Smith",
                      schedule: "Mar, Jeu 14h-16h",
                      room: "Salle 8",
                      grade: "14/20",
                      id: "english",
                    },
                    {
                      subject: "Histoire-Géographie",
                      teacher: "M. Mahamat Ali",
                      schedule: "Ven 14h-18h",
                      room: "Salle 5",
                      grade: "15/20",
                      id: "history",
                    },
                  ].map((course) => (
                    <TableRow
                      key={course.id}
                      className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8 border border-blue-100">
                            <AvatarFallback className="bg-blue-100 text-blue-800 text-xs">
                              {course.subject.substring(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          {course.subject}
                        </div>
                      </TableCell>
                      <TableCell>{course.teacher}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="font-normal border-blue-200"
                        >
                          {course.schedule}
                        </Badge>
                      </TableCell>
                      <TableCell>{course.room}</TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-none">
                          {course.grade}
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
                            <Link
                              href={`/dashboard/student/grades?subject=${course.id}`}
                            >
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
                            <Link
                              href={`/dashboard/student/attendance?subject=${course.id}`}
                            >
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
              Affichage de 5 cours sur 8
            </div>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Voir tous les cours
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
