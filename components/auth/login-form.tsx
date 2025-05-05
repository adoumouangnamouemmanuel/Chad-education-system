"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  Lock,
  ArrowRight,
  X,
  HelpCircle,
  UserCircle,
  BookOpen,
  School,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { UserRole } from "@/lib/types";

interface LoginFormProps {
  onCancel: () => void;
}

const roleIcons = {
  minister: <Briefcase className="h-5 w-5" />,
  inspector: <School className="h-5 w-5" />,
  director: <BookOpen className="h-5 w-5" />,
  teacher: <UserCircle className="h-5 w-5" />,
  student: <GraduationCap className="h-5 w-5" />,
};

export function LoginForm({ onCancel }: LoginFormProps) {
  const [role, setRole] = useState<UserRole | "">("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!role || !username || !password) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Afficher un toast de chargement
    toast({
      title: "Connexion en cours",
      description:
        "Veuillez patienter pendant que nous vérifions vos informations...",
    });

    // Simuler l'authentification
    setTimeout(() => {
      setIsLoading(false);

      // Définir un cookie pour mémoriser le rôle de l'utilisateur
      document.cookie = `userRole=${role}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 jours

      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté",
        variant: "default",
      });

      // Rediriger en fonction du rôle
      router.push(`/dashboard/${role}`);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-md mx-auto"
    >
      <Card className="border-none shadow-2xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500" />

        <CardHeader className="relative">
          <motion.div variants={itemVariants}>
            <CardTitle className="text-2xl font-poppins text-center text-blue-700 dark:text-blue-300">
              Connexion
            </CardTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <CardDescription className="text-center text-gray-600 dark:text-gray-300">
              Accédez au Système de Gestion Numérique des Écoles du Tchad
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <motion.div variants={itemVariants} className="space-y-2">
              <Label
                htmlFor="role"
                className="text-gray-700 dark:text-gray-200 flex items-center gap-2"
              >
                <UserCircle className="h-4 w-4" />
                Rôle
              </Label>
              <Select
                value={role}
                onValueChange={(value) => setRole(value as UserRole)}
              >
                <SelectTrigger
                  id="role"
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                >
                  <SelectValue placeholder="Sélectionnez votre rôle" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800">
                  <SelectItem
                    value="minister"
                    className="flex items-center gap-2"
                  >
                    <div className="flex items-center gap-2">
                      {roleIcons.minister}
                      <span>Ministre de l'Éducation</span>
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="inspector"
                    className="flex items-center gap-2"
                  >
                    <div className="flex items-center gap-2">
                      {roleIcons.inspector}
                      <span>Inspecteur Régional</span>
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="director"
                    className="flex items-center gap-2"
                  >
                    <div className="flex items-center gap-2">
                      {roleIcons.director}
                      <span>Directeur d'École</span>
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="teacher"
                    className="flex items-center gap-2"
                  >
                    <div className="flex items-center gap-2">
                      {roleIcons.teacher}
                      <span>Enseignant</span>
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="student"
                    className="flex items-center gap-2"
                  >
                    <div className="flex items-center gap-2">
                      {roleIcons.student}
                      <span>Étudiant</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <Label
                htmlFor="username"
                className="text-gray-700 dark:text-gray-200 flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Nom d'utilisateur
              </Label>
              <div className="relative">
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Entrez votre nom d'utilisateur"
                  className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <Label
                htmlFor="password"
                className="text-gray-700 dark:text-gray-200 flex items-center gap-2"
              >
                <Lock className="h-4 w-4" />
                Mot de passe
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Connexion en cours...
                  </>
                ) : (
                  <>
                    Connexion
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between border-t border-gray-100 dark:border-gray-700 pt-4">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              onClick={onCancel}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center gap-1"
            >
              <X className="h-4 w-4" />
              Annuler
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
            >
              <HelpCircle className="h-4 w-4" />
              Mot de passe oublié?
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
