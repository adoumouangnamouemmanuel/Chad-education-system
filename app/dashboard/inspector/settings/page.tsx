import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertCircle,
  Bell,
  FileText,
  Key,
  MapPin,
  Save,
  Shield,
  User,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const metadata: Metadata = {
  title: "Paramètres | Tableau de bord de l'Inspecteur",
  description: "Gérez les paramètres de votre compte d'inspecteur",
};

export default function InspectorSettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
        <div className="flex items-center gap-2 text-sm">
          <Badge variant="outline" className="bg-blue-50">
            Inspecteur Régional
          </Badge>
          <Badge variant="outline" className="bg-green-50">
            Compte vérifié
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
        <Card className="h-fit lg:sticky lg:top-20">
          <CardContent className="p-4">
            <div className="flex flex-col items-center mb-6 pt-4">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage
                  src="/placeholder.svg?height=96&width=96"
                  alt="Avatar"
                />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="font-medium text-lg">Mahamat Ousmane</p>
                <p className="text-sm text-muted-foreground">
                  m.ousmane@education.td
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="space-y-1">
              <p className="text-sm font-medium mb-2">Informations</p>
              <div className="flex items-center gap-2 text-sm py-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Région de N'Djamena</span>
              </div>
              <div className="flex items-center gap-2 text-sm py-1">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span>Inspecteur depuis 2018</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-4 w-full md:w-auto">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profil</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Compte</span>
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="flex items-center gap-2"
              >
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="regional" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Paramètres régionaux</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profil</CardTitle>
                  <CardDescription>
                    Gérez les informations de votre profil d'inspecteur
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Prénom</Label>
                      <Input id="first-name" defaultValue="Mahamat" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Nom</Label>
                      <Input id="last-name" defaultValue="Ousmane" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="m.ousmane@education.td"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input id="phone" defaultValue="+235 66 12 34 56" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biographie</Label>
                    <Textarea
                      id="bio"
                      className="min-h-[120px]"
                      defaultValue="Inspecteur régional de l'éducation pour la région de N'Djamena depuis 2018. Spécialiste en évaluation des établissements scolaires et en formation des enseignants. Titulaire d'un doctorat en sciences de l'éducation de l'Université de N'Djamena."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Photo de profil</Label>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src="/placeholder.svg?height=64&width=64"
                          alt="Avatar"
                        />
                        <AvatarFallback>MO</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm">
                          Changer la photo
                        </Button>
                        <Button variant="ghost" size="sm">
                          Supprimer
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      <span>Enregistrer les modifications</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Sécurité du compte</CardTitle>
                  <CardDescription>
                    Gérez les paramètres de votre compte et vos préférences de
                    sécurité
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="bg-amber-50 border-amber-200">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                    <AlertTitle className="text-amber-800">
                      Rappel de sécurité
                    </AlertTitle>
                    <AlertDescription className="text-amber-700">
                      Il est recommandé de changer votre mot de passe tous les 3
                      mois pour une sécurité optimale.
                    </AlertDescription>
                  </Alert>

                  <div className="space-y-2">
                    <Label htmlFor="current-password">
                      Mot de passe actuel
                    </Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nouveau mot de passe</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">
                        Confirmer le mot de passe
                      </Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium flex items-center gap-2">
                      <Key className="h-5 w-5" />
                      <span>Options de sécurité avancées</span>
                    </h3>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="two-factor" className="text-base">
                            Authentification à deux facteurs
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Activez l'authentification à deux facteurs pour
                            renforcer la sécurité de votre compte.
                          </p>
                        </div>
                        <Switch id="two-factor" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label
                            htmlFor="session-timeout"
                            className="text-base"
                          >
                            Expiration de session
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Déconnexion automatique après une période
                            d'inactivité
                          </p>
                        </div>
                        <Select defaultValue="30">
                          <SelectTrigger
                            id="session-timeout"
                            className="w-[180px]"
                          >
                            <SelectValue placeholder="Sélectionner" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 heure</SelectItem>
                            <SelectItem value="120">2 heures</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      <span>Mettre à jour les paramètres de sécurité</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Configurez vos préférences de notification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Notifications par email
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notifications générales</p>
                          <p className="text-sm text-muted-foreground">
                            Recevez des notifications par email pour les mises à
                            jour importantes
                          </p>
                        </div>
                        <Switch id="email-notifications" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">
                            Transferts d'enseignants
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Soyez notifié des nouvelles demandes de transfert
                            d'enseignants
                          </p>
                        </div>
                        <Switch
                          id="teacher-transfer-notifications"
                          defaultChecked
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Besoins des écoles</p>
                          <p className="text-sm text-muted-foreground">
                            Soyez notifié des nouveaux besoins déclarés par les
                            écoles
                          </p>
                        </div>
                        <Switch
                          id="school-needs-notifications"
                          defaultChecked
                        />
                      </div>
                    </div>

                    <Separator />

                    <h3 className="text-lg font-medium">Rapports et résumés</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Rapports hebdomadaires</p>
                          <p className="text-sm text-muted-foreground">
                            Recevez un résumé hebdomadaire des activités de
                            votre région
                          </p>
                        </div>
                        <Switch id="weekly-reports" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Rapports de performance</p>
                          <p className="text-sm text-muted-foreground">
                            Recevez des rapports mensuels sur la performance des
                            écoles
                          </p>
                        </div>
                        <Switch id="performance-reports" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Alertes d'urgence</p>
                          <p className="text-sm text-muted-foreground">
                            Recevez des notifications pour les situations
                            urgentes
                          </p>
                        </div>
                        <Switch id="emergency-alerts" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      <span>Enregistrer les préférences</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="regional">
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres régionaux</CardTitle>
                  <CardDescription>
                    Configurez les paramètres spécifiques à votre région
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="region">Région</Label>
                      <Select defaultValue="ndjamena">
                        <SelectTrigger id="region">
                          <SelectValue placeholder="Sélectionnez une région" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ndjamena">N'Djamena</SelectItem>
                          <SelectItem value="logone">
                            Logone Oriental
                          </SelectItem>
                          <SelectItem value="mayo-kebbi">Mayo-Kebbi</SelectItem>
                          <SelectItem value="ouaddai">Ouaddaï</SelectItem>
                          <SelectItem value="kanem">Kanem</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Département</Label>
                      <Select defaultValue="ndjamena-centre">
                        <SelectTrigger id="department">
                          <SelectValue placeholder="Sélectionnez un département" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ndjamena-centre">
                            N'Djamena Centre
                          </SelectItem>
                          <SelectItem value="ndjamena-nord">
                            N'Djamena Nord
                          </SelectItem>
                          <SelectItem value="ndjamena-sud">
                            N'Djamena Sud
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inspection-zone">Zone d'inspection</Label>
                    <Select defaultValue="zone1">
                      <SelectTrigger id="inspection-zone">
                        <SelectValue placeholder="Sélectionnez une zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zone1">
                          Zone 1 - Centre Ville
                        </SelectItem>
                        <SelectItem value="zone2">
                          Zone 2 - Quartiers Est
                        </SelectItem>
                        <SelectItem value="zone3">
                          Zone 3 - Quartiers Nord
                        </SelectItem>
                        <SelectItem value="zone4">
                          Zone 4 - Quartiers Sud
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regional-notes">Notes sur la région</Label>
                    <Textarea
                      id="regional-notes"
                      className="min-h-[120px]"
                      placeholder="Ajoutez des notes spécifiques à votre région..."
                      defaultValue="La région de N'Djamena compte 45 établissements scolaires sous ma supervision, avec des besoins particuliers en matière d'infrastructure et de formation des enseignants."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Préférences de rapport régional</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="include-performance" defaultChecked />
                        <Label htmlFor="include-performance">
                          Inclure les données de performance
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="include-attendance" defaultChecked />
                        <Label htmlFor="include-attendance">
                          Inclure les données de présence
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="include-infrastructure" defaultChecked />
                        <Label htmlFor="include-infrastructure">
                          Inclure l'état des infrastructures
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="include-teacher-qualifications"
                          defaultChecked
                        />
                        <Label htmlFor="include-teacher-qualifications">
                          Inclure les qualifications des enseignants
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      <span>Enregistrer les paramètres régionaux</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}