import { SchoolProfile } from "@/components/dashboard/school-profile";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  Download,
  Edit,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Profile | Director Dashboard",
  description: "View and manage your school profile",
};

export default function DirectorSchoolProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Profil de l'école</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Modifier
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Lycée National de N'Djamena</CardTitle>
            <CardDescription>École secondaire publique</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p>Avenue Charles de Gaulle</p>
                  <p>N'Djamena, Tchad</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p>+235 22 52 46 79</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p>lycee.national@education.td</p>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <p>1,245 élèves inscrits</p>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                <p>78 enseignants</p>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-muted-foreground" />
                <p>32 salles de classe</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informations administratives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Code d'établissement
                </p>
                <p>LNN-001</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Type d'établissement
                </p>
                <p>Public</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Niveau
                </p>
                <p>Secondaire</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Année de fondation
                </p>
                <p>1962</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Région
                </p>
                <p>N'Djamena</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Détails de l'école</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="facilities">Installations</TabsTrigger>
              <TabsTrigger value="programs">Programmes</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <SchoolProfile />
            </TabsContent>
            <TabsContent value="facilities">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">
                    Installations académiques
                  </h3>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                    <li>32 salles de classe standard</li>
                    <li>2 laboratoires de sciences</li>
                    <li>1 laboratoire informatique avec 25 ordinateurs</li>
                    <li>1 bibliothèque avec 5,000+ livres</li>
                    <li>1 salle polyvalente</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Installations sportives
                  </h3>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                    <li>1 terrain de football</li>
                    <li>2 terrains de basketball</li>
                    <li>1 piste d'athlétisme</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Autres installations</h3>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Cantine scolaire</li>
                    <li>Infirmerie</li>
                    <li>Salle des professeurs</li>
                    <li>Bureaux administratifs</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="programs">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">
                    Programmes académiques
                  </h3>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Série A (Littéraire)</li>
                    <li>Série C (Mathématiques et Sciences Physiques)</li>
                    <li>Série D (Mathématiques et Sciences Naturelles)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">
                    Activités extrascolaires
                  </h3>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Club de débat</li>
                    <li>Club de sciences</li>
                    <li>
                      Équipes sportives (football, basketball, athlétisme)
                    </li>
                    <li>Club d'art et de culture</li>
                    <li>Club d'informatique</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="performance">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">
                    Résultats au baccalauréat (2023)
                  </h3>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">
                          Taux de réussite
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">78.5%</div>
                        <p className="text-xs text-muted-foreground">
                          +2.3% par rapport à 2022
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">
                          Mentions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">42%</div>
                        <p className="text-xs text-muted-foreground">
                          Des élèves ont obtenu une mention
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">
                          Classement national
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">3ème</div>
                        <p className="text-xs text-muted-foreground">
                          Sur 128 lycées
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
