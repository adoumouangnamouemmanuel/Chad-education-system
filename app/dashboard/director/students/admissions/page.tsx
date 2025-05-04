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
  title: "Student Admissions | Director Dashboard",
  description: "Manage student admissions for your school",
};

export default function DirectorStudentAdmissionsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <a href="/dashboard/director/students">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          Admissions d'élèves
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des admissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">245</div>
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
            <CardTitle className="text-base font-medium">Approuvées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">212</div>
            <p className="text-xs text-muted-foreground">
              Admissions approuvées
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Refusées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Admissions refusées</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Demandes d'admission</CardTitle>
              <CardDescription>
                Gérer les demandes d'admission pour votre école
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                <SelectItem value="terminal">Terminale</SelectItem>
                <SelectItem value="premiere">Première</SelectItem>
                <SelectItem value="seconde">Seconde</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="recent">
              <SelectTrigger>
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Plus récent</SelectItem>
                <SelectItem value="oldest">Plus ancien</SelectItem>
                <SelectItem value="name">Nom</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nom de l'élève</TableHead>
                <TableHead>Niveau demandé</TableHead>
                <TableHead>Date de demande</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "ADM-2023-001",
                  student: "Amadou Diallo",
                  level: "Terminale D",
                  date: "15/08/2023",
                  status: "approved",
                },
                {
                  id: "ADM-2023-042",
                  student: "Fatima Ibrahim",
                  level: "Première C",
                  date: "20/08/2023",
                  status: "approved",
                },
                {
                  id: "ADM-2023-078",
                  student: "Jean Abakar",
                  level: "Seconde A",
                  date: "25/08/2023",
                  status: "pending",
                },
                {
                  id: "ADM-2023-125",
                  student: "Marie Deby",
                  level: "Terminale A",
                  date: "01/09/2023",
                  status: "rejected",
                },
                {
                  id: "ADM-2023-189",
                  student: "Hassan Oumar",
                  level: "Première D",
                  date: "05/09/2023",
                  status: "pending",
                },
              ].map((admission) => (
                <TableRow key={admission.id}>
                  <TableCell className="font-medium">{admission.id}</TableCell>
                  <TableCell>{admission.student}</TableCell>
                  <TableCell>{admission.level}</TableCell>
                  <TableCell>{admission.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        admission.status === "pending"
                          ? "outline"
                          : admission.status === "approved"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {admission.status === "pending"
                        ? "En attente"
                        : admission.status === "approved"
                        ? "Approuvé"
                        : "Refusé"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Voir
                      </Button>
                      {admission.status === "pending" && (
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