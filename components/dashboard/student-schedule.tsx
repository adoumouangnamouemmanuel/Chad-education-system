"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, User } from "lucide-react";

// Données d'exemple pour l'emploi du temps
const schedule = [
  {
    day: "Lundi",
    periods: [
      {
        time: "08:00 - 10:00",
        subject: "Mathématiques",
        teacher: "M. Jean Dupont",
        room: "Salle 12",
      },
      {
        time: "10:15 - 12:15",
        subject: "Physique",
        teacher: "M. Ibrahim Hassan",
        room: "Labo 2",
      },
      {
        time: "14:00 - 16:00",
        subject: "Français",
        teacher: "Mme. Marie Koné",
        room: "Salle 8",
      },
    ],
  },
  {
    day: "Mardi",
    periods: [
      {
        time: "08:00 - 10:00",
        subject: "Chimie",
        teacher: "M. Ibrahim Hassan",
        room: "Labo 1",
      },
      {
        time: "10:15 - 12:15",
        subject: "Anglais",
        teacher: "Mme. Fatima Ousmane",
        room: "Salle 9",
      },
      {
        time: "14:00 - 16:00",
        subject: "Histoire",
        teacher: "M. Ahmed Mahamat",
        room: "Salle 5",
      },
    ],
  },
  {
    day: "Mercredi",
    periods: [
      {
        time: "08:00 - 10:00",
        subject: "Mathématiques",
        teacher: "M. Jean Dupont",
        room: "Salle 12",
      },
      {
        time: "10:15 - 12:15",
        subject: "Biologie",
        teacher: "M. Ibrahim Hassan",
        room: "Labo 3",
      },
    ],
  },
  {
    day: "Jeudi",
    periods: [
      {
        time: "08:00 - 10:00",
        subject: "Géographie",
        teacher: "Mme. Fatima Ousmane",
        room: "Salle 7",
      },
      {
        time: "10:15 - 12:15",
        subject: "Physique",
        teacher: "M. Ibrahim Hassan",
        room: "Labo 2",
      },
      {
        time: "14:00 - 16:00",
        subject: "Français",
        teacher: "Mme. Marie Koné",
        room: "Salle 8",
      },
    ],
  },
  {
    day: "Vendredi",
    periods: [
      {
        time: "08:00 - 10:00",
        subject: "Mathématiques",
        teacher: "M. Jean Dupont",
        room: "Salle 12",
      },
      {
        time: "10:15 - 12:15",
        subject: "Éducation Physique",
        teacher: "M. Ahmed Mahamat",
        room: "Terrain de Sport",
      },
      {
        time: "14:00 - 16:00",
        subject: "Anglais",
        teacher: "Mme. Fatima Ousmane",
        room: "Salle 9",
      },
    ],
  },
];

export function StudentSchedule() {
  // Déterminer le jour actuel pour le mettre en évidence
  const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const currentDay = days[new Date().getDay()];

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
      className="grid grid-cols-1 md:grid-cols-5 gap-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {schedule.map((day) => (
        <motion.div
          key={day.day}
          variants={itemVariants}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Card
            className={`h-full ${
              day.day === currentDay ? "border-primary" : ""
            }`}
          >
            <CardContent className="p-4">
              <div
                className={`font-medium mb-3 pb-2 border-b ${
                  day.day === currentDay
                    ? "text-primary border-primary/30"
                    : "border-border"
                }`}
              >
                {day.day}
                {day.day === currentDay && (
                  <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    Aujourd'hui
                  </span>
                )}
              </div>
              <div className="space-y-3">
                {day.periods.map((period, index) => (
                  <motion.div
                    key={index}
                    className="text-sm p-3 rounded-md bg-accent/50 hover:bg-accent transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                      <Clock className="h-3 w-3" />
                      <span>{period.time}</span>
                    </div>
                    <div className="font-medium">{period.subject}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <User className="h-3 w-3" />
                      <span>{period.teacher}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{period.room}</span>
                    </div>
                  </motion.div>
                ))}
                {day.periods.length === 0 && (
                  <div className="text-sm text-muted-foreground text-center py-4">
                    Pas de cours
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
