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
  BarChart2,
  Building2,
  Calendar,
  Check,
  ChevronLeft,
  Download,
  Edit2,
  FileText,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Phone,
  Printer,
  School,
  Settings,
  Share2,
  Shield,
  Sparkles,
  Star,
  Users,
  Bell,
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
const performanceData = [
  { year: "2019", performance: 82, average: 75 },
  { year: "2020", performance: 85, average: 76 },
  { year: "2021", performance: 88, average: 77 },
  { year: "2022", performance: 91, average: 78 },
  { year: "2023", performance: 94, average: 80 },
];

const teacherRetentionData = [
  { year: "2019", retention: 85 },
  { year: "2020", retention: 87 },
  { year: "2021", retention: 90 },
  { year: "2022", retention: 92 },
  { year: "2023", retention: 95 },
];

const studentDistributionData = [
  { name: "6ème", value: 120 },
  { name: "5ème", value: 110 },
  { name: "4ème", value: 105 },
  { name: "3ème", value: 95 },
  { name: "2nde", value: 85 },
  { name: "1ère", value: 75 },
  { name: "Terminale", value: 65 },
];

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#ec4899",
];

const budgetAllocationData = [
  { name: "Salaires", value: 55 },
  { name: "Matériel", value: 15 },
  { name: "Infrastructure", value: 20 },
  { name: "Activités", value: 10 },
];

