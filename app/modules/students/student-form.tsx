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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import {
  User,
  GraduationCap,
  Users,
  ChevronRight,
  Save,
  X,
  Calendar,
  MapPin,
  Flag,
  BookOpen,
  Building,
  CreditCard,
  Phone,
  Mail,
  Briefcase,
} from "lucide-react";

export function StudentForm() {
  const [activeTab, setActiveTab] = useState("personal");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Informations de l'élève enregistrées",
      description:
        "Les informations de l'élève ont été enregistrées avec succès.",
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
                Informations de l'Élève
              </CardTitle>
              <CardDescription className="text-blue-600">
                Entrez les détails de l'élève pour l'ajouter au système
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
                value="academic"
                className={`flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                  activeTab === "academic"
                    ? ""
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                Informations Académiques
              </TabsTrigger>
              <TabsTrigger
                value="guardian"
                className={`flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-md ${
                  activeTab === "guardian"
                    ? ""
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                <Users className="h-4 w-4" />
                Informations du Tuteur
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
                            htmlFor="place-of-birth"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <MapPin className="h-4 w-4" />
                            Lieu de Naissance
                          </Label>
                          <Input
                            id="place-of-birth"
                            placeholder="Entrez le lieu de naissance"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="nationality"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Flag className="h-4 w-4" />
                            Nationalité
                          </Label>
                          <Input
                            id="nationality"
                            placeholder="Entrez la nationalité"
                            defaultValue="Tchadienne"
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

                {activeTab === "academic" && (
                  <motion.div
                    key="academic"
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
                            <Building className="h-4 w-4" />
                            École
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
                            htmlFor="class"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <BookOpen className="h-4 w-4" />
                            Classe
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="class"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez une classe" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="terminal-d">
                                Terminal D
                              </SelectItem>
                              <SelectItem value="terminal-c">
                                Terminal C
                              </SelectItem>
                              <SelectItem value="premiere-d">
                                Première D
                              </SelectItem>
                              <SelectItem value="premiere-c">
                                Première C
                              </SelectItem>
                              <SelectItem value="seconde-a">
                                Seconde A
                              </SelectItem>
                              <SelectItem value="seconde-c">
                                Seconde C
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
                            htmlFor="track"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <GraduationCap className="h-4 w-4" />
                            Filière
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="track"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez une filière" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="science">Sciences</SelectItem>
                              <SelectItem value="literature">
                                Littérature
                              </SelectItem>
                              <SelectItem value="general">Général</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="entry-year"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Calendar className="h-4 w-4" />
                            Année d'Entrée
                          </Label>
                          <Input
                            id="entry-year"
                            type="number"
                            placeholder="AAAA"
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
                            htmlFor="student-id"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <CreditCard className="h-4 w-4" />
                            Numéro d'Étudiant
                          </Label>
                          <Input
                            id="student-id"
                            placeholder="Entrez le numéro d'étudiant"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="previous-school"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Building className="h-4 w-4" />
                            École Précédente
                          </Label>
                          <Input
                            id="previous-school"
                            placeholder="Entrez l'école précédente (si applicable)"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="academic-notes"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <BookOpen className="h-4 w-4" />
                          Notes Académiques
                        </Label>
                        <Textarea
                          id="academic-notes"
                          placeholder="Entrez des notes académiques ou des considérations spéciales"
                          className="min-h-[100px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "guardian" && (
                  <motion.div
                    key="guardian"
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
                            htmlFor="guardian-name"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <User className="h-4 w-4" />
                            Nom du Tuteur
                          </Label>
                          <Input
                            id="guardian-name"
                            placeholder="Entrez le nom complet du tuteur"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="relationship"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Users className="h-4 w-4" />
                            Relation
                          </Label>
                          <Select>
                            <SelectTrigger
                              id="relationship"
                              className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                            >
                              <SelectValue placeholder="Sélectionnez la relation" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="father">Père</SelectItem>
                              <SelectItem value="mother">Mère</SelectItem>
                              <SelectItem value="uncle">Oncle</SelectItem>
                              <SelectItem value="aunt">Tante</SelectItem>
                              <SelectItem value="grandparent">
                                Grand-parent
                              </SelectItem>
                              <SelectItem value="other">Autre</SelectItem>
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
                            htmlFor="guardian-phone"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Phone className="h-4 w-4" />
                            Numéro de Téléphone
                          </Label>
                          <Input
                            id="guardian-phone"
                            placeholder="Entrez le numéro de téléphone du tuteur"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="guardian-email"
                            className="text-blue-700 flex items-center gap-2"
                          >
                            <Mail className="h-4 w-4" />
                            Email (Optionnel)
                          </Label>
                          <Input
                            id="guardian-email"
                            type="email"
                            placeholder="Entrez l'email du tuteur"
                            className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="guardian-address"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <MapPin className="h-4 w-4" />
                          Adresse
                        </Label>
                        <Textarea
                          id="guardian-address"
                          placeholder="Entrez l'adresse du tuteur"
                          className="min-h-[100px] border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <Label
                          htmlFor="guardian-occupation"
                          className="text-blue-700 flex items-center gap-2"
                        >
                          <Briefcase className="h-4 w-4" />
                          Profession
                        </Label>
                        <Input
                          id="guardian-occupation"
                          placeholder="Entrez la profession du tuteur"
                          className="border-blue-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300"
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
              Enregistrer l'Élève
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
