import type { Metadata } from "next";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PerformanceChart } from "@/components/dashboard/performance-chart";

export const metadata: Metadata = {
  title: "Performance | Minister Dashboard",
  description: "View educational performance metrics across the system",
};

export default function PerformancePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Performance</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Exporter les données
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Taux de réussite
            </CardTitle>
            <CardDescription>Moyenne nationale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">68.4%</div>
            <p className="text-xs text-muted-foreground">
              +2.3% par rapport à l'année dernière
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Taux d'abandon
            </CardTitle>
            <CardDescription>Moyenne nationale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12.7%</div>
            <p className="text-xs text-muted-foreground">
              -1.5% par rapport à l'année dernière
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Ratio élèves/enseignant
            </CardTitle>
            <CardDescription>Moyenne nationale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42:1</div>
            <p className="text-xs text-muted-foreground">
              -3 par rapport à l'année dernière
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Taux d'alphabétisation
            </CardTitle>
            <CardDescription>Moyenne nationale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">58.2%</div>
            <p className="text-xs text-muted-foreground">
              +3.7% par rapport à l'année dernière
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Tendances de performance</CardTitle>
              <CardDescription>
                Analyse des indicateurs clés de performance par région
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select defaultValue="success">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Indicateur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="success">Taux de réussite</SelectItem>
                  <SelectItem value="dropout">Taux d'abandon</SelectItem>
                  <SelectItem value="ratio">Ratio élèves/enseignant</SelectItem>
                  <SelectItem value="literacy">
                    Taux d'alphabétisation
                  </SelectItem>
                </SelectContent>
              </Select>
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
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <PerformanceChart />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comparaison régionale</CardTitle>
          <CardDescription>
            Comparaison des performances entre les différentes régions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="success">
            <TabsList className="mb-4">
              <TabsTrigger value="success">Taux de réussite</TabsTrigger>
              <TabsTrigger value="dropout">Taux d'abandon</TabsTrigger>
              <TabsTrigger value="ratio">Ratio élèves/enseignant</TabsTrigger>
              <TabsTrigger value="literacy">Taux d'alphabétisation</TabsTrigger>
            </TabsList>
            <TabsContent value="success">
              <div className="h-[300px]">
                <PerformanceChart />
              </div>
            </TabsContent>
            <TabsContent value="dropout">
              <div className="h-[300px]">
                <PerformanceChart />
              </div>
            </TabsContent>
            <TabsContent value="ratio">
              <div className="h-[300px]">
                <PerformanceChart />
              </div>
            </TabsContent>
            <TabsContent value="literacy">
              <div className="h-[300px]">
                <PerformanceChart />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
