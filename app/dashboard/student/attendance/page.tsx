import type { Metadata } from "next";
import { Calendar, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StudentAttendance } from "@/components/dashboard/student-attendance";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Attendance | Student Dashboard",
  description: "View your attendance records",
};

export default function StudentAttendancePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Ma Présence</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Calendrier
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Taux de présence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">
              1er Trimestre 2023-2024
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Jours d'absence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Sur 60 jours de cours
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Retards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Ce trimestre</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sélectionner une période</CardTitle>
          <CardDescription>
            Choisissez la période pour voir votre présence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select defaultValue="t1">
              <SelectTrigger>
                <SelectValue placeholder="Période" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="t1">1er Trimestre</SelectItem>
                <SelectItem value="t2">2ème Trimestre</SelectItem>
                <SelectItem value="t3">3ème Trimestre</SelectItem>
                <SelectItem value="year">Année complète</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Matière" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les matières</SelectItem>
                <SelectItem value="math">Mathématiques</SelectItem>
                <SelectItem value="french">Français</SelectItem>
                <SelectItem value="physics">Physique-Chimie</SelectItem>
                <SelectItem value="english">Anglais</SelectItem>
                <SelectItem value="history">Histoire-Géographie</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Registre de présence</CardTitle>
              <CardDescription>1er Trimestre 2023-2024</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher une date..."
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Toutes les matières</TabsTrigger>
              <TabsTrigger value="absences">Absences</TabsTrigger>
              <TabsTrigger value="lates">Retards</TabsTrigger>
              <TabsTrigger value="summary">Résumé</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <StudentAttendance />
            </TabsContent>
            <TabsContent value="absences">
              <div className="text-center py-8 text-muted-foreground">
                Sélectionnez une matière pour voir les absences
              </div>
            </TabsContent>
            <TabsContent value="lates">
              <div className="text-center py-8 text-muted-foreground">
                Sélectionnez une matière pour voir les retards
              </div>
            </TabsContent>
            <TabsContent value="summary">
              <div className="text-center py-8 text-muted-foreground">
                Sélectionnez une période pour voir le résumé
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
