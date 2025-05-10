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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  FileText,
  Filter,
  Search,
  XCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const pendingApprovals = [
  {
    id: 1,
    title: "Création d'école primaire",
    location: "Moundou",
    requestedBy: "Inspecteur Régional",
    date: "15/04/2023",
    priority: "high",
    type: "infrastructure",
  },
  {
    id: 2,
    title: "Transfert d'enseignants",
    location: "N'Djamena à Abéché",
    requestedBy: "Directeur d'école",
    date: "12/04/2023",
    priority: "medium",
    type: "personnel",
  },
  {
    id: 3,
    title: "Budget supplémentaire",
    location: "Région du Kanem",
    requestedBy: "Inspecteur Régional",
    date: "10/04/2023",
    priority: "high",
    type: "finance",
  },
  {
    id: 4,
    title: "Fournitures scolaires",
    location: "Sarh",
    requestedBy: "Directeur d'école",
    date: "08/04/2023",
    priority: "medium",
    type: "ressources",
  },
];

export function ApprovalsTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Filter approvals based on search term, priority and type
  const filteredApprovals = pendingApprovals.filter(
    (item) =>
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.requestedBy.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (priorityFilter === "all" || item.priority === priorityFilter) &&
      (typeFilter === "all" || item.type === typeFilter)
  );

  return (
    <div className="grid grid-cols-1 gap-6">
      <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
        <Card className="shadow-lg border-blue-100 dark:border-blue-800">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                  Approbations en attente
                </CardTitle>
                <CardDescription>
                  Demandes nécessitant votre validation
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
                    <SelectItem value="all">Toutes</SelectItem>
                    <SelectItem value="high">Élevée</SelectItem>
                    <SelectItem value="medium">Moyenne</SelectItem>
                    <SelectItem value="low">Basse</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-[123px] h-9">
                    <div className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      <SelectValue placeholder="Type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous</SelectItem>
                    <SelectItem value="infrastructure">
                      Infrastructure
                    </SelectItem>
                    <SelectItem value="personnel">Personnel</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="ressources">Ressources</SelectItem>
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
                      Type de demande
                    </TableHead>
                    <TableHead className="font-medium">Localisation</TableHead>
                    <TableHead className="font-medium">Demandeur</TableHead>
                    <TableHead className="font-medium">Date</TableHead>
                    <TableHead className="font-medium">Priorité</TableHead>
                    <TableHead className="text-right font-medium">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApprovals.length > 0 ? (
                    filteredApprovals.map((item, i) => (
                      <TableRow
                        key={i}
                        className="hover:bg-muted/50 transition-colors"
                      >
                        <TableCell className="font-medium">
                          {item.title}
                        </TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.requestedBy}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              item.priority === "high"
                                ? "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400"
                                : "bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400"
                            }
                          >
                            {item.priority === "high" ? "Élevée" : "Moyenne"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 px-2 text-green-600 shadow-sm hover:shadow"
                            >
                              Approuver
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 px-2 text-red-600 shadow-sm hover:shadow"
                            >
                              Refuser
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        Aucune demande trouvée correspondant aux critères.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t p-4">
            <p className="text-sm text-muted-foreground">
              {filteredApprovals.length > 0
                ? `Affichage de ${filteredApprovals.length} demandes en attente`
                : "Aucune demande correspondant aux critères"}
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/minister/approvals">
                Voir toutes les demandes
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Recent Approvals */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <Card className="shadow-lg border-blue-100 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              Approbations récentes
            </CardTitle>
            <CardDescription>Demandes récemment traitées</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Recrutement de 50 enseignants",
                  date: "15/04/2023",
                  status: "approved",
                  region: "N'Djamena",
                },
                {
                  title: "Budget supplémentaire pour fournitures",
                  date: "12/04/2023",
                  status: "rejected",
                  region: "Logone Occidental",
                },
                {
                  title: "Création d'une nouvelle école primaire",
                  date: "10/04/2023",
                  status: "approved",
                  region: "Mayo-Kebbi",
                },
                {
                  title: "Transfert de 10 enseignants",
                  date: "05/04/2023",
                  status: "approved",
                  region: "Moyen-Chari",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.02)" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        item.status === "approved"
                          ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {item.status === "approved" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <XCircle className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {item.region} • {item.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      item.status === "approved"
                        ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                        : "bg-red-100 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"
                    }
                  >
                    {item.status === "approved" ? "Approuvé" : "Refusé"}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Approval Statistics */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Demandes ce mois",
              value: "42",
              change: "+8",
              icon: <FileText className="h-5 w-5 text-blue-500" />,
            },
            {
              title: "Taux d'approbation",
              value: "78%",
              change: "+5%",
              icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
            },
            {
              title: "Temps de traitement",
              value: "3.2 jours",
              change: "-0.5",
              icon: <Clock className="h-5 w-5 text-amber-500" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted p-2 rounded-full">{stat.icon}</div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <span
                          className={`text-xs font-medium ${
                            stat.change.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}