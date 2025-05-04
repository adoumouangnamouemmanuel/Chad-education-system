import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SchoolForm } from "@/app/modules/schools/school-form";

export const metadata: Metadata = {
  title: "Add School | Inspector Dashboard",
  description: "Add a new school to your region",
};

export default function InspectorAddSchoolPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <a href="/dashboard/inspector/schools">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Ajouter une école</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informations de l'école</CardTitle>
        </CardHeader>
        <CardContent>
          <SchoolForm />
        </CardContent>
      </Card>
    </div>
  );
}