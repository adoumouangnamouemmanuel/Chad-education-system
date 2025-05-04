import type { Metadata } from "next";
import { ArrowLeft, Download, Filter, Search } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Teacher Transfers | Minister Dashboard",
  description: "Manage teacher transfers across the education system",
};

export default function TeacherTransfersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <a href="/dashboard/minister/teachers">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          Transferts d'enseignants
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des transferts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">
              Cette année scolaire
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">En attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">Demandes à traiter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Approuvés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">86</div>
            <p className="text-xs text-muted-foreground">
              Transferts approuvés
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Refusés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">Transferts refusés</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Demandes de transfert</CardTitle>
              <CardDescription>
                Gérer les demandes de transfert des enseignants
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  className="pl-8 w-full"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Exporter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="approved">Approuvé</SelectItem>
                <SelectItem value="rejected">Refusé</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Région d'origine" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les régions</SelectItem>
                <SelectItem value="ndjamena">N'Djamena</SelectItem>
                <SelectItem value="logone">Logone</SelectItem>
                <SelectItem value="mayo-kebbi">Mayo-Kebbi</SelectItem>
                <SelectItem value="ouaddai">Ouaddaï</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Région de destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les régions</SelectItem>
                <SelectItem value="ndjamena">N'Djamena</SelectItem>
                <SelectItem value="logone">Logone</SelectItem>
                <SelectItem value="mayo-kebbi">Mayo-Kebbi</SelectItem>
                <SelectItem value="ouaddai">Ouaddaï</SelectItem>
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
                <SelectItem value="physics">Physique</SelectItem>
                <SelectItem value="history">Histoire-Géographie</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Enseignant</TableHead>
                <TableHead>École actuelle</TableHead>
                <TableHead>École demandée</TableHead>
                <TableHead>Date de demande</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "TR-2023-001",
                  teacher: "Dr. Moussa Ali",
                  currentSchool: "Lycée National de N'Djamena",
                  requestedSchool: "Lycée de Moundou",
                  date: "15/09/2023",
                  status: "pending",
                },
                {
                  id: "TR-2023-015",
                  teacher: "Mme. Fatou Deby",
                  currentSchool: "École Primaire Central",
                  requestedSchool: "École Primaire de Sarh",
                  date: "20/09/2023",
                  status: "approved",
                },
                {
                  id: "TR-2023-023",
                  teacher: "M. Jean Ndoubayo",
                  currentSchool: "Collège de l'Avenir",
                  requestedSchool: "Lycée National de N'Djamena",
                  date: "25/09/2023",
                  status: "rejected",
                },
                {
                  id: "TR-2023-042",
                  teacher: "Mme. Marie Abakar",
                  currentSchool: "École Primaire de la Paix",
                  requestedSchool: "École Primaire Central",
                  date: "01/10/2023",
                  status: "pending",
                },
                {
                  id: "TR-2023-056",
                  teacher: "M. Hassan Ibrahim",
                  currentSchool: "Lycée Technique",
                  requestedSchool: "Lycée de Bongor",
                  date: "05/10/2023",
                  status: "approved",
                },
              ].map((transfer) => (
                <TableRow key={transfer.id}>
                  <TableCell className="font-medium">{transfer.id}</TableCell>
                  <TableCell>{transfer.teacher}</TableCell>
                  <TableCell>{transfer.currentSchool}</TableCell>
                  <TableCell>{transfer.requestedSchool}</TableCell>
                  <TableCell>{transfer.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transfer.status === "pending"
                          ? "outline"
                          : transfer.status === "approved"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {transfer.status === "pending"
                        ? "En attente"
                        : transfer.status === "approved"
                        ? "Approuvé"
                        : "Refusé"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Voir
                      </Button>
                      {transfer.status === "pending" && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600"
                          >
                            Approuver
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600"
                          >
                            Refuser
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
