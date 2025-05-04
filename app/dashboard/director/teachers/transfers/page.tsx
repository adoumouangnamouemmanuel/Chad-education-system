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
  title: "Teacher Transfers | Director Dashboard",
  description: "Manage teacher transfers for your school",
};

export default function DirectorTeacherTransfersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <a href="/dashboard/director/teachers">
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
            <div className="text-3xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              Cette année scolaire
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Transferts entrants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">Enseignants reçus</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Transferts sortants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Enseignants partis</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">En attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Demandes à traiter</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Demandes de transfert</CardTitle>
              <CardDescription>
                Gérer les transferts d'enseignants pour votre école
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
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="incoming">Entrants</SelectItem>
                <SelectItem value="outgoing">Sortants</SelectItem>
              </SelectContent>
            </Select>
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
                <TableHead>Enseignant</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>École concernée</TableHead>
                <TableHead>Matière</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "TTR-2023-001",
                  teacher: "Dr. Moussa Ali",
                  type: "outgoing",
                  school: "Lycée de Moundou",
                  subject: "Mathématiques",
                  status: "pending",
                },
                {
                  id: "TTR-2023-015",
                  teacher: "Mme. Fatou Deby",
                  type: "incoming",
                  school: "École Primaire de Sarh",
                  subject: "Français",
                  status: "approved",
                },
                {
                  id: "TTR-2023-023",
                  teacher: "M. Jean Ndoubayo",
                  type: "incoming",
                  school: "Collège de l'Avenir",
                  subject: "Histoire-Géographie",
                  status: "rejected",
                },
                {
                  id: "TTR-2023-042",
                  teacher: "Mme. Marie Abakar",
                  type: "outgoing",
                  school: "École Primaire Central",
                  subject: "Sciences",
                  status: "pending",
                },
                {
                  id: "TTR-2023-056",
                  teacher: "M. Hassan Ibrahim",
                  type: "outgoing",
                  school: "Lycée de Bongor",
                  subject: "Physique-Chimie",
                  status: "approved",
                },
              ].map((transfer) => (
                <TableRow key={transfer.id}>
                  <TableCell className="font-medium">{transfer.id}</TableCell>
                  <TableCell>{transfer.teacher}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        transfer.type === "incoming" ? "outline" : "secondary"
                      }
                    >
                      {transfer.type === "incoming" ? "Entrant" : "Sortant"}
                    </Badge>
                  </TableCell>
                  <TableCell>{transfer.school}</TableCell>
                  <TableCell>{transfer.subject}</TableCell>
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
