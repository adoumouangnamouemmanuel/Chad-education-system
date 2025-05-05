import type { Metadata } from "next";
import {
  Download,
  Save,
  Search,
  ArrowLeft,
  FileText,
  Filter,
  BarChart2,
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
import { GradeEntry } from "@/components/dashboard/grade-entry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Saisie des notes | Tableau de Bord Enseignant",
  description: "Saisissez et gérez les notes des élèves",
};

export default function TeacherGradesPage() {
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
              Saisie des notes
            </h1>
            <p className="text-muted-foreground">
              Saisissez et gérez les notes des élèves
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <BarChart2 className="mr-2 h-4 w-4 text-blue-600" />
            Statistiques
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <Download className="mr-2 h-4 w-4 text-blue-600" />
            Exporter
          </Button>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="mr-2 h-4 w-4" />
            Enregistrer
          </Button>
        </div>
      </div>

      <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-blue-900 dark:text-blue-50">
                  Terminale A - Mathématiques
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  1er Trimestre
                </Badge>
              </div>
              <CardDescription>
                Saisissez les notes des élèves pour cette classe
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Rechercher un élève..."
                  className="pl-8 rounded-full border-blue-200 focus:ring-blue-500"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
              >
                <Filter className="h-4 w-4 text-blue-600" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="grades">
            <TabsList className="grid grid-cols-3 mb-8 p-1 bg-blue-50 dark:bg-blue-900 rounded-full w-full sm:w-auto">
              <TabsTrigger
                value="grades"
                className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Notes</span>
              </TabsTrigger>
              <TabsTrigger
                value="assignments"
                className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Devoirs</span>
              </TabsTrigger>
              <TabsTrigger
                value="stats"
                className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
              >
                <BarChart2 className="h-4 w-4" />
                <span className="hidden sm:inline">Statistiques</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="grades">
              <GradeEntry />
            </TabsContent>
            <TabsContent value="assignments">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <FileText className="h-16 w-16 text-blue-200 mb-4" />
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                  Devoirs et évaluations
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Créez et gérez les devoirs et évaluations pour cette classe
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Ajouter un devoir
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="stats">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <BarChart2 className="h-16 w-16 text-blue-200 mb-4" />
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                  Statistiques de la classe
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Visualisez les statistiques et la progression de la classe
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Voir les statistiques
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="bg-blue-50 dark:bg-blue-900/50 p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4 text-blue-500" />
              <span className="text-sm">Moyenne de la classe: 14.5/20</span>
            </div>
          </div>
          {/* <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="mr-2 h-4 w-4" />
            Enregistrer les notes
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
