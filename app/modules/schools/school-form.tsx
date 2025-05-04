"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  Building,
  MapPin,
  Calendar,
  FileText,
  Info,
  Droplets,
  Zap,
  BookOpen,
  FlaskRoundIcon as Flask,
  Dumbbell,
  Wifi,
  Users,
  Utensils,
  Home,
  Save,
  X,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Laptop,
  Pencil,
  School,
  GraduationCap,
} from "lucide-react";

export function SchoolForm() {
  const [activeTab, setActiveTab] = useState("basic");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Informations de l'école enregistrées",
      description:
        "Les informations de l'école ont été enregistrées avec succès.",
    });
  };

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
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
    <form onSubmit={handleSubmit}>
      <Card className="border-blue-100 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-blue-100">
              <Building className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-blue-800">
                Informations de l'École
              </CardTitle>
              <CardDescription className="text-blue-600">
                Entrez les détails de l'école pour l'ajouter au système
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-blue-50 p-1 grid grid-cols-4">
              <TabsTrigger
                value="basic"
                className={`flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                  activeTab === "basic"
                    ? ""
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <Info className="h-4 w-4" />
                Informations de Base
              </TabsTrigger>
              <TabsTrigger
                value="location"
                className={`flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                  activeTab === "location"
                    ? ""
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <MapPin className="h-4 w-4" />
                Emplacement
              </TabsTrigger>
              <TabsTrigger
                value="infrastructure"
                className={`flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                  activeTab === "infrastructure"
                    ? ""
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <Building className="h-4 w-4" />
                Infrastructure
              </TabsTrigger>
              <TabsTrigger
                value="needs"
                className={`flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                  activeTab === "needs"
                    ? ""
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <AlertTriangle className="h-4 w-4" />
                Besoins Déclarés
              </TabsTrigger>
            </TabsList>

            <div
              className="relative h-full overflow-y-auto"
              style={{ minHeight: "450px" }}
            >
              <AnimatePresence mode="wait">
                {activeTab === "basic" && (
                  <motion.div
                    key="basic"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute w-full"
                  >
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <School className="h-4 w-4" />
                            Nom de l'École
                          </Label>
                          <Input
                            id="name"
                            placeholder="Entrez le nom de l'école"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="type"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Building className="h-4 w-4" />
                            Type d'École
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="type"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez le type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Publique</SelectItem>
                              <SelectItem value="private">Privée</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="established"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Calendar className="h-4 w-4" />
                            Année d'Établissement
                          </Label>
                          <Input
                            id="established"
                            type="number"
                            placeholder="AAAA"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="registration"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <FileText className="h-4 w-4" />
                            Numéro d'Enregistrement
                          </Label>
                          <Input
                            id="registration"
                            placeholder="Entrez le numéro d'enregistrement"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="description"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <Info className="h-4 w-4" />
                          Description
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Brève description de l'école"
                          className="min-h-[100px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "location" && (
                  <motion.div
                    key="location"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute w-full"
                  >
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="region"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <MapPin className="h-4 w-4" />
                            Région
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="region"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez la région" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ndjamena">
                                N'Djamena
                              </SelectItem>
                              <SelectItem value="logone">
                                Logone Oriental
                              </SelectItem>
                              <SelectItem value="mayo-kebbi">
                                Mayo-Kebbi
                              </SelectItem>
                              <SelectItem value="ouaddai">Ouaddaï</SelectItem>
                              <SelectItem value="kanem">Kanem</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="department"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <MapPin className="h-4 w-4" />
                            Département
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="department"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez le département" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dept1">
                                Département 1
                              </SelectItem>
                              <SelectItem value="dept2">
                                Département 2
                              </SelectItem>
                              <SelectItem value="dept3">
                                Département 3
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="prefecture"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <MapPin className="h-4 w-4" />
                            Préfecture
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="prefecture"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez la préfecture" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pref1">
                                Préfecture 1
                              </SelectItem>
                              <SelectItem value="pref2">
                                Préfecture 2
                              </SelectItem>
                              <SelectItem value="pref3">
                                Préfecture 3
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="sub-prefecture"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <MapPin className="h-4 w-4" />
                            Sous-Préfecture
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="sub-prefecture"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez la sous-préfecture" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="subpref1">
                                Sous-Préfecture 1
                              </SelectItem>
                              <SelectItem value="subpref2">
                                Sous-Préfecture 2
                              </SelectItem>
                              <SelectItem value="subpref3">
                                Sous-Préfecture 3
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="canton"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <MapPin className="h-4 w-4" />
                            Canton
                          </Label>
                          <Input
                            id="canton"
                            placeholder="Entrez le canton"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="city"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <MapPin className="h-4 w-4" />
                            Ville/Village
                          </Label>
                          <Input
                            id="city"
                            placeholder="Entrez la ville ou le village"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="gps"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <MapPin className="h-4 w-4" />
                          Coordonnées GPS
                        </Label>
                        <Input
                          id="gps"
                          placeholder="Latitude, Longitude"
                          className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "infrastructure" && (
                  <motion.div
                    key="infrastructure"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute w-full"
                  >
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="classrooms"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Building className="h-4 w-4" />
                            Nombre Total de Salles de Classe
                          </Label>
                          <Input
                            id="classrooms"
                            type="number"
                            placeholder="0"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="usable-classrooms"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <CheckCircle className="h-4 w-4" />
                            Salles de Classe Utilisables
                          </Label>
                          <Input
                            id="usable-classrooms"
                            type="number"
                            placeholder="0"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="water-source"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Droplets className="h-4 w-4" />
                            Source d'Eau
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="water-source"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez la source d'eau" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="municipal">
                                Réseau Municipal
                              </SelectItem>
                              <SelectItem value="well">Puits</SelectItem>
                              <SelectItem value="borehole">Forage</SelectItem>
                              <SelectItem value="none">Aucune</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="toilets"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Home className="h-4 w-4" />
                            Nombre de Toilettes
                          </Label>
                          <Input
                            id="toilets"
                            type="number"
                            placeholder="0"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="w-full">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 w-full">
                          <h3 className="text-sm font-medium text-blue-700 mb-4">
                            Installations
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div
                              className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <Switch
                                id="electricity"
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label
                                htmlFor="electricity"
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <Zap className="h-4 w-4 text-blue-600" />
                                Électricité
                              </Label>
                            </motion.div>

                            <motion.div
                              className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <Switch
                                id="library"
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label
                                htmlFor="library"
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <BookOpen className="h-4 w-4 text-blue-600" />
                                Bibliothèque
                              </Label>
                            </motion.div>

                            <motion.div
                              className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <Switch
                                id="laboratory"
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label
                                htmlFor="laboratory"
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <Flask className="h-4 w-4 text-blue-600" />
                                Laboratoire
                              </Label>
                            </motion.div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <motion.div
                              className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <Switch
                                id="sports"
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label
                                htmlFor="sports"
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <Dumbbell className="h-4 w-4 text-blue-600" />
                                Installation Sportive
                              </Label>
                            </motion.div>

                            <motion.div
                              className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <Switch
                                id="internet"
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label
                                htmlFor="internet"
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <Wifi className="h-4 w-4 text-blue-600" />
                                Accès Internet
                              </Label>
                            </motion.div>

                            <motion.div
                              className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <Switch
                                id="canteen"
                                className="data-[state=checked]:bg-blue-600"
                              />
                              <Label
                                htmlFor="canteen"
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <Utensils className="h-4 w-4 text-blue-600" />
                                Cantine
                              </Label>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <Label
                            htmlFor="teachers"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Users className="h-4 w-4" />
                            Nombre d'Enseignants
                          </Label>
                          <Input
                            id="teachers"
                            type="number"
                            placeholder="0"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="students"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Users className="h-4 w-4" />
                            Nombre d'Élèves
                          </Label>
                          <Input
                            id="students"
                            type="number"
                            placeholder="0"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="infrastructure-notes"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <Info className="h-4 w-4" />
                          Notes Supplémentaires sur l'Infrastructure
                        </Label>
                        <Textarea
                          id="infrastructure-notes"
                          placeholder="Notes supplémentaires sur l'infrastructure"
                          className="min-h-[100px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "needs" && (
                  <motion.div
                    key="needs"
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute w-full"
                  >
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="space-y-6"
                    >
                      <motion.div variants={itemVariants} className="w-full">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 w-full">
                          <h3 className="text-sm font-medium text-blue-700 mb-4">
                            Besoins en Infrastructure
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              {
                                id: "need-classrooms",
                                label: "Salles de Classe Supplémentaires",
                                icon: Building,
                              },
                              {
                                id: "need-toilets",
                                label: "Toilettes",
                                icon: Home,
                              },
                              {
                                id: "need-electricity",
                                label: "Électricité",
                                icon: Zap,
                              },
                              {
                                id: "need-water",
                                label: "Approvisionnement en Eau",
                                icon: Droplets,
                              },
                              {
                                id: "need-library",
                                label: "Bibliothèque",
                                icon: BookOpen,
                              },
                              {
                                id: "need-laboratory",
                                label: "Laboratoire",
                                icon: Flask,
                              },
                              {
                                id: "need-computers",
                                label: "Ordinateurs",
                                icon: Laptop,
                              },
                              {
                                id: "need-sports",
                                label: "Installations Sportives",
                                icon: Dumbbell,
                              },
                            ].map((need) => (
                              <motion.div
                                key={need.id}
                                className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                                whileHover={{ scale: 1.02, y: -2 }}
                              >
                                <Checkbox
                                  id={need.id}
                                  className="text-blue-600 border-blue-300"
                                />
                                <Label
                                  htmlFor={need.id}
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <need.icon className="h-4 w-4 text-blue-600" />
                                  {need.label}
                                </Label>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="w-full">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 w-full">
                          <h3 className="text-sm font-medium text-blue-700 mb-4">
                            Besoins Éducatifs
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                              {
                                id: "need-teachers",
                                label: "Enseignants Supplémentaires",
                                icon: Users,
                              },
                              {
                                id: "need-textbooks",
                                label: "Manuels Scolaires",
                                icon: BookOpen,
                              },
                              {
                                id: "need-supplies",
                                label: "Fournitures Scolaires",
                                icon: Pencil,
                              },
                              {
                                id: "need-training",
                                label: "Formation des Enseignants",
                                icon: GraduationCap,
                              },
                            ].map((need) => (
                              <motion.div
                                key={need.id}
                                className="flex items-center space-x-2 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                                whileHover={{ scale: 1.02, y: -2 }}
                              >
                                <Checkbox
                                  id={need.id}
                                  className="text-blue-600 border-blue-300"
                                />
                                <Label
                                  htmlFor={need.id}
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <need.icon className="h-4 w-4 text-blue-600" />
                                  {need.label}
                                </Label>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="priority-needs"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <AlertTriangle className="h-4 w-4" />
                          Besoins Prioritaires
                        </Label>
                        <Textarea
                          id="priority-needs"
                          placeholder="Décrivez les besoins les plus urgents de l'école"
                          className="min-h-[100px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="additional-needs"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <Info className="h-4 w-4" />
                          Besoins Supplémentaires
                        </Label>
                        <Textarea
                          id="additional-needs"
                          placeholder="Autres besoins non mentionnés ci-dessus"
                          className="min-h-[100px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-blue-100 bg-gradient-to-r from-white to-blue-50 p-6">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              type="button"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300 transition-all duration-300 flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Annuler
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Enregistrer l'École
            </Button>
          </motion.div>
        </CardFooter>
      </Card>

      <motion.div
        className="mt-4 flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-2 text-sm text-blue-600">
          <span>
            Naviguez entre les onglets pour remplir toutes les informations
            requises
          </span>
          <ChevronRight className="h-4 w-4" />
        </div>
      </motion.div>
    </form>
  );
}
