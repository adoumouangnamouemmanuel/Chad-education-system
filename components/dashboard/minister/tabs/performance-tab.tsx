"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  RegionalPerformanceChart,
  TeacherQualificationChart,
} from "@/components/dashboard/minister/performance-charts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PerformanceTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("all");

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const topSchools = [
    {
      name: "Lycée National",
      region: "N'Djamena",
      type: "Public",
      rate: "92%",
      progress: "+3.2%",
    },
    {
      name: "Collège Évangélique",
      region: "Moundou",
      type: "Privé",
      rate: "89%",
      progress: "+2.5%",
    },
    {
      name: "Lycée Félix Éboué",
      region: "N'Djamena",
      type: "Public",
      rate: "87%",
      progress: "+4.1%",
    },
    {
      name: "Institut La Rochelle",
      region: "Sarh",
      type: "Privé",
      rate: "85%",
      progress: "+1.8%",
    },
    {
      name: "Lycée de Bongor",
      region: "Mayo-Kebbi",
      type: "Public",
      rate: "83%",
      progress: "+5.2%",
    },
  ];

  // Filter schools based on search term and region
  const filteredSchools = topSchools.filter(
    (school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (regionFilter === "all" || school.region === regionFilter)
  );

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regional Performance Comparison */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <RegionalPerformanceChart />
        </motion.div>

        {/* Teacher Qualifications */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <TeacherQualificationChart />
        </motion.div>
      </div>

      {/* Performance Metrics */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Taux d'achèvement",
              value: "62.7%",
              change: "+1.8%",
              description: "Cycle primaire",
              color: "blue",
            },
            {
              title: "Taux d'abandon",
              value: "8.3%",
              change: "-0.5%",
              description: "Tous niveaux",
              color: "green",
            },
            {
              title: "Parité filles/garçons",
              value: "0.92",
              change: "+0.03",
              description: "Indice de parité",
              color: "purple",
            },
          ].map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </h3>
                  <div className="mt-2 flex items-baseline">
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <span
                      className={`ml-2 text-sm font-medium ${
                        metric.change.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {metric.description}
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span>Progression</span>
                      <span className="font-medium">
                        {Number.parseInt(metric.value) + 15}%
                      </span>
                    </div>
                    <Progress
                      value={Number.parseInt(metric.value) + 15}
                      className={`h-1.5 bg-${metric.color}-100`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Schools Table */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <Card className="shadow-lg border-blue-100 dark:border-blue-800">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <CardTitle>Écoles les plus performantes</CardTitle>
                <CardDescription>
                  Top 5 des établissements avec les meilleurs résultats
                </CardDescription>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher..."
                    className="pl-8 h-9 w-[180px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                  <SelectTrigger className="w-[140px] h-9">
                    <div className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      <SelectValue placeholder="Région" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les régions</SelectItem>
                    <SelectItem value="N'Djamena">N'Djamena</SelectItem>
                    <SelectItem value="Moundou">Moundou</SelectItem>
                    <SelectItem value="Sarh">Sarh</SelectItem>
                    <SelectItem value="Mayo-Kebbi">Mayo-Kebbi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-medium">
                      Nom de l'école
                    </TableHead>
                    <TableHead className="font-medium">Région</TableHead>
                    <TableHead className="font-medium">Type</TableHead>
                    <TableHead className="text-right font-medium">
                      Taux de réussite
                    </TableHead>
                    <TableHead className="text-right font-medium">
                      Progression
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSchools.length > 0 ? (
                    filteredSchools.map((school, i) => (
                      <TableRow
                        key={i}
                        className="hover:bg-muted/50 transition-colors"
                      >
                        <TableCell className="font-medium">
                          {school.name}
                        </TableCell>
                        <TableCell>{school.region}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              school.type === "Public"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-purple-50 text-purple-700"
                            }
                          >
                            {school.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {school.rate}
                        </TableCell>
                        <TableCell className="text-right text-green-600">
                          {school.progress}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        Aucune école trouvée.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t p-4">
            <p className="text-sm text-muted-foreground">
              {filteredSchools.length > 0
                ? `Affichage de ${filteredSchools.length} écoles sur 5,234`
                : "Aucune école correspondant aux critères"}
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/minister/schools">
                Voir toutes les écoles
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}