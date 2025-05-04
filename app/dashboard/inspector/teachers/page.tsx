import type { Metadata } from "next";
import { Download, Plus, Search } from "lucide-react";
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
import { TeachersOverview } from "@/components/dashboard/teachers-overview";

export const metadata: Metadata = {
  title: "Regional Teachers | Inspector Dashboard",
  description: "View and manage teachers in your region",
};

export default function InspectorTeachersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Enseignants Régionaux
        </h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Ajouter un enseignant
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des enseignants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">685</div>
            <p className="text-xs text-muted-foreground">
              Enseignants dans la région
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Hommes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">425</div>
            <p className="text-xs text-muted-foreground">62% des enseignants</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Femmes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">260</div>
            <p className="text-xs text-muted-foreground">38% des enseignants</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Ratio élèves/enseignant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">18:1</div>
            <p className="text-xs text-muted-foreground">Moyenne régionale</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Aperçu des enseignants</CardTitle>
          <CardDescription>
            Distribution des enseignants par matière et niveau
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <TeachersOverview />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Liste des enseignants</CardTitle>
              <CardDescription>
                Enseignants dans la région de N'Djamena
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher un enseignant..."
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>ID</TableHead>
                <TableHead>École</TableHead>
                <TableHead>Matière</TableHead>
                <TableHead>Expérience</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Dr. Abdoulaye, Hassan
                </TableCell>
                <TableCell>TCH-001</TableCell>
                <TableCell>Lycée National de N'Djamena</TableCell>
                <TableCell>Mathématiques</TableCell>
                <TableCell>15 ans</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Évaluer
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Mme. Khadija, Moussa
                </TableCell>
                <TableCell>TCH-015</TableCell>
                <TableCell>Lycée National de N'Djamena</TableCell>
                <TableCell>Français</TableCell>
                <TableCell>8 ans</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Évaluer
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">M. Ibrahim, Saleh</TableCell>
                <TableCell>TCH-023</TableCell>
                <TableCell>Lycée National de N'Djamena</TableCell>
                <TableCell>Physique-Chimie</TableCell>
                <TableCell>12 ans</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Évaluer
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mme. Fatima, Deby</TableCell>
                <TableCell>TCH-042</TableCell>
                <TableCell>Collège Félix Éboué</TableCell>
                <TableCell>Anglais</TableCell>
                <TableCell>5 ans</TableCell>
                <TableCell>
                  <Badge variant="secondary">Congé</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Évaluer
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">M. Mahamat, Ali</TableCell>
                <TableCell>TCH-056</TableCell>
                <TableCell>Lycée National de N'Djamena</TableCell>
                <TableCell>Histoire-Géographie</TableCell>
                <TableCell>10 ans</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Évaluer
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
