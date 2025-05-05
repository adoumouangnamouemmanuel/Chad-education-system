"use client";

import { SelectItem } from "@/components/ui/select";

import { SelectContent } from "@/components/ui/select";

import { SelectValue } from "@/components/ui/select";

import { SelectTrigger } from "@/components/ui/select";

import { Select } from "@/components/ui/select";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bell,
  CheckCircle,
  Clock,
  Filter,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function StudentNotificationsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const notifications = [
    {
      id: 1,
      title: "Nouvelle note ajoutée",
      description: "Une nouvelle note a été ajoutée en Mathématiques: 15/20",
      time: "Il y a 30 minutes",
      date: "Aujourd'hui",
      sender: "M. Jean Dupont",
      senderRole: "Professeur de Mathématiques",
      avatar: "/placeholder.svg?height=40&width=40",
      read: false,
      type: "grade",
    },
    {
      id: 2,
      title: "Devoir à rendre",
      description:
        "N'oubliez pas de rendre votre dissertation de Français pour demain",
      time: "Il y a 2 heures",
      date: "Aujourd'hui",
      sender: "Mme. Marie Koné",
      senderRole: "Professeur de Français",
      avatar: "/placeholder.svg?height=40&width=40",
      read: false,
      type: "assignment",
    },
    {
      id: 3,
      title: "Absence enregistrée",
      description:
        "Votre absence du 19/09/2023 a été enregistrée. Veuillez fournir un justificatif.",
      time: "Il y a 5 heures",
      date: "Aujourd'hui",
      sender: "Administration",
      senderRole: "Secrétariat",
      avatar: "/placeholder.svg?height=40&width=40",
      read: true,
      type: "attendance",
    },
    {
      id: 4,
      title: "Réunion parents-professeurs",
      description:
        "Une réunion parents-professeurs est prévue le 25 mai à 18h00.",
      time: "Hier",
      date: "Hier",
      sender: "Administration",
      senderRole: "Direction",
      avatar: "/placeholder.svg?height=40&width=40",
      read: true,
      type: "event",
    },
    {
      id: 5,
      title: "Changement d'emploi du temps",
      description:
        "Le cours d'Anglais du jeudi 21/09 est déplacé au vendredi 22/09 à 10h.",
      time: "Hier",
      date: "Hier",
      sender: "M. John Smith",
      senderRole: "Professeur d'Anglais",
      avatar: "/placeholder.svg?height=40&width=40",
      read: true,
      type: "schedule",
    },
    {
      id: 6,
      title: "Nouveau message",
      description: "Vous avez reçu un nouveau message de Fatou Diallo",
      time: "Il y a 2 jours",
      date: "Il y a 2 jours",
      sender: "Fatou Diallo",
      senderRole: "Camarade de classe",
      avatar: "/placeholder.svg?height=40&width=40",
      read: true,
      type: "message",
    },
  ];

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/student"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Retour au Tableau de Bord</span>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-50">
              Notifications
            </h1>
            <p className="text-muted-foreground">
              Restez informé des dernières mises à jour
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
            Tout marquer comme lu
          </Button>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
            <Bell className="mr-2 h-4 w-4" />
            Paramètres
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-blue-100 dark:border-blue-900 overflow-hidden sticky top-6">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-blue-500" />
                  Filtres
                </CardTitle>
                <CardDescription>Filtrer vos notifications</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="search">Rechercher</Label>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        type="search"
                        placeholder="Rechercher..."
                        className="pl-8 rounded-lg border-blue-200 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Type de notification</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start rounded-lg border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                      >
                        Tous
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start rounded-lg border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                      >
                        Non lus
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start rounded-lg border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                      >
                        Notes
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start rounded-lg border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                      >
                        Devoirs
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start rounded-lg border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                      >
                        Présence
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start rounded-lg border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                      >
                        Messages
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Période</Label>
                    <Select defaultValue="all">
                      <SelectTrigger className="rounded-lg border-blue-200">
                        <SelectValue placeholder="Période" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Toutes les périodes</SelectItem>
                        <SelectItem value="today">Aujourd'hui</SelectItem>
                        <SelectItem value="week">Cette semaine</SelectItem>
                        <SelectItem value="month">Ce mois</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Paramètres de notification</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="notes" className="cursor-pointer">
                          Notes
                        </Label>
                        <Switch id="notes" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="devoirs" className="cursor-pointer">
                          Devoirs
                        </Label>
                        <Switch id="devoirs" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="presence" className="cursor-pointer">
                          Présence
                        </Label>
                        <Switch id="presence" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="messages" className="cursor-pointer">
                          Messages
                        </Label>
                        <Switch id="messages" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="evenements" className="cursor-pointer">
                          Événements
                        </Label>
                        <Switch id="evenements" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-blue-50 dark:bg-blue-900/50 p-4 flex justify-between items-center">
                <Button
                  variant="outline"
                  className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                >
                  Réinitialiser
                </Button>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                  Appliquer
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <div className="md:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-blue-900 dark:text-blue-50">
                      Toutes les notifications
                    </CardTitle>
                    <CardDescription>
                      {notifications.filter((n) => !n.read).length}{" "}
                      notification(s) non lue(s)
                    </CardDescription>
                  </div>
                  <Tabs defaultValue="all">
                    <TabsList className="p-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <TabsTrigger
                        value="all"
                        className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                      >
                        Toutes
                      </TabsTrigger>
                      <TabsTrigger
                        value="unread"
                        className="data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                      >
                        Non lues
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <motion.div
                  className="divide-y divide-blue-100 dark:divide-blue-900"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        variants={itemVariants}
                        className={`p-4 ${
                          !notification.read
                            ? "bg-blue-50/50 dark:bg-blue-900/20"
                            : ""
                        } hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors`}
                      >
                        <div className="flex gap-4">
                          <Avatar className="h-10 w-10 border border-blue-100">
                            <AvatarImage
                              src={notification.avatar || "/placeholder.svg"}
                              alt={notification.sender}
                            />
                            <AvatarFallback className="bg-blue-100 text-blue-800">
                              {notification.sender.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-medium text-blue-900 dark:text-blue-50">
                                  {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {notification.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                {!notification.read && (
                                  <Badge className="bg-blue-600 hover:bg-blue-700">
                                    Nouveau
                                  </Badge>
                                )}
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="rounded-full hover:bg-blue-100 hover:text-blue-600"
                                    >
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>
                                      Actions
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                      Marquer comme lu
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      Voir les détails
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600">
                                      Supprimer
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Avatar className="h-4 w-4">
                                  <AvatarImage
                                    src={
                                      notification.avatar || "/placeholder.svg"
                                    }
                                    alt={notification.sender}
                                  />
                                  <AvatarFallback className="bg-blue-100 text-blue-800 text-[8px]">
                                    {notification.sender.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{notification.sender}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{notification.time}</span>
                              </div>
                              <Badge
                                variant="outline"
                                className={`text-xs font-normal ${
                                  notification.type === "grade"
                                    ? "border-blue-200 bg-blue-50 text-blue-700"
                                    : notification.type === "assignment"
                                    ? "border-purple-200 bg-purple-50 text-purple-700"
                                    : notification.type === "attendance"
                                    ? "border-red-200 bg-red-50 text-red-700"
                                    : notification.type === "message"
                                    ? "border-green-200 bg-green-50 text-green-700"
                                    : "border-amber-200 bg-amber-50 text-amber-700"
                                }`}
                              >
                                {notification.type === "grade"
                                  ? "Note"
                                  : notification.type === "assignment"
                                  ? "Devoir"
                                  : notification.type === "attendance"
                                  ? "Présence"
                                  : notification.type === "message"
                                  ? "Message"
                                  : notification.type === "event"
                                  ? "Événement"
                                  : "Emploi du temps"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Bell className="h-16 w-16 text-blue-200 mb-4" />
                      <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                        Aucune notification
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-6">
                        Vous n'avez aucune notification pour le moment
                      </p>
                    </div>
                  )}
                </motion.div>
              </CardContent>
              <CardFooter className="bg-blue-50 dark:bg-blue-900/50 p-4 flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Affichage de {notifications.length} notifications
                </div>
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                  Voir toutes les notifications
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
