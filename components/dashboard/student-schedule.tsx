"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Clock, MapPin, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample schedule data
const schedule = [
  {
    day: "Lundi",
    periods: [
      {
        time: "08:00 - 10:00",
        class: "Terminal D",
        subject: "Mathématiques",
        room: "Salle 12",
      },
      {
        time: "10:15 - 12:15",
        class: "Première C",
        subject: "Mathématiques",
        room: "Salle 8",
      },
      {
        time: "14:00 - 16:00",
        class: "Seconde A",
        subject: "Mathématiques",
        room: "Salle 5",
      },
    ],
  },
  {
    day: "Mardi",
    periods: [
      {
        time: "08:00 - 10:00",
        class: "Terminal C",
        subject: "Physique",
        room: "Labo 2",
      },
      {
        time: "10:15 - 12:15",
        class: "Première D",
        subject: "Mathématiques",
        room: "Salle 9",
      },
    ],
  },
  {
    day: "Mercredi",
    periods: [
      {
        time: "08:00 - 10:00",
        class: "Terminal D",
        subject: "Mathématiques",
        room: "Salle 12",
      },
      {
        time: "10:15 - 12:15",
        class: "Seconde A",
        subject: "Mathématiques",
        room: "Salle 5",
      },
    ],
  },
  {
    day: "Jeudi",
    periods: [
      {
        time: "08:00 - 10:00",
        class: "Première C",
        subject: "Mathématiques",
        room: "Salle 8",
      },
      {
        time: "10:15 - 12:15",
        class: "Terminal C",
        subject: "Physique",
        room: "Labo 2",
      },
      {
        time: "14:00 - 16:00",
        class: "Première D",
        subject: "Mathématiques",
        room: "Salle 9",
      },
    ],
  },
  {
    day: "Vendredi",
    periods: [
      {
        time: "08:00 - 10:00",
        class: "Terminal D",
        subject: "Mathématiques",
        room: "Salle 12",
      },
      {
        time: "10:15 - 12:15",
        class: "Seconde A",
        subject: "Mathématiques",
        room: "Salle 5",
      },
    ],
  },
];

export function ClassSchedule() {
  // Determine current day for highlighting
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

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-5 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {schedule.map((day) => (
        <motion.div
          key={day.day}
          variants={itemVariants}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
            transition: { type: "spring", stiffness: 300 },
          }}
        >
          <Card
            className={`h-full border-blue-100 dark:border-blue-800 overflow-hidden ${
              day.day === currentDay ? "border-l-4 border-l-blue-500" : ""
            }`}
          >
            <div
              className={`h-1 ${
                day.day === currentDay ? "bg-blue-500" : "bg-blue-200"
              }`}
            ></div>
            <CardContent className="p-4">
              <div
                className={`font-semibold mb-3 pb-2 border-b border-blue-100 dark:border-blue-800 ${
                  day.day === currentDay ? "text-blue-600" : ""
                }`}
              >
                {day.day}
                {day.day === currentDay && (
                  <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                    Aujourd'hui
                  </Badge>
                )}
              </div>
              <div className="space-y-3">
                {day.periods.map((period, index) => (
                  <motion.div
                    key={index}
                    className="text-sm p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex items-center gap-1 text-xs text-blue-600 mb-1">
                      <Clock className="h-3 w-3" />
                      {period.time}
                    </div>
                    <div className="font-medium text-blue-900 dark:text-blue-50">
                      {period.subject}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-blue-500" />
                        <Badge
                          variant="outline"
                          className="border-blue-200 text-xs font-normal"
                        >
                          {period.class}
                        </Badge>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {period.room}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Localisation: {period.room}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </motion.div>
                ))}
                {day.periods.length === 0 && (
                  <div className="text-sm text-muted-foreground text-center py-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
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
