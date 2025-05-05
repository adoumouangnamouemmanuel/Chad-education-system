// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Textarea } from "@/components/ui/textarea"
// import { Switch } from "@/components/ui/switch"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
// import { Progress } from "@/components/ui/progress"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
// import { Building2, Calendar, Check, Edit2, FileText, GraduationCap, Home, Mail, MapPin, Phone, School, Settings, User, Users, Award, BookOpen, Briefcase, Clock, Download, Share2, Star } from 'lucide-react'
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip as RechartsTooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   LineChart,
//   Line,
// } from "recharts"
// import Link from "next/link"

// // Sample data for charts
// const performanceData = [
//   { subject: "Mathématiques", schoolAvg: 14.2, regionalAvg: 13.1 },
//   { subject: "Français", schoolAvg: 13.8, regionalAvg: 12.5 },
//   { subject: "Physique", schoolAvg: 12.9, regionalAvg: 11.8 },
//   { subject: "Chimie", schoolAvg: 13.5, regionalAvg: 12.2 },
//   { subject: "Biologie", schoolAvg: 14.1, regionalAvg: 13.0 },
//   { subject: "Histoire", schoolAvg: 13.2, regionalAvg: 12.7 },
// ]

// const studentDistributionData = [
//   { name: "6ème", value: 120 },
//   { name: "5ème", value: 110 },
//   { name: "4ème", value: 105 },
//   { name: "3ème", value: 95 },
//   { name: "2nde", value: 85 },
//   { name: "1ère", value: 75 },
//   { name: "Terminale", value: 65 },
// ]

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d", "#ffc658"]

// export default function DirectorProfilePage() {
//   const [isEditing, setIsEditing] = useState(false)
//   const [progress, setProgress] = useState(0)

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 24,
//       },
//     },
//   }

//   // Simulate progress bar loading
//   useState(() => {
//     const timer = setTimeout(() => setProgress(100), 500)
//     return () => clearTimeout(timer)
//   });

//   return (
//     <TooltipProvider>
//       <div className="container mx-auto py-6 space-y-8">
//         <motion.div
//           className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div>
//             <div className="flex items-center text-sm text-muted-foreground mb-2">
//               <Link href="/dashboard/director" className="flex items-center hover:text-blue-600 transition-colors">
//                 <Home className="h-4 w-4 mr-1" />
//                 Tableau de bord
//               </Link>
//               <span className="mx-2">/</span>
//               <span>Profil du Directeur</span>
//             </div>
//             <h1 className="text-3xl font-bold tracking-tight">Profil du Directeur</h1>
//             <p className="text-muted-foreground">
//               Gérez vos informations personnelles et les paramètres d'administration de l'école
//             </p>
//           </div>
//           <Button onClick={() => setIsEditing(!isEditing)}>
//             {isEditing ? (
//               <>
//                 <Check className="mr-2 h-4 w-4" /> Enregistrer
//               </>
//             ) : (
//               <>
//                 <Edit2 className="mr-2 h-4 w-4" /> Modifier le profil
//               </>
//             )}
//           </Button>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <motion.div
//             className="md:col-span-1"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div variants={itemVariants}>
//               <Card className="overflow-hidden">
//                 <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-400"></div>
//                 <CardContent className="p-6 -mt-12 relative"></CardContent>
//                     <div className="absolute right-6 top-0">
//                       <Badge className="bg-green-500 hover:bg-green-600">Actif</Badge>
//                     </div>
//                     <motion.div
//                       initial={{ scale: 0.8, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
//                     >
//                       <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
//                         <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Director" />
//                         <AvatarFallback className="text-2xl bg-blue-600 text-white">HD</AvatarFallback>
//                       </Avatar>
//                     </motion.div>
//                     <div className="mt-4 space-y-2">
//                       <h2 className="text-2xl font-bold">Hassan Deby</h2>
//                       <p className="text-muted-foreground">Directeur d'École</p>
//                       <div className="flex items-center text-sm text-muted-foreground">
//                         <School className="mr-1 h-4 w-4" />
//                         Lycée National de N'Djamena
//                       </div>
//                     </div>
  
//                     <Separator className="my-4" />
  
