import type { Metadata } from "next";
import { BarChart3, Download, Filter } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NeedsOverview } from "@/components/dashboard/needs-overview";

export const metadata: Metadata = {
  title: "School Needs | Minister Dashboard",
  description: "View and manage school needs across the education system",
};

export default function SchoolNeedsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Besoins des écoles
        </h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Exporter le rapport
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Besoins en enseignants
            </CardTitle>
            <CardDescription>Total national</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">
              +12% par rapport à l'année dernière
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Besoins en matériel
            </CardTitle>
            <CardDescription>Total national</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3,872</div>
            <p className="text-xs text-muted-foreground">
              +5% par rapport à l'année dernière
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Besoins en infrastructure
            </CardTitle>
            <CardDescription>Total national</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">532</div>
            <p className="text-xs text-muted-foreground">
              -3% par rapport à l'année dernière
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Aperçu des besoins</CardTitle>
              <CardDescription>
                Répartition des besoins par région et catégorie
              </CardDescription>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
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
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">
                <BarChart3 className="mr-2 h-4 w-4" />
                Graphique
              </TabsTrigger>
              <TabsTrigger value="table">
                <Filter className="mr-2 h-4 w-4" />
                Tableau
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chart">
              <div className="h-[400px]">
                <NeedsOverview />
              </div>
            </TabsContent>
            <TabsContent value="table">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Région</TableHead>
                    <TableHead>Enseignants</TableHead>
                    <TableHead>Matériel</TableHead>
                    <TableHead>Infrastructure</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">N'Djamena</TableCell>
                    <TableCell>245</TableCell>
                    <TableCell>872</TableCell>
                    <TableCell>132</TableCell>
                    <TableCell>1,249</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Logone</TableCell>
                    <TableCell>312</TableCell>
                    <TableCell>756</TableCell>
                    <TableCell>98</TableCell>
                    <TableCell>1,166</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Mayo-Kebbi</TableCell>
                    <TableCell>287</TableCell>
                    <TableCell>643</TableCell>
                    <TableCell>112</TableCell>
                    <TableCell>1,042</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ouaddaï</TableCell>
                    <TableCell>198</TableCell>
                    <TableCell>892</TableCell>
                    <TableCell>87</TableCell>
                    <TableCell>1,177</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Kanem</TableCell>
                    <TableCell>203</TableCell>
                    <TableCell>709</TableCell>
                    <TableCell>103</TableCell>
                    <TableCell>1,015</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
