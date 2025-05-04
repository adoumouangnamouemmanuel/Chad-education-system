import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search } from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "All Students | Minister Dashboard",
  description: "View and manage all students in the education system",
};

function StudentsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead>École</TableHead>
          <TableHead>Niveau</TableHead>
          <TableHead>Région</TableHead>
          <TableHead>Statut</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">STD-{1000 + i}</TableCell>
              <TableCell>
                {
                  [
                    "Amadou Diallo",
                    "Fatima Ibrahim",
                    "Jean Abakar",
                    "Marie Deby",
                    "Hassan Oumar",
                    "Aisha Mahamat",
                    "Pierre Ndoubayo",
                    "Sophie Youssouf",
                    "Omar Hassane",
                    "Chantal Moussa",
                  ][i]
                }
              </TableCell>
              <TableCell>
                {
                  [
                    "Lycée National",
                    "École Primaire Central",
                    "Collège de l'Avenir",
                    "École Primaire de la Paix",
                    "Lycée Technique",
                    "Collège Moderne",
                    "École Primaire du Progrès",
                    "Lycée d'Excellence",
                    "Collège de l'Unité",
                    "École Primaire des Nations",
                  ][i]
                }
              </TableCell>
              <TableCell>
                {
                  [
                    "Terminale",
                    "CM2",
                    "5ème",
                    "CE2",
                    "1ère",
                    "3ème",
                    "CM1",
                    "2nde",
                    "6ème",
                    "CP",
                  ][i]
                }
              </TableCell>
              <TableCell>
                {
                  [
                    "N'Djamena",
                    "Logone",
                    "Mayo-Kebbi",
                    "N'Djamena",
                    "Ouaddaï",
                    "Kanem",
                    "N'Djamena",
                    "Logone",
                    "Mayo-Kebbi",
                    "Ouaddaï",
                  ][i]
                }
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    i % 3 === 0
                      ? "default"
                      : i % 3 === 1
                      ? "outline"
                      : "secondary"
                  }
                >
                  {i % 3 === 0
                    ? "Actif"
                    : i % 3 === 1
                    ? "Transféré"
                    : "Diplômé"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={`/dashboard/minister/students/details?id=${1000 + i}`}
                  >
                    Détails
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default function MinisterStudentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Étudiants</h1>
        <Button asChild>
          <a href="/dashboard/minister/students/add">
            <Plus className="mr-2 h-4 w-4" />
            Ajouter un étudiant
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtres</CardTitle>
          <CardDescription>
            Filtrer les étudiants par région, niveau ou statut
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher des étudiants..."
                className="pl-8"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Région" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les régions</SelectItem>
                <SelectItem value="ndjamena">N'Djamena</SelectItem>
                <SelectItem value="logone">Logone</SelectItem>
                <SelectItem value="mayo-kebbi">Mayo-Kebbi</SelectItem>
                <SelectItem value="ouaddai">Ouaddaï</SelectItem>
                <SelectItem value="kanem">Kanem</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                <SelectItem value="primary">Primaire</SelectItem>
                <SelectItem value="middle">Collège</SelectItem>
                <SelectItem value="high">Lycée</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="transferred">Transféré</SelectItem>
                <SelectItem value="graduated">Diplômé</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tous les étudiants</CardTitle>
          <CardDescription>
            Liste complète des étudiants dans le système éducatif national
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Chargement des étudiants...</div>}>
            <StudentsTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
