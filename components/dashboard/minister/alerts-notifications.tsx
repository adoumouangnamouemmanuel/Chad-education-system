"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Calendar,
  Building2,
  BookOpen,
  Users,
  Wrench,
  Filter,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

const alerts = [
  {
    id: 1,
    title: "Taux d'abandon élevé",
    description: "Région du Salamat: 15% au-dessus de la moyenne nationale",
    type: "warning",
    category: "performance",
  },
  {
    id: 2,
    title: "Pénurie d'enseignants",
    description:
      "5 écoles dans la région du Kanem signalent un manque critique",
    type: "critical",
    category: "personnel",
  },
  {
    id: 3,
    title: "Infrastructures défaillantes",
    description: "3 écoles nécessitent des réparations urgentes à Moundou",
    type: "warning",
    category: "infrastructure",
  },
];

const recentActivities = [
  {
    id: 1,
    title: "Ouverture de 5 nouvelles écoles",
    description: "Région du Logone Occidental",
    date: "Aujourd'hui",
    icon: <Building2 className="h-5 w-5 text-green-500" />,
    status: "success",
    category: "infrastructure",
  },
  {
    id: 2,
    title: "Recrutement de 120 enseignants",
    description: "Phase finale en cours",
    date: "Hier",
    icon: <Users className="h-5 w-5 text-blue-500" />,
    status: "in-progress",
    category: "personnel",
  },
  {
    id: 3,
    title: "Distribution de manuels scolaires",
    description: "10,000 manuels distribués",
    date: "3 jours",
    icon: <BookOpen className="h-5 w-5 text-purple-500" />,
    status: "success",
    category: "ressources",
  },
  {
    id: 4,
    title: "Rénovation du Lycée National",
    description: "Travaux à 75% terminés",
    date: "1 semaine",
    icon: <Wrench className="h-5 w-5 text-amber-500" />,
    status: "in-progress",
    category: "infrastructure",
  },
  {
    id: 5,
    title: "Réunion avec les directeurs régionaux",
    description: "Planification de l'année scolaire",
    date: "2 semaines",
    icon: <Calendar className="h-5 w-5 text-indigo-500" />,
    status: "completed",
    category: "administration",
  },
];

export function AlertsNotifications() {
  const [alertFilter, setAlertFilter] = useState("all");
  const [activityFilter, setActivityFilter] = useState("all");

  // Filter alerts based on selected category
  const filteredAlerts =
    alertFilter === "all"
      ? alerts
      : alerts.filter((alert) => alert.category === alertFilter);

  // Filter activities based on selected category
  const filteredActivities =
    activityFilter === "all"
      ? recentActivities
      : recentActivities.filter(
          (activity) => activity.category === activityFilter
        );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full shadow-lg border-blue-100 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Alertes et Notifications
          </CardTitle>
          <CardDescription>
            Problèmes nécessitant votre attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Alertes</h3>
            <Select value={alertFilter} onValueChange={setAlertFilter}>
              <SelectTrigger className="w-[140px] h-8">
                <div className="flex items-center gap-1">
                  <Filter className="h-3 w-3" />
                  <SelectValue placeholder="Filtrer" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les alertes</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="personnel">Personnel</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  className={`p-3 rounded-lg border ${
                    alert.type === "critical"
                      ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                      : "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-1.5 rounded-full ${
                        alert.type === "critical"
                          ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
                          : "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400"
                      }`}
                    >
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h4
                        className={`font-medium ${
                          alert.type === "critical"
                            ? "text-red-800 dark:text-red-300"
                            : "text-amber-800 dark:text-amber-300"
                        }`}
                      >
                        {alert.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          alert.type === "critical"
                            ? "text-red-600 dark:text-red-400"
                            : "text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {alert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="text-center p-4 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Aucune alerte dans cette catégorie
              </motion.div>
            )}
          </div>

          <Separator className="my-4" />

          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium">Activités récentes</h3>
            <Select value={activityFilter} onValueChange={setActivityFilter}>
              <SelectTrigger className="w-[140px] h-8">
                <div className="flex items-center gap-1">
                  <Filter className="h-3 w-3" />
                  <SelectValue placeholder="Filtrer" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les activités</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                <SelectItem value="personnel">Personnel</SelectItem>
                <SelectItem value="ressources">Ressources</SelectItem>
                <SelectItem value="administration">Administration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 max-h-[300px] overflow-auto pr-2">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 3, backgroundColor: "rgba(0,0,0,0.05)" }}
                >
                  <div>{activity.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm truncate">
                        {activity.title}
                      </h4>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {activity.date}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className="text-center p-4 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Aucune activité dans cette catégorie
              </motion.div>
            )}
          </div>
        </CardContent>
        <CardFooter className="border-t p-4">
          <Button
            variant="outline"
            className="w-full shadow-sm hover:shadow"
            asChild
          >
            <Link href="/dashboard/minister/notifications">
              Voir toutes les notifications
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}