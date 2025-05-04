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
import { Progress } from "@/components/ui/progress";

export const metadata: Metadata = {
  title: "School Needs | Inspector Dashboard",
  description: "Track and manage school needs in your region",
};

export default function InspectorSchoolNeedsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <a href="/dashboard/inspector/schools">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          Besoins des écoles
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des besoins
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">Besoins déclarés</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Urgents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              Besoins prioritaires
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">En cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">56</div>
            <p className="text-xs text-muted-foreground">
              En cours de traitement
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Résolus</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">30</div>
            <p className="text-xs text-muted-foreground">Besoins satisfaits</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Liste des besoins</CardTitle>
              <CardDescription>
                Besoins déclarés par les écoles de la région
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
                <SelectValue placeholder="École" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les écoles</SelectItem>
                <SelectItem value="lycee-national">
                  Lycée National de N'Djamena
                </SelectItem>
                <SelectItem value="college-felix">
                  Collège Félix Éboué
                </SelectItem>
                <SelectItem value="lycee-technique">
                  Lycée Technique Commercial
                </SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Type de besoin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                <SelectItem value="equipment">Équipement</SelectItem>
                <SelectItem value="staff">Personnel</SelectItem>
                <SelectItem value="supplies">Fournitures</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Priorité" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les priorités</SelectItem>
                <SelectItem value="high">Haute</SelectItem>
                <SelectItem value="medium">Moyenne</SelectItem>
                <SelectItem value="low">Basse</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les statuts</SelectItem>
                <SelectItem value="pending">En attente</SelectItem>
                <SelectItem value="in-progress">En cours</SelectItem>
                <SelectItem value="resolved">Résolu</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>École</TableHead>
                <TableHead>Type de besoin</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Priorité</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Progression</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: "NEED-001",
                  school: "Lycée National de N'Djamena",
                  type: "infrastructure",
                  description: "Réparation de 5 salles de classe endommagées",
                  priority: "high",
                  status: "in-progress",
                  progress: 65,
                },
                {
                  id: "NEED-015",
                  school: "Collège Félix Éboué",
                  type: "equipment",
                  description: "20 ordinateurs pour la salle informatique",
                  priority: "medium",
                  status: "pending",
                  progress: 0,
                },
                {
                  id: "NEED-023",
                  school: "École Primaire Centrale",
                  type: "supplies",
                  description: "Manuels scolaires pour 200 élèves",
                  priority: "high",
                  status: "in-progress",
                  progress: 40,
                },
                {
                  id: "NEED-042",
                  school: "Lycée Technique Commercial",
                  type: "staff",
                  description: "2 enseignants de mathématiques",
                  priority: "high",
                  status: "resolved",
                  progress: 100,
                },
                {
                  id: "NEED-056",
                  school: "École Primaire Amtoukoui",
                  type: "infrastructure",
                  description: "Construction de latrines",
                  priority: "medium",
                  status: "in-progress",
                  progress: 30,
                },
              ].map((need) => (
                <TableRow key={need.id}>
                  <TableCell className="font-medium">{need.id}</TableCell>
                  <TableCell>{need.school}</TableCell>
                  <TableCell>
                    {need.type === "infrastructure"
                      ? "Infrastructure"
                      : need.type === "equipment"
                      ? "Équipement"
                      : need.type === "staff"
                      ? "Personnel"
                      : "Fournitures"}
                  </TableCell>
                  <TableCell>{need.description}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        need.priority === "high"
                          ? "destructive"
                          : need.priority === "medium"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {need.priority === "high"
                        ? "Haute"
                        : need.priority === "medium"
                        ? "Moyenne"
                        : "Basse"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        need.status === "pending"
                          ? "outline"
                          : need.status === "in-progress"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {need.status === "pending"
                        ? "En attente"
                        : need.status === "in-progress"
                        ? "En cours"
                        : "Résolu"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={need.progress} className="h-2" />
                      <span className="text-xs text-muted-foreground">
                        {need.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Voir
                      </Button>
                      <Button variant="outline" size="sm">
                        Mettre à jour
                      </Button>
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
