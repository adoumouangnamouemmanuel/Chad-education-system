"use client";

import { motion } from "framer-motion";
import {
  Bell,
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  Info,
  MessageSquare,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeacherNotificationsClientPage() {
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

  const notifications = [
    {
      id: 1,
      type: "info",
      title: "Réunion des enseignants",
      message:
        "Rappel: Réunion des enseignants demain à 14h00 dans la salle des professeurs.",
      time: "Il y a 30 minutes",
      read: false,
      icon: <Calendar className="h-5 w-5 text-blue-500" />,
    },
    {
      id: 2,
      type: "success",
      title: "Notes enregistrées",
      message:
        "Les notes de la classe Terminale A ont été enregistrées avec succès.",
      time: "Il y a 2 heures",
      read: false,
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    {
      id: 3,
      type: "warning",
      title: "Absence d'élève",
      message:
        "L'élève Abakar Mahamat a été absent pendant 3 jours consécutifs.",
      time: "Hier",
      read: true,
      icon: <Info className="h-5 w-5 text-amber-500" />,
    },
    {
      id: 4,
      type: "info",
      title: "Nouveau bulletin disponible",
      message:
        "Les bulletins du 1er trimestre sont disponibles pour vérification.",
      time: "Il y a 2 jours",
      read: true,
      icon: <FileText className="h-5 w-5 text-blue-500" />,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Directeur Académique",
      avatar: "/placeholder.svg?height=40&width=40",
      message:
        "Veuillez soumettre vos rapports de fin de trimestre avant vendredi.",
      time: "Il y a 1 heure",
      read: false,
    },
    {
      id: 2,
      sender: "Coordinateur Pédagogique",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Pouvons-nous discuter des résultats des élèves de Terminale A?",
      time: "Il y a 3 heures",
      read: false,
    },
    {
      id: 3,
      sender: "Secrétariat",
      avatar: "/placeholder.svg?height=40&width=40",
      message: "Les nouveaux manuels que vous avez demandés sont arrivés.",
      time: "Hier",
      read: true,
    },
  ];

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/teacher"
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
              Consultez vos notifications et messages
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
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
            <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
              <Bell className="h-5 w-5 text-blue-500" />
              Centre de notifications
            </CardTitle>
            <CardDescription>
              Consultez vos notifications et messages récents
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="notifications">
              <TabsList className="grid grid-cols-2 mb-8 p-1 bg-blue-50 dark:bg-blue-900 rounded-full w-full sm:w-auto">
                <TabsTrigger
                  value="notifications"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                  <Badge className="ml-1 bg-blue-600 hover:bg-blue-700">
                    2
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="messages"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Messages</span>
                  <Badge className="ml-1 bg-blue-600 hover:bg-blue-700">
                    2
                  </Badge>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="notifications">
                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      variants={itemVariants}
                      className={`p-4 rounded-lg border ${
                        notification.read
                          ? "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
                          : "border-blue-100 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20"
                      } relative`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-2 rounded-full ${
                            notification.type === "success"
                              ? "bg-green-100 text-green-600"
                              : notification.type === "warning"
                              ? "bg-amber-100 text-amber-600"
                              : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {notification.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-blue-900 dark:text-blue-50">
                              {notification.title}
                            </h3>
                            <span className="text-xs text-muted-foreground">
                              {notification.time}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Supprimer</span>
                      </Button>
                      {!notification.read && (
                        <div className="absolute top-4 right-10 h-2 w-2 rounded-full bg-blue-600"></div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="messages">
                <motion.div
                  className="space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      variants={itemVariants}
                      className={`p-4 rounded-lg border ${
                        message.read
                          ? "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
                          : "border-blue-100 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20"
                      } relative`}
                    >
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10 border border-blue-100">
                          <AvatarImage
                            src={message.avatar || "/placeholder.svg"}
                            alt={message.sender}
                          />
                          <AvatarFallback className="bg-blue-100 text-blue-800 text-xs">
                            {message.sender
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-blue-900 dark:text-blue-50">
                              {message.sender}
                            </h3>
                            <span className="text-xs text-muted-foreground">
                              {message.time}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {message.message}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Supprimer</span>
                      </Button>
                      {!message.read && (
                        <div className="absolute top-4 right-10 h-2 w-2 rounded-full bg-blue-600"></div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="bg-blue-50 dark:bg-blue-900/50 p-4 flex justify-between items-center">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              Dernière mise à jour: {new Date().toLocaleTimeString("fr-FR")}
            </div>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
              <Bell className="mr-2 h-4 w-4" />
              Paramètres de notification
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}