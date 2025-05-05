import type { Metadata } from "next";
import {
  Calendar,
  Download,
  Save,
  Search,
  Users,
  Filter,
  ArrowLeft,
  Clock,
  CheckCircle,
  XCircle,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AttendanceTracker } from "@/components/dashboard/attendance-tracker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suivi de présence | Tableau de Bord Enseignant",
  description: "Suivez et gérez la présence des élèves",
};

export default function TeacherAttendancePage() {
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
              Suivi de présence
            </h1>
            <p className="text-muted-foreground">
              Suivez et gérez la présence des élèves dans vos classes
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <Calendar className="mr-2 h-4 w-4 text-blue-600" />
            Calendrier
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
          <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            Sélectionner une classe
          </CardTitle>
          <CardDescription>
            Choisissez la classe pour faire l'appel
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Select defaultValue="terminale-a">
                <SelectTrigger className="rounded-lg border-blue-200 focus:ring-blue-500">
                  <SelectValue placeholder="Classe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="terminale-a">Terminale A</SelectItem>
                  <SelectItem value="terminale-d">Terminale D</SelectItem>
                  <SelectItem value="1ere-c">1ère C</SelectItem>
                  <SelectItem value="2nde-a">2nde A</SelectItem>
                  <SelectItem value="2nde-c">2nde C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Select defaultValue="math">
                <SelectTrigger className="rounded-lg border-blue-200 focus:ring-blue-500">
                  <SelectValue placeholder="Matière" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathématiques</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Input
                type="date"
                defaultValue={new Date().toISOString().split("T")[0]}
                className="rounded-lg border-blue-200 focus:ring-blue-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-blue-900 dark:text-blue-50">
                  Terminale A - Mathématiques
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  {new Date().toLocaleDateString("fr-FR")}
                </Badge>
              </div>
              <CardDescription>
                Marquez la présence des élèves pour cette classe
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
          <Tabs defaultValue="today">
            <TabsList className="grid grid-cols-4 mb-8 p-1 bg-blue-50 dark:bg-blue-900 rounded-full w-full sm:w-auto">
              <TabsTrigger
                value="today"
                className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
              >
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">Aujourd'hui</span>
              </TabsTrigger>
              <TabsTrigger
                value="week"
                className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Semaine</span>
              </TabsTrigger>
              <TabsTrigger
                value="month"
                className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Mois</span>
              </TabsTrigger>
              <TabsTrigger
                value="trimester"
                className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Trimestre</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="today">
              <AttendanceTracker />
            </TabsContent>
            <TabsContent value="week">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Calendar className="h-16 w-16 text-blue-200 mb-4" />
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                  Données hebdomadaires
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Sélectionnez une date dans la semaine pour voir les données de
                  présence
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Voir cette semaine
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="month">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Calendar className="h-16 w-16 text-blue-200 mb-4" />
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                  Statistiques mensuelles
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Sélectionnez un mois pour voir les statistiques de présence
                  mensuelles
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Voir ce mois
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="trimester">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Calendar className="h-16 w-16 text-blue-200 mb-4" />
                <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                  Statistiques trimestrielles
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Sélectionnez un trimestre pour voir les statistiques de
                  présence trimestrielles
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Voir ce trimestre
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="bg-blue-50 dark:bg-blue-900/50 p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm">Présents: 28</span>
            </div>
            <div className="flex items-center gap-1">
              <XCircle className="h-4 w-4 text-red-500" />
              <span className="text-sm">Absents: 4</span>
            </div>
          </div>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
            <Save className="mr-2 h-4 w-4" />
            Enregistrer l'appel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
