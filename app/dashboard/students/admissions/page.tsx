"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
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
import {
  CheckCircle2,
  Clock,
  Download,
  Filter,
  MoreHorizontal,
  PlusCircle,
  Search,
  XCircle,
} from "lucide-react";
import { useState } from "react";

// Sample data for admissions
const admissions = [
  {
    id: 1,
    student_name: "Abdoulaye Mahamat",
    gender: "Masculin",
    dob: "2010-05-15",
    school: "Lycée National de N'Djamena",
    class: "6ème",
    guardian_name: "Mahamat Ibrahim",
    application_date: "2023-08-10",
    status: "Accepté",
  },
  {
    id: 2,
    student_name: "Fatima Ali",
    gender: "Féminin",
    dob: "2011-03-22",
    school: "Lycée National de N'Djamena",
    class: "6ème",
    guardian_name: "Ali Hassan",
    application_date: "2023-08-12",
    status: "En attente",
  },
  {
    id: 3,
    student_name: "Ibrahim Ousmane",
    gender: "Masculin",
    dob: "2010-11-08",
    school: "Collège d'Enseignement Général de Moundou",
    class: "6ème",
    guardian_name: "Ousmane Abdelkerim",
    application_date: "2023-08-05",
    status: "Accepté",
  },
  {
    id: 4,
    student_name: "Amina Youssouf",
    gender: "Féminin",
    dob: "2011-07-19",
    school: "École Primaire de Sarh",
    class: "CM2",
    guardian_name: "Youssouf Mahamat",
    application_date: "2023-08-15",
    status: "Refusé",
  },
  {
    id: 5,
    student_name: "Hassan Deby",
    gender: "Masculin",
    dob: "2010-09-30",
    school: "Collège Évangélique d'Abéché",
    class: "6ème",
    guardian_name: "Deby Itno",
    application_date: "2023-08-08",
    status: "En attente",
  },
  {
    id: 6,
    student_name: "Mariam Hassane",
    gender: "Féminin",
    dob: "2011-02-14",
    school: "École Primaire de Bongor",
    class: "CM2",
    guardian_name: "Hassane Abakar",
    application_date: "2023-08-20",
    status: "En attente",
  },
];

export default function AdmissionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredAdmissions = admissions.filter(
    (admission) =>
      (admission.student_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        admission.guardian_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) &&
      (statusFilter === "all" || admission.status === statusFilter)
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepté":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "En attente":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300";
      case "Refusé":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Accepté":
        return <CheckCircle2 className="h-4 w-4" />;
      case "En attente":
        return <Clock className="h-4 w-4" />;
      case "Refusé":
        return <XCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admissions</h1>
          <p className="text-muted-foreground">
            Gérez les demandes d'admission des élèves
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nouvelle Admission
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="pending">En attente</TabsTrigger>
            <TabsTrigger value="accepted">Acceptées</TabsTrigger>
            <TabsTrigger value="rejected">Refusées</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Exporter
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filtrer
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher des admissions..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="Accepté">Accepté</SelectItem>
              <SelectItem value="En attente">En attente</SelectItem>
              <SelectItem value="Refusé">Refusé</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="all">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Toutes les Admissions</CardTitle>
              <CardDescription>
                Liste de toutes les demandes d'admission
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Élève</TableHead>
                    <TableHead>École</TableHead>
                    <TableHead>Classe</TableHead>
                    <TableHead>Tuteur</TableHead>
                    <TableHead>Date de demande</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAdmissions.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        Aucune admission trouvée.
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredAdmissions.map((admission) => (
                      <TableRow key={admission.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {admission.student_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">
                                {admission.student_name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {admission.gender},{" "}
                                {new Date().getFullYear() -
                                  new Date(admission.dob).getFullYear()}{" "}
                                ans
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{admission.school}</TableCell>
                        <TableCell>{admission.class}</TableCell>
                        <TableCell>{admission.guardian_name}</TableCell>
                        <TableCell>
                          {new Date(
                            admission.application_date
                          ).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(admission.status)}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(admission.status)}
                              {admission.status}
                            </span>
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                Voir les détails
                              </DropdownMenuItem>
                              <DropdownMenuItem>Modifier</DropdownMenuItem>
                              {admission.status === "En attente" && (
                                <>
                                  <DropdownMenuItem>Accepter</DropdownMenuItem>
                                  <DropdownMenuItem>Refuser</DropdownMenuItem>
                                </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Admissions en Attente</CardTitle>
              <CardDescription>
                Demandes d'admission en attente de décision
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Élève</TableHead>
                    <TableHead>École</TableHead>
                    <TableHead>Classe</TableHead>
                    <TableHead>Tuteur</TableHead>
                    <TableHead>Date de demande</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAdmissions
                    .filter((admission) => admission.status === "En attente")
                    .map((admission) => (
                      <TableRow key={admission.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {admission.student_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">
                                {admission.student_name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {admission.gender},{" "}
                                {new Date().getFullYear() -
                                  new Date(admission.dob).getFullYear()}{" "}
                                ans
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{admission.school}</TableCell>
                        <TableCell>{admission.class}</TableCell>
                        <TableCell>{admission.guardian_name}</TableCell>
                        <TableCell>
                          {new Date(
                            admission.application_date
                          ).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(admission.status)}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(admission.status)}
                              {admission.status}
                            </span>
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm" variant="outline">
                              <XCircle className="mr-1 h-3 w-3" />
                              Refuser
                            </Button>
                            <Button size="sm">
                              <CheckCircle2 className="mr-1 h-3 w-3" />
                              Accepter
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accepted">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Admissions Acceptées</CardTitle>
              <CardDescription>
                Demandes d'admission qui ont été acceptées
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Élève</TableHead>
                    <TableHead>École</TableHead>
                    <TableHead>Classe</TableHead>
                    <TableHead>Tuteur</TableHead>
                    <TableHead>Date de demande</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAdmissions
                    .filter((admission) => admission.status === "Accepté")
                    .map((admission) => (
                      <TableRow key={admission.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {admission.student_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">
                                {admission.student_name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {admission.gender},{" "}
                                {new Date().getFullYear() -
                                  new Date(admission.dob).getFullYear()}{" "}
                                ans
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{admission.school}</TableCell>
                        <TableCell>{admission.class}</TableCell>
                        <TableCell>{admission.guardian_name}</TableCell>
                        <TableCell>
                          {new Date(
                            admission.application_date
                          ).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(admission.status)}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(admission.status)}
                              {admission.status}
                            </span>
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Voir les détails
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected">
          <Card>
            <CardHeader className="p-4">
              <CardTitle>Admissions Refusées</CardTitle>
              <CardDescription>
                Demandes d'admission qui ont été refusées
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Élève</TableHead>
                    <TableHead>École</TableHead>
                    <TableHead>Classe</TableHead>
                    <TableHead>Tuteur</TableHead>
                    <TableHead>Date de demande</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAdmissions
                    .filter((admission) => admission.status === "Refusé")
                    .map((admission) => (
                      <TableRow key={admission.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {admission.student_name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">
                                {admission.student_name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {admission.gender},{" "}
                                {new Date().getFullYear() -
                                  new Date(admission.dob).getFullYear()}{" "}
                                ans
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{admission.school}</TableCell>
                        <TableCell>{admission.class}</TableCell>
                        <TableCell>{admission.guardian_name}</TableCell>
                        <TableCell>
                          {new Date(
                            admission.application_date
                          ).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(admission.status)}>
                            <span className="flex items-center gap-1">
                              {getStatusIcon(admission.status)}
                              {admission.status}
                            </span>
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Voir les détails
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
