import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { StudentSchedule } from "@/components/dashboard/student-schedule";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "My Classes | Student Dashboard",
  description: "View your classes and schedule",
};

export default function StudentClassesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Mes Classes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des cours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Cours pour ce trimestre
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Heures par semaine
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">
              Heures de cours hebdomadaires
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Moyenne générale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">14.5/20</div>
            <p className="text-xs text-muted-foreground">
              Pour le trimestre en cours
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Emploi du temps</CardTitle>
          <CardDescription>Votre emploi du temps hebdomadaire</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <StudentSchedule />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mes cours</CardTitle>
          <CardDescription>Liste des cours pour ce trimestre</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Matière</TableHead>
                <TableHead>Enseignant</TableHead>
                <TableHead>Horaire</TableHead>
                <TableHead>Salle</TableHead>
                <TableHead>Moyenne</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Mathématiques</TableCell>
                <TableCell>Dr. Abdoulaye Hassan</TableCell>
                <TableCell>Lun, Mer, Ven 8h-10h</TableCell>
                <TableCell>Salle 12</TableCell>
                <TableCell>
                  <Badge variant="outline">15/20</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/dashboard/student/grades?subject=math">
                      Voir les notes
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Français</TableCell>
                <TableCell>Mme. Khadija Moussa</TableCell>
                <TableCell>Mar, Jeu 10h-12h</TableCell>
                <TableCell>Salle 15</TableCell>
                <TableCell>
                  <Badge variant="outline">16/20</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/dashboard/student/grades?subject=french">
                      Voir les notes
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Physique-Chimie</TableCell>
                <TableCell>M. Ibrahim Saleh</TableCell>
                <TableCell>Lun, Mer 14h-16h</TableCell>
                <TableCell>Labo 2</TableCell>
                <TableCell>
                  <Badge variant="outline">13/20</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/dashboard/student/grades?subject=physics">
                      Voir les notes
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Anglais</TableCell>
                <TableCell>M. John Smith</TableCell>
                <TableCell>Mar, Jeu 14h-16h</TableCell>
                <TableCell>Salle 8</TableCell>
                <TableCell>
                  <Badge variant="outline">14/20</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/dashboard/student/grades?subject=english">
                      Voir les notes
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Histoire-Géographie
                </TableCell>
                <TableCell>M. Mahamat Ali</TableCell>
                <TableCell>Ven 14h-18h</TableCell>
                <TableCell>Salle 5</TableCell>
                <TableCell>
                  <Badge variant="outline">15/20</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/dashboard/student/grades?subject=history">
                      Voir les notes
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
