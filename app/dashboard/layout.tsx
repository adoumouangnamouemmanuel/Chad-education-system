import { DashboardHeader } from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import type { UserRole } from "@/lib/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // Get the user role from cookies
  const cookieStore = await cookies();
  const userRole = (cookieStore.get("userRole")?.value as UserRole) || "";

  // If no role is set, redirect to login
  if (!userRole) {
    redirect("/");
  }

  // Extract the current path role to check if user is authorized
  const path = cookieStore.get("currentPath")?.value || "";
  const pathParts = path.split("/");
  const routeRole = pathParts.length > 2 ? pathParts[2] : "";

  // If trying to access another role's dashboard without permission
  if (routeRole && routeRole !== userRole) {
    // Role-based access control logic
    const hasAccess =
      userRole === "minister" || // Minister can access all
      (userRole === "inspector" &&
        ["director", "teacher", "student"].includes(routeRole)) || // Inspector can access director, teacher, student
      (userRole === "director" && ["teacher", "student"].includes(routeRole)); // Director can access teacher, student

    // If no access, redirect to their own dashboard
    if (!hasAccess) {
      redirect(`/dashboard/${userRole}`);
    }
  }

  // Format the role for display (capitalize first letter)
  const displayRole = userRole.charAt(0).toUpperCase() + userRole.slice(1);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Fixed sidebar that doesn't scroll with content */}
      <div className="fixed h-screen w-64 border-r border-gray-200 dark:border-gray-800">
        <Sidebar userRole={userRole} />
      </div>

      {/* Main content area with its own scrolling */}
      <div className="ml-64 flex-1 overflow-auto">
        <DashboardHeader userRole={userRole} />
        {/* <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-800">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Système de Gestion Éducative du Tchad
          </h1>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {displayRole}
              </span>
              <div className="h-8 w-8 rounded-full bg-blue-600 text-center text-white flex items-center justify-center">
                {displayRole.charAt(0)}
              </div>
            </div>
          </div>
        </header> */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
