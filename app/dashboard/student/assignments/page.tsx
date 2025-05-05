"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Download,
  FileText,
  Home,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function StudentAssignmentsPage() {
  const [filter, setFilter] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const assignments = [
    {
      id: 1,
      title: "Dissertation sur la littérature africaine",
      subject: "Français",
      dueDate: "15 Mai 2024",
      status: "pending",
      description:
        "Rédiger une dissertation de 3 pages sur l'influence de la littérature africaine dans le monde.",
    },
    {
      id: 2,
      title: "Exercices d'équations différentielles",
      subject: "Mathématiques",
      dueDate: "18 Mai 2024",
      status: "pending",
      description:
        "Résoudre les exercices 1 à 10 du chapitre 5 sur les équations différentielles.",
    },
    {
      id: 3,
      title: "Rapport d'expérience sur la photosynthèse",
      subject: "Biologie",
      dueDate: "20 Mai 2024",
      status: "pending",
      description:
        "Rédiger un rapport détaillé sur l'expérience de photosynthèse réalisée en laboratoire.",
    },
    {
      id: 4,
      title: "Présentation sur la Révolution Française",
      subject: "Histoire",
      dueDate: "10 Mai 2024",
      status: "completed",
      description:
        "Préparer une présentation de 10 minutes sur les causes et conséquences de la Révolution Française.",
    },
    {
      id: 5,
      title: "Traduction de texte anglais",
      subject: "Anglais",
      dueDate: "5 Mai 2024",
      status: "completed",
      description:
        "Traduire le texte 'The Importance of Education' de l'anglais vers le français.",
    },
  ];

  const filteredAssignments =
    filter === "all"
      ? assignments
      : assignments.filter((a) => a.status === filter);

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Breadcrumb */}
      <motion.div
        variants={itemVariants}
        className="flex items-center text-sm text-muted-foreground mb-2"
      >
        <Link
          href="/"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Home className="h-4 w-4 mr-1" />
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link
          href="/dashboard/student"
          className="hover:text-primary transition-colors"
        >
          Tableau de bord
        </Link>
        <span className="mx-2">/</span>
        <span>Devoirs</span>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold tracking-tight">Mes Devoirs</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Devoirs en attente",
            value: assignments
              .filter((a) => a.status === "pending")
              .length.toString(),
            description: "À rendre prochainement",
          },
          {
            title: "Devoirs terminés",
            value: assignments
              .filter((a) => a.status === "completed")
              .length.toString(),
            description: "Ce trimestre",
          },
          {
            title: "Taux de complétion",
            value: `${Math.round(
              (assignments.filter((a) => a.status === "completed").length /
                assignments.length) *
                100
            )}%`,
            description: "Pour ce trimestre",
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Liste des devoirs</CardTitle>
                <CardDescription>
                  Gérez vos devoirs et travaux à rendre
                </CardDescription>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher un devoir..."
                  className="pl-8"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="pending">À faire</TabsTrigger>
                <TabsTrigger value="completed">Terminés</TabsTrigger>
              </TabsList>
              <div className="space-y-4">
                {filteredAssignments.map((assignment) => (
                  <motion.div
                    key={assignment.id}
                    whileHover={{ y: -2 }}
                    className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`assignment-${assignment.id}`}
                          checked={assignment.status === "completed"}
                        />
                        <label
                          htmlFor={`assignment-${assignment.id}`}
                          className={`font-medium ${
                            assignment.status === "completed"
                              ? "line-through text-muted-foreground"
                              : ""
                          }`}
                        >
                          {assignment.title}
                        </label>
                        <Badge
                          variant={
                            assignment.status === "completed"
                              ? "secondary"
                              : "default"
                          }
                        >
                          {assignment.subject}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {assignment.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>À rendre le: {assignment.dueDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>
                            {assignment.status === "completed"
                              ? "Terminé"
                              : "En attente"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Détails
                    </Button>
                  </motion.div>
                ))}
                {filteredAssignments.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucun devoir{" "}
                    {filter === "pending"
                      ? "en attente"
                      : filter === "completed"
                      ? "terminé"
                      : ""}{" "}
                    pour le moment.
                  </div>
                )}
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}