//                     <div className="space-y-3">
//                     <div className="space-y-3">
//                       <div className="flex items-center">
//                         <Mail className="h-4 w-4 mr-2 text-blue-600" />
//                         <span className="text-sm">hassan.deby@education.td</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Phone className="h-4 w-4 mr-2 text-blue-600" />
//                         <span className="text-sm">+235 66 XX XX XX</span>
//                       </div>
//                       <div className="flex items-center">
//                         <MapPin className="h-4 w-4 mr-2 text-blue-600" />
//                         <span className="text-sm">N'Djamena, Tchad</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Calendar className="h-4 w-4 mr-2 text-blue-600" />
//                         <span className="text-sm">Nommé: Septembre 2019</span>
//                       </div>
//                     </div>
  
//                     <Separator className="my-4" />
  
//                     <div className="space-y-3">
//                       <h3 className="font-medium">Statistiques de l'École</h3>
//                       <div className="grid grid-cols-2 gap-2 text-center">
//                         <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
//                           <div className="flex justify-center">
//                             <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
//                           </div>
//                           <div className="mt-1 font-semibold">1,234</div>
//                           <div className="text-xs text-muted-foreground">Élèves</div>
//                         </div>
//                         <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
//                           <div className="flex justify-center">
//                             <GraduationCap className="h-5 w-5 text-green-600 dark:text-green-400" />
//                           </div>
//                           <div className="mt-1 font-semibold">45</div>
//                           <div className="text-xs text-muted-foreground">Enseignants</div>
//                         </div>
//                         <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-lg">
//                           <div className="flex justify-center">
//                             <Building2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
//                           </div>
//                           <div className="mt-1 font-semibold">28</div>
//                           <div className="text-xs text-muted-foreground">Salles de classe</div>
//                         </div>
//                         <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-lg">
//                           <div className="flex justify-center">
//                             <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400" />
//                           </div>
//                           <div className="mt-1 font-semibold">7</div>
//                           <div className="text-xs text-muted-foreground">Niveaux</div>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                     </div>
//               </Card>
//             </motion.div>

//             <motion.div variants={itemVariants} className="mt-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-lg">Compétences et Qualifications</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span>Administration Scolaire</span>
//                       <span className="text-muted-foreground">Expert</span>
//                     </div>
//                     <Progress value={95} className="h-2" />
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span>Gestion du Personnel</span>
//                       <span className="text-muted-foreground">Avancé</span>
//                     </div>
//                     <Progress value={85} className="h-2" />
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span>Planification Stratégique</span>
//                       <span className="text-muted-foreground">Avancé</span>
//                     </div>
//                     <Progress value={80} className="h-2" />
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex justify-between text-sm">
//                       <span>Gestion Financière</span>
//                       <span className="text-muted-foreground">Intermédiaire</span>
//                     </div>
//                     <Progress value={70} className="h-2" />
//                   </div>

//                   <Separator className="my-2" />

