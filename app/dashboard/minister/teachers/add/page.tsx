import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TeacherForm } from "@/app/modules/teachers/teacher-form";

export const metadata: Metadata = {
  title: "Add Teacher | Minister Dashboard",
  description: "Add a new teacher to the education system",
};

export default function AddTeacherPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <a href="/dashboard/minister/teachers">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          Ajouter un enseignant
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations de l'enseignant</CardTitle>
        </CardHeader>
        <CardContent>
          <TeacherForm />
        </CardContent>
      </Card>
    </div>
  );
}