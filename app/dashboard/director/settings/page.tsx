"use client";

import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Check,
  ChevronRight,
  Globe,
  Home,
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
  Users,
  School,
  FileText,
  Building2,
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

export default function DirectorSettingsPage() {
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
            href="/dashboard/director"
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
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
            <TabsList className="grid grid-cols-5 mb-6">
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
              <TabsTrigger value="school" className="flex items-center gap-2">
                <School className="h-4 w-4" />
                <span>École</span>
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
                          <Label htmlFor="teacher-notifications">
                            Enseignants
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications concernant les enseignants
                          </p>
                        </div>
                        <Switch id="teacher-notifications" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="student-notifications">Élèves</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications concernant les élèves
                          </p>
                        </div>
                        <Switch id="student-notifications" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="performance-notifications">
                            Performance
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications sur les performances scolaires
                          </p>
                        </div>
                        <Switch id="performance-notifications" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="infrastructure-notifications">
                            Infrastructure
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications sur les besoins d'infrastructure
                          </p>
                        </div>
                        <Switch
                          id="infrastructure-notifications"
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
                      <Users className="h-5 w-5 text-blue-600" />
                      Délégation Administrative
                    </CardTitle>
                    <CardDescription>
                      Gérez les accès administratifs pour votre équipe
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="deputy-access">
                            Accès Directeur Adjoint
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Permettre au Directeur Adjoint d'approuver les
                            affaires courantes
                          </p>
                        </div>
                        <Switch id="deputy-access" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="department-autonomy">
                            Autonomie des Chefs de Département
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Permettre aux Chefs de Département de gérer leurs
                            départements
                          </p>
                        </div>
                        <Switch id="department-autonomy" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="admin-staff-access">
                            Accès du Personnel Administratif
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Permettre au personnel administratif de mettre à
                            jour les dossiers des élèves
                          </p>
                        </div>
                        <Switch id="admin-staff-access" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="school">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <School className="h-5 w-5 text-blue-600" />
                      Paramètres de l'École
                    </CardTitle>
                    <CardDescription>
                      Configurez les paramètres généraux de votre école
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="public-profile">Profil Public</Label>
                          <p className="text-sm text-muted-foreground">
                            Rendre le profil de l'école visible publiquement
                          </p>
                        </div>
                        <Switch id="public-profile" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="online-registration">
                            Inscription en Ligne
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Activer les inscriptions en ligne pour les nouveaux
                            élèves
                          </p>
                        </div>
                        <Switch id="online-registration" defaultChecked />
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label htmlFor="academic-year">
                          Année Académique Actuelle
                        </Label>
                        <Select defaultValue="2023-2024">
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez une année" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2023-2024">2023-2024</SelectItem>
                            <SelectItem value="2022-2023">2022-2023</SelectItem>
                            <SelectItem value="2021-2022">2021-2022</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      Rapports et Documents
                    </CardTitle>
                    <CardDescription>
                      Gérez les paramètres des rapports et documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="auto-reports">
                            Rapports Automatiques
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Générer automatiquement des rapports mensuels
                          </p>
                        </div>
                        <Switch id="auto-reports" defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="digital-signatures">
                            Signatures Numériques
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Activer les signatures numériques sur les documents
                            officiels
                          </p>
                        </div>
                        <Switch id="digital-signatures" />
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <Label htmlFor="report-format">
                          Format des Bulletins
                        </Label>
                        <Select defaultValue="detailed">
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="detailed">Détaillé</SelectItem>
                            <SelectItem value="summary">Résumé</SelectItem>
                            <SelectItem value="compact">Compact</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      Infrastructure
                    </CardTitle>
                    <CardDescription>
                      Gérez les paramètres d'infrastructure de l'école
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch id="library" defaultChecked />
                        <Label htmlFor="library">Bibliothèque</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="computer-lab" defaultChecked />
                        <Label htmlFor="computer-lab">
                          Laboratoire Informatique
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="science-lab" defaultChecked />
                        <Label htmlFor="science-lab">
                          Laboratoire Scientifique
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="sports-field" defaultChecked />
                        <Label htmlFor="sports-field">Terrain de Sport</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="cafeteria" />
                        <Label htmlFor="cafeteria">Cafétéria</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="auditorium" />
                        <Label htmlFor="auditorium">Auditorium</Label>
                      </div>
                    </div>
                  </CardContent>
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
                          alt="Director"
                        />
                        <AvatarFallback className="text-2xl bg-blue-600 text-white">
                          HD
                        </AvatarFallback>
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
                    <h3 className="text-xl font-bold">Hassan Deby</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Directeur d'École
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
                        <Input id="fullName" defaultValue="Hassan Deby" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Adresse email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="hassan.deby@education.td"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Numéro de téléphone</Label>
                        <Input id="phone" defaultValue="+235 66 XX XX XX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Adresse</Label>
                        <Input
                          id="address"
                          defaultValue="Quartier Ambassatna, N'Djamena"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label htmlFor="bio">Biographie</Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        defaultValue="Hassan Deby est directeur du Lycée National de N'Djamena depuis septembre 2019. Avec plus de 15 ans d'expérience dans l'éducation, il a mis en œuvre plusieurs améliorations clés de l'infrastructure et des programmes académiques de l'école."
                      />
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