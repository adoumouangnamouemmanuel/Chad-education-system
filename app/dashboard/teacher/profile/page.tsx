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
  Users,
  Bell,
  Shield,
  Sparkles,
  BookMarked,
  ClipboardList,
  Presentation,
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
const classPerformanceData = [
  { class: "10A Math", average: 14.2, passRate: 92 },
  { class: "11B Math", average: 13.8, passRate: 88 },
  { class: "12C Math", average: 15.1, passRate: 95 },
  { class: "10B Math", average: 12.9, passRate: 82 },
];

const attendanceData = [
  { month: "Sep", attendance: 100 },
  { month: "Oct", attendance: 98 },
  { month: "Nov", attendance: 100 },
  { month: "Dec", attendance: 97 },
  { month: "Jan", attendance: 99 },
  { month: "Feb", attendance: 100 },
  { month: "Mar", attendance: 98 },
];

const teachingSkillsData = [
  { skill: "Pédagogie", value: 18, fullMark: 20 },
  { skill: "Expertise", value: 17, fullMark: 20 },
  { skill: "Évaluation", value: 16, fullMark: 20 },
  { skill: "Innovation", value: 15, fullMark: 20 },
  { skill: "Communication", value: 18, fullMark: 20 },
  { skill: "Gestion de classe", value: 16, fullMark: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const classDistribution = [
  { name: "Mathématiques", value: 60 },
  { name: "Physique", value: 20 },
  { name: "Informatique", value: 20 },
];

export default function TeacherProfilePage() {
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

  return (
    <div className="container mx-auto py-6 space-y-8">
      {/* Progress bar at the top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Progress
          value={progress}
          className="h-1 rounded-none bg-transparent bg-blue-500"
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
              href="/dashboard/teacher"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Retour au Tableau de Bord</span>
            </Link>
          </motion.div>
          <div>
            <motion.h1
              className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Profil Enseignant
            </motion.h1>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Gérez vos informations personnelles et consultez vos performances
              pédagogiques
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
          <motion.div variants={itemVariants} whileHover="hover">
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
                      Titulaire
                    </Badge>
                  </motion.div>
                </div>
                <motion.div animate={avatarControls} className="relative">
                  <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                    <AvatarImage
                      src="/placeholder.svg?height=96&width=96"
                      alt="Enseignant"
                    />
                    <AvatarFallback className="text-2xl bg-blue-100 text-blue-800">
                      FI
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
                    Fatima Ibrahim
                  </h2>
                  <p className="text-muted-foreground">
                    ID Enseignant: TCH-2018-1234
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
                    <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">Professeur de Mathématiques</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Mail className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">fatima.i@education.td</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Phone className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">+235 66 XX XX XX</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Home className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">
                      Quartier Ambassatna, N&apos;Djamena
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">
                      En poste depuis: Septembre 2018
                    </span>
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
                    Résumé Professionnel
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        85
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Élèves
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <BookMarked className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        3
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Classes
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
                        18
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Heures/Semaine
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        8
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Années d&apos;Expérience
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
                  value="classes"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Classes</span>
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <Presentation className="h-4 w-4" />
                  <span className="hidden sm:inline">Performance</span>
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
                                defaultValue="Fatima Ibrahim"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="teacherId"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                ID Enseignant
                              </Label>
                              <Input
                                id="teacherId"
                                defaultValue="TCH-2018-1234"
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
                                defaultValue="fatima.i@education.td"
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
                                htmlFor="dateOfBirth"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Date de Naissance
                              </Label>
                              <Input
                                id="dateOfBirth"
                                type="date"
                                defaultValue="1985-03-15"
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
                                defaultValue="Féminin"
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
                                defaultValue="Quartier Ambassatna, N'Djamena"
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
                                htmlFor="qualifications"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Qualifications et Diplômes
                              </Label>
                              <Textarea
                                id="qualifications"
                                rows={3}
                                defaultValue="Master en Mathématiques, Université de N'Djamena (2015)
Licence en Éducation, Université de N'Djamena (2012)
Certification en Pédagogie Numérique (2020)"
                                className="resize-none transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2 md:col-span-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="specialization"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Spécialisation et Compétences
                              </Label>
                              <Textarea
                                id="specialization"
                                rows={3}
                                defaultValue="Mathématiques avancées, Algèbre, Géométrie, Statistiques
Pédagogie différenciée, Enseignement numérique
Préparation aux examens nationaux"
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
                                Fatima Ibrahim
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                ID Enseignant
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                TCH-2018-1234
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
                                fatima.i@education.td
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
                                +235 66 XX XX XX
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
                                15/03/1985
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
                                Féminin
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
                                Quartier Ambassatna, N&apos;Djamena
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
                                Qualifications et Diplômes
                              </h3>
                              <div className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm whitespace-pre-line">
                                Master en Mathématiques, Université de
                                N&apos;Djamena (2015) Licence en Éducation,
                                Université de N&apos;Djamena (2012)
                                Certification en Pédagogie Numérique (2020)
                              </div>
                            </motion.div>
                            <motion.div
                              className="space-y-2 md:col-span-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Spécialisation et Compétences
                              </h3>
                              <div className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm whitespace-pre-line">
                                Mathématiques avancées, Algèbre, Géométrie,
                                Statistiques Pédagogie différenciée,
                                Enseignement numérique Préparation aux examens
                                nationaux
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="classes">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-blue-500" />
                          Classes et Enseignement
                        </CardTitle>
                        <CardDescription>
                          Consultez vos classes actuelles et votre emploi du
                          temps
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                              Classes Actuelles
                            </h3>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                              Année 2023-2024
                            </Badge>
                          </div>

                          <div className="space-y-4">
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-5 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{
                                y: -5,
                                boxShadow:
                                  "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                  <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-50">
                                    Mathématiques 10A
                                  </h4>
                                  <div className="mt-2 space-y-1">
                                    <div className="flex items-center text-sm">
                                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                                      <span>32 élèves</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                                      <span>
                                        Lundi, Mercredi, Vendredi 8:00-9:30
                                      </span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                      <School className="h-4 w-4 mr-2 text-blue-500" />
                                      <span>Salle 12B</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="rounded-full"
                                  >
                                    <ClipboardList className="h-4 w-4 mr-2" />
                                    Liste d&apos;élèves
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="rounded-full bg-blue-600"
                                  >
                                    <FileText className="h-4 w-4 mr-2" />
                                    Saisir les notes
                                  </Button>
                                </div>
                              </div>
                            </motion.div>

                            <motion.div
                              className="bg-white dark:bg-blue-950 p-5 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{
                                y: -5,
                                boxShadow:
                                  "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                  <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-50">
                                    Mathématiques 11B
                                  </h4>
                                  <div className="mt-2 space-y-1">
                                    <div className="flex items-center text-sm">
                                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                                      <span>28 élèves</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                                      <span>
                                        Lundi, Mercredi, Vendredi 10:00-11:30
                                      </span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                      <School className="h-4 w-4 mr-2 text-blue-500" />
                                      <span>Salle 14A</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="rounded-full"
                                  >
                                    <ClipboardList className="h-4 w-4 mr-2" />
                                    Liste d&apos;élèves
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="rounded-full bg-blue-600"
                                  >
                                    <FileText className="h-4 w-4 mr-2" />
                                    Saisir les notes
                                  </Button>
                                </div>
                              </div>
                            </motion.div>

                            <motion.div
                              className="bg-white dark:bg-blue-950 p-5 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{
                                y: -5,
                                boxShadow:
                                  "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                  <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-50">
                                    Mathématiques 12C
                                  </h4>
                                  <div className="mt-2 space-y-1">
                                    <div className="flex items-center text-sm">
                                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                                      <span>25 élèves</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                                      <span>Mardi, Jeudi 8:00-10:00</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                      <School className="h-4 w-4 mr-2 text-blue-500" />
                                      <span>Salle 15C</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="rounded-full"
                                  >
                                    <ClipboardList className="h-4 w-4 mr-2" />
                                    Liste d&apos;élèves
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="rounded-full bg-blue-600"
                                  >
                                    <FileText className="h-4 w-4 mr-2" />
                                    Saisir les notes
                                  </Button>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

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
                                  data={classDistribution}
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
                                  {classDistribution.map((entry, index) => (
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

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Emploi du Temps Hebdomadaire
                          </h3>
                          <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr>
                                  <th className="border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 p-2 text-left">
                                    Heure
                                  </th>
                                  <th className="border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 p-2 text-left">
                                    Lundi
                                  </th>
                                  <th className="border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 p-2 text-left">
                                    Mardi
                                  </th>
                                  <th className="border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 p-2 text-left">
                                    Mercredi
                                  </th>
                                  <th className="border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 p-2 text-left">
                                    Jeudi
                                  </th>
                                  <th className="border border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 p-2 text-left">
                                    Vendredi
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2">
                                    8:00 - 10:00
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Math 10A
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Math 12C
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Math 10A
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Math 12C
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Math 10A
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2">
                                    10:00 - 12:00
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Math 11B
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2"></td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Math 11B
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2"></td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Math 11B
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2">
                                    14:00 - 16:00
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2"></td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Réunion Dép.
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2"></td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2 bg-blue-50 dark:bg-blue-900">
                                    Tutorat
                                  </td>
                                  <td className="border border-blue-100 dark:border-blue-800 p-2"></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="performance">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <Presentation className="h-5 w-5 text-blue-500" />
                          Performance Pédagogique
                        </CardTitle>
                        <CardDescription>
                          Consultez vos indicateurs de performance et
                          évaluations
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                              Performance des Classes
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
                                data={classPerformanceData}
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
                                  dataKey="class"
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
                                  dataKey="average"
                                  name="Moyenne de Classe"
                                  fill="#3b82f6"
                                  radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                  dataKey="passRate"
                                  name="Taux de Réussite (%)"
                                  fill="#93c5fd"
                                  radius={[4, 4, 0, 0]}
                                />
                              </BarChart>
                            </ResponsiveContainer>
                          </motion.div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Compétences Pédagogiques
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
                                data={teachingSkillsData}
                              >
                                <PolarGrid stroke="#e2e8f0" />
                                <PolarAngleAxis
                                  dataKey="skill"
                                  tick={{ fill: "#64748b" }}
                                />
                                <PolarRadiusAxis
                                  angle={30}
                                  domain={[0, 20]}
                                  tick={{ fill: "#64748b" }}
                                />
                                <Radar
                                  name="Compétences"
                                  dataKey="value"
                                  stroke="#3b82f6"
                                  fill="#3b82f6"
                                  fillOpacity={0.6}
                                />
                                <RechartsTooltip />
                              </RadarChart>
                            </ResponsiveContainer>
                          </motion.div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Assiduité et Ponctualité
                          </h3>
                          <motion.div
                            className="h-64 bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm"
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
                            Évaluations et Commentaires
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
                                    Évaluation du Directeur
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Mars 2023
                                  </div>
                                  <div className="flex items-center mt-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-5 w-5 ${
                                          star <= 5
                                            ? "text-yellow-500 fill-yellow-500"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <div className="mt-2 text-sm">
                                    "Mme Ibrahim est une enseignante
                                    exceptionnelle qui démontre une maîtrise
                                    parfaite de sa matière et une capacité
                                    remarquable à engager ses élèves. Ses
                                    méthodes pédagogiques innovantes ont
                                    contribué à l'amélioration significative des
                                    résultats en mathématiques."
                                  </div>
                                </div>
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
                                    Évaluation des Pairs
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Février 2023
                                  </div>
                                  <div className="flex items-center mt-2">
                                    {[1, 2, 3, 4].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-5 w-5 text-yellow-500 fill-yellow-500`}
                                      />
                                    ))}
                                    <Star className="h-5 w-5 text-gray-300" />
                                  </div>
                                  <div className="mt-2 text-sm">
                                    "Fatima est une collègue très collaborative
                                    qui partage volontiers ses ressources
                                    pédagogiques. Sa méthode d'enseignement des
                                    mathématiques est particulièrement efficace
                                    pour les élèves en difficulté."
                                  </div>
                                </div>
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
                                    Feedback des Élèves
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    Janvier 2023
                                  </div>
                                  <div className="flex items-center mt-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star
                                        key={star}
                                        className={`h-5 w-5 ${
                                          star <= 4
                                            ? "text-yellow-500 fill-yellow-500"
                                            : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <div className="mt-2 text-sm">
                                    "Mme Ibrahim explique très bien les concepts
                                    difficiles et est toujours disponible pour
                                    nous aider. Ses cours sont intéressants et
                                    elle utilise des exemples concrets qui nous
                                    aident à comprendre."
                                  </div>
                                </div>
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
                                  Alertes de Réunions
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Recevoir des rappels pour les réunions et
                                  événements
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
                                  Notifications de Performance
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Recevoir des mises à jour sur les performances
                                  des élèves
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
                                  Partager mes Statistiques
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Permettre que vos statistiques de performance
                                  soient visibles par d&apos;autres enseignants
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
                                  Partager mes Ressources Pédagogiques
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Permettre que vos ressources pédagogiques
                                  soient partagées avec d&apos;autres
                                  enseignants
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
