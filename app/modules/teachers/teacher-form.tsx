"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Calendar,
  ChevronRight,
  Clock,
  CreditCard,
  GraduationCap,
  MapPin,
  Phone,
  Save,
  School,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

export function TeacherForm() {
  const [activeTab, setActiveTab] = useState("personal");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Informations de l'enseignant enregistrées",
      description:
        "Les informations de l'enseignant ont été enregistrées avec succès.",
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
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-blue-800">
                Informations de l'Enseignant
              </CardTitle>
              <CardDescription className="text-blue-600">
                Entrez les détails de l'enseignant pour l'ajouter au système
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-blue-50 p-1 grid grid-cols-3">
              <TabsTrigger
                value="personal"
                className={`flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                  activeTab === "personal"
                    ? ""
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <User className="h-4 w-4" />
                Informations Personnelles
              </TabsTrigger>
              <TabsTrigger
                value="professional"
                className={`flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                  activeTab === "professional"
                    ? ""
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                Informations Professionnelles
              </TabsTrigger>
              <TabsTrigger
                value="assignment"
                className={`flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                  activeTab === "assignment"
                    ? ""
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <School className="h-4 w-4" />
                Affectation Scolaire
              </TabsTrigger>
            </TabsList>

            <div
              className="relative h-full overflow-y-auto"
              style={{ minHeight: "450px" }}
            >
              <AnimatePresence mode="wait">
                {activeTab === "personal" && (
                  <motion.div
                    key="personal"
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
                            htmlFor="first-name"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <User className="h-4 w-4" />
                            Prénom
                          </Label>
                          <Input
                            id="first-name"
                            placeholder="Entrez le prénom"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="last-name"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <User className="h-4 w-4" />
                            Nom
                          </Label>
                          <Input
                            id="last-name"
                            placeholder="Entrez le nom"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-2">
                          <Label htmlFor="gender" className="text-blue-700">
                            Genre
                          </Label>
                          <RadioGroup
                            defaultValue="male"
                            className="flex gap-6"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="male"
                                id="male"
                                className="text-blue-600"
                              />
                              <Label htmlFor="male" className="cursor-pointer">
                                Masculin
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="female"
                                id="female"
                                className="text-blue-600"
                              />
                              <Label
                                htmlFor="female"
                                className="cursor-pointer"
                              >
                                Féminin
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="dob"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Calendar className="h-4 w-4" />
                            Date de Naissance
                          </Label>
                          <Input
                            id="dob"
                            type="date"
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
                            htmlFor="id-number"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <CreditCard className="h-4 w-4" />
                            Numéro de Carte d'Identité
                          </Label>
                          <Input
                            id="id-number"
                            placeholder="Entrez le numéro de carte d'identité"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="phone"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Phone className="h-4 w-4" />
                            Numéro de Téléphone
                          </Label>
                          <Input
                            id="phone"
                            placeholder="Entrez le numéro de téléphone"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="address"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <MapPin className="h-4 w-4" />
                          Adresse
                        </Label>
                        <Textarea
                          id="address"
                          placeholder="Entrez l'adresse"
                          className="min-h-[100px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "professional" && (
                  <motion.div
                    key="professional"
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
                            htmlFor="qualification"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <GraduationCap className="h-4 w-4" />
                            Diplôme le Plus Élevé
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="qualification"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez un diplôme" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="certificate">
                                Certificat d'Enseignement
                              </SelectItem>
                              <SelectItem value="diploma">Diplôme</SelectItem>
                              <SelectItem value="bachelor">Licence</SelectItem>
                              <SelectItem value="master">Master</SelectItem>
                              <SelectItem value="phd">Doctorat</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="experience"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Clock className="h-4 w-4" />
                            Années d'Expérience
                          </Label>
                          <Input
                            id="experience"
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
                            htmlFor="employment-type"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Briefcase className="h-4 w-4" />
                            Type d'Emploi
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="employment-type"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez le type d'emploi" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="permanent">
                                Permanent
                              </SelectItem>
                              <SelectItem value="contractual">
                                Contractuel
                              </SelectItem>
                              <SelectItem value="volunteer">
                                Volontaire
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="start-date"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Calendar className="h-4 w-4" />
                            Date de Début
                          </Label>
                          <Input
                            id="start-date"
                            type="date"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="space-y-3 w-full"
                      >
                        <Label className="text-blue-700 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Matières Enseignées
                        </Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100 w-full">
                          {[
                            "Mathématiques",
                            "Physique",
                            "Chimie",
                            "Biologie",
                            "Français",
                            "Anglais",
                            "Histoire",
                            "Géographie",
                            "Éducation Physique",
                          ].map((subject) => (
                            <motion.div
                              key={subject}
                              className="flex items-center space-x-2 bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.02, y: -2 }}
                            >
                              <Checkbox
                                id={subject.toLowerCase()}
                                className="text-blue-600 border-blue-300"
                              />
                              <Label
                                htmlFor={subject.toLowerCase()}
                                className="cursor-pointer text-sm"
                              >
                                {subject}
                              </Label>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="specialization"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <GraduationCap className="h-4 w-4" />
                          Spécialisation
                        </Label>
                        <Textarea
                          id="specialization"
                          placeholder="Entrez la spécialisation ou les compétences supplémentaires"
                          className="min-h-[100px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "assignment" && (
                  <motion.div
                    key="assignment"
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
                            htmlFor="school"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <School className="h-4 w-4" />
                            École Assignée
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="school"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez une école" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="school1">
                                Lycée National de N'Djamena
                              </SelectItem>
                              <SelectItem value="school2">
                                Collège d'Enseignement Général de Moundou
                              </SelectItem>
                              <SelectItem value="school3">
                                École Primaire de Sarh
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="position"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Briefcase className="h-4 w-4" />
                            Poste
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="position"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez un poste" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="teacher">
                                Enseignant
                              </SelectItem>
                              <SelectItem value="head-teacher">
                                Enseignant Principal
                              </SelectItem>
                              <SelectItem value="department-head">
                                Chef de Département
                              </SelectItem>
                              <SelectItem value="vice-principal">
                                Directeur Adjoint
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <div className="space-y-3 w-full">
                          <Label
                            htmlFor="classes"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <BookOpen className="h-4 w-4" />
                            Classes Enseignées
                          </Label>
                          <div className="grid grid-cols-2 gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100 w-full">
                            {[
                              "Terminal D",
                              "Terminal C",
                              "Première D",
                              "Première C",
                              "Seconde A",
                              "Seconde C",
                            ].map((cls) => (
                              <motion.div
                                key={cls}
                                className="flex items-center space-x-2 bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-all duration-200"
                                whileHover={{ scale: 1.02, y: -2 }}
                              >
                                <Checkbox
                                  id={cls.toLowerCase().replace(" ", "-")}
                                  className="text-blue-600 border-blue-300"
                                />
                                <Label
                                  htmlFor={cls.toLowerCase().replace(" ", "-")}
                                  className="cursor-pointer text-sm"
                                >
                                  {cls}
                                </Label>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="hours"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Clock className="h-4 w-4" />
                            Heures d'Enseignement Hebdomadaires
                          </Label>
                          <Input
                            id="hours"
                            type="number"
                            placeholder="0"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="notes"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <BookOpen className="h-4 w-4" />
                          Notes Supplémentaires
                        </Label>
                        <Textarea
                          id="notes"
                          placeholder="Entrez des notes supplémentaires concernant l'affectation de l'enseignant"
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
              Enregistrer l'Enseignant
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
