"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Award,
  BookOpen,
  Calendar,
  Check,
  Clock,
  Download,
  Edit2,
  FileText,
  GraduationCap,
  Home,
  Lock,
  Mail,
  Phone,
  Printer,
  School,
  Share2,
  Star,
  User,
  ChevronLeft,
  Bell,
  Shield,
  Sparkles,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import Link from "next/link";

// Sample data for charts
const gradeData = [
  { subject: "Mathematics", grade: 16, average: 14 },
  { subject: "French", grade: 15, average: 13 },
  { subject: "Physics", grade: 14, average: 12 },
  { subject: "Chemistry", grade: 17, average: 13 },
  { subject: "Biology", grade: 18, average: 14 },
  { subject: "History", grade: 13, average: 12 },
  { subject: "Geography", grade: 15, average: 13 },
];

const attendanceData = [
  { month: "Sep", attendance: 98 },
  { month: "Oct", attendance: 100 },
  { month: "Nov", attendance: 95 },
  { month: "Dec", attendance: 97 },
  { month: "Jan", attendance: 92 },
  { month: "Feb", attendance: 96 },
  { month: "Mar", attendance: 98 },
];

const skillsData = [
  { subject: "Mathematics", A: 16, fullMark: 20 },
  { subject: "Physics", A: 14, fullMark: 20 },
  { subject: "Chemistry", A: 17, fullMark: 20 },
  { subject: "Biology", A: 18, fullMark: 20 },
  { subject: "French", A: 15, fullMark: 20 },
  { subject: "English", A: 16, fullMark: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const subjectDistribution = [
  { name: "Sciences", value: 45 },
  { name: "Languages", value: 25 },
  { name: "Humanities", value: 20 },
  { name: "Physical Ed", value: 10 },
];

export default function StudentProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();
  const avatarControls = useAnimation();

  useEffect(() => {
    // Animate progress bar on load
    const timer = setTimeout(() => setProgress(100), 100);

    // Pulse animation for avatar
    avatarControls.start({
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    });

    return () => clearTimeout(timer);
  }, [avatarControls]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 0.5 },
    });
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

  const cardHoverVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const pulseVariant = {
    pulse: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Progress bar at the top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Progress
          value={progress}
          className="h-1 rounded-none bg-transparent bg-blue-500"
          //   className="h-1 rounded-none bg-transparent bg-blue-500"
        />
      </div>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="/dashboard/student"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Back to Dashboard</span>
            </Link>
          </motion.div>
          <div>
            <motion.h1
              className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Profil Étudiant
            </motion.h1>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Gérez vos informations personnelles et consultez vos résultats
              académiques
            </motion.p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Printer className="h-4 w-4 text-blue-600" />
                    <span className="sr-only">Imprimer le profil</span>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>Imprimer le profil</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Download className="h-4 w-4 text-blue-600" />
                    <span className="sr-only">Télécharger en PDF</span>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>Télécharger en PDF</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Share2 className="h-4 w-4 text-blue-600" />
                    <span className="sr-only">Partager le profil</span>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>Partager le profil</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isEditing ? (
                <>
                  <Check className="mr-2 h-4 w-4" /> Enregistrer
                </>
              ) : (
                <>
                  <Edit2 className="mr-2 h-4 w-4" /> Modifier
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="md:col-span-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            // variants={cardHoverVariants}
          >
            <Card className="overflow-hidden sticky top-6 border-blue-100 dark:border-blue-900">
              <div className="h-32 bg-gradient-to-r from-blue-700 to-blue-500 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0.3 }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E\")",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <CardContent className="p-6 -mt-12 relative">
                <div className="absolute right-6 top-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, delay: 0.5 }}
                  >
                    <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                      Actif
                    </Badge>
                  </motion.div>
                </div>
                <motion.div animate={avatarControls} className="relative">
                  <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                    <AvatarImage
                      src="/placeholder.svg?height=96&width=96"
                      alt="Étudiant"
                    />
                    <AvatarFallback className="text-2xl bg-blue-100 text-blue-800">
                      AM
                    </AvatarFallback>
                  </Avatar>
                  <motion.div
                    className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-1 border-2 border-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                  >
                    <Star className="h-4 w-4" />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="mt-4 space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-50">
                    Abakar Mahamat
                  </h2>
                  <p className="text-muted-foreground">
                    ID Étudiant: STD-2023-4567
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <School className="mr-1 h-4 w-4 text-blue-500" />
                    Lycée National de N&apos;Djamena
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.4, duration: 0.3, origin: "top" }}
                >
                  <Separator className="my-4 bg-blue-100 dark:bg-blue-800" />
                </motion.div>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">Classe: Terminal D</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Mail className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">abakar.m@student.edu.td</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Phone className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">+235 65 XX XX XX</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Home className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">
                      Quartier Diguel, N&apos;Djamena
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">Inscrit: Septembre 2020</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 0.6, duration: 0.3, origin: "top" }}
                >
                  <Separator className="my-4 bg-blue-100 dark:bg-blue-800" />
                </motion.div>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="font-medium text-blue-900 dark:text-blue-50">
                    Résumé Académique
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        14.5/20
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Moyenne Générale
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        95%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Présence
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        12
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Matières
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        3ème
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Rang en Classe
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Tabs
              defaultValue="personal"
              className="w-full"
              onValueChange={handleTabChange}
              value={activeTab}
            >
              <TabsList className="grid grid-cols-4 mb-8 p-1 bg-blue-50 dark:bg-blue-900 rounded-full">
                <TabsTrigger
                  value="personal"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Personnel</span>
                </TabsTrigger>
                <TabsTrigger
                  value="academic"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Académique</span>
                </TabsTrigger>
                <TabsTrigger
                  value="attendance"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">Présence</span>
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <Lock className="h-4 w-4" />
                  <span className="hidden sm:inline">Paramètres</span>
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
                  <TabsContent value="personal">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <User className="h-5 w-5 text-blue-500" />
                          Informations Personnelles
                        </CardTitle>
                        <CardDescription>
                          Mettez à jour vos informations personnelles et
                          coordonnées
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        {isEditing ? (
                          // Form view when editing
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="fullName"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Nom Complet
                              </Label>
                              <Input
                                id="fullName"
                                defaultValue="Abakar Mahamat"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="studentId"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                ID Étudiant
                              </Label>
                              <Input
                                id="studentId"
                                defaultValue="STD-2023-4567"
                                disabled={true}
                                className="bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="email"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Adresse Email
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                defaultValue="abakar.m@student.edu.td"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="phone"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Numéro de Téléphone
                              </Label>
                              <Input
                                id="phone"
                                defaultValue="+235 65 XX XX XX"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="dateOfBirth"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Date de Naissance
                              </Label>
                              <Input
                                id="dateOfBirth"
                                type="date"
                                defaultValue="2005-07-12"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="gender"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Genre
                              </Label>
                              <Input
                                id="gender"
                                defaultValue="Masculin"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="address"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Adresse
                              </Label>
                              <Input
                                id="address"
                                defaultValue="Quartier Diguel, N'Djamena"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="parentName"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Nom du Parent/Tuteur
                              </Label>
                              <Input
                                id="parentName"
                                defaultValue="Mahamat Ibrahim"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="parentContact"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Contact du Parent/Tuteur
                              </Label>
                              <Input
                                id="parentContact"
                                defaultValue="+235 66 XX XX XX"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="emergencyContact"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Contact d&apos;Urgence
                              </Label>
                              <Input
                                id="emergencyContact"
                                defaultValue="+235 66 XX XX XX"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2 md:col-span-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="healthInfo"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Informations de Santé
                              </Label>
                              <Textarea
                                id="healthInfo"
                                rows={3}
                                defaultValue="Aucune allergie ou condition médicale connue."
                                className="resize-none transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                          </div>
                        ) : (
                          // Display view when not editing
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Nom Complet
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                Abakar Mahamat
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                ID Étudiant
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                STD-2023-4567
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Adresse Email
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                abakar.m@student.edu.td
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Numéro de Téléphone
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                +235 65 XX XX XX
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Date de Naissance
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                12/07/2005
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Genre
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                Masculin
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Adresse
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                Quartier Diguel, N&apos;Djamena
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Nom du Parent/Tuteur
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                Mahamat Ibrahim
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Contact du Parent/Tuteur
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                +235 66 XX XX XX
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Contact d&apos;Urgence
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                +235 66 XX XX XX
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2 md:col-span-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Informations de Santé
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                Aucune allergie ou condition médicale connue.
                              </p>
                            </motion.div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="academic">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <GraduationCap className="h-5 w-5 text-blue-500" />
                          Performance Académique
                        </CardTitle>
                        <CardDescription>
                          Consultez vos résultats académiques et métriques de
                          performance
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                              Notes du Trimestre Actuel
                            </h3>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                              Trimestre 2
                            </Badge>
                          </div>
                          <motion.div
                            className="h-80 bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={gradeData}
                                margin={{
                                  top: 20,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                              >
                                <CartesianGrid
                                  strokeDasharray="3 3"
                                  stroke="#e2e8f0"
                                />
                                <XAxis
                                  dataKey="subject"
                                  tick={{ fill: "#64748b" }}
                                />
                                <YAxis
                                  domain={[0, 20]}
                                  tick={{ fill: "#64748b" }}
                                />
                                <RechartsTooltip
                                  contentStyle={{
                                    backgroundColor: "#fff",
                                    borderColor: "#e2e8f0",
                                    borderRadius: "0.5rem",
                                    boxShadow:
                                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                  }}
                                />
                                <Legend />
                                <Bar
                                  dataKey="grade"
                                  name="Votre Note"
                                  fill="#3b82f6"
                                  radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                  dataKey="average"
                                  name="Moyenne de la Classe"
                                  fill="#93c5fd"
                                  radius={[4, 4, 0, 0]}
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </motion.div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                              Répartition des Matières
                            </h3>
                            <motion.div
                              className="h-64 bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                  <Pie
                                    data={subjectDistribution}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) =>
                                      `${name}: ${(percent * 100).toFixed(0)}%`
                                    }
                                  >
                                    {subjectDistribution.map((entry, index) => (
                                      <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                      />
                                    ))}
                                  </Pie>
                                  <RechartsTooltip />
                                </PieChart>
                              </ResponsiveContainer>
                            </motion.div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                              Compétences par Matière
                            </h3>
                            <motion.div
                              className="h-64 bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              <ResponsiveContainer width="100%" height="100%">
                                <RadarChart
                                  cx="50%"
                                  cy="50%"
                                  outerRadius="80%"
                                  data={skillsData}
                                >
                                  <PolarGrid stroke="#e2e8f0" />
                                  <PolarAngleAxis
                                    dataKey="subject"
                                    tick={{ fill: "#64748b" }}
                                  />
                                  <PolarRadiusAxis
                                    angle={30}
                                    domain={[0, 20]}
                                    tick={{ fill: "#64748b" }}
                                  />
                                  <Radar
                                    name="Compétences"
                                    dataKey="A"
                                    stroke="#3b82f6"
                                    fill="#3b82f6"
                                    fillOpacity={0.6}
                                  />
                                  <RechartsTooltip />
                                </RadarChart>
                              </ResponsiveContainer>
                            </motion.div>
                          </div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Historique Académique
                          </h3>
                          <div className="space-y-4">
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{
                                y: -5,
                                boxShadow:
                                  "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium text-blue-900 dark:text-blue-50">
                                    Année Académique 2022-2023
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Classe: Première D
                                  </div>
                                  <div className="text-sm mt-1">
                                    <span className="font-medium text-blue-700 dark:text-blue-300">
                                      Moyenne Générale:
                                    </span>{" "}
                                    14.2/20
                                  </div>
                                  <div className="text-sm">
                                    <span className="font-medium text-blue-700 dark:text-blue-300">
                                      Rang en Classe:
                                    </span>{" "}
                                    5ème sur 42
                                  </div>
                                </div>
                                <Badge className="bg-blue-500 text-white">
                                  Terminé
                                </Badge>
                              </div>
                            </motion.div>
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{
                                y: -5,
                                boxShadow:
                                  "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium text-blue-900 dark:text-blue-50">
                                    Année Académique 2021-2022
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Classe: Seconde C
                                  </div>
                                  <div className="text-sm mt-1">
                                    <span className="font-medium text-blue-700 dark:text-blue-300">
                                      Moyenne Générale:
                                    </span>{" "}
                                    13.8/20
                                  </div>
                                  <div className="text-sm">
                                    <span className="font-medium text-blue-700 dark:text-blue-300">
                                      Rang en Classe:
                                    </span>{" "}
                                    7ème sur 45
                                  </div>
                                </div>
                                <Badge className="bg-blue-500 text-white">
                                  Terminé
                                </Badge>
                              </div>
                            </motion.div>
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{
                                y: -5,
                                boxShadow:
                                  "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium text-blue-900 dark:text-blue-50">
                                    Année Académique 2020-2021
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Classe: Troisième
                                  </div>
                                  <div className="text-sm mt-1">
                                    <span className="font-medium text-blue-700 dark:text-blue-300">
                                      Moyenne Générale:
                                    </span>{" "}
                                    15.1/20
                                  </div>
                                  <div className="text-sm">
                                    <span className="font-medium text-blue-700 dark:text-blue-300">
                                      Rang en Classe:
                                    </span>{" "}
                                    3ème sur 48
                                  </div>
                                </div>
                                <Badge className="bg-blue-500 text-white">
                                  Terminé
                                </Badge>
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Certificats & Réalisations
                          </h3>
                          <div className="space-y-3">
                            <motion.div
                              className="flex items-center space-x-3 p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  BEPC (Brevet d&apos;Études du Premier Cycle)
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Obtenu avec Distinction - Juin 2021
                                </div>
                              </div>
                            </motion.div>
                            <motion.div
                              className="flex items-center space-x-3 p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Concours de Mathématiques - Vainqueur Régional
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Concours Régional de N&apos;Djamena - Mars
                                  2022
                                </div>
                              </div>
                            </motion.div>
                            <motion.div
                              className="flex items-center space-x-3 p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Foire Scientifique - Premier Prix
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Exposition Scientifique de l&apos;École -
                                  Décembre 2022
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="attendance">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-blue-500" />
                          Registre de Présence
                        </CardTitle>
                        <CardDescription>
                          Suivez votre présence et ponctualité
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                              Aperçu de la Présence
                            </h3>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                              Année 2023
                            </Badge>
                          </div>
                          <motion.div
                            className="h-80 bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart
                                data={attendanceData}
                                margin={{
                                  top: 20,
                                  right: 30,
                                  left: 20,
                                  bottom: 5,
                                }}
                              >
                                <CartesianGrid
                                  strokeDasharray="3 3"
                                  stroke="#e2e8f0"
                                />
                                <XAxis
                                  dataKey="month"
                                  tick={{ fill: "#64748b" }}
                                />
                                <YAxis
                                  domain={[0, 100]}
                                  tick={{ fill: "#64748b" }}
                                />
                                <RechartsTooltip
                                  contentStyle={{
                                    backgroundColor: "#fff",
                                    borderColor: "#e2e8f0",
                                    borderRadius: "0.5rem",
                                    boxShadow:
                                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                  }}
                                />
                                <Legend />
                                <Line
                                  type="monotone"
                                  dataKey="attendance"
                                  name="Taux de Présence (%)"
                                  stroke="#3b82f6"
                                  strokeWidth={3}
                                  dot={{
                                    r: 6,
                                    fill: "#3b82f6",
                                    strokeWidth: 2,
                                    stroke: "#fff",
                                  }}
                                  activeDot={{
                                    r: 8,
                                    fill: "#3b82f6",
                                    strokeWidth: 2,
                                    stroke: "#fff",
                                  }}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </motion.div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Détails de Présence
                          </h3>
                          <div className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <motion.div
                                whileHover={{
                                  y: -5,
                                  boxShadow:
                                    "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Card className="bg-blue-50 dark:bg-blue-900 border-blue-100 dark:border-blue-800">
                                  <CardContent className="p-6 text-center">
                                    <motion.div
                                      className="text-4xl font-bold text-blue-600 dark:text-blue-400"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        delay: 0.3,
                                      }}
                                    >
                                      95%
                                    </motion.div>
                                    <div className="text-sm text-muted-foreground mt-2">
                                      Présence Globale
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                              <motion.div
                                whileHover={{
                                  y: -5,
                                  boxShadow:
                                    "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Card className="bg-blue-50 dark:bg-blue-900 border-blue-100 dark:border-blue-800">
                                  <CardContent className="p-6 text-center">
                                    <motion.div
                                      className="text-4xl font-bold text-blue-600 dark:text-blue-400"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        delay: 0.4,
                                      }}
                                    >
                                      3
                                    </motion.div>
                                    <div className="text-sm text-muted-foreground mt-2">
                                      Absences ce Trimestre
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                              <motion.div
                                whileHover={{
                                  y: -5,
                                  boxShadow:
                                    "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Card className="bg-blue-50 dark:bg-blue-900 border-blue-100 dark:border-blue-800">
                                  <CardContent className="p-6 text-center">
                                    <motion.div
                                      className="text-4xl font-bold text-blue-600 dark:text-blue-400"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        delay: 0.5,
                                      }}
                                    >
                                      2
                                    </motion.div>
                                    <div className="text-sm text-muted-foreground mt-2">
                                      Retards
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Présence Récente
                          </h3>
                          <div className="space-y-3">
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-blue-900 dark:text-blue-50">
                                    Lundi, 20 Mars 2023
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Présent à tous les cours
                                  </div>
                                </div>
                                <Badge className="bg-green-500 text-white">
                                  Présent
                                </Badge>
                              </div>
                            </motion.div>
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-blue-900 dark:text-blue-50">
                                    Mardi, 21 Mars 2023
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Présent à tous les cours
                                  </div>
                                </div>
                                <Badge className="bg-green-500 text-white">
                                  Présent
                                </Badge>
                              </div>
                            </motion.div>
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-blue-900 dark:text-blue-50">
                                    Mercredi, 22 Mars 2023
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Arrivé 15 minutes en retard au premier cours
                                  </div>
                                </div>
                                <Badge className="bg-amber-500 text-white">
                                  Retard
                                </Badge>
                              </div>
                            </motion.div>
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-blue-900 dark:text-blue-50">
                                    Jeudi, 23 Mars 2023
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Présent à tous les cours
                                  </div>
                                </div>
                                <Badge className="bg-green-500 text-white">
                                  Présent
                                </Badge>
                              </div>
                            </motion.div>
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium text-blue-900 dark:text-blue-50">
                                    Vendredi, 24 Mars 2023
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Absent pour cause de maladie (justifié)
                                  </div>
                                </div>
                                <Badge className="bg-red-500 text-white">
                                  Absent
                                </Badge>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="settings">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <Lock className="h-5 w-5 text-blue-500" />
                          Paramètres du Compte
                        </CardTitle>
                        <CardDescription>
                          Gérez la sécurité de votre compte et vos préférences
                          de notification
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-blue-500" />
                            Mot de Passe
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="currentPassword"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Mot de Passe Actuel
                              </Label>
                              <Input
                                id="currentPassword"
                                type="password"
                                disabled={!isEditing}
                                placeholder="••••••••"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <div></div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="newPassword"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Nouveau Mot de Passe
                              </Label>
                              <Input
                                id="newPassword"
                                type="password"
                                disabled={!isEditing}
                                placeholder="••••••••"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="confirmPassword"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Confirmer le Nouveau Mot de Passe
                              </Label>
                              <Input
                                id="confirmPassword"
                                type="password"
                                disabled={!isEditing}
                                placeholder="••••••••"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                          </div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 flex items-center gap-2">
                            <Bell className="h-5 w-5 text-blue-500" />
                            Préférences de Notification
                          </h3>
                          <div className="space-y-3">
                            <motion.div
                              className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="space-y-0.5">
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Notifications par Email
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Recevoir des mises à jour importantes par
                                  email
                                </div>
                              </div>
                              <Switch
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                            </motion.div>
                            <motion.div
                              className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="space-y-0.5">
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Notifications par SMS
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Recevoir des notifications urgentes par SMS
                                </div>
                              </div>
                              <Switch
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                            </motion.div>
                            <motion.div
                              className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="space-y-0.5">
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Mises à jour des Notes
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Recevoir des notifications lorsque de
                                  nouvelles notes sont publiées
                                </div>
                              </div>
                              <Switch
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                            </motion.div>
                            <motion.div
                              className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="space-y-0.5">
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Alertes de Présence
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Recevoir des alertes concernant les problèmes
                                  de présence
                                </div>
                              </div>
                              <Switch
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                            </motion.div>
                            <motion.div
                              className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="space-y-0.5">
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Mises à jour pour Parent/Tuteur
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Envoyer des copies des notifications au
                                  parent/tuteur
                                </div>
                              </div>
                              <Switch
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                            </motion.div>
                          </div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-blue-500" />
                            Paramètres de Confidentialité
                          </h3>
                          <div className="space-y-3">
                            <motion.div
                              className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="space-y-0.5">
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Afficher Mon Rang en Classe
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Permettre que votre rang soit visible par les
                                  autres étudiants
                                </div>
                              </div>
                              <Switch
                                checked={false}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                            </motion.div>
                            <motion.div
                              className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="space-y-0.5">
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Partager les Réalisations Académiques
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Permettre que vos réalisations soient
                                  partagées sur les plateformes de l&apos;école
                                </div>
                              </div>
                              <Switch
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