export default function DirectorProfilePage() {
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
        repeat: Infinity,
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
              href="/dashboard/director"
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
              Profil Directeur
            </motion.h1>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Gérez vos informations personnelles et les paramètres de votre
              établissement
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
          <motion.div variants={itemVariants}>
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
                    repeat: Infinity,
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
                      alt="Directeur"
                    />
                    <AvatarFallback className="text-2xl bg-blue-100 text-blue-800">
                      JB
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
                    Jean Baptiste Ndjamena
                  </h2>
                  <p className="text-muted-foreground">
                    ID Directeur: DIR-2019-0023
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
                    <Mail className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">jean.baptiste@education.td</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Phone className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">+235 63 45 78 90</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">N&apos;Djamena, Tchad</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">Nommé: Septembre 2019</span>
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
                    Statistiques de l&apos;École
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
                        1,234
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
                        <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        45
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Enseignants
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        28
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Salles de Classe
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
                        92%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Taux de Réussite
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
                  <Users className="h-4 w-4" />
                  <span className="hidden sm:inline">Personnel</span>
                </TabsTrigger>
                <TabsTrigger
                  value="school"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <School className="h-4 w-4" />
                  <span className="hidden sm:inline">École</span>
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <BarChart2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Performance</span>
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <Settings className="h-4 w-4" />
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
                          <Users className="h-5 w-5 text-blue-500" />
                          Informations Personnelles
                        </CardTitle>
                        <CardDescription>
                          Mettez à jour vos informations personnelles et
                          coordonnées
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
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
                              defaultValue="Jean Baptiste Ndjamena"
                              disabled={!isEditing}
                              className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                            />
                          </motion.div>
                          <motion.div
                            className="space-y-2"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Label
                              htmlFor="directorId"
                              className="text-blue-700 dark:text-blue-300"
                            >
                              ID Directeur
                            </Label>
                            <Input
                              id="directorId"
                              defaultValue="DIR-2019-0023"
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
                              defaultValue="jean.baptiste@education.td"
                              disabled={!isEditing}
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
                              defaultValue="+235 63 45 78 90"
                              disabled={!isEditing}
                              className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                            />
                          </motion.div>
                          <motion.div
                            className="space-y-2"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Label
                              htmlFor="appointmentDate"
                              className="text-blue-700 dark:text-blue-300"
                            >
                              Date de Nomination
                            </Label>
                            <Input
                              id="appointmentDate"
                              type="date"
                              defaultValue="2019-09-01"
                              disabled={!isEditing}
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
                              defaultValue="Avenue Charles de Gaulle, N'Djamena"
                              disabled={!isEditing}
                              className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          className="space-y-2"
                          whileHover={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Label
                            htmlFor="bio"
                            className="text-blue-700 dark:text-blue-300"
                          >
                            Biographie
                          </Label>
                          <Textarea
                            id="bio"
                            rows={4}
                            defaultValue="Jean Baptiste Ndjamena est directeur du Lycée National de N'Djamena depuis septembre 2019. Avec plus de 15 ans d'expérience dans l'éducation, il a mis en œuvre plusieurs améliorations clés de l'infrastructure et des programmes académiques de l'école. Sous sa direction, l'école s'est constamment classée parmi les 5 premières du pays pour ses performances académiques. M. Ndjamena est titulaire d'une maîtrise en administration de l'éducation de l'Université de N'Djamena."
                            disabled={!isEditing}
                            className="resize-none transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                          />
                        </motion.div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="qualifications"
                            className="text-blue-700 dark:text-blue-300"
                          >
                            Qualifications
                          </Label>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                              Maîtrise en Administration de l&apos;Éducation
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                              Licence en Mathématiques
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                              Administrateur Scolaire Certifié
                            </Badge>
                            {isEditing && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full"
                              >
                                + Ajouter une qualification
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="school">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <School className="h-5 w-5 text-blue-500" />
                          Informations de l&apos;École
                        </CardTitle>
                        <CardDescription>
                          Gérez les détails et les informations administratives
                          de votre école
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <motion.div
                            className="space-y-2"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Label
                              htmlFor="schoolName"
                              className="text-blue-700 dark:text-blue-300"
                            >
                              Nom de l&apos;École
                            </Label>
                            <Input
                              id="schoolName"
                              defaultValue="Lycée National de N'Djamena"
                              disabled={!isEditing}
                              className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                            />
                          </motion.div>
                          <motion.div
                            className="space-y-2"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Label
                              htmlFor="schoolCode"
                              className="text-blue-700 dark:text-blue-300"
                            >
                              Code de l&apos;École
                            </Label>
                            <Input
                              id="schoolCode"
                              defaultValue="LYC-NDJ-001"
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
                              htmlFor="schoolType"
                              className="text-blue-700 dark:text-blue-300"
                            >
                              Type d&apos;École
                            </Label>
                            <Input
                              id="schoolType"
                              defaultValue="Lycée Public"
                              disabled={!isEditing}
                              className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                            />
                          </motion.div>
                          <motion.div
                            className="space-y-2"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Label
                              htmlFor="foundedYear"
                              className="text-blue-700 dark:text-blue-300"
                            >
                              Année de Fondation
                            </Label>
                            <Input
                              id="foundedYear"
                              defaultValue="1965"
                              disabled={!isEditing}
                              className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                            />
                          </motion.div>
                        </div>

                        <motion.div
                          className="space-y-2"
                          whileHover={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Label
                            htmlFor="schoolDescription"
                            className="text-blue-700 dark:text-blue-300"
                          >
                            Description de l&apos;École
                          </Label>
                          <Textarea
                            id="schoolDescription"
                            rows={4}
                            defaultValue="Le Lycée National de N'Djamena est l'une des plus anciennes et des plus prestigieuses écoles secondaires du Tchad. Fondé en 1965, il a une riche histoire d'excellence académique et a produit de nombreux anciens élèves remarquables qui ont accédé à des postes de direction dans le gouvernement, les affaires et le milieu universitaire. L'école offre un programme complet de la 6ème à la Terminale, avec des spécialisations en sciences, littérature et économie."
                            disabled={!isEditing}
                            className="resize-none transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                          />
                        </motion.div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Répartition des Élèves
                          </h3>
                          <motion.div
                            className="h-80 bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={studentDistributionData}
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
                                  {studentDistributionData.map(
                                    (entry, index) => (
                                      <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                      />
                                    )
                                  )}
                                </Pie>
                                <RechartsTooltip />
                                <Legend />
                              </PieChart>
                            </ResponsiveContainer>
                          </motion.div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Répartition du Budget
                          </h3>
                          <motion.div
                            className="h-80 bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={budgetAllocationData}
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
                                  {budgetAllocationData.map((entry, index) => (
                                    <Cell
                                      key={`cell-${index}`}
                                      fill={COLORS[index % COLORS.length]}
                                    />
                                  ))}
                                </Pie>
                                <RechartsTooltip />
                                <Legend />
                              </PieChart>
                            </ResponsiveContainer>
                          </motion.div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Installations de l&apos;École
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Switch
                                id="library"
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label htmlFor="library">Bibliothèque</Label>
                            </motion.div>
                            <motion.div
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Switch
                                id="computerLab"
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label htmlFor="computerLab">
                                Salle Informatique
                              </Label>
                            </motion.div>
                            <motion.div
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Switch
                                id="scienceLab"
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label htmlFor="scienceLab">
                                Laboratoire de Sciences
                              </Label>
                            </motion.div>
                            <motion.div
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Switch
                                id="sportsField"
                                checked={true}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label htmlFor="sportsField">
                                Terrain de Sport
                              </Label>
                            </motion.div>
                            <motion.div
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Switch
                                id="cafeteria"
                                checked={false}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label htmlFor="cafeteria">Cafétéria</Label>
                            </motion.div>
                            <motion.div
                              className="flex items-center space-x-2"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Switch
                                id="auditorium"
                                checked={false}
                                disabled={!isEditing}
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label htmlFor="auditorium">Auditorium</Label>
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="performance">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <BarChart2 className="h-5 w-5 text-blue-500" />
                          Performance de l&apos;École
                        </CardTitle>
                        <CardDescription>
                          Suivez les performances académiques et les métriques
                          de votre école
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                              Performance Académique
                            </h3>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                              5 Dernières Années
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
                                data={performanceData}
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
                                  dataKey="year"
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
                                <Bar
                                  dataKey="performance"
                                  name="Performance de l'École (%)"
                                  fill="#3b82f6"
                                  radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                  dataKey="average"
                                  name="Moyenne Nationale (%)"
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
                            Rétention des Enseignants
                          </h3>
                          <motion.div
                            className="h-80 bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart
                                data={teacherRetentionData}
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
                                  dataKey="year"
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
                                  dataKey="retention"
                                  name="Taux de Rétention (%)"
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
                            Résultats aux Examens Nationaux
                          </h3>
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
                                    92%
                                  </motion.div>
                                  <div className="text-sm text-muted-foreground mt-2">
                                    Taux de Réussite au BAC
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
                                    85%
                                  </motion.div>
                                  <div className="text-sm text-muted-foreground mt-2">
                                    Taux de Réussite au BEPC
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
                                    3ème
                                  </motion.div>
                                  <div className="text-sm text-muted-foreground mt-2">
                                    Classement National
                                  </div>
                                </CardContent>
                              </Card>
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
                          <Settings className="h-5 w-5 text-blue-500" />
                          Paramètres Administratifs
                        </CardTitle>
                        <CardDescription>
                          Gérez la sécurité de votre compte et vos préférences
                          administratives
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-blue-500" />
                            Sécurité du Compte
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
                                  Mises à jour des Enseignants
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Recevoir des notifications sur les activités
                                  des enseignants
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
                                  Mises à jour des Élèves
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Recevoir des notifications sur les activités
                                  des élèves
                                </div>
                              </div>
                              <Switch
                                checked={false}
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
                            Délégation Administrative
                          </h3>
                          <div className="space-y-3">
                            <motion.div
                              className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-blue-950 shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="space-y-0.5">
                                <div className="font-medium text-blue-900 dark:text-blue-50">
                                  Accès du Directeur Adjoint
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Permettre au Directeur Adjoint
                                  d&apos;approuver les affaires courantes
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
                                  Autonomie des Chefs de Département
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Permettre aux Chefs de Département de gérer
                                  leurs départements
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
                                  Accès du Personnel Administratif
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Permettre au personnel administratif de mettre
                                  à jour les dossiers des élèves
                                </div>
                              </div>
                              <Switch
                                checked={false}
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