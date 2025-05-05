"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Languages, Moon, Save, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import Link from "next/link";

export default function StudentSettingsPage() {
  const [theme, setTheme] = useState("system");

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

  return (
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
          className="flex items-center hover:text-primary transition-colors"
        >
          <Home className="h-4 w-4 mr-1" />
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/dashboard/student"
          className="hover:text-primary transition-colors"
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
        <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Enregistrer les modifications
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Apparence</CardTitle>
            <CardDescription>
              Personnalisez l'apparence de l'application
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="theme">Thème</Label>
                <p className="text-sm text-muted-foreground">
                  Choisissez le thème de l'interface
                </p>
              </div>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Thème" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    <div className="flex items-center">
                      <Sun className="mr-2 h-4 w-4" />
                      Clair
                    </div>
                  </SelectItem>
                  <SelectItem value="dark">
                    <div className="flex items-center">
                      <Moon className="mr-2 h-4 w-4" />
                      Sombre
                    </div>
                  </SelectItem>
                  <SelectItem value="system">
                    <div className="flex items-center">
                      <div className="mr-2 h-4 w-4 flex">
                        <Sun className="h-4 w-4 scale-75 origin-right" />
                        <Moon className="h-4 w-4 scale-75 origin-left -ml-1" />
                      </div>
                      Système
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="language">Langue</Label>
                <p className="text-sm text-muted-foreground">
                  Choisissez la langue de l'interface
                </p>
              </div>
              <Select defaultValue="fr">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Langue" />
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
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Gérez vos préférences de notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">
                  Notifications par email
                </Label>
                <p className="text-sm text-muted-foreground">
                  Recevoir des notifications par email
                </p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notifications">Notifications push</Label>
                <p className="text-sm text-muted-foreground">
                  Recevoir des notifications push sur votre appareil
                </p>
              </div>
              <Switch id="push-notifications" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="assignment-notifications">Devoirs</Label>
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
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Sécurité</CardTitle>
            <CardDescription>Gérez vos paramètres de sécurité</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="two-factor">
                  Authentification à deux facteurs
                </Label>
                <p className="text-sm text-muted-foreground">
                  Ajouter une couche de sécurité supplémentaire à votre compte
                </p>
              </div>
              <Switch id="two-factor" />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Mot de passe</Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="flex-1">
                  Changer le mot de passe
                </Button>
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="session-timeout">Déconnexion automatique</Label>
                <p className="text-sm text-muted-foreground">
                  Déconnexion après une période d'inactivité
                </p>
              </div>
              <Select defaultValue="30">
                <SelectTrigger className="w-[180px]">
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
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
