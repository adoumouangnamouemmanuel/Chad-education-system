"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  BarChart3,
  Bell,
  Building2,
  Calendar,
  Download,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PlusCircle,
  RefreshCw,
  School,
  Search,
  Settings,
  Users,
} from "lucide-react";
import { SchoolProfile } from "@/components/dashboard/school-profile";
import { TeachersOverview } from "@/components/dashboard/teachers-overview";
import { StudentsOverview } from "@/components/dashboard/students-overview";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import Link from "next/link";

// Sample data for charts
const attendanceData = [
  { name: "Lun", present: 95, absent: 5 },
  { name: "Mar", present: 92, absent: 8 },
  { name: "Mer", present: 88, absent: 12 },
  { name: "Jeu", present: 94, absent: 6 },
  { name: "Ven", present: 90, absent: 10 },
];

const performanceData = [
  { subject: "Mathématiques", schoolAvg: 14.2, regionalAvg: 13.1 },
  { subject: "Français", schoolAvg: 13.8, regionalAvg: 12.5 },
  { subject: "Physique", schoolAvg: 12.9, regionalAvg: 11.8 },
  { subject: "Chimie", schoolAvg: 13.5, regionalAvg: 12.2 },
  { subject: "Biologie", schoolAvg: 14.1, regionalAvg: 13.0 },
  { subject: "Histoire", schoolAvg: 13.2, regionalAvg: 12.7 },
];

const recentActivities = [
  {
    id: 1,
    user: "Mme. Fatima",
    action: "a soumis les notes du trimestre pour la classe de 3ème A",
    time: "Il y a 2 heures",
    avatar: "FT",
  },
  {
    id: 2,
    user: "M. Ibrahim",
    action: "a signalé une absence pour la classe de Terminale D",
    time: "Il y a 4 heures",
    avatar: "IB",
  },
  {
    id: 3,
    user: "Mme. Aisha",
    action: "a programmé une réunion des parents pour le 15 mai",
    time: "Hier",
    avatar: "AI",
  },
  {
    id: 4,
    user: "M. Moussa",
    action: "a demandé des fournitures supplémentaires pour le laboratoire",
    time: "Il y a 2 jours",
    avatar: "MM",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Réunion des enseignants",
    date: "10 mai 2023",
    time: "14:00",
    location: "Salle de conférence",
  },
  {
    id: 2,
    title: "Réunion des parents",
    date: "15 mai 2023",
    time: "16:00",
    location: "Auditorium",
  },
  {
    id: 3,
    title: "Examen de fin d'année",
    date: "1 juin 2023",
    time: "08:00",
    location: "Toutes les salles",
  },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82ca9d",
];

export default function DirectorDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const statCards = [
    {
      title: "Total Élèves",
      value: "1,234",
      icon: <GraduationCap className="h-5 w-5" />,
      change: "+12",
      color: "blue",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      title: "Total Enseignants",
      value: "45",
      icon: <Users className="h-5 w-5" />,
      change: "+2",
      color: "green",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "Salles de Classe",
      value: "28",
      icon: <Building2 className="h-5 w-5" />,
      change: "+0",
      color: "purple",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      title: "Besoins Urgents",
      value: "3",
      icon: <AlertTriangle className="h-5 w-5" />,
      change: "-1",
      color: "amber",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
  ];

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Tableau de Bord du Directeur
          </h1>
          <p className="text-muted-foreground">
            Bienvenue, Directeur. Voici un aperçu de votre école.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-[200px] pl-8 rounded-lg bg-background"
            />
          </div>
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
        {statCards.map((stat, index) => (
          <motion.div key={stat.title} variants={itemVariants}>
            <Card
              className="overflow-hidden border-t-4"
              style={{ borderTopColor: `var(--${stat.color}-600)` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div
                    className={`p-2 rounded-full ${stat.bgColor} ${stat.textColor}`}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Performance Académique</CardTitle>
                <CardDescription>
                  Comparaison des moyennes par matière
                </CardDescription>
              </div>
              <Select defaultValue="current">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Période" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Trimestre Actuel</SelectItem>
                  <SelectItem value="previous">Trimestre Précédent</SelectItem>
                  <SelectItem value="year">Année Complète</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={performanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[0, 20]} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="schoolAvg"
                      name="Moyenne de l'École"
                      fill="#3b82f6"
                    />
                    <Bar
                      dataKey="regionalAvg"
                      name="Moyenne Régionale"
                      fill="#10b981"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle>Présence Hebdomadaire</CardTitle>
              <CardDescription>Taux de présence des élèves</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={attendanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="present"
                      name="Présents (%)"
                      stroke="#3b82f6"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="absent"
                      name="Absents (%)"
                      stroke="#ef4444"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Activités Récentes</CardTitle>
                <CardDescription>
                  Dernières actions des enseignants et du personnel
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                Voir tout
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-4"
                  >
                    <Avatar>
                      <AvatarFallback>{activity.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        <span className="font-semibold">{activity.user}</span>{" "}
                        {activity.action}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Événements à Venir</CardTitle>
                <CardDescription>
                  Calendrier des prochains événements
                </CardDescription>
              </div>
              <Button variant="ghost" size="icon">
                <Calendar className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col space-y-1 rounded-lg border p-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{event.title}</h4>
                      <Badge variant="outline">{event.date}</Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3.5 w-3.5" />
                      {event.time}
                      <MapPin className="ml-3 mr-1 h-3.5 w-3.5" />
                      {event.location}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Tabs defaultValue="teachers">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="teachers" className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Enseignants
              </TabsTrigger>
              <TabsTrigger value="students" className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4" />
                Élèves
              </TabsTrigger>
              <TabsTrigger value="school" className="flex items-center">
                <School className="mr-2 h-4 w-4" />
                École
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Rapports
              </Button>
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Ajouter
              </Button>
            </div>
          </div>
          <TabsContent value="teachers">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Aperçu des Enseignants</CardTitle>
                  <CardDescription>
                    Gérez le personnel enseignant de votre école
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <TeachersOverview />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="students">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Aperçu des Élèves</CardTitle>
                  <CardDescription>
                    Gérez les élèves de votre école
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <StudentsOverview />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="school">
            <Card>
              <CardHeader>
                <CardTitle>Profil de l'École</CardTitle>
                <CardDescription>
                  Aperçu des informations et de l'infrastructure de votre école
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SchoolProfile />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div variants={itemVariants} className="fixed bottom-8 right-8">
        <div className="flex flex-col gap-2">
          <Button
            size="icon"
            className="rounded-full h-12 w-12 shadow-lg bg-blue-600 hover:bg-blue-700"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Link href="/dashboard/director/settings">
            <Button size="icon" className="rounded-full h-12 w-12 shadow-lg">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
