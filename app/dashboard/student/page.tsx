"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  Download,
  GraduationCap,
  RefreshCw,
  Trophy,
  Bell,
  FileText,
  Home,
} from "lucide-react";
import { ClassSchedule } from "@/components/dashboard/student-schedule";
import { StudentGrades } from "@/components/dashboard/student-grades";
import { StudentAttendance } from "@/components/dashboard/student-attendance";
import Link from "next/link";

export default function StudentDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <motion.div
      className="space-y-8 pb-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header with breadcrumb */}
      <motion.div
        variants={itemVariants}
        className="flex items-center text-sm text-muted-foreground mb-2"
      >
        <Link
          href="/"
          className="flex items-center hover:text-blue-600 transition-colors"
        >
          <Home className="h-4 w-4 mr-1" />
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <span>Tableau de bord</span>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        variants={itemVariants}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-blue-800">
            Tableau de Bord Étudiant
          </h1>
          <p className="text-muted-foreground">
            Bienvenue, Amadou. Voici un aperçu de votre performance académique.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="h-9 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
            >
              <Bell className="mr-2 h-4 w-4" />
              Notifications
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-600">
                3
              </span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="h-9 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Actualiser
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="h-9 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Classe Actuelle",
            value: "Terminal D",
            icon: <BookOpen className="h-5 w-5" />,
            color: "blue",
            description: "Année scolaire 2023-2024",
          },
          {
            title: "Moyenne Générale",
            value: "14.5/20",
            icon: <Trophy className="h-5 w-5" />,
            color: "amber",
            description: "Classement: 5ème sur 35",
          },
          {
            title: "Taux de Présence",
            value: "95%",
            icon: <Calendar className="h-5 w-5" />,
            color: "green",
            description: "2 absences ce trimestre",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Card className="border-blue-100 overflow-hidden">
              <div className={`h-1 w-full bg-${stat.color}-500`}></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-blue-800">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-full bg-${stat.color}-100 text-${stat.color}-600`}
                  >
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants}>
        <Card className="border-blue-100 shadow-md overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              Performance Académique
            </CardTitle>
            <CardDescription>
              Vos notes pour l'année académique en cours
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <StudentGrades />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Tabs defaultValue="schedule" className="w-full">
          <TabsList className="mb-4 bg-blue-50 p-1 w-full justify-start">
            <TabsTrigger
              value="schedule"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Emploi du Temps
            </TabsTrigger>
            <TabsTrigger
              value="attendance"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md"
            >
              <FileText className="h-4 w-4 mr-2" />
              Assiduité
            </TabsTrigger>
          </TabsList>
          <TabsContent value="schedule">
            <Card className="border-blue-100 shadow-md overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                <CardTitle className="text-blue-800">
                  Emploi du Temps Hebdomadaire
                </CardTitle>
                <CardDescription>
                  Votre emploi du temps pour la semaine en cours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ClassSchedule />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="attendance">
            <Card className="border-blue-100 shadow-md overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-green-500"></div>
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                <CardTitle className="text-blue-800">
                  Registre de Présence
                </CardTitle>
                <CardDescription>
                  Votre registre de présence pour le trimestre en cours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <StudentAttendance />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Upcoming Events Section */}
      <motion.div variants={itemVariants}>
        <Card className="border-blue-100 shadow-md overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Calendar className="h-5 w-5 text-amber-600" />
              Événements à Venir
            </CardTitle>
            <CardDescription>
              Vos prochains événements et échéances
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                {
                  title: "Examen de Mathématiques",
                  date: "15 Mai 2024",
                  time: "08:00 - 10:00",
                  location: "Salle 12",
                  type: "exam",
                },
                {
                  title: "Remise du Projet de Physique",
                  date: "20 Mai 2024",
                  time: "16:00",
                  location: "Laboratoire 2",
                  type: "assignment",
                },
                {
                  title: "Réunion des Parents d'Élèves",
                  date: "25 Mai 2024",
                  time: "14:00 - 16:00",
                  location: "Amphithéâtre",
                  type: "meeting",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-blue-100 bg-white hover:bg-blue-50 transition-colors"
                >
                  <div
                    className={`p-3 rounded-full ${
                      event.type === "exam"
                        ? "bg-red-100 text-red-600"
                        : event.type === "assignment"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {event.type === "exam" ? (
                      <FileText className="h-5 w-5" />
                    ) : event.type === "assignment" ? (
                      <BookOpen className="h-5 w-5" />
                    ) : (
                      <Calendar className="h-5 w-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-blue-800">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <span>Lieu: {event.location}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    Détails
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
