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
                        {"badge" in item && item.badge && (
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800"
                          >
                            {item.badge && item.badge}
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
}

export default function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(3);
  const [unreadNotifications, setUnreadNotifications] = useState(2);

  // Store current path in cookie for server-side access
  useEffect(() => {
    document.cookie = `currentPath=${pathname}; path=/;`;
  }, [pathname]);

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
            label: "Dashboard",
            href: `/dashboard/minister`,
            active: currentPath === `/dashboard/minister`,
          },
          {
            icon: <Building2 />,
            label: "Schools",
            href: `/dashboard/minister/schools`,
            active: currentPath.startsWith(`/dashboard/minister/schools`),
            subItems: [
              { label: "All Schools", href: `/dashboard/minister/schools` },
              { label: "Add School", href: `/dashboard/minister/schools/add` },
              {
                label: "School Needs",
                href: `/dashboard/minister/schools/needs`,
                badge: 5,
              },
            ],
          },
          {
            icon: <Users />,
            label: "Teachers",
            href: `/dashboard/minister/teachers`,
            active: currentPath.startsWith(`/dashboard/minister/teachers`),
            subItems: [
              { label: "All Teachers", href: `/dashboard/minister/teachers` },
              {
                label: "Add Teacher",
                href: `/dashboard/minister/teachers/add`,
              },
              {
                label: "Transfers",
                href: `/dashboard/minister/teachers/transfers`,
                badge: 3,
              },
            ],
          },
          {
            icon: <GraduationCap />,
            label: "Students",
            href: `/dashboard/minister/students`,
            active: currentPath.startsWith(`/dashboard/minister/students`),
            subItems: [
              { label: "All Students", href: `/dashboard/minister/students` },
              {
                label: "Admissions",
                href: `/dashboard/minister/students/admissions`,
                badge: 12,
              },
              {
                label: "Transfers",
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
            label: "Reports",
            href: `/dashboard/minister/reports`,
            active: currentPath.startsWith(`/dashboard/minister/reports`),
          },
          {
            icon: <Settings />,
            label: "Settings",
            href: `/dashboard/minister/settings`,
            active: currentPath.startsWith(`/dashboard/minister/settings`),
          },
        ];

      case "inspector":
        return [
          {
            icon: <LayoutDashboard />,
            label: "Dashboard",
            href: `/dashboard/inspector`,
            active: currentPath === `/dashboard/inspector`,
          },
          {
            icon: <Building2 />,
            label: "Regional Schools",
            href: `/dashboard/inspector/schools`,
            active: currentPath.startsWith(`/dashboard/inspector/schools`),
            subItems: [
              { label: "All Schools", href: `/dashboard/inspector/schools` },
              { label: "Add School", href: `/dashboard/inspector/schools/add` },
              {
                label: "School Needs",
                href: `/dashboard/inspector/schools/needs`,
                badge: 3,
              },
            ],
          },
          {
            icon: <Users />,
            label: "Regional Teachers",
            href: `/dashboard/inspector/teachers`,
            active: currentPath.startsWith(`/dashboard/inspector/teachers`),
            subItems: [
              { label: "All Teachers", href: `/dashboard/inspector/teachers` },
              {
                label: "Add Teacher",
                href: `/dashboard/inspector/teachers/add`,
              },
              {
                label: "Transfers",
                href: `/dashboard/inspector/teachers/transfers`,
                badge: 2,
              },
            ],
          },
          {
            icon: <BarChart3 />,
            label: "Regional Performance",
            href: `/dashboard/inspector/performance`,
            active: currentPath.startsWith(`/dashboard/inspector/performance`),
          },
          {
            icon: <FileText />,
            label: "Regional Reports",
            href: `/dashboard/inspector/reports`,
            active: currentPath.startsWith(`/dashboard/inspector/reports`),
          },
          {
            icon: <Settings />,
            label: "Settings",
            href: `/dashboard/inspector/settings`,
            active: currentPath.startsWith(`/dashboard/inspector/settings`),
          },
        ];

      case "director":
        return [
          {
            icon: <LayoutDashboard />,
            label: "Dashboard",
            href: `/dashboard/director`,
            active: currentPath === `/dashboard/director`,
          },
          {
            icon: <Building2 />,
            label: "School Profile",
            href: `/dashboard/director/school`,
            active: currentPath.startsWith(`/dashboard/director/school`),
          },
          {
            icon: <Users />,
            label: "Teachers",
            href: `/dashboard/director/teachers`,
            active: currentPath.startsWith(`/dashboard/director/teachers`),
            subItems: [
              { label: "All Teachers", href: `/dashboard/director/teachers` },
              {
                label: "Add Teacher",
                href: `/dashboard/director/teachers/add`,
              },
              {
                label: "Transfers",
                href: `/dashboard/director/teachers/transfers`,
                badge: 1,
              },
            ],
          },
          {
            icon: <GraduationCap />,
            label: "Students",
            href: `/dashboard/director/students`,
            active: currentPath.startsWith(`/dashboard/director/students`),
            subItems: [
              { label: "All Students", href: `/dashboard/director/students` },
              {
                label: "Add Student",
                href: `/dashboard/director/students/add`,
              },
              {
                label: "Admissions",
                href: `/dashboard/director/students/admissions`,
                badge: 8,
              },
              {
                label: "Transfers",
                href: `/dashboard/director/students/transfers`,
                badge: 2,
              },
            ],
          },
          {
            icon: <BarChart3 />,
            label: "School Performance",
            href: `/dashboard/director/performance`,
            active: currentPath.startsWith(`/dashboard/director/performance`),
          },
          {
            icon: <FileText />,
            label: "School Reports",
            href: `/dashboard/director/reports`,
            active: currentPath.startsWith(`/dashboard/director/reports`),
          },
          {
            icon: <Settings />,
            label: "Settings",
            href: `/dashboard/director/settings`,
            active: currentPath.startsWith(`/dashboard/director/settings`),
          },
        ];

      case "teacher":
        return [
          {
            icon: <LayoutDashboard />,
            label: "Dashboard",
            href: `/dashboard/teacher`,
            active: currentPath === `/dashboard/teacher`,
          },
          {
            icon: <GraduationCap />,
            label: "My Classes",
            href: `/dashboard/teacher/classes`,
            active: currentPath.startsWith(`/dashboard/teacher/classes`),
          },
          {
            icon: <PenLine />,
            label: "Grade Entry",
            href: `/dashboard/teacher/grades`,
            active: currentPath.startsWith(`/dashboard/teacher/grades`),
          },
          {
            icon: <Clock />,
            label: "Attendance",
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
            label: "Reports",
            href: `/dashboard/teacher/reports`,
            active: currentPath.startsWith(`/dashboard/teacher/reports`),
          },
          {
            icon: <Settings />,
            label: "Settings",
            href: `/dashboard/teacher/settings`,
            active: currentPath.startsWith(`/dashboard/teacher/settings`),
          },
        ];

      case "student":
        return [
          {
            icon: <LayoutDashboard />,
            label: "Dashboard",
            href: `/dashboard/student`,
            active: currentPath === `/dashboard/student`,
          },
          {
            icon: <User />,
            label: "My Profile",
            href: `/dashboard/student/profile`,
            active: currentPath.startsWith(`/dashboard/student/profile`),
          },
          {
            icon: <BookOpen />,
            label: "My Classes",
            href: `/dashboard/student/classes`,
            active: currentPath.startsWith(`/dashboard/student/classes`),
          },
          {
            icon: <BarChart3 />,
            label: "My Grades",
            href: `/dashboard/student/grades`,
            active: currentPath.startsWith(`/dashboard/student/grades`),
            isNew: true,
          },
          {
            icon: <Calendar />,
            label: "Attendance",
            href: `/dashboard/student/attendance`,
            active: currentPath.startsWith(`/dashboard/student/attendance`),
          },
          {
            icon: <FileText />,
            label: "Assignments",
            href: `/dashboard/student/assignments`,
            active: currentPath.startsWith(`/dashboard/student/assignments`),
            badge: 2,
          },
          {
            icon: <MessageSquare />,
            label: "Messages",
            href: `/dashboard/student/messages`,
            active: currentPath.startsWith(`/dashboard/student/messages`),
            badge: unreadMessages,
          },
          {
            icon: <Bell />,
            label: "Notifications",
            href: `/dashboard/student/notifications`,
            active: currentPath.startsWith(`/dashboard/student/notifications`),
            badge: unreadNotifications,
          },
          {
            icon: <Settings />,
            label: "Settings",
            href: `/dashboard/student/settings`,
            active: currentPath.startsWith(`/dashboard/student/settings`),
          },
        ];

      default:
        return [
          {
            icon: <LayoutDashboard />,
            label: "Dashboard",
            href: `/dashboard`,
            active: currentPath === `/dashboard`,
          },
          {
            icon: <Settings />,
            label: "Settings",
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
    expanded: { width: "280px", transition: { duration: 0.3 } },
    collapsed: { width: "80px", transition: { duration: 0.3 } },
  };

  const logoVariants = {
    expanded: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    collapsed: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    expanded: { marginRight: "12px" },
    collapsed: { marginRight: "0" },
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
            {isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
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
              alt="Chad National School System"
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
                Education
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

      {!isCollapsed && (
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-blue-100">
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="User"
              />
              <AvatarFallback className="bg-blue-100 text-blue-800">
                {userRole === "student"
                  ? "AM"
                  : userRole === "teacher"
                  ? "TE"
                  : userRole === "director"
                  ? "DI"
                  : "US"}
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
                  : "Admin User"}
              </p>
              <p className="text-xs text-muted-foreground capitalize">
                {userRole}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto p-4 space-y-1.5">
        {sidebarItems.map((item) => (
          <div key={item.href} className={isCollapsed ? "relative group" : ""}>
            {isCollapsed ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex justify-center items-center p-2 rounded-lg transition-all",
                        item.active
                          ? "bg-blue-100 text-blue-900 font-semibold dark:bg-blue-950 dark:text-blue-50"
                          : "hover:bg-blue-50 dark:hover:bg-blue-900/30"
                      )}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {item.badge && (
                        <Badge className="absolute top-0 right-0 bg-blue-500 text-white text-xs h-4 w-4 flex items-center justify-center p-0 rounded-full">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={item.active}
                subItems={"subItems" in item ? item.subItems : undefined}
                pathname={pathname}
                badge={"badge" in item ? item.badge : undefined}
                isNew={item.isNew}
              />
            )}
          </div>
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
              <TooltipContent side="right">Logout</TooltipContent>
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
            <span className="font-medium">Logout</span>
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
