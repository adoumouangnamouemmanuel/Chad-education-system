import { Suspense } from "react";
import { Metadata } from "next";
import {Plus, Search } from "lucide-react";
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
import { SchoolsTable } from "@/components/dashboard/schools-table";

export const metadata: Metadata = {
  title: "All Schools | Minister Dashboard",
  description: "View and manage all schools in the education system",
};

export default function MinisterSchoolsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Écoles</h1>
        <Button asChild>
          <a href="/dashboard/minister/schools/add">
            <Plus className="mr-2 h-4 w-4" />
            Ajouter une école
          </a>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filtres</CardTitle>
          <CardDescription>
            Filtrer les écoles par région, type ou statut
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher des écoles..."
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
                <SelectValue placeholder="Type d'école" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="primary">Primaire</SelectItem>
                <SelectItem value="secondary">Secondaire</SelectItem>
                <SelectItem value="high">Lycée</SelectItem>
                <SelectItem value="technical">Technique</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="active">Actif</SelectItem>
                <SelectItem value="inactive">Inactif</SelectItem>
                <SelectItem value="construction">En construction</SelectItem>
                <SelectItem value="renovation">En rénovation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Toutes les écoles</CardTitle>
          <CardDescription>
            Liste complète des écoles dans le système éducatif national
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Chargement des écoles...</div>}>
            <SchoolsTable />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}