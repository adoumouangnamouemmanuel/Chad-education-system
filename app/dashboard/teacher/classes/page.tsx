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
import { ClassSchedule } from "@/components/dashboard/class-schedule";

export const metadata: Metadata = {
  title: "My Classes | Teacher Dashboard",
  description: "View and manage your classes",
};

export default function TeacherClassesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Mes Classes</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Classes assignées pour l'année scolaire 2023-2024
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Total des étudiants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">187</div>
            <p className="text-xs text-muted-foreground">
              Étudiants dans toutes vos classes
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">
              Heures d'enseignement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              Heures d'enseignement par semaine
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
            <ClassSchedule />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Mes classes</CardTitle>
          <CardDescription>
            Liste des classes que vous enseignez
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Classe</TableHead>
                <TableHead>Matière</TableHead>
                <TableHead>Niveau</TableHead>
                <TableHead>Nombre d'élèves</TableHead>
                <TableHead>Horaire</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Terminale A</TableCell>
                <TableCell>Mathématiques</TableCell>
                <TableCell>Lycée</TableCell>
                <TableCell>42</TableCell>
                <TableCell>Lun, Mer, Ven 8h-10h</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/grades?class=terminale-a">
                        Notes
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/attendance?class=terminale-a">
                        Présence
                      </a>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Terminale D</TableCell>
                <TableCell>Mathématiques</TableCell>
                <TableCell>Lycée</TableCell>
                <TableCell>38</TableCell>
                <TableCell>Mar, Jeu 10h-12h</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/grades?class=terminale-d">
                        Notes
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/attendance?class=terminale-d">
                        Présence
                      </a>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">1ère C</TableCell>
                <TableCell>Mathématiques</TableCell>
                <TableCell>Lycée</TableCell>
                <TableCell>45</TableCell>
                <TableCell>Lun, Mer 14h-16h</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/grades?class=1ere-c">Notes</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/attendance?class=1ere-c">
                        Présence
                      </a>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2nde A</TableCell>
                <TableCell>Mathématiques</TableCell>
                <TableCell>Lycée</TableCell>
                <TableCell>32</TableCell>
                <TableCell>Mar, Jeu 14h-16h</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/grades?class=2nde-a">Notes</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/attendance?class=2nde-a">
                        Présence
                      </a>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2nde C</TableCell>
                <TableCell>Mathématiques</TableCell>
                <TableCell>Lycée</TableCell>
                <TableCell>30</TableCell>
                <TableCell>Ven 14h-18h</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/grades?class=2nde-c">Notes</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/dashboard/teacher/attendance?class=2nde-c">
                        Présence
                      </a>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
