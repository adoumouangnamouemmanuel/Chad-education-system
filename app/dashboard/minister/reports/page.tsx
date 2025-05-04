import type { Metadata } from "next";
import { Download, FileText, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export const metadata: Metadata = {
  title: "Reports | Minister Dashboard",
  description: "View and generate reports for the education system",
};

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Rapports</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Imprimer
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Générer un rapport</CardTitle>
          <CardDescription>
            Sélectionnez les paramètres pour générer un rapport personnalisé
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select defaultValue="performance">
              <SelectTrigger>
                <SelectValue placeholder="Type de rapport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="performance">
                  Performance académique
                </SelectItem>
                <SelectItem value="enrollment">Inscriptions</SelectItem>
                <SelectItem value="resources">Ressources</SelectItem>
                <SelectItem value="teachers">Enseignants</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
              </SelectContent>
            </Select>
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
                <SelectValue placeholder="Niveau scolaire" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                <SelectItem value="primary">Primaire</SelectItem>
                <SelectItem value="middle">Collège</SelectItem>
                <SelectItem value="high">Lycée</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="2023">
              <SelectTrigger>
                <SelectValue placeholder="Année scolaire" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023-2024</SelectItem>
                <SelectItem value="2022">2022-2023</SelectItem>
                <SelectItem value="2021">2021-2022</SelectItem>
                <SelectItem value="2020">2020-2021</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="mt-4">
            <FileText className="mr-2 h-4 w-4" />
            Générer le rapport
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rapports récents</CardTitle>
          <CardDescription>
            Liste des rapports générés récemment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre du rapport</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date de génération</TableHead>
                <TableHead>Région</TableHead>
                <TableHead>Année</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  Rapport de performance nationale
                </TableCell>
                <TableCell>Performance</TableCell>
                <TableCell>05/04/2025</TableCell>
                <TableCell>Toutes</TableCell>
                <TableCell>2023-2024</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Rapport d'inscriptions - N'Djamena
                </TableCell>
                <TableCell>Inscriptions</TableCell>
                <TableCell>03/04/2025</TableCell>
                <TableCell>N'Djamena</TableCell>
                <TableCell>2023-2024</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Rapport des ressources scolaires
                </TableCell>
                <TableCell>Ressources</TableCell>
                <TableCell>01/04/2025</TableCell>
                <TableCell>Toutes</TableCell>
                <TableCell>2023-2024</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Rapport des enseignants - Logone
                </TableCell>
                <TableCell>Enseignants</TableCell>
                <TableCell>28/03/2025</TableCell>
                <TableCell>Logone</TableCell>
                <TableCell>2023-2024</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Printer className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Rapport d'infrastructure scolaire
                </TableCell>
                <TableCell>Infrastructure</TableCell>
                <TableCell>25/03/2025</TableCell>
                <TableCell>Toutes</TableCell>
                <TableCell>2023-2024</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Printer className="h-4 w-4" />
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