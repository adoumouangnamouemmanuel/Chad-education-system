"use client";

import {
  CheckCircle2,
  Clock,
  Download,
  Filter,
  MoreHorizontal,
  XCircle,
} from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

// Mock data for school needs
const schoolNeeds = [
  {
    id: "1",
    school: "Lycée National de N'Djamena",
    region: "N'Djamena",
    category: "Infrastructure",
    need: "Réparation des salles de classe",
    priority: "Haute",
    status: "En attente",
    date: "2023-09-15",
  },
  {
    id: "2",
    school: "École Primaire de Moundou",
    region: "Logone Occidental",
    category: "Matériel",
    need: "Livres scolaires (200 unités)",
    priority: "Moyenne",
    status: "Approuvé",
    date: "2023-08-22",
  },
  {
    id: "3",
    school: "Collège d'Abéché",
    region: "Ouaddaï",
    category: "Personnel",
    need: "Enseignants de mathématiques (2)",
    priority: "Haute",
    status: "Complété",
    date: "2023-07-10",
  },
  {
    id: "4",
    school: "École Primaire de Sarh",
    region: "Moyen-Chari",
    category: "Infrastructure",
    need: "Construction de latrines",
    priority: "Haute",
    status: "Approuvé",
    date: "2023-09-01",
  },
  {
    id: "5",
    school: "Lycée de Bongor",
    region: "Mayo-Kebbi Est",
    category: "Matériel",
    need: "Ordinateurs pour la salle informatique (10)",
    priority: "Moyenne",
    status: "Rejeté",
    date: "2023-08-05",
  },
  {
    id: "6",
    school: "École Primaire de Faya",
    region: "Borkou",
    category: "Infrastructure",
    need: "Système d'eau potable",
    priority: "Haute",
    status: "En attente",
    date: "2023-09-10",
  },
  {
    id: "7",
    school: "Collège de Doba",
    region: "Logone Oriental",
    category: "Personnel",
    need: "Enseignant de français",
    priority: "Moyenne",
    status: "Approuvé",
    date: "2023-08-15",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Approuvé":
      return (
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          Approuvé
        </Badge>
      );
    case "En attente":
      return (
        <Badge
          variant="outline"
          className="bg-yellow-50 text-yellow-700 border-yellow-200"
        >
          En attente
        </Badge>
      );
    case "Complété":
      return (
        <Badge
          variant="outline"
          className="bg-blue-50 text-blue-700 border-blue-200"
        >
          Complété
        </Badge>
      );
    case "Rejeté":
      return (
        <Badge
          variant="outline"
          className="bg-red-50 text-red-700 border-red-200"
        >
          Rejeté
        </Badge>
      );
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "Haute":
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
          Haute
        </Badge>
      );
    case "Moyenne":
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          Moyenne
        </Badge>
      );
    case "Basse":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          Basse
        </Badge>
      );
    default:
      return <Badge>{priority}</Badge>;
  }
};

export function SchoolNeedsTable() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const [regionFilter, setRegionFilter] = React.useState("all");

  const filteredNeeds = schoolNeeds.filter((need) => {
    const matchesSearch =
      need.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      need.need.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || need.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || need.category === categoryFilter;
    const matchesRegion =
      regionFilter === "all" || need.region === regionFilter;

    return matchesSearch && matchesStatus && matchesCategory && matchesRegion;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Besoins des écoles</CardTitle>
        <CardDescription>
          Gérez et suivez les besoins déclarés par les écoles à travers le pays.
        </CardDescription>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1">
            <Input
              placeholder="Rechercher par école ou besoin..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="En attente">En attente</SelectItem>
                <SelectItem value="Approuvé">Approuvé</SelectItem>
                <SelectItem value="Complété">Complété</SelectItem>
                <SelectItem value="Rejeté">Rejeté</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes catégories</SelectItem>
                <SelectItem value="Infrastructure">Infrastructure</SelectItem>
                <SelectItem value="Matériel">Matériel</SelectItem>
                <SelectItem value="Personnel">Personnel</SelectItem>
              </SelectContent>
            </Select>

            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Région" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes régions</SelectItem>
                <SelectItem value="N'Djamena">N'Djamena</SelectItem>
                <SelectItem value="Logone Occidental">
                  Logone Occidental
                </SelectItem>
                <SelectItem value="Ouaddaï">Ouaddaï</SelectItem>
                <SelectItem value="Moyen-Chari">Moyen-Chari</SelectItem>
                <SelectItem value="Mayo-Kebbi Est">Mayo-Kebbi Est</SelectItem>
                <SelectItem value="Borkou">Borkou</SelectItem>
                <SelectItem value="Logone Oriental">Logone Oriental</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>École</TableHead>
                <TableHead>Région</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Besoin</TableHead>
                <TableHead>Priorité</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredNeeds.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center py-4 text-muted-foreground"
                  >
                    Aucun besoin trouvé
                  </TableCell>
                </TableRow>
              ) : (
                filteredNeeds.map((need) => (
                  <TableRow key={need.id}>
                    <TableCell className="font-medium">{need.school}</TableCell>
                    <TableCell>{need.region}</TableCell>
                    <TableCell>{need.category}</TableCell>
                    <TableCell>{need.need}</TableCell>
                    <TableCell>{getPriorityBadge(need.priority)}</TableCell>
                    <TableCell>{getStatusBadge(need.status)}</TableCell>
                    <TableCell>
                      {new Date(need.date).toLocaleDateString("fr-FR")}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                            Approuver
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Clock className="mr-2 h-4 w-4 text-yellow-600" />
                            Mettre en attente
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <XCircle className="mr-2 h-4 w-4 text-red-600" />
                            Rejeter
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Voir les détails</DropdownMenuItem>
                          <DropdownMenuItem>Modifier</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
