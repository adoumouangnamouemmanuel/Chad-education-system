"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Building2, CheckCircle2, Clock, School } from "lucide-react"

// Sample data
const needs = [
  {
    id: 1,
    school: "École Primaire de Goz Beida",
    region: "Ouaddaï",
    category: "Infrastructure",
    description: "Reconstruction of 3 classrooms damaged by floods",
    status: "Urgent",
    progress: 10,
    date: "2023-03-15",
  },
  {
    id: 2,
    school: "Lycée de Mao",
    region: "Kanem",
    category: "Materials",
    description: "Need for 200 textbooks for science classes",
    status: "High",
    progress: 30,
    date: "2023-03-20",
  },
  {
    id: 3,
    school: "Collège de Bongor",
    region: "Mayo-Kebbi",
    category: "Personnel",
    description: "Recruitment of 2 mathematics teachers",
    status: "Medium",
    progress: 50,
    date: "2023-03-25",
  },
  {
    id: 4,
    school: "École de Biltine",
    region: "Wadi Fira",
    category: "Infrastructure",
    description: "Construction of sanitary facilities",
    status: "High",
    progress: 20,
    date: "2023-04-01",
  },
]

export function NeedsOverview() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Urgent":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "High":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      case "Medium":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Infrastructure":
        return <Building2 className="h-5 w-5" />
      case "Materials":
        return <School className="h-5 w-5" />
      case "Personnel":
        return <Clock className="h-5 w-5" />
      default:
        return <CheckCircle2 className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-4">
      {needs.map((need) => (
        <Card key={need.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="p-4 md:p-6 flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{need.school}</h3>
                    <p className="text-sm text-muted-foreground">{need.region}</p>
                  </div>
                  <Badge className={getStatusColor(need.status)}>{need.status}</Badge>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                    {getCategoryIcon(need.category)}
                  </div>
                  <span className="font-medium">{need.category}</span>
                </div>

                <p className="text-sm mb-4">{need.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{need.progress}%</span>
                  </div>
                  <Progress value={need.progress} className="h-2" />
                </div>
              </div>

              <div className="p-4 md:p-6 bg-muted md:w-48 flex flex-row md:flex-col justify-between items-center md:items-start gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Reported on</p>
                  <p className="font-medium">{new Date(need.date).toLocaleDateString()}</p>
                </div>
                <Button size="sm">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
