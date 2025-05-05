"use client";

import type React from "react";
import type { UserRole } from "@/lib/types";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Calendar,
  ChevronDown,
  Clock,
  FileText,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  PenLine,
  Settings,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active: boolean;
  subItems?: { label: string; href: string; badge?: number }[];
  pathname: string;
  badge?: number;
  isNew?: boolean;
  isCollapsed: boolean;
}

function SidebarItem({
  icon,
  label,
  href,
  active,
  subItems,
  pathname,
  badge,
  isNew,
  isCollapsed,
}: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(() => {
    // Initialize open state based on whether any subitems are active
    if (subItems) {
      return subItems.some((item) => pathname === item.href);
    }
    return false;
  });

  // Animation variants for the menu item
  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  // Animation variants for the submenu
  const subMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };

  const subItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  if (isCollapsed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              whileHover="hover"
              className="mb-1"
            >
              <Link
                href={href}
                className={cn(
                  "flex justify-center items-center p-2 rounded-lg transition-all relative",
                  active
                    ? "bg-blue-100 text-blue-900 font-semibold dark:bg-blue-950 dark:text-blue-50"
                    : "hover:bg-blue-50 dark:hover:bg-blue-900/30"
                )}
              >
                <span className="text-lg">{icon}</span>
                {badge && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-blue-500 text-white text-[10px] rounded-full">
                    {badge}
                  </Badge>
                )}
                {isNew && (
                  <Badge className="absolute -top-1 -right-1 h-2 w-2 p-0 bg-blue-500 rounded-full" />
                )}
              </Link>
            </motion.div>
          </TooltipTrigger>
          <TooltipContent side="right">{label}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={itemVariants}
      whileHover="hover"
      className="mb-1"
    >
      {subItems ? (
        <div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex w-full items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
              active
                ? "bg-blue-100 text-blue-900 font-semibold dark:bg-blue-950 dark:text-blue-50"
                : "hover:bg-blue-50 dark:hover:bg-blue-900/30"
            )}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg">{icon}</span>
            <span className="flex-1 font-medium">{label}</span>
            {isNew && (
              <Badge className="mr-2 bg-blue-500 text-white text-xs py-0 px-1.5">
                Nouveau
              </Badge>
            )}
            {badge && (
              <Badge
                variant="outline"
                className="mr-2 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800"
              >
                {badge}
              </Badge>
            )}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={subMenuVariants}
                className="overflow-hidden"
              >
                <div className="ml-9 mt-1 space-y-1 border-l-2 border-blue-100 dark:border-blue-800 pl-2">
                  {subItems.map((item) => (
                    <motion.div key={item.href} variants={subItemVariants}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between px-3 py-1.5 text-sm rounded-md transition-colors",
                          pathname === item.href
                            ? "bg-blue-50 text-blue-900 font-medium dark:bg-blue-950 dark:text-blue-50"
                            : "hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        )}
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          href={href}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
            active
              ? "bg-blue-100 text-blue-900 font-semibold dark:bg-blue-950 dark:text-blue-50"
              : "hover:bg-blue-50 dark:hover:bg-blue-900/30"
          )}
        >
          <span className="text-lg">{icon}</span>
          <span className="font-medium">{label}</span>
          {isNew && (
            <Badge className="ml-auto bg-blue-500 text-white text-xs py-0 px-1.5">
              Nouveau
            </Badge>
          )}
          {badge && (
            <Badge
              variant="outline"
              className="ml-auto bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800"
            >
              {badge}
            </Badge>
          )}
        </Link>
      )}
    </motion.div>
  );
}

interface SidebarProps {
  userRole: UserRole;
  onCollapse?: (collapsed: boolean) => void;
}

