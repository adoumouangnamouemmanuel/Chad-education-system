"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, Minus, TrendingUp, Award } from 'lucide-react'

// Données d'exemple
const terms: Array<keyof typeof grades> = ["Trimestre 1", "Trimestre 2", "Trimestre 3"]

const grades = {
  "Trimestre 1": [
    { subject: "Mathématiques", grade: 16, classAverage: 12.5, highestGrade: 18, rank: 3, trend: "up" },
    { subject: "Physique", grade: 15, classAverage: 11.8, highestGrade: 17, rank: 2, trend: "up" },
    { subject: "Chimie", grade: 14, classAverage: 12.2, highestGrade: 16, rank: 4, trend: "stable" },
    { subject: "Biologie", grade: 13, classAverage: 12.0, highestGrade: 17, rank: 5, trend: "down" },
    { subject: "Français", grade: 12, classAverage: 11.5, highestGrade: 16, rank: 8, trend: "down" },
    { subject: "Anglais", grade: 17, classAverage: 13.2, highestGrade: 18, rank: 2, trend: "up" },
    { subject: "Histoire", grade: 14, classAverage: 12.8, highestGrade: 17, rank: 6, trend: "stable" },
    { subject: "Géographie", grade: 15, classAverage: 13.0, highestGrade: 18, rank: 4, trend: "up" },
  ],
  "Trimestre 2": [
    { subject: "Mathématiques", grade: 17, classAverage: 12.8, highestGrade: 19, rank: 2, trend: "up" },
    { subject: "Physique", grade: 16, classAverage: 12.0, highestGrade: 18, rank: 2, trend: "up" },
    { subject: "Chimie", grade: 15, classAverage: 12.5, highestGrade: 17, rank: 3, trend: "up" },
    { subject: "Biologie", grade: 14, classAverage: 12.2, highestGrade: 18, rank: 4, trend: "up" },
    { subject: "Français", grade: 13, classAverage: 11.8, highestGrade: 17, rank: 6, trend: "up" },
    { subject: "Anglais", grade: 18, classAverage: 13.5, highestGrade: 19, rank: 1, trend: "up" },
    { subject: "Histoire", grade: 15, classAverage: 13.0, highestGrade: 18, rank: 4, trend: "up" },
    { subject: "Géographie", grade: 16, classAverage: 13.2, highestGrade: 19, rank: 3, trend: "up" },
  ],
  "Trimestre 3": [],
}

export function StudentGrades() {
  const calculateAverage = (termGrades: { subject: string; grade: number; classAverage: number; highestGrade: number; rank: number; trend: string }[]) => {
    if (termGrades.length === 0) return "0"
    const sum = termGrades.reduce((acc, grade) => acc + grade.grade, 0)
    return (sum / termGrades.length).toFixed(1)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

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
  }

  return (
    <Tabs defaultValue="Trimestre 1">
      <TabsList className="mb-4">
        {terms.map((term: keyof typeof grades) => (
          <TabsTrigger key={term} value={term}>
            {term}
          </TabsTrigger>
        ))}
      </TabsList>

      {terms.map((term) => (
        <TabsContent key={term} value={term}>
          {grades[term].length > 0 ? (
            <motion.div className="space-y-6" initial="hidden" animate="visible" variants={containerVariants}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div variants={itemVariants} whileHover={{ y: -3 }} transition={{ type: "spring" }}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground">Moyenne du Trimestre</div>
                      <div className="text-3xl font-bold mt-1">{calculateAverage(grades[term])}/20</div>
                      <div className="mt-2">
                        <Progress value={Number.parseFloat(calculateAverage(grades[term])) * 5} className="h-2" />
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600">
                        <TrendingUp className="h-3 w-3" />
                        <span>+1.2 points par rapport au trimestre précédent</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ y: -3 }} transition={{ type: "spring" }}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground">Classement</div>
                      <div className="text-3xl font-bold mt-1">
                        {grades[term].length > 0 ? Math.min(...grades[term].map((g) => g.rank)) : "N/A"}
                        <span className="text-lg text-muted-foreground">/35</span>
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600">
                        <Award className="h-3 w-3" />
                        <span>Parmi les 10% meilleurs élèves</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ y: -3 }} transition={{ type: "spring" }}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground">Meilleure Matière</div>
                      <div className="text-xl font-bold mt-1">
                        {grades[term].length > 0
                          ? grades[term].reduce((best, current) => (current.grade > best.grade ? current : best))
                              .subject
                          : "N/A"}
                      </div>
                      <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                        <Award className="h-3 w-3" />
                        <span>18/20 en Anglais</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="rounded-md border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="h-10 px-4 text-left align-middle font-medium">Matière</th>
                        <th className="h-10 px-4 text-center align-middle font-medium">Votre Note</th>
                        <th className="h-10 px-4 text-center align-middle font-medium">Moyenne de Classe</th>
                        <th className="h-10 px-4 text-center align-middle font-medium">Note la Plus Élevée</th>
                        <th className="h-10 px-4 text-center align-middle font-medium">Classement</th>
                        <th className="h-10 px-4 text-center align-middle font-medium">Tendance</th>
                        <th className="h-10 px-4 text-center align-middle font-medium">Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grades[term].map((grade, index) => (
                        <motion.tr
                          key={index}
                          className="border-b hover:bg-muted/50 transition-colors"
                          variants={itemVariants}
                          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}
                        >
                          <td className="p-4 align-middle font-medium">{grade.subject}</td>
                          <td className="p-4 align-middle text-center font-semibold">{grade.grade}/20</td>
                          <td className="p-4 align-middle text-center text-muted-foreground">{grade.classAverage}/20</td>
                          <td className="p-4 align-middle text-center text-muted-foreground">{grade.highestGrade}/20</td>
                          <td className="p-4 align-middle text-center font-medium">{grade.rank}</td>
                          <td className="p-4 align-middle text-center">
                            {grade.trend === "up" ? (
                              <span className="inline-flex items-center text-emerald-600">
                                <ArrowUp className="h-4 w-4 mr-1" />
                                En hausse
                              </span>
                            ) : grade.trend === "down" ? (
                              <span className="inline-flex items-center text-rose-600">
                                <ArrowDown className="h-4 w-4 mr-1" />
                                En baisse
                              </span>
                            ) : (
                              <span className="inline-flex items-center text-amber-600">
                                <Minus className="h-4 w-4 mr-1" />
                                Stable
                              </span>
                            )}
                          </td>
                          <td className="p-4 align-middle text-center">
                            <Badge
                              variant={
                                grade.grade >= 14 ? "default" : grade.grade >= 10 ? "secondary" : "destructive"
                              }
                            >
                              {grade.grade >= 14 ? "Excellent" : grade.grade >= 10 ? "Satisfaisant" : "À améliorer"}
                            </Badge>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">Aucune note disponible pour ce trimestre.</div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}
