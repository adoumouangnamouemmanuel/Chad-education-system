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
  BookOpen,
  Calendar,
  Check,
  ChevronLeft,
  Download,
  Edit2,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Printer,
  School,
  Share2,
  Star,
  User,
  Users,
  Briefcase,
  Globe,
  TrendingUp,
  FileCheck,
  Building,
  Flag,
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
} from "recharts";
import Link from "next/link";

// Sample data for charts
const educationBudgetData = [
  { year: "2018", budget: 120, actual: 115 },
  { year: "2019", budget: 130, actual: 125 },
  { year: "2020", budget: 140, actual: 135 },
  { year: "2021", budget: 150, actual: 145 },
  { year: "2022", budget: 160, actual: 155 },
  { year: "2023", budget: 170, actual: 165 },
];

const schoolDistributionData = [
  { name: "Primaires", value: 65 },
  { name: "Collèges", value: 20 },
  { name: "Lycées", value: 10 },
  { name: "Supérieur", value: 5 },
];

const teacherRecruitmentData = [
  { month: "Jan", recruited: 45 },
  { month: "Feb", recruited: 30 },
  { month: "Mar", recruited: 25 },
  { month: "Apr", recruited: 40 },
  { month: "May", recruited: 35 },
  { month: "Jun", recruited: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function MinisterProfilePage() {
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
              href="/dashboard/minister"
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
              Profil du Ministre
            </motion.h1>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Gérez vos informations personnelles et consultez les statistiques
              nationales
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
                      En fonction
                    </Badge>
                  </motion.div>
                </div>
                <motion.div animate={avatarControls} className="relative">
                  <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                    <AvatarImage
                      src="/placeholder.svg?height=96&width=96"
                      alt="Ministre"
                    />
                    <AvatarFallback className="text-2xl bg-blue-100 text-blue-800">
                      MD
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
                    Moussa Djibert
                  </h2>
                  <p className="text-muted-foreground">
                    ID Ministre: MIN-2023-001
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="mr-1 h-4 w-4 text-blue-500" />
                    Ministre de l&apos;Éducation Nationale
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
                    <span className="text-sm">ministre@education.td</span>
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
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">
                      Ministère de l&apos;Éducation, N&apos;Djamena
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">
                      En fonction depuis: Janvier 2022
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
                    Statistiques Nationales
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <School className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        3,245
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Écoles
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center">
                        <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        28,450
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
                        <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        1.2M
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
                        <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="mt-1 font-semibold text-blue-900 dark:text-blue-50">
                        23
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Régions
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
                  value="statistics"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline">Statistiques</span>
                </TabsTrigger>
                <TabsTrigger
                  value="initiatives"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <FileCheck className="h-4 w-4" />
                  <span className="hidden sm:inline">Initiatives</span>
                </TabsTrigger>
                <TabsTrigger
                  value="biography"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Biographie</span>
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
                                defaultValue="Moussa Djibert"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="ministerId"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                ID Ministre
                              </Label>
                              <Input
                                id="ministerId"
                                defaultValue="MIN-2023-001"
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
                                defaultValue="ministre@education.td"
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
                                defaultValue="1975-05-15"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="nationality"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Nationalité
                              </Label>
                              <Input
                                id="nationality"
                                defaultValue="Tchadienne"
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
                                defaultValue="Ministère de l'Éducation, N'Djamena"
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
                                defaultValue="2022-01-10"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="cabinet"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Cabinet
                              </Label>
                              <Input
                                id="cabinet"
                                defaultValue="Gouvernement de la République du Tchad"
                                className="transition-all focus-visible:ring-blue-500 border-blue-200 dark:border-blue-800"
                              />
                            </motion.div>
                            <motion.div
                              className="space-y-2 md:col-span-2"
                              whileHover={{ scale: 1.01 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Label
                                htmlFor="education"
                                className="text-blue-700 dark:text-blue-300"
                              >
                                Formation Académique
                              </Label>
                              <Textarea
                                id="education"
                                rows={3}
                                defaultValue="Doctorat en Sciences de l'Éducation, Université de Paris-Sorbonne (2005)
Master en Administration Publique, ENA Tchad (1998)
Licence en Lettres Modernes, Université de N'Djamena (1995)"
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
                                Moussa Djibert
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                ID Ministre
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                MIN-2023-001
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
                                ministre@education.td
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
                                15/05/1975
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Nationalité
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                Tchadienne
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
                                Ministère de l&apos;Éducation, N&apos;Djamena
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Date de Nomination
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                10/01/2022
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Cabinet
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm">
                                Gouvernement de la République du Tchad
                              </p>
                            </motion.div>
                            <motion.div
                              className="space-y-2 md:col-span-2"
                              whileHover={{ scale: 1.01, x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">
                                Formation Académique
                              </h3>
                              <p className="text-base font-semibold text-blue-900 dark:text-blue-50 p-2 bg-blue-50 dark:bg-blue-900 rounded-md shadow-sm whitespace-pre-line">
                                Doctorat en Sciences de l&apos;Éducation,
                                Université de Paris-Sorbonne (2005) Master en
                                Administration Publique, ENA Tchad (1998)
                                Licence en Lettres Modernes, Université de
                                N&apos;Djamena (1995)
                              </p>
                            </motion.div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="statistics">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-blue-500" />
                          Statistiques Nationales
                        </CardTitle>
                        <CardDescription>
                          Consultez les statistiques et indicateurs clés du
                          système éducatif
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                              Budget de l&apos;Éducation (en milliards FCFA)
                            </h3>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200">
                              2018-2023
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
                                data={educationBudgetData}
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
                                <YAxis tick={{ fill: "#64748b" }} />
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
                                  dataKey="budget"
                                  name="Budget Prévu"
                                  fill="#3b82f6"
                                  radius={[4, 4, 0, 0]}
                                />
                                <Bar
                                  dataKey="actual"
                                  name="Budget Exécuté"
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
                              Distribution des Établissements
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
                                    data={schoolDistributionData}
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
                                    {schoolDistributionData.map(
                                      (entry, index) => (
                                        <Cell
                                          key={`cell-${index}`}
                                          fill={COLORS[index % COLORS.length]}
                                        />
                                      )
                                    )}
                                  </Pie>
                                  <RechartsTooltip />
                                </PieChart>
                              </ResponsiveContainer>
                            </motion.div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                              Recrutement des Enseignants (2023)
                            </h3>
                            <motion.div
                              className="h-64 bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 }}
                            >
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                  data={teacherRecruitmentData}
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
                                  <YAxis tick={{ fill: "#64748b" }} />
                                  <RechartsTooltip
                                    contentStyle={{
                                      backgroundColor: "#fff",
                                      borderColor: "#e2e8f0",
                                      borderRadius: "0.5rem",
                                      boxShadow:
                                        "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                    }}
                                  />
                                  <Line
                                    type="monotone"
                                    dataKey="recruited"
                                    name="Enseignants Recrutés"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    dot={{
                                      r: 6,
                                      fill: "#3b82f6",
                                      strokeWidth: 2,
                                      stroke: "#fff",
                                    }}
                                  />
                                </LineChart>
                              </ResponsiveContainer>
                            </motion.div>
                          </div>
                        </div>

                        <Separator className="bg-blue-100 dark:bg-blue-800" />

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50">
                            Indicateurs Clés de Performance
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, y: -5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-blue-900 dark:text-blue-50">
                                  Taux de Scolarisation
                                </h4>
                                <Badge className="bg-green-500 text-white">
                                  +2.5%
                                </Badge>
                              </div>
                              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                78.3%
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                Primaire et Secondaire
                              </div>
                            </motion.div>
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, y: -5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-blue-900 dark:text-blue-50">
                                  Taux d&apos;Achèvement
                                </h4>
                                <Badge className="bg-green-500 text-white">
                                  +1.8%
                                </Badge>
                              </div>
                              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                62.7%
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                Cycle Primaire
                              </div>
                            </motion.div>
                            <motion.div
                              className="bg-white dark:bg-blue-950 p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                              whileHover={{ scale: 1.02, y: -5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-blue-900 dark:text-blue-50">
                                  Ratio Élèves/Enseignant
                                </h4>
                                <Badge className="bg-amber-500 text-white">
                                  -0.5%
                                </Badge>
                              </div>
                              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                                42:1
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                Moyenne Nationale
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="initiatives">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <FileCheck className="h-5 w-5 text-blue-500" />
                          Initiatives et Projets
                        </CardTitle>
                        <CardDescription>
                          Suivez les initiatives et projets en cours du
                          Ministère
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="space-y-4">
                          <motion.div
                            className="bg-white dark:bg-blue-950 p-5 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                            whileHover={{ scale: 1.01, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-4">
                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                  <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <h3 className="font-medium text-lg text-blue-900 dark:text-blue-50">
                                    Programme de Construction d&apos;Écoles
                                  </h3>
                                  <p className="text-muted-foreground mt-1">
                                    Construction de 500 nouvelles salles de
                                    classe dans les zones rurales
                                  </p>
                                  <div className="flex items-center gap-4 mt-3">
                                    <div className="flex items-center gap-1 text-sm">
                                      <Calendar className="h-4 w-4 text-blue-500" />
                                      <span>Démarré: Jan 2023</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                      <Users className="h-4 w-4 text-blue-500" />
                                      <span>Bénéficiaires: 25,000 élèves</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-blue-500 text-white">
                                En cours
                              </Badge>
                            </div>
                            <div className="mt-4">
                              <div className="text-sm text-muted-foreground mb-1">
                                Progression: 65%
                              </div>
                              <div className="w-full bg-blue-100 dark:bg-blue-900 rounded-full h-2.5">
                                <div
                                  className="bg-blue-600 h-2.5 rounded-full"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white dark:bg-blue-950 p-5 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                            whileHover={{ scale: 1.01, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-4">
                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <h3 className="font-medium text-lg text-blue-900 dark:text-blue-50">
                                    Réforme des Programmes Scolaires
                                  </h3>
                                  <p className="text-muted-foreground mt-1">
                                    Modernisation des programmes
                                    d&apos;enseignement primaire et secondaire
                                  </p>
                                  <div className="flex items-center gap-4 mt-3">
                                    <div className="flex items-center gap-1 text-sm">
                                      <Calendar className="h-4 w-4 text-blue-500" />
                                      <span>Démarré: Mar 2022</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                      <School className="h-4 w-4 text-blue-500" />
                                      <span>Écoles: Toutes</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-green-500 text-white">
                                Terminé
                              </Badge>
                            </div>
                            <div className="mt-4">
                              <div className="text-sm text-muted-foreground mb-1">
                                Progression: 100%
                              </div>
                              <div className="w-full bg-blue-100 dark:bg-blue-900 rounded-full h-2.5">
                                <div
                                  className="bg-green-600 h-2.5 rounded-full"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white dark:bg-blue-950 p-5 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                            whileHover={{ scale: 1.01, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-4">
                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <h3 className="font-medium text-lg text-blue-900 dark:text-blue-50">
                                    Formation des Enseignants
                                  </h3>
                                  <p className="text-muted-foreground mt-1">
                                    Programme de formation continue pour 5,000
                                    enseignants
                                  </p>
                                  <div className="flex items-center gap-4 mt-3">
                                    <div className="flex items-center gap-1 text-sm">
                                      <Calendar className="h-4 w-4 text-blue-500" />
                                      <span>Démarré: Sep 2022</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                      <Users className="h-4 w-4 text-blue-500" />
                                      <span>
                                        Participants: 3,250 enseignants
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-blue-500 text-white">
                                En cours
                              </Badge>
                            </div>
                            <div className="mt-4">
                              <div className="text-sm text-muted-foreground mb-1">
                                Progression: 65%
                              </div>
                              <div className="w-full bg-blue-100 dark:bg-blue-900 rounded-full h-2.5">
                                <div
                                  className="bg-blue-600 h-2.5 rounded-full"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white dark:bg-blue-950 p-5 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                            whileHover={{ scale: 1.01, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-4">
                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                  <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <h3 className="font-medium text-lg text-blue-900 dark:text-blue-50">
                                    Digitalisation de l&apos;Éducation
                                  </h3>
                                  <p className="text-muted-foreground mt-1">
                                    Équipement de 100 lycées en matériel
                                    informatique et connexion internet
                                  </p>
                                  <div className="flex items-center gap-4 mt-3">
                                    <div className="flex items-center gap-1 text-sm">
                                      <Calendar className="h-4 w-4 text-blue-500" />
                                      <span>Démarré: Nov 2022</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                      <School className="h-4 w-4 text-blue-500" />
                                      <span>Écoles: 45 équipées</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-amber-500 text-white">
                                En retard
                              </Badge>
                            </div>
                            <div className="mt-4">
                              <div className="text-sm text-muted-foreground mb-1">
                                Progression: 45%
                              </div>
                              <div className="w-full bg-blue-100 dark:bg-blue-900 rounded-full h-2.5">
                                <div
                                  className="bg-amber-500 h-2.5 rounded-full"
                                  style={{ width: "45%" }}
                                ></div>
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white dark:bg-blue-950 p-5 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800"
                            whileHover={{ scale: 1.01, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-4">
                                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                                  <Flag className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <h3 className="font-medium text-lg text-blue-900 dark:text-blue-50">
                                    Stratégie Nationale d&apos;Éducation 2025
                                  </h3>
                                  <p className="text-muted-foreground mt-1">
                                    Élaboration de la nouvelle stratégie
                                    nationale pour l&apos;éducation
                                  </p>
                                  <div className="flex items-center gap-4 mt-3">
                                    <div className="flex items-center gap-1 text-sm">
                                      <Calendar className="h-4 w-4 text-blue-500" />
                                      <span>Démarré: Fév 2023</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                      <FileText className="h-4 w-4 text-blue-500" />
                                      <span>Phase: Consultation</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Badge className="bg-blue-500 text-white">
                                En cours
                              </Badge>
                            </div>
                            <div className="mt-4">
                              <div className="text-sm text-muted-foreground mb-1">
                                Progression: 30%
                              </div>
                              <div className="w-full bg-blue-100 dark:bg-blue-900 rounded-full h-2.5">
                                <div
                                  className="bg-blue-600 h-2.5 rounded-full"
                                  style={{ width: "30%" }}
                                ></div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="biography">
                    <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                        <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-500" />
                          Biographie et Parcours
                        </CardTitle>
                        <CardDescription>
                          Découvrez le parcours professionnel et les
                          réalisations du Ministre
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6 p-6">
                        <div className="prose prose-blue dark:prose-invert max-w-none">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-50">
                              Parcours Professionnel
                            </h3>
                            <p>
                              Moussa Djibert est un éducateur et administrateur
                              chevronné avec plus de 25 ans d&apos;expérience
                              dans le secteur de l&apos;éducation. Nommé
                              Ministre de l&apos;Éducation Nationale en janvier
                              2022, il a consacré sa carrière à
                              l&apos;amélioration du système éducatif tchadien.
                            </p>
                            <p>
                              Avant sa nomination au poste de Ministre, M.
                              Djibert a occupé plusieurs postes de
                              responsabilité, notamment:
                            </p>
                            <ul className="space-y-2 mt-4">
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  <strong>2018-2022:</strong> Secrétaire Général
                                  du Ministère de l&apos;Éducation Nationale
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  <strong>2015-2018:</strong> Directeur Général
                                  de l&apos;Enseignement et de la Formation
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  <strong>2010-2015:</strong> Recteur de
                                  l&apos;Université de N&apos;Djamena
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  <strong>2005-2010:</strong> Doyen de la
                                  Faculté des Lettres et Sciences Humaines
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  <strong>1998-2005:</strong> Professeur à
                                  l&apos;Université de N&apos;Djamena
                                </span>
                              </motion.li>
                            </ul>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                          >
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-50">
                              Réalisations Majeures
                            </h3>
                            <p>
                              Depuis sa prise de fonction en tant que Ministre
                              de l&apos;Éducation, M. Djibert a initié plusieurs
                              réformes importantes:
                            </p>
                            <ul className="space-y-2 mt-4">
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  Augmentation du budget de l&apos;éducation de
                                  15% en deux ans
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  Recrutement et formation de plus de 5,000
                                  nouveaux enseignants
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  Modernisation des programmes scolaires pour
                                  mieux répondre aux besoins du marché du
                                  travail
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  Lancement d&apos;un programme ambitieux de
                                  construction d&apos;écoles dans les zones
                                  rurales
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  Mise en place d&apos;un système national
                                  d&apos;évaluation des acquis scolaires
                                </span>
                              </motion.li>
                            </ul>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8"
                          >
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-50">
                              Publications et Recherches
                            </h3>
                            <p>
                              En tant qu&apos;académicien, M. Djibert a
                              contribué à plusieurs publications scientifiques
                              dans le domaine de l&apos;éducation:
                            </p>
                            <ul className="space-y-2 mt-4">
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  &quot;L&apos;Éducation comme Moteur du
                                  Développement en Afrique Centrale&quot; (2018)
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  &quot;Défis et Perspectives de
                                  l&apos;Enseignement Supérieur au Tchad&quot;
                                  (2015)
                                </span>
                              </motion.li>
                              <motion.li
                                className="flex items-start gap-2"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <span className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full mt-0.5">
                                  <Check className="h-3 w-3 text-blue-600" />
                                </span>
                                <span>
                                  &quot;Politiques Éducatives et Développement
                                  Durable&quot; (2012)
                                </span>
                              </motion.li>
                            </ul>
                          </motion.div>
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