//                   <div className="space-y-2">
//                     <h4 className="text-sm font-medium">Certifications</h4>
//                     <div className="flex flex-wrap gap-2">
//                       <Badge variant="secondary">Master en Administration Éducative</Badge>
//                       <Badge variant="secondary">Licence en Mathématiques</Badge>
//                       <Badge variant="secondary">Administrateur Scolaire Certifié</Badge>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="md:col-span-2"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.div variants={itemVariants}>
//               <Tabs defaultValue="personal" className="w-full">
//                 <TabsList className="grid grid-cols-4 mb-8">
//                   <TabsTrigger value="personal" className="flex items-center gap-2">
//                     <User className="h-4 w-4" />
//                     <span className="hidden sm:inline">Personnel</span>
//                   </TabsTrigger>
//                   <TabsTrigger value="school" className="flex items-center gap-2">
//                     <School className="h-4 w-4" />
//                     <span className="hidden sm:inline">École</span>
//                   </TabsTrigger>
//                   <TabsTrigger value="performance" className="flex items-center gap-2">
//                     <GraduationCap className="h-4 w-4" />
//                     <span className="hidden sm:inline">Performance</span>
//                   </TabsTrigger>
//                   <TabsTrigger value="settings" className="flex items-center gap-2">
//                     <Settings className="h-4 w-4" />
//                     <span className="hidden sm:inline">Paramètres</span>
//                   </TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="personal">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Informations Personnelles</CardTitle>
//                       <CardDescription>
//                         Mettez à jour vos informations personnelles et coordonnées
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                           <Label htmlFor="fullName">Nom Complet</Label>
//                           <Input
//                             id="fullName"
//                             defaultValue="Hassan Deby"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="title">Titre Officiel</Label>
//                           <Input
//                             id="title"
//                             defaultValue="Directeur d'École"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="email">Adresse Email</Label>
//                           <Input
//                             id="email"
//                             type="email"
//                             defaultValue="hassan.deby@education.td"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="phone">Numéro de Téléphone</Label>
//                           <Input
//                             id="phone"
//                             defaultValue="+235 66 XX XX XX"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="appointmentDate">Date de Nomination</Label>
//                           <Input
//                             id="appointmentDate"
//                             type="date"
//                             defaultValue="2019-09-01"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="location">Localisation</Label>
//                           <Input
//                             id="location"
//                             defaultValue="N'Djamena, Tchad"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="bio">Biographie</Label>
//                         <Textarea
//                           id="bio"
//                           rows={5}
//                           defaultValue="Hassan Deby est directeur du Lycée National de N'Djamena depuis septembre 2019. Avec plus de 15 ans d'expérience dans l'éducation, il a mis en œuvre plusieurs améliorations clés de l'infrastructure et des programmes académiques de l'école. Sous sa direction, l'école s'est constamment classée parmi les 5 premières du pays pour ses performances académiques. M. Deby est titulaire d'un Master en Administration Éducative de l'Université de N'Djamena."
//                           disabled={!isEditing}
//                           className="resize-none"
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="qualifications">Qualifications</Label>
//                         <div className="flex flex-wrap gap-2">
//                           <Badge variant="secondary">Master en Administration Éducative</Badge>
//                           <Badge variant="secondary">Licence en Mathématiques</Badge>
//                           <Badge variant="secondary">Administrateur Scolaire Certifié</Badge>
//                           {isEditing && (
//                             <Button variant="outline" size="sm">
//                               + Ajouter une qualification
//                             </Button>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                     {isEditing && (
//                       <CardFooter className="flex justify-between border-t p-4">
//                         <Button variant="outline">Annuler</Button>
//                         <Button>Enregistrer les modifications</Button>
//                       </CardFooter>
//                     )}
//                   </Card>
//                 </TabsContent>

//                 <TabsContent value="school">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Informations de l'École</CardTitle>
//                       <CardDescription>
//                         Gérez les détails de votre école et les informations administratives
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-6">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div className="space-y-2">
//                           <Label htmlFor="schoolName">Nom de l'École</Label>
//                           <Input
//                             id="schoolName"
//                             defaultValue="Lycée National de N'Djamena"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="schoolCode">Code de l'École</Label>
//                           <Input
//                             id="schoolCode"
//                             defaultValue="LYC-NDJ-001"
//                             disabled={true}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="schoolType">Type d'École</Label>
//                           <Input
//                             id="schoolType"
//                             defaultValue="École Secondaire Publique"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="foundedYear">Année de Fondation</Label>
//                           <Input
//                             id="foundedYear"
//                             defaultValue="1965"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="schoolAddress">Adresse de l'École</Label>
//                           <Input
//                             id="schoolAddress"
//                             defaultValue="Avenue Charles de Gaulle, N'Djamena"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="schoolPhone">Téléphone de l'École</Label>
//                           <Input
//                             id="schoolPhone"
//                             defaultValue="+235 22 XX XX XX"
//                             disabled={!isEditing}
//                           />
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="schoolDescription">Description de l'École</Label>
//                         <Textarea
//                           id="schoolDescription"
//                           rows={4}
//                           defaultValue="Le Lycée National de N'Djamena est l'une des plus anciennes et prestigieuses écoles secondaires du Tchad. Fondée en 1965, elle possède une riche histoire d'excellence académique et a formé de nombreux anciens élèves remarquables qui occupent aujourd'hui des postes de direction dans le gouvernement, les entreprises et le milieu universitaire. L'école propose un programme complet de la 6ème à la Terminale, avec des spécialisations en sciences, littérature et économie."
//                           disabled={!isEditing}
//                           className="resize-none"
//                         />
//                       </div>

//                       <Separator />

//                       <div className="space-y-4">
//                         <h3 className="text-lg font-medium">Répartition des Élèves</h3>
//                         <div className="h-80">
//                           <ResponsiveContainer width="100%" height="100%">
//                             <PieChart>
//                               <Pie
//                                 data={studentDistributionData}
//                                 cx="50%"
//                                 cy="50%"
//                                 labelLine={false}
//                                 label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                                 outerRadius={80}
//                                 fill="#8884d8"
//                                 dataKey="value"
//                               >
//                                 {studentDistributionData.map((entry, index) => (
//                                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                 ))}
//                               </Pie>
//                               <RechartsTooltip />
//                             </PieChart>
//                           </ResponsiveContainer>
//                         </div>
//                       </div>

