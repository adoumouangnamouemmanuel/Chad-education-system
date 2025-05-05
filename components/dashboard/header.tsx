"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Calendar,
  HelpCircle,
  LogOut,
  Moon,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";

export function DashboardHeader({
  userRole = "student",
}: {
  userRole?: string;
}) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);

  const getUserInfo = () => {
    switch (userRole) {
      case "minister":
        return {
          name: "Ministre de l'Éducation",
          role: "Ministre",
          initials: "ME",
        };
      case "inspector":
        return {
          name: "Inspecteur Régional",
          role: "Inspecteur",
          initials: "IR",
        };
      case "director":
        return { name: "Directeur d'École", role: "Directeur", initials: "DE" };
      case "teacher":
        return {
          name: "Professeur Diallo",
          role: "Enseignant",
          initials: "PD",
        };
      case "student":
        return { name: "Abakar Mahamat", role: "Étudiant", initials: "AM" };
      default:
        return { name: "Utilisateur", role: "Invité", initials: "UI" };
    }
  };

  const userInfo = getUserInfo();

  const getProfilePath = () => {
    return `/dashboard/${userRole}/profile`;
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-2 md:gap-4">
        {!showSearch && (
          <div className="hidden md:block">
            <h1 className="text-xl font-semibold">
              Bienvenu(e) <span className="text-blue-500"> {userInfo.name}</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString("fr-FR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        )}

        <AnimatePresence>
          {showSearch ? (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="flex items-center"
            >
              <Input
                placeholder="Rechercher..."
                className="w-full md:w-[300px]"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
            </motion.div>
          ) : (
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setShowSearch(true)}
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Rechercher</span>
            </Button>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="hidden md:flex"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Rechercher</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Rechercher</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" asChild>
                <Link href="/dashboard/student/calendar">
                  <Calendar className="h-4 w-4" />
                  <span className="sr-only">Calendrier</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Calendrier</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative"
                asChild
              >
                <Link href="/dashboard/student/notifications">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                  <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center">
                    3
                  </Badge>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full border border-primary/10 bg-primary/5 hover:bg-primary/10"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt={userInfo.name}
                />
                <AvatarFallback>{userInfo.initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {userInfo.name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userInfo.role}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href={getProfilePath()} className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Mon profil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/dashboard/student/settings"
                  className="cursor-pointer"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Paramètres</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/help" className="cursor-pointer">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Aide</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="text-red-500 focus:text-red-500"
            >
              <Link href="/logout" className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Déconnexion</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}