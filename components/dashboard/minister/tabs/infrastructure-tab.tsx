"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { AlertTriangle, Building2, Filter, Search, Wrench } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

// Sample data for charts
const infrastructureNeedsData = [
  { name: "Salles de classe", value: 35, color: "#0088FE" },
  { name: "Mobilier", value: 25, color: "#00C49F" },
  { name: "Sanitaires", value: 15, color: "#FFBB28" },
  { name: "Matériel pédagogique", value: 15, color: "#FF8042" },
  { name: "Rénovation", value: 10, color: "#8884d8" },
];

export function InfrastructureTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
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

  const urgentNeeds = [
    {
      school: "École Primaire de Koumra",
      region: "Moyen-Chari",
      need: "Toiture endommagée",
      urgency: "Critique",
    },
    {
      school: "Collège de Mao",
      region: "Kanem",
      need: "Manque d'enseignants",
      urgency: "Élevée",
    },
    {
      school: "Lycée de Bongor",
      region: "Mayo-Kebbi",
      need: "Sanitaires défectueux",
      urgency: "Moyenne",
    },
    {
      school: "École Primaire d'Abéché",
      region: "Ouaddaï",
      need: "Manque de mobilier",
      urgency: "Élevée",
    },
    {
      school: "Collège de Doba",
      region: "Logone Oriental",
      need: "Murs fissurés",
      urgency: "Critique",
    },
  ];

  // Filter needs based on search term, priority and region
  const filteredNeeds = urgentNeeds.filter(
    (item) =>
      item.school.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (priorityFilter === "all" || item.urgency === priorityFilter) &&
      (regionFilter === "all" || item.region === regionFilter)
  );

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Infrastructure Needs */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="h-full shadow-lg border-blue-100 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-blue-500" />
                Besoins en Infrastructure
              </CardTitle>
              <CardDescription>
                Répartition des besoins signalés par les écoles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={infrastructureNeedsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      animationBegin={0}
                      animationDuration={1500}
                    >
                      {infrastructureNeedsData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          stroke="#fff"
                          strokeWidth={2}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #e2e8f0",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Infrastructure Projects */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full shadow-lg border-blue-100 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-blue-500" />
                Projets d'Infrastructure
              </CardTitle>
              <CardDescription>
                État d'avancement des projets en cours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Construction de 500 salles de classe",
                    region: "National",
                    progress: 65,
                    status: "En cours",
                  },
                  {
                    name: "Rénovation de 200 écoles",
                    region: "Zones rurales",
                    progress: 42,
                    status: "En cours",
                  },
                  {
                    name: "Installation de points d'eau",
                    region: "Régions du Nord",
                    progress: 78,
                    status: "En cours",
                  },
                  {
                    name: "Équipement informatique",
                    region: "Lycées urbains",
                    progress: 90,
                    status: "Presque terminé",
                  },
                  {
                    name: "Construction de sanitaires",
                    region: "National",
                    progress: 35,
                    status: "En cours",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="space-y-2 p-3 rounded-lg transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-sm">{project.name}</h4>
                        <p className="text-xs text-muted-foreground">
                          {project.region}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          project.progress >= 90
                            ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                            : "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progression</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress
                        value={project.progress}
                        className={`h-2 ${
                          project.progress >= 90
                            ? "bg-green-500"
                            : project.progress >= 50
                            ? "bg-blue-500"
                            : "bg-amber-500"
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <Button
                variant="outline"
                className="w-full shadow-sm hover:shadow"
                asChild
              >
                <Link href="/dashboard/minister/infrastructure">
                  Voir tous les projets
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Urgent Needs */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <Card className="shadow-lg border-blue-100 dark:border-blue-800">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Besoins Urgents
                </CardTitle>
                <CardDescription>
                  Écoles nécessitant une intervention prioritaire
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
                <Select
                  value={priorityFilter}
                  onValueChange={setPriorityFilter}
                >
                  <SelectTrigger className="w-[140px] h-9">
                    <div className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      <SelectValue placeholder="Priorité" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les priorités</SelectItem>
                    <SelectItem value="Critique">Critique</SelectItem>
                    <SelectItem value="Élevée">Élevée</SelectItem>
                    <SelectItem value="Moyenne">Moyenne</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                  <SelectTrigger className="w-[140px] h-9">
                    <div className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      <SelectValue placeholder="Région" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les régions</SelectItem>
                    <SelectItem value="Moyen-Chari">Moyen-Chari</SelectItem>
                    <SelectItem value="Kanem">Kanem</SelectItem>
                    <SelectItem value="Mayo-Kebbi">Mayo-Kebbi</SelectItem>
                    <SelectItem value="Ouaddaï">Ouaddaï</SelectItem>
                    <SelectItem value="Logone Oriental">
                      Logone Oriental
                    </SelectItem>
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
                    <TableHead className="font-medium">École</TableHead>
                    <TableHead className="font-medium">Région</TableHead>
                    <TableHead className="font-medium">
                      Type de besoin
                    </TableHead>
                    <TableHead className="font-medium">Urgence</TableHead>
                    <TableHead className="text-right font-medium">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredNeeds.length > 0 ? (
                    filteredNeeds.map((item, i) => (
                      <TableRow
                        key={i}
                        className="hover:bg-muted/50 transition-colors"
                      >
                        <TableCell className="font-medium">
                          {item.school}
                        </TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.need}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              item.urgency === "Critique"
                                ? "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400"
                                : item.urgency === "Élevée"
                                ? "bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400"
                                : "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
                            }
                          >
                            {item.urgency}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            className="shadow-sm hover:shadow"
                          >
                            Détails
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        Aucun besoin trouvé correspondant aux critères.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t p-4">
            <p className="text-sm text-muted-foreground">
              {filteredNeeds.length > 0
                ? `Affichage de ${filteredNeeds.length} besoins urgents sur 128`
                : "Aucun besoin correspondant aux critères"}
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/minister/schools/needs">
                Voir tous les besoins
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}