//                       <Separator />

//                       <div className="space-y-4">
//                         <h3 className="text-lg font-medium">Installations Scolaires</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           <div className="flex items-center space-x-2">
//                             <Switch id="library" checked={true} disabled={!isEditing} />
//                             <Label htmlFor="library">Bibliothèque</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <Switch id="computerLab" checked={true} disabled={!isEditing} />
//                             <Label htmlFor="computerLab">Laboratoire Informatique</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <Switch id="scienceLab" checked={true} disabled={!isEditing} />
//                             <Label htmlFor="scienceLab">Laboratoire Scientifique</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <Switch id="sportsField" checked={true} disabled={!isEditing} />
//                             <Label htmlFor="sportsField">Terrain de Sport</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <Switch id="cafeteria" checked={false} disabled={!isEditing} />
//                             <Label htmlFor="cafeteria">Cafétéria</Label>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <Switch id="auditorium" checked={false} disabled={!isEditing} />
//                             <Label htmlFor="auditorium">Auditorium</Label>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                     {isEditing && (
//                       <CardFooter className="flex justify-between border-t p-4">
//                         <Button variant="outline">Annuler</Button>
//                         <Button>Enregistrer les modifications</Button>
//                       </CardFooter>
//                     )}
//                   </Card>
//                 </TabsContent>

//                 <TabsContent value="performance">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Performance de l'École</CardTitle>
//                       <CardDescription>
//                         Suivez les performances académiques et les métriques de votre école
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-6">
//                       <div className="space-y-4">
//                         <h3 className="text-lg font-medium">Performance Académique par Matière</h3>
//                         <div className="h-80">
//                           <ResponsiveContainer width="100%" height="100%">
//                             <BarChart
//                               data={performanceData}
//                               margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                             >
//                               <CartesianGrid strokeDasharray="3 3" />
//                               <XAxis dataKey="subject" />
//                               <YAxis domain={[0, 20]} />
//                               <RechartsTooltip />
//                               <Legend />
//                               <Bar dataKey="schoolAvg" name="Moyenne de l'École" fill="#3b82f6" />
//                               <Bar dataKey="regionalAvg" name="Moyenne Régionale" fill="#10b981" />
//                             </BarChart>
//                           </ResponsiveContainer>
//                         </div>
//                       </div>

//                       <Separator />

//                       <div className="space-y-4">
//                         <h3 className="text-lg font-medium">Résultats aux Examens Nationaux</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                           <Card className="bg-blue-50 dark:bg-blue-950">
//                             <CardContent className="p-4 text-center">
//                               <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">92%</div>
//                               <div className="text-sm text-muted-foreground">Taux de Réussite au BAC</div>
//                             </CardContent>
//                           </Card>
//                           <Card className="bg-green-50 dark:bg-green-950">
//                             <CardContent className="p-4 text-center">
//                               <div className="text-3xl font-bold text-green-600 dark:text-green-400">85%</div>
//                               <div className="text-sm text-muted-foreground">Taux de Réussite au BEPC</div>
//                             </CardContent>
//                           </Card>
//                           <Card className="bg-purple-50 dark:bg-purple-950">
//                             <CardContent className="p-4 text-center">
//                               <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3ème</div>
//                               <div className="text-sm text-muted-foreground">Classement National</div>
//                             </CardContent>
//                           </Card>
//                         </div>
//                       </div>

//                       <Separator />

