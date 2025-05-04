"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Sample data
const terms = ["Term 1", "Term 2", "Term 3"]

const grades = {
  "Term 1": [
    { subject: "Mathematics", grade: 16, classAverage: 12.5, highestGrade: 18, rank: 3 },
    { subject: "Physics", grade: 15, classAverage: 11.8, highestGrade: 17, rank: 2 },
    { subject: "Chemistry", grade: 14, classAverage: 12.2, highestGrade: 16, rank: 4 },
    { subject: "Biology", grade: 13, classAverage: 12.0, highestGrade: 17, rank: 5 },
    { subject: "French", grade: 12, classAverage: 11.5, highestGrade: 16, rank: 8 },
    { subject: "English", grade: 17, classAverage: 13.2, highestGrade: 18, rank: 2 },
    { subject: "History", grade: 14, classAverage: 12.8, highestGrade: 17, rank: 6 },
    { subject: "Geography", grade: 15, classAverage: 13.0, highestGrade: 18, rank: 4 },
  ],
  "Term 2": [
    { subject: "Mathematics", grade: 17, classAverage: 12.8, highestGrade: 19, rank: 2 },
    { subject: "Physics", grade: 16, classAverage: 12.0, highestGrade: 18, rank: 2 },
    { subject: "Chemistry", grade: 15, classAverage: 12.5, highestGrade: 17, rank: 3 },
    { subject: "Biology", grade: 14, classAverage: 12.2, highestGrade: 18, rank: 4 },
    { subject: "French", grade: 13, classAverage: 11.8, highestGrade: 17, rank: 6 },
    { subject: "English", grade: 18, classAverage: 13.5, highestGrade: 19, rank: 1 },
    { subject: "History", grade: 15, classAverage: 13.0, highestGrade: 18, rank: 4 },
    { subject: "Geography", grade: 16, classAverage: 13.2, highestGrade: 19, rank: 3 },
  ],
  "Term 3": [],
}

export function StudentGrades() {
  const calculateAverage = (termGrades) => {
    if (termGrades.length === 0) return 0
    const sum = termGrades.reduce((acc, grade) => acc + grade.grade, 0)
    return (sum / termGrades.length).toFixed(1)
  }

  return (
    <Tabs defaultValue="Term 1">
      <TabsList className="mb-4">
        {terms.map((term) => (
          <TabsTrigger key={term} value={term}>
            {term}
          </TabsTrigger>
        ))}
      </TabsList>

      {terms.map((term) => (
        <TabsContent key={term} value={term}>
          {grades[term].length > 0 ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm font-medium text-muted-foreground">Term Average</div>
                    <div className="text-3xl font-bold mt-1">{calculateAverage(grades[term])}/20</div>
                    <div className="mt-2">
                      <Progress value={Number.parseFloat(calculateAverage(grades[term])) * 5} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm font-medium text-muted-foreground">Class Rank</div>
                    <div className="text-3xl font-bold mt-1">
                      {grades[term].length > 0 ? Math.min(...grades[term].map((g) => g.rank)) : "N/A"}
                      <span className="text-lg text-muted-foreground">/35</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="text-sm font-medium text-muted-foreground">Best Subject</div>
                    <div className="text-xl font-bold mt-1">
                      {grades[term].length > 0
                        ? grades[term].reduce((best, current) => (current.grade > best.grade ? current : best)).subject
                        : "N/A"}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="h-10 px-4 text-left align-middle font-medium">Subject</th>
                      <th className="h-10 px-4 text-center align-middle font-medium">Your Grade</th>
                      <th className="h-10 px-4 text-center align-middle font-medium">Class Average</th>
                      <th className="h-10 px-4 text-center align-middle font-medium">Highest Grade</th>
                      <th className="h-10 px-4 text-center align-middle font-medium">Rank</th>
                      <th className="h-10 px-4 text-center align-middle font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades[term].map((grade, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4 align-middle font-medium">{grade.subject}</td>
                        <td className="p-4 align-middle text-center">{grade.grade}/20</td>
                        <td className="p-4 align-middle text-center">{grade.classAverage}/20</td>
                        <td className="p-4 align-middle text-center">{grade.highestGrade}/20</td>
                        <td className="p-4 align-middle text-center">{grade.rank}</td>
                        <td className="p-4 align-middle text-center">
                          <Badge
                            className={
                              grade.grade >= 14
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : grade.grade >= 10
                                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            }
                          >
                            {grade.grade >= 14 ? "Excellent" : grade.grade >= 10 ? "Satisfactory" : "Needs Improvement"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">No grades available for this term yet.</div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}
