"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Check,
  ChevronRight,
  Globe,
  Home,
  Info,
  Key,
  Languages,
  Lock,
  LogOut,
  Mail,
  Moon,
  Palette,
  Save,
  Shield,
  Smartphone,
  Sun,
  User,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function StudentSettingsPage() {
  const [theme, setTheme] = useState("system");
  const [language, setLanguage] = useState("fr");
  const [isSaving, setIsSaving] = useState(false);
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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

  const handleSave = () => {
    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSavedMessage(true);

      // Hide the saved message after 3 seconds
      setTimeout(() => {
        setShowSavedMessage(false);
      }, 3000);
    }, 1000);
  };

  return (
    <TooltipProvider>
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Breadcrumb */}
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
          <Link
            href="/dashboard/student"
            className="hover:text-blue-600 transition-colors"
          >
            Tableau de bord
          </Link>
          <span className="mx-2">/</span>
          <span>Paramètres</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
            <p className="text-muted-foreground mt-1">
              Personnalisez votre expérience et gérez vos préférences
            </p>
          </div>
          <div className="flex items-center gap-2">
            {showSavedMessage && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-3 py-1.5 rounded-md"
              >
                <Check className="h-4 w-4 mr-2" />
                Modifications enregistrées
              </motion.div>
            )}
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                  />
                  Enregistrement...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Enregistrer les modifications
                </>
              )}
            </Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="appearance" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger
                value="appearance"
                className="flex items-center gap-2"
              >
                <Palette className="h-4 w-4" />
                <span>Apparence</span>
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="flex items-center gap-2"
              >
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Sécurité</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Compte</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="appearance">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="h-5 w-5 text-blue-600" />
                      Thème
                    </CardTitle>
                    <CardDescription>
                      Personnalisez l'apparence de l'application
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            theme === "light"
                              ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                              : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                          }`}
                          onClick={() => setTheme("light")}
                        >
                          <div className="flex justify-center mb-3">
                            <Sun className="h-6 w-6 text-blue-600" />
                          </div>
                          <p className="text-center text-sm font-medium">
                            Clair
                          </p>
                        </div>
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            theme === "dark"
                              ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                              : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                          }`}
                          onClick={() => setTheme("dark")}
                        >
                          <div className="flex justify-center mb-3">
                            <Moon className="h-6 w-6 text-blue-600" />
                          </div>
                          <p className="text-center text-sm font-medium">
                            Sombre
                          </p>
                        </div>
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            theme === "system"
                              ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                              : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                          }`}
                          onClick={() => setTheme("system")}
                        >
                          <div className="flex justify-center mb-3">
                            <div className="relative">
                              <Sun className="h-6 w-6 text-blue-600" />
                              <Moon className="h-6 w-6 text-blue-600 absolute -right-3 -bottom-1 transform scale-75" />
                            </div>
                          </div>
                          <p className="text-center text-sm font-medium">
                            Système
                          </p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="font-size">Taille de police</Label>
                      <div className="flex items-center gap-4">
                        <span className="text-sm">A</span>
                        <Slider
                          defaultValue={[16]}
                          max={24}
                          min={12}
                          step={1}
                          className="flex-1"
                        />
                        <span className="text-lg">A</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="animations">Animations</Label>
                        <p className="text-sm text-muted-foreground">
                          Activer les animations de l'interface
                        </p>
                      </div>
                      <Switch id="animations" defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-600" />
                      Langue et région
                    </CardTitle>
                    <CardDescription>
                      Définissez vos préférences linguistiques et régionales
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="language">Langue de l'interface</Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une langue" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fr">
                            <div className="flex items-center">
                              <Languages className="mr-2 h-4 w-4" />
                              Français
                            </div>
                          </SelectItem>
                          <SelectItem value="en">
                            <div className="flex items-center">
                              <Languages className="mr-2 h-4 w-4" />
                              English
                            </div>
                          </SelectItem>
                          <SelectItem value="ar">
                            <div className="flex items-center">
                              <Languages className="mr-2 h-4 w-4" />
                              العربية
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="date-format">Format de date</Label>
                      <Select defaultValue="dd/mm/yyyy">
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dd/mm/yyyy">JJ/MM/AAAA</SelectItem>
                          <SelectItem value="mm/dd/yyyy">MM/JJ/AAAA</SelectItem>
                          <SelectItem value="yyyy/mm/dd">AAAA/MM/JJ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="time-format">Format d'heure</Label>
                      <Select defaultValue="24h">
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="24h">24 heures</SelectItem>
                          <SelectItem value="12h">12 heures (AM/PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-blue-600" />
                    Préférences de notifications
                  </CardTitle>
                  <CardDescription>
                    Gérez comment et quand vous recevez des notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Canaux de notification
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-blue-600" />
                          <div className="space-y-0.5">
                            <Label htmlFor="email-notifications">
                              Notifications par email
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Recevoir des notifications par email
                            </p>
                          </div>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Smartphone className="h-5 w-5 text-blue-600" />
                          <div className="space-y-0.5">
                            <Label htmlFor="push-notifications">
                              Notifications push
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Recevoir des notifications push sur votre appareil
                            </p>
                          </div>
                        </div>
                        <Switch id="push-notifications" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Volume2 className="h-5 w-5 text-blue-600" />
                          <div className="space-y-0.5">
                            <Label htmlFor="sound-notifications">
                              Sons de notification
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Jouer un son lors de la réception d'une
                              notification
                            </p>
                          </div>
                        </div>
                        <Switch id="sound-notifications" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Types de notification
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="assignment-notifications">
                            Devoirs
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications pour les nouveaux devoirs
                          </p>
                        </div>
                        <Switch id="assignment-notifications" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="grade-notifications">Notes</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications pour les nouvelles notes
                          </p>
                        </div>
                        <Switch id="grade-notifications" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="attendance-notifications">
                            Présence
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications concernant votre présence
                          </p>
                        </div>
                        <Switch id="attendance-notifications" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="announcement-notifications">
                            Annonces
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications pour les annonces de l'école
                          </p>
                        </div>
                        <Switch
                          id="announcement-notifications"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <Button variant="outline">
                    Réinitialiser les paramètres
                  </Button>
                  <Button>Enregistrer les préférences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-blue-600" />
                      Sécurité du compte
                    </CardTitle>
                    <CardDescription>
                      Gérez vos paramètres de sécurité et de connexion
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-blue-600" />
                          <div className="space-y-0.5">
                            <Label htmlFor="two-factor">
                              Authentification à deux facteurs
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Ajouter une couche de sécurité supplémentaire à
                              votre compte
                            </p>
                          </div>
                        </div>
                        <Switch id="two-factor" />
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label>Mot de passe</Label>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Key className="h-5 w-5 text-blue-600" />
                              <div>
                                <p className="font-medium">
                                  Changer le mot de passe
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Dernière modification il y a 3 mois
                                </p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Modifier
                              <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label htmlFor="session-timeout">
                          Déconnexion automatique
                        </Label>
                        <Select defaultValue="30">
                          <SelectTrigger>
                            <SelectValue placeholder="Délai" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 heure</SelectItem>
                            <SelectItem value="never">Jamais</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-600" />
                      Confidentialité
                    </CardTitle>
                    <CardDescription>
                      Gérez vos paramètres de confidentialité
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="show-rank">
                            Afficher mon classement
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Permettre aux autres étudiants de voir votre
                            classement
                          </p>
                        </div>
                        <Switch id="show-rank" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="share-achievements">
                            Partager mes réussites
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Permettre le partage de vos réussites sur les
                            plateformes de l'école
                          </p>
                        </div>
                        <Switch id="share-achievements" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="data-collection">
                            Collecte de données
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Autoriser la collecte de données pour améliorer les
                            services
                          </p>
                        </div>
                        <Switch id="data-collection" defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t p-4">
                    <Button variant="outline">
                      Réinitialiser les paramètres
                    </Button>
                    <Button>Enregistrer les préférences</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="account">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-blue-600" />
                      Profil
                    </CardTitle>
                    <CardDescription>
                      Gérez votre profil et vos informations personnelles
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center py-6">
                    <div className="relative mb-4">
                      <Avatar className="h-24 w-24 border-4 border-blue-100">
                        <AvatarImage
                          src="/placeholder.svg?height=96&width=96"
                          alt="Student"
                        />
                        <AvatarFallback className="text-2xl">AM</AvatarFallback>
                      </Avatar>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0"
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span>
                              <Palette className="h-4 w-4" />
                              <span className="sr-only">Changer la photo</span>
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>Changer la photo</TooltipContent>
                        </Tooltip>
                      </Button>
                    </div>
                    <h3 className="text-xl font-bold">Abakar Mahamat</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Étudiant - Terminale D
                    </p>
                    <Badge className="mb-4">Actif</Badge>
                    <Button variant="outline" className="w-full">
                      <User className="mr-2 h-4 w-4" />
                      Voir le profil complet
                    </Button>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Informations du compte</CardTitle>
                    <CardDescription>
                      Mettez à jour vos informations personnelles
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Nom complet</Label>
                        <Input id="fullName" defaultValue="Abakar Mahamat" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Adresse email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="abakar.m@student.edu.td"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Numéro de téléphone</Label>
                        <Input id="phone" defaultValue="+235 65 XX XX XX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Adresse</Label>
                        <Input
                          id="address"
                          defaultValue="Quartier Diguel, N'Djamena"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="parentInfo">
                        Informations du parent/tuteur
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="parentName">
                            Nom du parent/tuteur
                          </Label>
                          <Input
                            id="parentName"
                            defaultValue="Mahamat Ibrahim"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="parentContact">
                            Contact du parent/tuteur
                          </Label>
                          <Input
                            id="parentContact"
                            defaultValue="+235 66 XX XX XX"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t p-4">
                    <Button variant="outline">Annuler</Button>
                    <Button>Enregistrer les modifications</Button>
                  </CardFooter>
                </Card>

                <Card className="md:col-span-3">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <LogOut className="h-5 w-5" />
                      Actions du compte
                    </CardTitle>
                    <CardDescription>
                      Actions importantes concernant votre compte
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg dark:border-red-900">
                        <div>
                          <h4 className="font-medium">
                            Déconnexion de tous les appareils
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Déconnectez-vous de tous les appareils où vous êtes
                            actuellement connecté
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900 dark:hover:bg-red-950"
                        >
                          Déconnecter
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
}
