"use client";

import type React from "react";

import type { UserRole } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  BookOpen,
  Building2,
  Calendar,
  ChevronDown,
  Clock,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  PenLine,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active: boolean;
  subItems?: { label: string; href: string }[];
  pathname: string;
}

function SidebarItem({
  icon,
  label,
  href,
  active,
  subItems,
  pathname,
}: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {subItems ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center gap-3 px-3 py-2 rounded-lg transition-colors",
            active
              ? "bg-blue-100 text-blue-900 font-semibold dark:bg-blue-950 dark:text-blue-50"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          )}
        >
          <span className="text-lg">{icon}</span>
          <span className="flex-1 font-medium">{label}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        </button>
      ) : (
        <Link
          href={href}
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
            active
              ? "bg-blue-100 text-blue-900 font-semibold dark:bg-blue-950 dark:text-blue-50"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          )}
        >
          <span className="text-lg">{icon}</span>
          <span className="font-medium">{label}</span>
        </Link>
      )}

      {subItems && isOpen && (
        <div className="ml-9 mt-1 space-y-1">
          {subItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block px-3 py-1.5 text-sm rounded-md transition-colors",
                pathname === item.href
                  ? "bg-blue-50 text-blue-900 font-medium dark:bg-blue-950 dark:text-blue-50"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

interface SidebarProps {
  userRole: UserRole;
}

export default function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Store current path in cookie for server-side access
  useEffect(() => {
    document.cookie = `currentPath=${pathname}; path=/;`;
  }, [pathname]);

  // Define sidebar items based on role
  const getSidebarItemsByRole = (role: UserRole, currentPath: string) => {
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
              },
              {
                label: "Transfers",
                href: `/dashboard/minister/students/transfers`,
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
              },
              {
                label: "Transfers",
                href: `/dashboard/director/students/transfers`,
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
          },
          {
            icon: <Calendar />,
            label: "Attendance",
            href: `/dashboard/student/attendance`,
            active: currentPath.startsWith(`/dashboard/student/attendance`),
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
    [userRole, pathname]
  );

  return (
    <div className="flex h-full flex-col bg-white dark:bg-gray-800">
      <div className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700">
        <Link
          href={`/dashboard/${userRole}`}
          className="flex items-center gap-2"
        >
          <Image
            src="/images/logo.png"
            alt="Chad National School System"
            width={40}
            height={40}
          />
          <span className="font-bold text-lg">
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
            </motion.h1>{" "}
          </span>
        </Link>
      </div>

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
          />
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
          onClick={() => {
            // Clear user role cookie on logout
            document.cookie = "userRole=; path=/; max-age=0";
          }}
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
}
