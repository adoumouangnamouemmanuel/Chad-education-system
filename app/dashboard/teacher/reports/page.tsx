"use client";

import {
  Download,
  FileText,
  Printer,
  Search,
  ArrowLeft,
  BarChart2,
  Calendar,
  Filter,
  PieChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
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
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TeacherReportsClientPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/teacher"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Retour au Tableau de Bord</span>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-blue-900 dark:text-blue-50">
              Rapports
            </h1>
            <p className="text-muted-foreground">
              Générez et consultez les rapports de vos classes
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          >
            <Printer className="mr-2 h-4 w-4 text-blue-600" />
            Imprimer
          </Button>
          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
            <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              Générer un rapport
            </CardTitle>
            <CardDescription>
              Sélectionnez les paramètres pour générer un rapport
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select defaultValue="grades">
                <SelectTrigger className="rounded-lg border-blue-200 focus:ring-blue-500">
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
                <SelectTrigger className="rounded-lg border-blue-200 focus:ring-blue-500">
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
                <SelectTrigger className="rounded-lg border-blue-200 focus:ring-blue-500">
                  <SelectValue placeholder="Période" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="t1">1er Trimestre</SelectItem>
                  <SelectItem value="t2">2ème Trimestre</SelectItem>
                  <SelectItem value="t3">3ème Trimestre</SelectItem>
                  <SelectItem value="year">Année complète</SelectItem>
                </SelectContent>
              </Select>
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                Générer
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Card className="border-blue-100 dark:border-blue-900 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-blue-900 dark:text-blue-50 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  Rapports récents
                </CardTitle>
                <CardDescription>
                  Rapports générés au cours des 30 derniers jours
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Rechercher un rapport..."
                    className="pl-8 rounded-full border-blue-200 focus:ring-blue-500"
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                >
                  <Filter className="h-4 w-4 text-blue-600" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Tabs defaultValue="grades">
              <TabsList className="grid grid-cols-4 mb-8 p-1 bg-blue-50 dark:bg-blue-900 rounded-full w-full sm:w-auto">
                <TabsTrigger
                  value="grades"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Notes</span>
                </TabsTrigger>
                <TabsTrigger
                  value="attendance"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">Présence</span>
                </TabsTrigger>
                <TabsTrigger
                  value="performance"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <BarChart2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Performance</span>
                </TabsTrigger>
                <TabsTrigger
                  value="summary"
                  className="flex items-center gap-1.5 data-[state=active]:bg-white dark:data-[state=active]:bg-blue-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-200 rounded-full"
                >
                  <PieChart className="h-4 w-4" />
                  <span className="hidden sm:inline">Résumés</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="grades">
                <div className="rounded-lg border border-blue-100 dark:border-blue-800 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-blue-50 dark:bg-blue-900/50">
                      <TableRow>
                        <TableHead>Nom du rapport</TableHead>
                        <TableHead>Classe</TableHead>
                        <TableHead>Période</TableHead>
                        <TableHead>Date de création</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-500" />
                            <span>Notes Terminale A - T1</span>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                              Nouveau
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>Terminale A</TableCell>
                        <TableCell>1er Trimestre</TableCell>
                        <TableCell>
                          {new Date().toLocaleDateString("fr-FR")}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                            >
                              <Download className="h-4 w-4 text-blue-600" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                            >
                              <Printer className="h-4 w-4 text-blue-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-500" />
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
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                            >
                              <Download className="h-4 w-4 text-blue-600" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                            >
                              <Printer className="h-4 w-4 text-blue-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="attendance">
                <div className="rounded-lg border border-blue-100 dark:border-blue-800 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-blue-50 dark:bg-blue-900/50">
                      <TableRow>
                        <TableHead>Nom du rapport</TableHead>
                        <TableHead>Classe</TableHead>
                        <TableHead>Période</TableHead>
                        <TableHead>Date de création</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-500" />
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
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                            >
                              <Download className="h-4 w-4 text-blue-600" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                            >
                              <Printer className="h-4 w-4 text-blue-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="performance">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <BarChart2 className="h-16 w-16 text-blue-200 mb-4" />
                  <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                    Aucun rapport de performance récent
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Générez un rapport de performance pour visualiser les
                    tendances et les progrès des élèves
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    Créer un rapport de performance
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="summary">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <PieChart className="h-16 w-16 text-blue-200 mb-4" />
                  <h3 className="text-lg font-medium text-blue-900 dark:text-blue-50 mb-2">
                    Aucun rapport de résumé récent
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">
                    Générez un rapport de résumé pour obtenir une vue d'ensemble
                    des performances de la classe
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    Créer un rapport de résumé
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="bg-blue-50 dark:bg-blue-900/50 p-4 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Affichage de 3 rapports sur 3
            </div>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
              <FileText className="mr-2 h-4 w-4" />
              Tous les rapports
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
