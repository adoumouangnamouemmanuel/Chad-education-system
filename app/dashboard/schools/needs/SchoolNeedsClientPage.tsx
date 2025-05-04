"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  CheckCircle2,
  Download,
  Filter,
  PlusCircle,
  School,
  Users,
} from "lucide-react";
import { useState } from "react";

// Sample data for school needs
const schoolNeeds = [
  {
    id: 1,
    school: "École Primaire de Goz Beida",
    region: "Ouaddaï",
    category: "Infrastructure",
    description:
      "Reconstruction de 3 salles de classe endommagées par les inondations",
    status: "Urgent",
    progress: 10,
    date: "2023-03-15",
  },
  {
    id: 2,
    school: "Lycée de Mao",
    region: "Kanem",
    category: "Matériels",
    description: "Besoin de 200 manuels scolaires pour les cours de sciences",
    status: "Élevé",
    progress: 30,
    date: "2023-03-20",
  },
  {
    id: 3,
    school: "Collège de Bongor",
    region: "Mayo-Kebbi",
    category: "Personnel",
    description: "Recrutement de 2 professeurs de mathématiques",
    status: "Moyen",
    progress: 50,
    date: "2023-03-25",
  },
  {
    id: 4,
    school: "École de Biltine",
    region: "Wadi Fira",
    category: "Infrastructure",
    description: "Construction d'installations sanitaires",
    status: "Élevé",
    progress: 20,
    date: "2023-04-01",
  },
  {
    id: 5,
    school: "Lycée National de N'Djamena",
    region: "N'Djamena",
    category: "Matériels",
    description: "Équipement informatique pour la salle d'informatique",
    status: "Moyen",
    progress: 40,
    date: "2023-04-05",
  },
  {
    id: 6,
    school: "École Primaire de Sarh",
    region: "Moyen-Chari",
    category: "Infrastructure",
    description: "Réparation du toit de l'école",
    status: "Urgent",
    progress: 15,
    date: "2023-04-10",
  },
];

export default function SchoolNeedsClientPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredNeeds = schoolNeeds.filter(
    (need) =>
      (need.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
        need.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryFilter === "all" || need.category === categoryFilter) &&
      (statusFilter === "all" || need.status === statusFilter)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Urgent":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Élevé":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      case "Moyen":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Faible":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Infrastructure":
        return <Building2 className="h-5 w-5" />;
      case "Matériels":
        return <School className="h-5 w-5" />;
      case "Personnel":
        return <Users className="h-5 w-5" />;
      default:
        return <CheckCircle2 className="h-5 w-5" />;
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">School Needs</h1>
          <p className="text-muted-foreground">
            Manage and track resource requests from schools.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Add Request
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Needs</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="fulfilled">Fulfilled</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader
              className="
"
            />
          </Card>
        </TabsContent>

        <TabsContent value="infrastructure" className="space-y-4">
          {filteredNeeds
            .filter((need) => need.category === "Infrastructure")
            .map((need) => (
              <Card key={need.id}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-4 md:p-6 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{need.school}</h3>
                          <p className="text-sm text-muted-foreground">
                            {need.region}
                          </p>
                        </div>
                        <Badge className={getStatusColor(need.status)}>
                          {need.status}
                        </Badge>
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
                          <span>Progression</span>
                          <span>{need.progress}%</span>
                        </div>
                        <Progress value={need.progress} className="h-2" />
                      </div>
                    </div>

                    <div className="p-4 md:p-6 bg-muted md:w-48 flex flex-row md:flex-col justify-between items-center md:items-start gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Signalé le
                        </p>
                        <p className="font-medium">
                          {new Date(need.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Approuver
                        </Button>
                        <Button size="sm">Détails</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          {filteredNeeds
            .filter((need) => need.category === "Matériels")
            .map((need) => (
              <Card key={need.id}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-4 md:p-6 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{need.school}</h3>
                          <p className="text-sm text-muted-foreground">
                            {need.region}
                          </p>
                        </div>
                        <Badge className={getStatusColor(need.status)}>
                          {need.status}
                        </Badge>
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
                          <span>Progression</span>
                          <span>{need.progress}%</span>
                        </div>
                        <Progress value={need.progress} className="h-2" />
                      </div>
                    </div>

                    <div className="p-4 md:p-6 bg-muted md:w-48 flex flex-row md:flex-col justify-between items-center md:items-start gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Signalé le
                        </p>
                        <p className="font-medium">
                          {new Date(need.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Approuver
                        </Button>
                        <Button size="sm">Détails</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="personnel" className="space-y-4">
          {filteredNeeds
            .filter((need) => need.category === "Personnel")
            .map((need) => (
              <Card key={need.id}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-4 md:p-6 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{need.school}</h3>
                          <p className="text-sm text-muted-foreground">
                            {need.region}
                          </p>
                        </div>
                        <Badge className={getStatusColor(need.status)}>
                          {need.status}
                        </Badge>
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
                          <span>Progression</span>
                          <span>{need.progress}%</span>
                        </div>
                        <Progress value={need.progress} className="h-2" />
                      </div>
                    </div>

                    <div className="p-4 md:p-6 bg-muted md:w-48 flex flex-row md:flex-col justify-between items-center md:items-start gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Signalé le
                        </p>
                        <p className="font-medium">
                          {new Date(need.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Approuver
                        </Button>
                        <Button size="sm">Détails</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