//                       <div className="space-y-4">
//                         <h3 className="text-lg font-medium">Tendances de Performance</h3>
//                         <div className="space-y-3">
//                           <div className="bg-muted p-4 rounded-lg">
//                             <div className="flex justify-between items-start">
//                               <div>
//                                 <div className="font-medium">Année Académique 2022-2023</div>
//                                 <div className="text-sm text-muted-foreground">
//                                   Performance globale de l'école améliorée de 5%
//                                 </div>
//                                 <div className="text-sm mt-1">
//                                   <span className="font-medium">Classement National:</span> 3ème
//                                 </div>
//                               </div>
//                               <Badge className="bg-green-500">Amélioré</Badge>
//                             </div>
//                           </div>
//                           <div className="bg-muted p-4 rounded-lg">
//                             <div className="flex justify-between items-start">
//                               <div>
//                                 <div className="font-medium">Année Académique 2021-2022</div>
//                                 <div className="text-sm text-muted-foreground">
//                                   Performance globale de l'école stable
//                                 </div>
//                                 <div className="text-sm mt-1">
//                                   <span className="font-medium">Classement National:</span> 5ème
//                                 </div>
//                               </div>
//                               <Badge variant="outline">Stable</Badge>
//                             </div>
//                           </div>
//                           <div className="bg-muted p-4 rounded-lg">
//                             <div className="flex justify-between items-start">
//                               <div>
//                                 <div className="font-medium">Année Académique 2020-2021</div>
//                                 <div className="text-sm text-muted-foreground">
//                                   Performance globale de l'école améliorée de 3%
//                                 </div>
//                                 <div className="text-sm mt-1">
//                                   <span className="font-medium">Classement National:</span> 5ème
//                                 </div>
//                               </div>
//                               <Badge className="bg-green-500">Amélioré</Badge>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </TabsContent>

//                 <TabsContent value="settings">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Paramètres Administratifs</CardTitle>
//                       <CardDescription>
//                         Gérez la sécurité de votre compte et vos préférences administratives
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-6">
//                       <div className="space-y-4">
//                         <h3 className="text-lg font-medium">Sécurité du Compte</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           <div className="space-y-2">
//                             <Label htmlFor="currentPassword">Mot de Passe Actuel</Label>
//                             <Input
//                               id="currentPassword"
//                               type="password"
//                               disabled={!isEditing}
//                               placeholder="••••••••"
//                             />
//                           </div>
//                           <div></div>
//                           <div className="space-y-2">
//                             <Label htmlFor="newPassword">Nouveau Mot de Passe</Label>
//                             <Input
//                               id="newPassword"
//                               type="password"
//                               disabled={!isEditing}
//                               placeholder="••••••••"
//                             />
//                           </div>
//                           <div className="space-y-2">
//                             <Label htmlFor="confirmPassword">Confirmer le Nouveau Mot de Passe</Label>
//                             <Input
//                               id="confirmPassword"
//                               type="password"
//                               disabled={!isEditing}
//                               placeholder="••••••••"
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <Separator />

//                       <div className="space-y-4">
//                         <h3 className="text-lg font-medium">Préférences de Notification</h3>
//                         <div className="space-y-3">
//                           <div className="flex items-center justify-between">
//                             <div className="space-y-0.5">
//                               <div className="font-medium">Notifications par Email</div>
//                               <div className="text-sm text-muted-foreground">
//                                 Recevoir des mises à jour importantes par email
//                               </div>
//                             </div>
//                             <Switch checked={true} disabled={!isEditing} />
//                           </div>
//                           <div className="flex items-center justify-between">
//                             <div className="space-y-0.5">
//                               <div className="font-medium">Alertes SMS</div>
//                               <div className="text-sm text-muted-foreground">
//                                 Recevoir des notifications urgentes par SMS
//                               </div>
//                             </div>
//                             <Switch checked={true} disabled={!isEditing} />
//                           </div>
//                           <div className="flex items-center justify-between">
//                             <div className="space-y-0.5">
//                               <div className="font-medium">Mises à jour des Enseignants</div>
//                               <div className="text-sm text-muted-foreground">
//                                 Recevoir des notifications sur les activités des enseignants
//                               </div>
//                             </div>
//                             <Switch checked={true} disabled={!isEditing} />
//                           </div>
//                           <div className="flex items-center justify-between">
//                             <div className="space-y-0.5">
//                               <div className="font-medium">Mises à jour des Élèves</div>
//                               <div className="text-sm text-muted-foreground">
//                                 Recevoir des notifications sur les activités des élèves
//                               </div>
//                             </div>
//                             <Switch checked={false} disabled={!isEditing} />
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                     {isEditing && (
//                       <CardFooter className="flex justify-between border-t p-4">
//                         <Button variant="outline">Annuler</Button>
//                         <Button>Enregistrer les modifications</Button>
//                       </CardFooter>
//                     )}
//                   </Card>
//                 </TabsContent>
//               </Tabs>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </TooltipProvider>
//   )
// }