"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  Clock,
  Download,
  GraduationCap,
  PenLine,
  RefreshCw,
  Bell,
  FileText,
  BarChart2,
  Users,
} from "lucide-react";
import { ClassSchedule } from "@/components/dashboard/class-schedule";
import { GradeEntry } from "@/components/dashboard/grade-entry";
import { AttendanceTracker } from "@/components/dashboard/attendance-tracker";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState("grades");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

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
    <div className="container mx-auto py-6 space-y-8">
      {/* Progress bar at the top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Progress
          value={100}
          className="h-1 rounded-none bg-transparent bg-blue-500"
        />
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          >
            <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
              <AvatarImage
                src="/placeholder.svg?height=64&width=64"
                alt="Teacher"
              />
              <AvatarFallback className="bg-blue-100 text-blue-800 text-xl">
                TM
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <div>
            <motion.h1
              className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Tableau de Bord Enseignant
            </motion.h1>
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-muted-foreground">
                Bienvenue, Prof. Mahamat. Voici un aperçu de vos classes et
                élèves.
              </p>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                En ligne
              </Badge>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="h-9 rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
              onClick={handleRefresh}
            >
              <RefreshCw
                className={`mr-2 h-4 w-4 text-blue-600 ${
                  isRefreshing ? "animate-spin" : ""
                }`}
              />
              Actualiser
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="h-9 rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
            >
              <Download className="mr-2 h-4 w-4 text-blue-600" />
              Exporter
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
            >
              <Bell className="h-4 w-4 text-blue-600" />
            </Button>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              3
            </span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            title: "Classes",
            value: "5",
            icon: <BookOpen className="h-5 w-5 text-blue-600" />,
            color: "blue",
            description: "Classes actives ce semestre",
          },
          {
            title: "Élèves",
            value: "187",
            icon: <GraduationCap className="h-5 w-5 text-green-600" />,
            color: "green",
            description: "Élèves sous votre responsabilité",
          },
          {
            title: "Heures Cette Semaine",
            value: "24",
            icon: <Clock className="h-5 w-5 text-purple-600" />,
            color: "purple",
            description: "Sur 30 heures programmées",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
              <div className={`h-1 bg-${stat.color}-500`}></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <p className="text-3xl font-bold text-blue-900 dark:text-blue-50">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                    {stat.icon}
                  </div>
                </div>
                {stat.title === "Heures Cette Semaine" && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progression</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2 bg-blue-100" />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
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
              Emploi du Temps Hebdomadaire
            </CardTitle>
            <CardDescription>
              Votre emploi du temps d'enseignement pour la semaine en cours
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
        <Tabs
          defaultValue="grades"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 mb-8 p-1 bg-blue-50 dark:bg-blue-900 rounded-full w-full sm:w-auto">
            <TabsTrigger
              value="grades"
              className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
            >
              <PenLine className="h-4 w-4" />
              <span className="hidden sm:inline">Notes</span>
            </TabsTrigger>
            <TabsTrigger
              value="attendance"
              className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
            >
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Présence</span>
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Rapports</span>
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
            >
              <BarChart2 className="h-4 w-4" />
              <span className="hidden sm:inline">Analyses</span>
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="grades">
                <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                    <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                      <PenLine className="h-5 w-5 text-blue-500" />
                      Saisie des Notes
                    </CardTitle>
                    <CardDescription>
                      Saisissez et gérez les notes des élèves
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <GradeEntry />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="attendance">
                <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                    <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      Suivi de Présence
                    </CardTitle>
                    <CardDescription>
                      Suivez la présence des élèves pour vos classes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <AttendanceTracker />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                    <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-500" />
                      Rapports et Bulletins
                    </CardTitle>
                    <CardDescription>
                      Générez et consultez les rapports et bulletins des élèves
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 text-center py-12">
                    <FileText className="h-16 w-16 mx-auto text-blue-200 mb-4" />
                    <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                      Aucun rapport disponible
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Les rapports seront disponibles à la fin du trimestre ou
                      lorsque toutes les notes auront été saisies.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                      Vérifier les prérequis
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics">
                <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                    <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                      <BarChart2 className="h-5 w-5 text-blue-500" />
                      Analyses et Statistiques
                    </CardTitle>
                    <CardDescription>
                      Visualisez les performances et statistiques de vos classes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 text-center py-12">
                    <BarChart2 className="h-16 w-16 mx-auto text-blue-200 mb-4" />
                    <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                      Analyses en cours de préparation
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Les analyses seront disponibles lorsque suffisamment de
                      données auront été collectées.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                      Voir un aperçu
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </div>
  );
}
