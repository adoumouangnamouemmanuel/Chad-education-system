import type { Metadata } from "next";
import { Calendar, Download, Save, Search } from "lucide-react";
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
import { AttendanceTracker } from "@/components/dashboard/attendance-tracker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Attendance | Teacher Dashboard",
  description: "Track and manage student attendance",
};

export default function TeacherAttendancePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Suivi de présence</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Calendrier
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Enregistrer
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sélectionner une classe</CardTitle>
          <CardDescription>
            Choisissez la classe pour faire l'appel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select defaultValue="terminale-a">
              <SelectTrigger>
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
            <Select defaultValue="math">
              <SelectTrigger>
                <SelectValue placeholder="Matière" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Mathématiques</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>
                Terminale A - Mathématiques -{" "}
                {new Date().toLocaleDateString("fr-FR")}
              </CardTitle>
              <CardDescription>
                Marquez la présence des élèves pour cette classe
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher un élève..."
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="today">
            <TabsList className="mb-4">
              <TabsTrigger value="today">Aujourd'hui</TabsTrigger>
              <TabsTrigger value="week">Cette semaine</TabsTrigger>
              <TabsTrigger value="month">Ce mois</TabsTrigger>
              <TabsTrigger value="trimester">Ce trimestre</TabsTrigger>
            </TabsList>
            <TabsContent value="today">
              <AttendanceTracker />
            </TabsContent>
            <TabsContent value="week">
              <div className="text-center py-8 text-muted-foreground">
                Sélectionnez une date dans la semaine pour voir les données de
                présence
              </div>
            </TabsContent>
            <TabsContent value="month">
              <div className="text-center py-8 text-muted-foreground">
                Sélectionnez un mois pour voir les statistiques de présence
                mensuelles
              </div>
            </TabsContent>
            <TabsContent value="trimester">
              <div className="text-center py-8 text-muted-foreground">
                Sélectionnez un trimestre pour voir les statistiques de présence
                trimestrielles
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}