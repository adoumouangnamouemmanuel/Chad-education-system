import type { Metadata } from "next";
import { Download, Save, Search } from "lucide-react";
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
import { GradeEntry } from "@/components/dashboard/grade-entry";

export const metadata: Metadata = {
  title: "Grade Entry | Teacher Dashboard",
  description: "Enter and manage student grades",
};

export default function TeacherGradesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Saisie des notes</h1>
        <div className="flex gap-2">
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
            Choisissez la classe et le trimestre pour saisir les notes
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
            <Select defaultValue="t1">
              <SelectTrigger>
                <SelectValue placeholder="Trimestre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="t1">1er Trimestre</SelectItem>
                <SelectItem value="t2">2ème Trimestre</SelectItem>
                <SelectItem value="t3">3ème Trimestre</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Terminale A - Mathématiques - 1er Trimestre</CardTitle>
              <CardDescription>
                Saisissez les notes des élèves pour cette classe
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
          <GradeEntry />
        </CardContent>
      </Card>
    </div>
  );
}
