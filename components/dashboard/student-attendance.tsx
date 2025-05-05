"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { CheckCircle, Clock, XCircle } from "lucide-react";

// Données d'exemple
const months = ["Janvier", "Février", "Mars", "Avril", "Mai"] as const;

const attendanceData = {
  Janvier: { present: 20, absent: 2, late: 1, total: 23 },
  Février: { present: 18, absent: 0, late: 2, total: 20 },
  Mars: { present: 22, absent: 1, late: 0, total: 23 },
  Avril: { present: 19, absent: 1, late: 1, total: 21 },
  Mai: { present: 10, absent: 0, late: 0, total: 10 },
};

// Dates d'absence
const absenceDates = [
  new Date(2023, 0, 15),
  new Date(2023, 2, 8),
  new Date(2023, 3, 12),
];

// Dates de retard
const lateDates = [
  new Date(2023, 0, 22),
  new Date(2023, 1, 10),
  new Date(2023, 1, 24),
  new Date(2023, 3, 5),
];

export function StudentAttendance() {
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
    <Tabs defaultValue="Janvier">
      <TabsList className="mb-4">
        {months.map((month: keyof typeof attendanceData) => (
          <TabsTrigger key={month} value={month}>
            {month}
          </TabsTrigger>
        ))}
      </TabsList>

      {months.map((month) => (
        <TabsContent key={month} value={month}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-muted-foreground">
                    Taux de Présence
                  </div>
                  <div className="text-3xl font-bold mt-1">
                    {Math.round(
                      (attendanceData[month].present /
                        attendanceData[month].total) *
                        100
                    )}
                    %
                  </div>
                  <div className="mt-2">
                    <Progress
                      value={
                        (attendanceData[month].present /
                          attendanceData[month].total) *
                        100
                      }
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring" }}
                >
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium text-muted-foreground">
                        Présent
                      </div>
                      <div className="text-2xl font-bold mt-1 text-emerald-600">
                        {attendanceData[month].present}
                      </div>
                      <Badge variant="outline" className="mt-2">
                        {Math.round(
                          (attendanceData[month].present /
                            attendanceData[month].total) *
                            100
                        )}
                        %
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring" }}
                >
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium text-muted-foreground">
                        Absent
                      </div>
                      <div className="text-2xl font-bold mt-1 text-rose-600">
                        {attendanceData[month].absent}
                      </div>
                      <Badge variant="outline" className="mt-2">
                        {Math.round(
                          (attendanceData[month].absent /
                            attendanceData[month].total) *
                            100
                        )}
                        %
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring" }}
                >
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-sm font-medium text-muted-foreground">
                        Retard
                      </div>
                      <div className="text-2xl font-bold mt-1 text-amber-600">
                        {attendanceData[month].late}
                      </div>
                      <Badge variant="outline" className="mt-2">
                        {Math.round(
                          (attendanceData[month].late /
                            attendanceData[month].total) *
                            100
                        )}
                        %
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">
                      Détails de Présence
                    </h3>
                    <div className="space-y-3">
                      {attendanceData[month].absent > 0 && (
                        <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                          <XCircle className="h-5 w-5 text-rose-600 mt-0.5" />
                          <div>
                            <div className="font-medium">Absences</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {attendanceData[month].absent} jour(s) d'absence
                              ce mois-ci
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Dernière absence: 12 {month} 2023 - Cours de
                              Mathématiques
                            </div>
                          </div>
                        </div>
                      )}

                      {attendanceData[month].late > 0 && (
                        <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                          <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
                          <div>
                            <div className="font-medium">Retards</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {attendanceData[month].late} retard(s) ce mois-ci
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Dernier retard: 24 {month} 2023 - Cours de
                              Physique (15 minutes)
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <div>
                          <div className="font-medium">Assiduité</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {attendanceData[month].present} jour(s) de présence
                            ce mois-ci
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Taux de présence global:{" "}
                            {Math.round(
                              (attendanceData[month].present /
                                attendanceData[month].total) *
                                100
                            )}
                            %
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="text-sm font-medium mb-4">
                    Calendrier de Présence
                  </div>
                  <Calendar
                    mode="single"
                    selected={new Date()}
                    className="rounded-md border"
                    modifiers={{
                      absent: absenceDates,
                      late: lateDates,
                    }}
                    modifiersStyles={{
                      absent: {
                        backgroundColor: "rgba(225, 29, 72, 0.1)",
                        color: "rgb(159, 18, 57)",
                        fontWeight: "bold",
                      },
                      late: {
                        backgroundColor: "rgba(245, 158, 11, 0.1)",
                        color: "rgb(180, 83, 9)",
                        fontWeight: "bold",
                      },
                    }}
                  />
                  <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                      <span>Présent</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                      <span>Absent</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span>Retard</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
