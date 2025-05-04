import type { Metadata } from "next";
import { Download, FileText, Printer, Search } from "lucide-react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Reports | Teacher Dashboard",
  description: "Generate and view reports",
};

export default function TeacherReportsPage() {
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
            Sélectionnez les paramètres pour générer un rapport
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select defaultValue="grades">
              <SelectTrigger>
                <SelectValue placeholder="Type de rapport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grades">Notes</SelectItem>
                <SelectItem value="attendance">Présence</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="summary">Résumé de classe</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="terminale-a">
              <SelectTrigger>
                <SelectValue placeholder="Classe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="terminale-a">Terminale A</SelectItem>
                <SelectItem value="terminale-d">Terminale D</SelectItem>
                <SelectItem value="1ere-c">1ère C</SelectItem>
                <SelectItem value="2nde-a">2nde A</SelectItem>
                <SelectItem value="2nde-c">2nde C</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="t1">
              <SelectTrigger>
                <SelectValue placeholder="Période" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="t1">1er Trimestre</SelectItem>
                <SelectItem value="t2">2ème Trimestre</SelectItem>
                <SelectItem value="t3">3ème Trimestre</SelectItem>
                <SelectItem value="year">Année complète</SelectItem>
              </SelectContent>
            </Select>
            <Button>Générer</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Rapports récents</CardTitle>
              <CardDescription>
                Rapports générés au cours des 30 derniers jours
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher un rapport..."
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="grades">
            <TabsList className="mb-4">
              <TabsTrigger value="grades">Notes</TabsTrigger>
              <TabsTrigger value="attendance">Présence</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="summary">Résumés</TabsTrigger>
            </TabsList>
            <TabsContent value="grades">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom du rapport</TableHead>
                    <TableHead>Classe</TableHead>
                    <TableHead>Période</TableHead>
                    <TableHead>Date de création</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Notes Terminale A - T1</span>
                      </div>
                    </TableCell>
                    <TableCell>Terminale A</TableCell>
                    <TableCell>1er Trimestre</TableCell>
                    <TableCell>
                      {new Date().toLocaleDateString("fr-FR")}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Notes 1ère C - T1</span>
                      </div>
                    </TableCell>
                    <TableCell>1ère C</TableCell>
                    <TableCell>1er Trimestre</TableCell>
                    <TableCell>
                      {new Date(
                        Date.now() - 2 * 24 * 60 * 60 * 1000
                      ).toLocaleDateString("fr-FR")}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="attendance">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom du rapport</TableHead>
                    <TableHead>Classe</TableHead>
                    <TableHead>Période</TableHead>
                    <TableHead>Date de création</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Présence Terminale A - Mensuel</span>
                      </div>
                    </TableCell>
                    <TableCell>Terminale A</TableCell>
                    <TableCell>Novembre 2023</TableCell>
                    <TableCell>
                      {new Date(
                        Date.now() - 5 * 24 * 60 * 60 * 1000
                      ).toLocaleDateString("fr-FR")}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="performance">
              <div className="text-center py-8 text-muted-foreground">
                Aucun rapport de performance récent
              </div>
            </TabsContent>
            <TabsContent value="summary">
              <div className="text-center py-8 text-muted-foreground">
                Aucun rapport de résumé récent
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
