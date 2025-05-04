import type { Metadata } from "next";
import { TeacherForm } from "@/app/modules/teachers/teacher-form";

export const metadata: Metadata = {
  title: "Ajouter un enseignant | Tableau de bord du Directeur",
  description: "Ajouter un nouvel enseignant à votre établissement",
};

export default function DirectorAddTeacherPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Ajouter un enseignant
        </h1>
      </div>
      <TeacherForm />
    </div>
  );
}