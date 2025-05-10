"use client";

import type React from "react";
import { motion } from "framer-motion";
import { BarChart3, Building2, CheckCircle, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip as UITooltip,
  TooltipContent as UITooltipContent,
  TooltipProvider as UITooltipProvider,
  TooltipTrigger as UITooltipTrigger,
} from "@/components/ui/tooltip";

interface DashboardTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export function DashboardTabs({ activeTab, setActiveTab }: DashboardTabsProps) {
  const tabs: TabItem[] = [
    {
      id: "overview",
      label: "Vue d'ensemble",
      icon: <Home className="h-5 w-5" />,
    },
    {
      id: "performance",
      label: "Performance",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      id: "infrastructure",
      label: "Infrastructure",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      id: "approvals",
      label: "Approbations",
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ];

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-1 flex"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      {tabs.map((tab) => (
        <UITooltipProvider key={tab.id} delayDuration={300}>
          <UITooltip>
            <UITooltipTrigger asChild>
              <motion.button
                className={cn(
                  "flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-lg transition-all",
                  activeTab === tab.id
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-500 hover:bg-gray-50"
                )}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className={cn(
                    "p-2 rounded-full mb-1",
                    activeTab === tab.id ? "bg-emerald-100" : "bg-transparent"
                  )}
                >
                  {tab.icon}
                </div>
                <span className="text-sm font-medium hidden md:block">
                  {tab.label}
                </span>
              </motion.button>
            </UITooltipTrigger>
            <UITooltipContent className="md:hidden">
              <p>{tab.label}</p>
            </UITooltipContent>
          </UITooltip>
        </UITooltipProvider>
      ))}
    </motion.div>
  );
}