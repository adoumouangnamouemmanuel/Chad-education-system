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
import { RegionalMap } from "@/components/dashboard/regional-map";

export const metadata: Metadata = {
  title: "Regional Schools | Inspector Dashboard",
  description: "View and manage schools in your region",
};

export default function InspectorSchoolsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Écoles Régionales</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Ajouter une école
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des écoles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              Écoles dans la région
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Écoles primaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">62.5% des écoles</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Écoles secondaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">9</div>
            <p className="text-xs text-muted-foreground">37.5% des écoles</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des élèves
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12,450</div>
            <p className="text-xs text-muted-foreground">Élèves inscrits</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Carte des écoles régionales</CardTitle>
          <CardDescription>
            Distribution des écoles dans la région de N'Djamena
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <RegionalMap />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Liste des écoles</CardTitle>
              <CardDescription>
                Écoles dans la région de N'Djamena
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher une école..."
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
                <TableHead>Type</TableHead>
                <TableHead>Niveau</TableHead>
                <TableHead>Élèves</TableHead>
                <TableHead>Enseignants</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Lycée National de N'Djamena
                </TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Secondaire</TableCell>
                <TableCell>1,245</TableCell>
                <TableCell>78</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Besoins
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Collège Félix Éboué
                </TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Secondaire</TableCell>
                <TableCell>980</TableCell>
                <TableCell>62</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Besoins
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  École Primaire Centrale
                </TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Primaire</TableCell>
                <TableCell>520</TableCell>
                <TableCell>25</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Besoins
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Lycée Technique Commercial
                </TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Secondaire</TableCell>
                <TableCell>750</TableCell>
                <TableCell>45</TableCell>
                <TableCell>
                  <Badge variant="secondary">Rénovation</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Besoins
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  École Primaire Amtoukoui
                </TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Primaire</TableCell>
                <TableCell>380</TableCell>
                <TableCell>18</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Besoins
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
