"use client";
import { motion } from "framer-motion";
import { Download, Search, Home } from "lucide-react";
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
import { StudentGrades } from "@/components/dashboard/student-grades";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function StudentGradesPage() {
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
        <span>Mes Notes</span>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between"
      >
        <h1 className="text-3xl font-bold tracking-tight">Mes Notes</h1>
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
            title: "Moyenne générale",
            value: "14.5/20",
            description: "1er Trimestre 2023-2024",
          },
          {
            title: "Meilleure matière",
            value: "16/20",
            description: "Français",
          },
          {
            title: "Rang de classe",
            value: "8/42",
            description: "Terminale A",
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
            <CardTitle>Sélectionner une période</CardTitle>
            <CardDescription>
              Choisissez le trimestre pour voir vos notes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select defaultValue="t1">
                <SelectTrigger>
                  <SelectValue placeholder="Trimestre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="t1">1er Trimestre</SelectItem>
                  <SelectItem value="t2">2ème Trimestre</SelectItem>
                  <SelectItem value="t3">3ème Trimestre</SelectItem>
                  <SelectItem value="year">Année complète</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Matière" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les matières</SelectItem>
                  <SelectItem value="math">Mathématiques</SelectItem>
                  <SelectItem value="french">Français</SelectItem>
                  <SelectItem value="physics">Physique-Chimie</SelectItem>
                  <SelectItem value="english">Anglais</SelectItem>
                  <SelectItem value="history">Histoire-Géographie</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Notes du 1er Trimestre</CardTitle>
                <CardDescription>Année scolaire 2023-2024</CardDescription>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher une matière..."
                  className="pl-8"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">Toutes les matières</TabsTrigger>
                <TabsTrigger value="tests">Contrôles</TabsTrigger>
                <TabsTrigger value="exams">Examens</TabsTrigger>
                <TabsTrigger value="projects">Projets</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <StudentGrades />
              </TabsContent>
              <TabsContent value="tests">
                <div className="text-center py-8 text-muted-foreground">
                  Sélectionnez une matière pour voir les notes des contrôles
                </div>
              </TabsContent>
              <TabsContent value="exams">
                <div className="text-center py-8 text-muted-foreground">
                  Sélectionnez une matière pour voir les notes des examens
                </div>
              </TabsContent>
              <TabsContent value="projects">
                <div className="text-center py-8 text-muted-foreground">
                  Sélectionnez une matière pour voir les notes des projets
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
