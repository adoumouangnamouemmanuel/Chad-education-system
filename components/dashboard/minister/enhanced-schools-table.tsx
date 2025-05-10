"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  School,
  Users,
  GraduationCap,
  MapPin,
  Building,
  MoreHorizontal,
  ArrowUpDown,
  FileText,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Input } from "@/components/ui/input";

interface EnhancedSchoolsTableProps {
  filters: {
    region: string;
    schoolType: string;
    timeframe: string;
    academicYear: string;
  };
}

interface SchoolData {
  id: string;
  name: string;
  type: string;
  region: string;
  students: number;
  teachers: number;
  classrooms: number;
  successRate: number;
  status: "active" | "needs-attention" | "critical";
}

export function EnhancedSchoolsTable({ filters }: EnhancedSchoolsTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [pageSize, setPageSize] = useState("10");

  // In a real app, these values would be fetched based on the filters
  const schools: SchoolData[] = [
    {
      id: "SCH001",
      name: "Lycée National de N'Djamena",
      type: "Lycée",
      region: "Centre",
      students: 1250,
      teachers: 68,
      classrooms: 42,
      successRate: 82.5,
      status: "active",
    },
    {
      id: "SCH002",
      name: "Collège Félix Éboué",
      type: "Secondaire",
      region: "Centre",
      students: 980,
      teachers: 45,
      classrooms: 32,
      successRate: 78.2,
      status: "active",
    },
    {
      id: "SCH003",
      name: "École Primaire de Moundou",
      type: "Primaire",
      region: "Sud",
      students: 620,
      teachers: 24,
      classrooms: 18,
      successRate: 76.8,
      status: "needs-attention",
    },
    {
      id: "SCH004",
      name: "Lycée Technique d'Abéché",
      type: "Technique",
      region: "Est",
      students: 780,
      teachers: 42,
      classrooms: 28,
      successRate: 74.5,
      status: "active",
    },
    {
      id: "SCH005",
      name: "École Primaire de Faya",
      type: "Primaire",
      region: "Nord",
      students: 420,
      teachers: 16,
      classrooms: 12,
      successRate: 68.9,
      status: "critical",
    },
  ];

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredSchools = schools.filter((school) => {
    return (
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedSchools = [...filteredSchools].sort((a, b) => {
    if (!sortColumn) return 0;

    const aValue = a[sortColumn as keyof SchoolData];
    const bValue = b[sortColumn as keyof SchoolData];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  const getStatusBadge = (status: SchoolData["status"]) => {
    switch (status) {
      case "active":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            Actif
          </Badge>
        );
      case "needs-attention":
        return (
          <Badge
            variant="outline"
            className="bg-amber-50 text-amber-700 border-amber-200"
          >
            Attention requise
          </Badge>
        );
      case "critical":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200"
          >
            Critique
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
    >
      <Card className="border-none shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <School className="h-5 w-5 text-emerald-600" />
              Aperçu des écoles
            </CardTitle>

            <div className="flex flex-wrap items-center gap-2">
              <div className="relative w-full md:w-auto">
                <Input
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-[200px] h-9 pl-8"
                />
                <MapPin className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              <Select value={pageSize} onValueChange={setPageSize}>
                <SelectTrigger className="w-[110px] h-9">
                  <SelectValue placeholder="10 lignes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 lignes</SelectItem>
                  <SelectItem value="10">10 lignes</SelectItem>
                  <SelectItem value="20">20 lignes</SelectItem>
                  <SelectItem value="50">50 lignes</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm" className="h-9">
                <FileText className="h-4 w-4 mr-1" />
                Exporter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableHead className="font-medium">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("name")}
                    >
                      École
                      <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="font-medium">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("type")}
                    >
                      Type
                      <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="font-medium">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("region")}
                    >
                      Région
                      <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="font-medium text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("students")}
                    >
                      Élèves
                      <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="font-medium text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("teachers")}
                    >
                      Enseignants
                      <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="font-medium text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("classrooms")}
                    >
                      Salles
                      <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="font-medium text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("successRate")}
                    >
                      Taux de réussite
                      <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="font-medium">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium"
                      onClick={() => handleSort("status")}
                    >
                      Statut
                      <ArrowUpDown className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedSchools.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={9}
                      className="text-center py-8 text-gray-500"
                    >
                      Aucune école trouvée
                    </TableCell>
                  </TableRow>
                ) : (
                  sortedSchools.map((school, index) => (
                    <motion.tr
                      key={school.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      className="border-b hover:bg-gray-50"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-emerald-100">
                            <Building className="h-4 w-4 text-emerald-700" />
                          </div>
                          <div>
                            <div className="font-medium">{school.name}</div>
                            <div className="text-xs text-gray-500">
                              ID: {school.id}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{school.type}</TableCell>
                      <TableCell>{school.region}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Users className="h-3.5 w-3.5 text-blue-600" />
                          {school.students.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <GraduationCap className="h-3.5 w-3.5 text-purple-600" />
                          {school.teachers}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {school.classrooms}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {school.successRate}%
                      </TableCell>
                      <TableCell>{getStatusBadge(school.status)}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              Voir détails
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </motion.tr>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Affichage de{" "}
              {Math.min(sortedSchools.length, Number.parseInt(pageSize))} sur{" "}
              {sortedSchools.length} écoles
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Précédent
              </Button>
              <Button variant="outline" size="sm" className="bg-gray-50">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                Suivant
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}