export default function Sidebar({ userRole, onCollapse }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(3);
  const [unreadNotifications, setUnreadNotifications] = useState(2);

  // Store current path in cookie for server-side access
  useEffect(() => {
    document.cookie = `currentPath=${pathname}; path=/;`;
  }, [pathname]);

  // Notify parent component when sidebar collapse state changes
  useEffect(() => {
    if (onCollapse) {
      onCollapse(isCollapsed);
    }
  }, [isCollapsed, onCollapse]);

  // Define sidebar items based on role
  interface SidebarItemType {
    icon: React.ReactNode;
    label: string;
    href: string;
    active: boolean;
    subItems?: { label: string; href: string; badge?: number }[];
    badge?: number;
    isNew?: boolean;
  }

  const getSidebarItemsByRole = (role: UserRole, currentPath: string): SidebarItemType[] => {
    switch (role) {
      case "minister":
        return [
          {
            icon: <LayoutDashboard />,
            label: "Tableau de bord",
            href: `/dashboard/minister`,
            active: currentPath === `/dashboard/minister`,
          },
          {
            icon: <Building2 />,
            label: "Écoles",
            href: `/dashboard/minister/schools`,
            active: currentPath.startsWith(`/dashboard/minister/schools`),
            subItems: [
              {
                label: "Toutes les écoles",
                href: `/dashboard/minister/schools`,
              },
              {
                label: "Ajouter une école",
                href: `/dashboard/minister/schools/add`,
              },
              {
                label: "Besoins des écoles",
                href: `/dashboard/minister/schools/needs`,
                badge: 5,
              },
            ],
          },
          {
            icon: <Users />,
            label: "Enseignants",
            href: `/dashboard/minister/teachers`,
            active: currentPath.startsWith(`/dashboard/minister/teachers`),
            subItems: [
              {
                label: "Tous les enseignants",
                href: `/dashboard/minister/teachers`,
              },
              {
                label: "Ajouter un enseignant",
                href: `/dashboard/minister/teachers/add`,
              },
              {
                label: "Transferts",
                href: `/dashboard/minister/teachers/transfers`,
                badge: 3,
              },
            ],
          },
          {
            icon: <GraduationCap />,
            label: "Élèves",
            href: `/dashboard/minister/students`,
            active: currentPath.startsWith(`/dashboard/minister/students`),
            subItems: [
              {
                label: "Tous les élèves",
                href: `/dashboard/minister/students`,
              },
              {
                label: "Admissions",
                href: `/dashboard/minister/students/admissions`,
                badge: 12,
              },
              {
                label: "Transferts",
                href: `/dashboard/minister/students/transfers`,
                badge: 4,
              },
            ],
          },
          {
            icon: <BarChart3 />,
            label: "Performance",
            href: `/dashboard/minister/performance`,
            active: currentPath.startsWith(`/dashboard/minister/performance`),
          },
          {
            icon: <FileText />,
            label: "Rapports",
            href: `/dashboard/minister/reports`,
            active: currentPath.startsWith(`/dashboard/minister/reports`),
          },
          {
            icon: <Settings />,
            label: "Paramètres",
            href: `/dashboard/minister/settings`,
            active: currentPath.startsWith(`/dashboard/minister/settings`),
          },
        ];

      case "inspector":
        return [
          {
            icon: <LayoutDashboard />,
            label: "Tableau de bord",
            href: `/dashboard/inspector`,
            active: currentPath === `/dashboard/inspector`,
          },
          {
            icon: <Building2 />,
            label: "Écoles régionales",
            href: `/dashboard/inspector/schools`,
            active: currentPath.startsWith(`/dashboard/inspector/schools`),
            subItems: [
              {
                label: "Toutes les écoles",
                href: `/dashboard/inspector/schools`,
              },
              {
                label: "Ajouter une école",
                href: `/dashboard/inspector/schools/add`,
              },
              {
                label: "Besoins des écoles",
                href: `/dashboard/inspector/schools/needs`,
                badge: 3,
              },
            ],
          },
          {
            icon: <Users />,
            label: "Enseignants régionaux",
            href: `/dashboard/inspector/teachers`,
            active: currentPath.startsWith(`/dashboard/inspector/teachers`),
            subItems: [
              {
                label: "Tous les enseignants",
                href: `/dashboard/inspector/teachers`,
              },
              {
                label: "Ajouter un enseignant",
                href: `/dashboard/inspector/teachers/add`,
              },
              {
                label: "Transferts",
                href: `/dashboard/inspector/teachers/transfers`,
                badge: 2,
              },
            ],
          },
          {
            icon: <BarChart3 />,
            label: "Performance régionale",
            href: `/dashboard/inspector/performance`,
            active: currentPath.startsWith(`/dashboard/inspector/performance`),
          },
          {
            icon: <FileText />,
            label: "Rapports régionaux",
            href: `/dashboard/inspector/reports`,
            active: currentPath.startsWith(`/dashboard/inspector/reports`),
          },
          {
            icon: <Settings />,
            label: "Paramètres",
            href: `/dashboard/inspector/settings`,
            active: currentPath.startsWith(`/dashboard/inspector/settings`),
          },
        ];

      case "director":
        return [
          {
            icon: <LayoutDashboard />,
            label: "Tableau de bord",
            href: `/dashboard/director`,
            active: currentPath === `/dashboard/director`,
          },
          {
            icon: <Building2 />,
            label: "Profil de l'école",
            href: `/dashboard/director/school`,
            active: currentPath.startsWith(`/dashboard/director/school`),
          },
          {
            icon: <Users />,
            label: "Enseignants",
            href: `/dashboard/director/teachers`,
            active: currentPath.startsWith(`/dashboard/director/teachers`),
            subItems: [
              {
                label: "Tous les enseignants",
                href: `/dashboard/director/teachers`,
              },
              {
                label: "Ajouter un enseignant",
                href: `/dashboard/director/teachers/add`,
              },
              {
                label: "Transferts",
                href: `/dashboard/director/teachers/transfers`,
                badge: 1,
              },
            ],
          },
          {
            icon: <GraduationCap />,
            label: "Élèves",
            href: `/dashboard/director/students`,
            active: currentPath.startsWith(`/dashboard/director/students`),
            subItems: [
              {
                label: "Tous les élèves",
                href: `/dashboard/director/students`,
              },
              {
                label: "Ajouter un élève",
                href: `/dashboard/director/students/add`,
              },
              {
                label: "Admissions",
                href: `/dashboard/director/students/admissions`,
                badge: 8,
              },
              {
                label: "Transferts",
                href: `/dashboard/director/students/transfers`,
                badge: 2,
              },
            ],
          },
          {
            icon: <BarChart3 />,
            label: "Performance de l'école",
            href: `/dashboard/director/performance`,
            active: currentPath.startsWith(`/dashboard/director/performance`),
          },
          {
            icon: <FileText />,
            label: "Rapports de l'école",
            href: `/dashboard/director/reports`,
            active: currentPath.startsWith(`/dashboard/director/reports`),
          },
          {
            icon: <Settings />,
            label: "Paramètres",
            href: `/dashboard/director/settings`,
            active: currentPath.startsWith(`/dashboard/director/settings`),
          },
        ];

      case "teacher":
        return [
          {
            icon: <LayoutDashboard />,
            label: "Tableau de bord",
            href: `/dashboard/teacher`,
            active: currentPath === `/dashboard/teacher`,
          },
          {
            icon: <GraduationCap />,
            label: "Mes classes",
            href: `/dashboard/teacher/classes`,
            active: currentPath.startsWith(`/dashboard/teacher/classes`),
          },
          {
            icon: <PenLine />,
            label: "Saisie des notes",
            href: `/dashboard/teacher/grades`,
            active: currentPath.startsWith(`/dashboard/teacher/grades`),
          },
          {
            icon: <Clock />,
            label: "Présence",
            href: `/dashboard/teacher/attendance`,
            active: currentPath.startsWith(`/dashboard/teacher/attendance`),
          },
          {
            icon: <MessageSquare />,
            label: "Messages",
            href: `/dashboard/teacher/messages`,
            active: currentPath.startsWith(`/dashboard/teacher/messages`),
            badge: unreadMessages,
          },
          {
            icon: <Bell />,
            label: "Notifications",
            href: `/dashboard/teacher/notifications`,
            active: currentPath.startsWith(`/dashboard/teacher/notifications`),
            badge: unreadNotifications,
          },
          {
            icon: <FileText />,
            label: "Rapports",
            href: `/dashboard/teacher/reports`,
            active: currentPath.startsWith(`/dashboard/teacher/reports`),
          },
          {
            icon: <Settings />,
            label: "Paramètres",
            href: `/dashboard/teacher/settings`,
            active: currentPath.startsWith(`/dashboard/teacher/settings`),
          },
        ];

      case "student":
        return [
          {
            icon: <LayoutDashboard />,
            label: "Tableau de bord",
            href: `/dashboard/student`,
            active: currentPath === `/dashboard/student`,
          },
          {
            icon: <User />,
            label: "Mon profil",
            href: `/dashboard/student/profile`,
            active: currentPath.startsWith(`/dashboard/student/profile`),
          },
          {
            icon: <BookOpen />,
            label: "Mes classes",
            href: `/dashboard/student/classes`,
            active: currentPath.startsWith(`/dashboard/student/classes`),
          },
          {
            icon: <BarChart3 />,
            label: "Notes",
            href: `/dashboard/student/grades`,
            active: currentPath.startsWith(`/dashboard/student/grades`),
            isNew: true,
          },
          {
            icon: <Calendar />,
            label: "Présence",
            href: `/dashboard/student/attendance`,
            active: currentPath.startsWith(`/dashboard/student/attendance`),
          },
          {
            icon: <FileText />,
            label: "Devoirs",
            href: `/dashboard/student/assignments`,
            active: currentPath.startsWith(`/dashboard/student/assignments`),
            badge: 2,
          },
          // {
          //   icon: <MessageSquare />,
          //   label: "Messages",
          //   href: `/dashboard/student/messages`,
          //   active: currentPath.startsWith(`/dashboard/student/messages`),
          //   badge: unreadMessages,
          // },
          {
            icon: <Bell />,
            label: "Notifications",
            href: `/dashboard/student/notifications`,
            active: currentPath.startsWith(`/dashboard/student/notifications`),
            badge: unreadNotifications,
          },
          {
            icon: <Settings />,
            label: "Paramètres",
            href: `/dashboard/student/settings`,
            active: currentPath.startsWith(`/dashboard/student/settings`),
          },
        ];

      default:
        return [
          {
            icon: <LayoutDashboard />,
            label: "Tableau de bord",
            href: `/dashboard`,
            active: currentPath === `/dashboard`,
          },
          {
            icon: <Settings />,
            label: "Paramètres",
            href: `/dashboard/settings`,
            active: currentPath.startsWith(`/dashboard/settings`),
          },
        ];
    }
  };

  // Get sidebar items based on the current role
  const sidebarItems = useMemo(
    () => getSidebarItemsByRole(userRole, pathname),
    [userRole, pathname, unreadMessages, unreadNotifications]
  );

  // Animation variants
  const sidebarVariants = {
    expanded: { width: "16rem", transition: { duration: 0.3 } },
    collapsed: { width: "5rem", transition: { duration: 0.3 } },
  };

  const logoVariants = {
    expanded: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    collapsed: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex h-full flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 relative"
      variants={sidebarVariants}
      animate={isCollapsed ? "collapsed" : "expanded"}
      initial="expanded"
    >
      {/* Collapse toggle button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute -right-3 top-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1 shadow-md z-10"
            >
              <motion.div
                animate={{ rotate: isCollapsed ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-4 w-4 rotate-90" />
              </motion.div>
            </button>
          </TooltipTrigger>
          <TooltipContent side="right">
            {isCollapsed ? "Développer" : "Réduire"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <Link
          href={`/dashboard/${userRole}`}
          className="flex items-center gap-2 overflow-hidden"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/images/logo.png"
              alt="Système Éducatif du Tchad"
              width={40}
              height={40}
            />
          </motion.div>
          <motion.div
            variants={logoVariants}
            animate={isCollapsed ? "collapsed" : "expanded"}
            className="overflow-hidden"
          >
            <motion.h1
              className="text-xl font-poppins font-bold text-blue-950 dark:text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Tchad{" "}
              <span className="text-blue-600 dark:text-blue-400 relative">
                Éducation
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </span>
            </motion.h1>
          </motion.div>
        </Link>
      </div>

      {/* {!isCollapsed && (
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-blue-100">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Utilisateur"
              />
              <AvatarFallback className="bg-blue-100 text-blue-800">
                {userRole === "student"
                  ? "ÉL"
                  : userRole === "teacher"
                  ? "EN"
                  : userRole === "director"
                  ? "DI"
                  : "UT"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">
                {userRole === "student"
                  ? "Abakar Mahamat"
                  : userRole === "teacher"
                  ? "Moussa Ibrahim"
                  : userRole === "director"
                  ? "Fatima Hassan"
                  : "Administrateur"}
              </p>
              <p className="text-xs text-muted-foreground">
                {userRole === "student"
                  ? "Élève"
                  : userRole === "teacher"
                  ? "Enseignant"
                  : userRole === "director"
                  ? "Directeur"
                  : userRole === "inspector"
                  ? "Inspecteur"
                  : userRole === "minister"
                  ? "Ministre"
                  : "Utilisateur"}
              </p>
            </div>
          </div>
        </div>
      )} */}

      <div className="flex-1 overflow-auto p-4 space-y-1.5">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={item.active}
            subItems={item.subItems}
            pathname={pathname}
            badge={"badge" in item ? item.badge : undefined}
            isNew={item.isNew}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        {isCollapsed ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className="flex justify-center items-center p-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                  onClick={() => {
                    document.cookie = "userRole=; path=/; max-age=0";
                  }}
                >
                  <LogOut className="h-5 w-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Déconnexion</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
            onClick={() => {
              document.cookie = "userRole=; path=/; max-age=0";
            }}
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Déconnexion</span>
          </Link>
        )}
      </div>

      {!isCollapsed && (
        <div className="p-4 text-center text-xs text-muted-foreground border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-1">
            <HelpCircle className="h-3 w-3" />
            <Link
              href="/help"
              className="hover:text-blue-600 transition-colors"
            >
              Besoin d'aide?
            </Link>
          </div>
          <p className="mt-1">© 2023 Ministère de l'Éducation</p>
        </div>
      )}
    </motion.div>
  );
}
