import type { Metadata } from "next";
import { Download, Search } from "lucide-react";
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
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Regional Performance | Inspector Dashboard",
  description: "View and analyze regional academic performance",
};

export default function InspectorPerformancePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Performance Régionale
        </h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Taux de réussite
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">72.5%</div>
            <p className="text-xs text-muted-foreground">
              +1.8% par rapport à l'année précédente
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Taux d'abandon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8.2%</div>
            <p className="text-xs text-muted-foreground">
              -0.5% par rapport à l'année précédente
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Moyenne régionale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">13.4/20</div>
            <p className="text-xs text-muted-foreground">
              +0.3 par rapport à l'année précédente
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Classement national
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2ème</div>
            <p className="text-xs text-muted-foreground">Sur 23 régions</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sélectionner les paramètres</CardTitle>
          <CardDescription>
            Choisissez les paramètres pour analyser la performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les niveaux</SelectItem>
                <SelectItem value="primary">Primaire</SelectItem>
                <SelectItem value="secondary">Secondaire</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="2023">
              <SelectTrigger>
                <SelectValue placeholder="Année" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tendances de performance</CardTitle>
          <CardDescription>
            Évolution de la performance académique sur les 5 dernières années
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <PerformanceChart />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Classement des écoles</CardTitle>
              <CardDescription>
                Performance des écoles dans la région de N'Djamena
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
                <TableHead>Rang</TableHead>
                <TableHead>École</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Niveau</TableHead>
                <TableHead>Taux de réussite</TableHead>
                <TableHead>Moyenne</TableHead>
                <TableHead>Tendance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>Lycée National de N'Djamena</TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Secondaire</TableCell>
                <TableCell>78.5%</TableCell>
                <TableCell>14.2/20</TableCell>
                <TableCell>
                  <Badge variant="default">↑ 2.3%</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell>Collège Félix Éboué</TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Secondaire</TableCell>
                <TableCell>75.2%</TableCell>
                <TableCell>13.8/20</TableCell>
                <TableCell>
                  <Badge variant="default">↑ 1.5%</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3</TableCell>
                <TableCell>École Primaire Centrale</TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Primaire</TableCell>
                <TableCell>82.1%</TableCell>
                <TableCell>14.5/20</TableCell>
                <TableCell>
                  <Badge variant="default">↑ 0.8%</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">4</TableCell>
                <TableCell>Lycée Technique Commercial</TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Secondaire</TableCell>
                <TableCell>68.7%</TableCell>
                <TableCell>12.9/20</TableCell>
                <TableCell>
                  <Badge variant="secondary">↓ 0.5%</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">5</TableCell>
                <TableCell>École Primaire Amtoukoui</TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Primaire</TableCell>
                <TableCell>79.3%</TableCell>
                <TableCell>13.6/20</TableCell>
                <TableCell>
                  <Badge variant="default">↑ 1.2%</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
