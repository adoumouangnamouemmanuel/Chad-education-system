import type { Metadata } from "next";
import { Download, Search } from "lucide-react";
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
import { StudentGrades } from "@/components/dashboard/student-grades";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "My Grades | Student Dashboard",
  description: "View your academic grades and performance",
};

export default function StudentGradesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Mes Notes</h1>
        <div className="flex gap-2">
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
              Moyenne générale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">14.5/20</div>
            <p className="text-xs text-muted-foreground">
              1er Trimestre 2023-2024
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Meilleure matière
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">16/20</div>
            <p className="text-xs text-muted-foreground">Français</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Rang de classe
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8/42</div>
            <p className="text-xs text-muted-foreground">Terminale A</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sélectionner une période</CardTitle>
          <CardDescription>
            Choisissez le trimestre pour voir vos notes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select defaultValue="t1">
              <SelectTrigger>
                <SelectValue placeholder="Trimestre" />
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
              <CardTitle>Notes du 1er Trimestre</CardTitle>
              <CardDescription>Année scolaire 2023-2024</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher une matière..."
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Toutes les matières</TabsTrigger>
              <TabsTrigger value="tests">Contrôles</TabsTrigger>
              <TabsTrigger value="exams">Examens</TabsTrigger>
              <TabsTrigger value="projects">Projets</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <StudentGrades />
            </TabsContent>
            <TabsContent value="tests">
              <div className="text-center py-8 text-muted-foreground">
                Sélectionnez une matière pour voir les notes des contrôles
              </div>
            </TabsContent>
            <TabsContent value="exams">
              <div className="text-center py-8 text-muted-foreground">
                Sélectionnez une matière pour voir les notes des examens
              </div>
            </TabsContent>
            <TabsContent value="projects">
              <div className="text-center py-8 text-muted-foreground">
                Sélectionnez une matière pour voir les notes des projets
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
