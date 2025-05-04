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
import Link from "next/link";

export const metadata: Metadata = {
  title: "Students | Director Dashboard",
  description: "Manage students in your school",
};

export default function DirectorStudentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Élèves</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
          <Button asChild>
            <Link href="/dashboard/director/students/add">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un élève
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des élèves
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">Élèves inscrits</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Garçons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">680</div>
            <p className="text-xs text-muted-foreground">54.6% des élèves</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Filles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">565</div>
            <p className="text-xs text-muted-foreground">45.4% des élèves</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Taux de présence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Moyenne mensuelle</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Liste des élèves</CardTitle>
              <CardDescription>
                Gérez les élèves du Lycée National de N'Djamena
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher un élève..."
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
                <TableHead>Classe</TableHead>
                <TableHead>Genre</TableHead>
                <TableHead>Âge</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Abakar, Ibrahim</TableCell>
                <TableCell>STD-2023-001</TableCell>
                <TableCell>Terminale A</TableCell>
                <TableCell>M</TableCell>
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
                      Modifier
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Deby, Fatima</TableCell>
                <TableCell>STD-2023-042</TableCell>
                <TableCell>Terminale D</TableCell>
                <TableCell>F</TableCell>
                <TableCell>17</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mahamat, Ali</TableCell>
                <TableCell>STD-2023-078</TableCell>
                <TableCell>1ère C</TableCell>
                <TableCell>M</TableCell>
                <TableCell>16</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ousmane, Hawa</TableCell>
                <TableCell>STD-2023-125</TableCell>
                <TableCell>2nde A</TableCell>
                <TableCell>F</TableCell>
                <TableCell>15</TableCell>
                <TableCell>
                  <Badge variant="destructive">Absent</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Modifier
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Youssouf, Moussa</TableCell>
                <TableCell>STD-2023-189</TableCell>
                <TableCell>2nde C</TableCell>
                <TableCell>M</TableCell>
                <TableCell>16</TableCell>
                <TableCell>
                  <Badge variant="default">Actif</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      Modifier
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