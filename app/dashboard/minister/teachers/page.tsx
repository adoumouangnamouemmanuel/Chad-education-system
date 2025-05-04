import { Suspense } from "react";
import type { Metadata } from "next";
import { Plus, Search } from "lucide-react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "All Teachers | Minister Dashboard",
  description: "View and manage all teachers in the education system",
};

function TeachersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nom</TableHead>
          <TableHead>École</TableHead>
          <TableHead>Matière</TableHead>
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
              <TableCell className="font-medium">TCH-{2000 + i}</TableCell>
              <TableCell>
                {
                  [
                    "Dr. Moussa Ali",
                    "Mme. Fatou Deby",
                    "M. Jean Ndoubayo",
                    "Mme. Marie Abakar",
                    "M. Hassan Ibrahim",
                    "Mme. Aisha Hassane",
                    "M. Pierre Youssouf",
                    "Mme. Sophie Mahamat",
                    "M. Omar Diallo",
                    "Mme. Chantal Oumar",
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
                    "Mathématiques",
                    "Français",
                    "Histoire-Géographie",
                    "Sciences",
                    "Physique-Chimie",
                    "Anglais",
                    "Éducation Civique",
                    "SVT",
                    "Philosophie",
                    "Informatique",
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
                    ? "En congé"
                    : "Transféré"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={`/dashboard/minister/teachers/details?id=${2000 + i}`}
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

export default function MinisterTeachersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Enseignants</h1>
        <Button asChild>
          <a href="/dashboard/minister/teachers/add">
            <Plus className="mr-2 h-4 w-4" />
            Ajouter un enseignant
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtres</CardTitle>
          <CardDescription>
            Filtrer les enseignants par région, matière ou statut
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher des enseignants..."
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
                <SelectValue placeholder="Matière" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les matières</SelectItem>
                <SelectItem value="math">Mathématiques</SelectItem>
                <SelectItem value="french">Français</SelectItem>
                <SelectItem value="history">Histoire-Géographie</SelectItem>
                <SelectItem value="science">Sciences</SelectItem>
                <SelectItem value="english">Anglais</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="leave">En congé</SelectItem>
                <SelectItem value="transferred">Transféré</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tous les enseignants</CardTitle>
          <CardDescription>
            Liste complète des enseignants dans le système éducatif national
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Chargement des enseignants...</div>}>
            <TeachersTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}