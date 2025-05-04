"use client";

import { NeedsOverview } from "@/components/dashboard/needs-overview";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { RegionalMap } from "@/components/dashboard/regional-map";
import { SchoolsTable } from "@/components/dashboard/schools-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  Building2,
  Download,
  GraduationCap,
  MapPin,
  RefreshCw,
  Users,
} from "lucide-react";

export default function MinisterDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Tableau de bord du Ministre
          </h1>
          <p className="text-muted-foreground">
            Bienvenue, Monsieur le Ministre. Voici un aperçu du système éducatif
            national.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualiser
          </Button>
          <Button variant="outline" size="sm" className="h-9">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Écoles",
            value: "5,234",
            icon: <Building2 className="h-5 w-5" />,
            change: "+12",
            color: "blue",
          },
          {
            title: "Enseignants",
            value: "24,567",
            icon: <Users className="h-5 w-5" />,
            change: "+89",
            color: "green",
          },
          {
            title: "Élèves",
            value: "487,932",
            icon: <GraduationCap className="h-5 w-5" />,
            change: "+1,243",
            color: "purple",
          },
          {
            title: "Besoins Urgents",
            value: "128",
            icon: <AlertTriangle className="h-5 w-5" />,
            change: "-5",
            color: "amber",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div
                    className={`p-2 rounded-full bg-${stat.color}-100 text-${stat.color}-600`}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span
                    className={`font-medium ${
                      stat.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    depuis le mois dernier
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Distribution Régionale
              </CardTitle>
              <CardDescription>
                Distribution des écoles à travers les régions du Tchad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegionalMap />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance Nationale
              </CardTitle>
              <CardDescription>
                Performance moyenne des élèves par région
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceChart />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Tabs defaultValue="schools">
          <TabsList className="mb-4">
            <TabsTrigger value="schools">Écoles</TabsTrigger>
            <TabsTrigger value="needs">Besoins Urgents</TabsTrigger>
          </TabsList>
          <TabsContent value="schools">
            <Card>
              <CardHeader>
                <CardTitle>Aperçu des Écoles</CardTitle>
                <CardDescription>
                  Informations récemment mises à jour sur les écoles à travers
                  le pays
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SchoolsTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="needs">
            <Card>
              <CardHeader>
                <CardTitle>Besoins Urgents</CardTitle>
                <CardDescription>
                  Écoles avec des besoins critiques en infrastructure et
                  ressources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NeedsOverview />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
