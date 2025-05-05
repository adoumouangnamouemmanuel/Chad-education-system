"use client";

import type React from "react";

import { DashboardHeader } from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import type { UserRole } from "@/lib/types";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [userRole, setUserRole] = useState<UserRole | "">("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  // Get user role from cookie on client side
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift() || "";
      return "";
    };

    const role = getCookie("userRole") as UserRole;
    setUserRole(role);

    // Store current path in cookie for server-side access
    document.cookie = `currentPath=${pathname}; path=/;`;
  }, [pathname]);

  // Handle sidebar collapse state
  const handleSidebarCollapse = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
  };

  // Format the role for display (capitalize first letter)
  const displayRole = userRole
    ? userRole.charAt(0).toUpperCase() + userRole.slice(1)
    : "";

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar with dynamic width based on collapsed state */}
      <div
        className={`fixed h-screen transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-20" : "w-64"
        } border-r border-gray-200 dark:border-gray-800 z-20`}
      >
        <Sidebar
          userRole={userRole || "student"}
          onCollapse={handleSidebarCollapse}
        />
      </div>

      {/* Main content area with dynamic margin based on sidebar state */}
      <div
        className={`flex-1 overflow-auto transition-all duration-300 ease-in-out ${
          isCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        <DashboardHeader userRole={userRole || "student"} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
