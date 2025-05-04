"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SchoolProfile } from "@/components/dashboard/school-profile";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  Download,
  Edit,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Users,
  Beaker,
  Laptop,
  BookOpen,
  LayoutGrid,
  Dumbbell,
  ClubIcon as Football,
  Activity,
  Utensils,
  HeartPulse,
  Users2,
  Building2,
  GraduationCapIcon as GradCap,
  Palette,
  Code,
  MessageSquare,
  FlaskRoundIcon as Flask,
  Trophy,
} from "lucide-react";

export default function DirectorSchoolProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  };

  const statsData = [
    {
      label: "Taux de réussite",
      value: "78.5%",
      change: "+2.3% par rapport à 2022",
    },
    {
      label: "Mentions",
      value: "42%",
      subtext: "Des élèves ont obtenu une mention",
    },
    { label: "Classement national", value: "3ème", subtext: "Sur 128 lycées" },
  ];

  const facilitiesData = {
    academic: [
      { icon: Building2, text: "32 salles de classe standard" },
      { icon: Beaker, text: "2 laboratoires de sciences" },
      { icon: Laptop, text: "1 laboratoire informatique avec 25 ordinateurs" },
      { icon: BookOpen, text: "1 bibliothèque avec 5,000+ livres" },
      { icon: LayoutGrid, text: "1 salle polyvalente" },
    ],
    sports: [
      { icon: Football, text: "1 terrain de football" },
      { icon: Activity, text: "2 terrains de basketball" },
      { icon: Dumbbell, text: "1 piste d'athlétisme" },
    ],
    other: [
      { icon: Utensils, text: "Cantine scolaire" },
      { icon: HeartPulse, text: "Infirmerie" },
      { icon: Users2, text: "Salle des professeurs" },
      { icon: Building, text: "Bureaux administratifs" },
    ],
  };

  const programsData = {
    academic: [
      { icon: GradCap, text: "Série A (Littéraire)" },
      { icon: Beaker, text: "Série C (Mathématiques et Sciences Physiques)" },
      { icon: Flask, text: "Série D (Mathématiques et Sciences Naturelles)" },
    ],
    extracurricular: [
      { icon: MessageSquare, text: "Club de débat" },
      { icon: Flask, text: "Club de sciences" },
      {
        icon: Trophy,
        text: "Équipes sportives (football, basketball, athlétisme)",
      },
      { icon: Palette, text: "Club d'art et de culture" },
      { icon: Code, text: "Club d'informatique" },
    ],
  };

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex items-center justify-between"
        variants={itemVariants}
      >
        <div className="flex items-center">
          <h1 className="text-3xl font-bold tracking-tight text-blue-800">
            Profil de l'école
          </h1>
          <motion.div
            className="ml-2 h-1.5 w-1.5 rounded-full bg-blue-500"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />
        </div>
        <div className="flex gap-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Exporter
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300">
              <Edit className="mr-2 h-4 w-4" />
              Modifier
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={itemVariants}
      >
        <motion.div
          className="md:col-span-2"
          whileHover={{
            boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.2)",
            y: -2,
          }}
          transition={{ duration: 0.2 }}
        >
          <Card className="border-blue-100 shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
              <CardTitle className="text-blue-800">
                Lycée National de N'Djamena
              </CardTitle>
              <CardDescription className="text-blue-600">
                École secondaire publique
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-2 shadow-sm p-2 rounded-md bg-white border border-blue-100"
                  whileHover={{ x: 5 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                  
                >
                  <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div >
                    <p>Avenue Charles de Gaulle</p>
                    <p>N'Djamena, Tchad</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 shadow-sm p-2 rounded-md bg-white border border-blue-100"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Phone className="h-5 w-5 text-blue-500" />
                  <p>+235 22 52 46 79</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 shadow-sm p-2 rounded-md bg-white border border-blue-100"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Mail className="h-5 w-5 text-blue-500" />
                  <p>lycee.national@education.td</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 shadow-sm p-2 rounded-md bg-white border border-blue-100"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Users className="h-5 w-5 text-blue-500" />
                  <p>1,245 élèves inscrits</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 shadow-sm p-2 rounded-md bg-white border border-blue-100"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                  <p>78 enseignants</p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 shadow-sm p-2 rounded-md bg-white border border-blue-100"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Building className="h-5 w-5 text-blue-500" />
                  <p>32 salles de classe</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{
            boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.2)",
            y: -2,
          }}
          transition={{ duration: 0.2 }}
        >
          <Card className="h-full border-blue-100 shadow-md">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
              <CardTitle className="text-blue-800">
                Informations administratives
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p className="text-sm font-medium text-blue-600">
                    Code d'établissement
                  </p>
                  <p className="text-gray-800">LNN-001</p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p className="text-sm font-medium text-blue-600">
                    Type d'établissement
                  </p>
                  <p className="text-gray-800">Public</p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p className="text-sm font-medium text-blue-600">Niveau</p>
                  <p className="text-gray-800">Secondaire</p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p className="text-sm font-medium text-blue-600">
                    Année de fondation
                  </p>
                  <p className="text-gray-800">1962</p>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p className="text-sm font-medium text-blue-600">Région</p>
                  <p className="text-gray-800">N'Djamena</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="border-blue-100 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
            <CardTitle className="text-blue-800">Détails de l'école</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs
              defaultValue="overview"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="mb-6 bg-blue-50 p-1">
                <TabsTrigger
                  value="overview"
                  className={`data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                    activeTab === "overview"
                      ? ""
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  Vue d'ensemble
                </TabsTrigger>
                <TabsTrigger
                  value="facilities"
                  className={`data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                    activeTab === "facilities"
                      ? ""
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  Installations
                </TabsTrigger>
                <TabsTrigger
                  value="programs"
                  className={`data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                    activeTab === "programs"
                      ? ""
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  Programmes
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className={`data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                    activeTab === "performance"
                      ? ""
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  Performance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0">
                <SchoolProfile />
              </TabsContent>

              <TabsContent value="facilities" className="mt-0">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-medium text-blue-800 mb-4">
                      Installations académiques
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {facilitiesData.academic.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={cardVariants}
                          whileHover="hover"
                          className="bg-white rounded-xl p-4 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-blue-100">
                              <item.icon className="h-5 w-5 text-blue-600" />
                            </div>
                            <p className="text-gray-700">{item.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-lg font-medium text-blue-800 mb-4">
                      Installations sportives
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {facilitiesData.sports.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={cardVariants}
                          whileHover="hover"
                          className="bg-white rounded-xl p-4 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-green-100">
                              <item.icon className="h-5 w-5 text-green-600" />
                            </div>
                            <p className="text-gray-700">{item.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-lg font-medium text-blue-800 mb-4">
                      Autres installations
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {facilitiesData.other.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={cardVariants}
                          whileHover="hover"
                          className="bg-white rounded-xl p-4 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-blue-50">
                              <item.icon className="h-5 w-5 text-blue-600" />
                            </div>
                            <p className="text-gray-700">{item.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="programs" className="mt-0">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-medium text-blue-800 mb-4">
                      Programmes académiques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {programsData.academic.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={cardVariants}
                          whileHover="hover"
                          className="bg-white rounded-xl p-5 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300"
                        >
                          <div className="flex flex-col items-center text-center gap-3">
                            <div className="p-3 rounded-full bg-blue-100">
                              <item.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <p className="text-gray-700 font-medium">
                              {item.text}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-lg font-medium text-blue-800 mb-4">
                      Activités extrascolaires
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {programsData.extracurricular.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={cardVariants}
                          whileHover="hover"
                          className="bg-white rounded-xl p-4 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-blue-50">
                              <item.icon className="h-5 w-5 text-blue-600" />
                            </div>
                            <p className="text-gray-700">{item.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="mt-0">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-lg font-medium text-blue-800 mb-4">
                      Résultats au baccalauréat (2023)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {statsData.map((stat, index) => (
                        <motion.div
                          key={index}
                          whileHover={{
                            y: -5,
                            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
                        >
                          <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl" />
                            <h4 className="text-base font-medium text-blue-800 mb-3">
                              {stat.label}
                            </h4>
                            <div className="text-3xl font-bold text-blue-700">
                              {stat.value}
                            </div>
                            <p className="text-xs text-blue-600 mt-1">
                              {stat.change || stat.subtext}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
