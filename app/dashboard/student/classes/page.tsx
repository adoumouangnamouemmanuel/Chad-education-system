"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { ClassSchedule } from "@/components/dashboard/student-schedule";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function StudentClassesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
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
    <motion.div
      className="flex flex-col gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Breadcrumb */}
      <motion.div
        variants={itemVariants}
        className="flex items-center text-sm text-muted-foreground mb-2"
      >
        <Link
          href="/"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Home className="h-4 w-4 mr-1" />
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/dashboard/student"
          className="hover:text-primary transition-colors"
        >
          Tableau de bord
        </Link>
        <span className="mx-2">/</span>
        <span>Mes Classes</span>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold tracking-tight">Mes Classes</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Total des cours",
            value: "8",
            description: "Cours pour ce trimestre",
          },
          {
            title: "Heures par semaine",
            value: "32",
            description: "Heures de cours hebdomadaires",
          },
          {
            title: "Moyenne générale",
            value: "14.5/20",
            description: "Pour le trimestre en cours",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Emploi du temps</CardTitle>
            <CardDescription>
              Votre emploi du temps hebdomadaire
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ClassSchedule />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Mes cours</CardTitle>
            <CardDescription>Liste des cours pour ce trimestre</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
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
                    },
                    {
                      subject: "Français",
                      teacher: "Mme. Khadija Moussa",
                      schedule: "Mar, Jeu 10h-12h",
                      room: "Salle 15",
                      grade: "16/20",
                    },
                    {
                      subject: "Physique-Chimie",
                      teacher: "M. Ibrahim Saleh",
                      schedule: "Lun, Mer 14h-16h",
                      room: "Labo 2",
                      grade: "13/20",
                    },
                    {
                      subject: "Anglais",
                      teacher: "M. John Smith",
                      schedule: "Mar, Jeu 14h-16h",
                      room: "Salle 8",
                      grade: "14/20",
                    },
                    {
                      subject: "Histoire-Géographie",
                      teacher: "M. Mahamat Ali",
                      schedule: "Ven 14h-18h",
                      room: "Salle 5",
                      grade: "15/20",
                    },
                  ].map((course, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {course.subject}
                      </TableCell>
                      <TableCell>{course.teacher}</TableCell>
                      <TableCell>{course.schedule}</TableCell>
                      <TableCell>{course.room}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{course.grade}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" asChild>
                          <Link
                            href={`/dashboard/student/grades?subject=${course.subject.toLowerCase()}`}
                          >
                            Voir les notes
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
