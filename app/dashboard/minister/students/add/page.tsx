import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StudentForm } from "@/app/modules/students/student-form";

export const metadata: Metadata = {
  title: "Add Student | Minister Dashboard",
  description: "Add a new student to the education system",
};

export default function AddStudentPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <a href="/dashboard/minister/students">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          Ajouter un étudiant
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations de l'étudiant</CardTitle>
        </CardHeader>
        <CardContent>
          <StudentForm />
        </CardContent>
      </Card>
    </div>
  );
}
