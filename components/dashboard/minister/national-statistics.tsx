"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  TrendingUp,
  TrendingDown,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatisticCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  changeType: "increase" | "decrease";
  color: string;
  description: string;
  index: number;
}

export function StatisticCard({
  title,
  value,
  icon,
  change,
  changeType,
  color,
  description,
  index,
}: StatisticCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="transition-all duration-200"
    >
      <Card
        className="overflow-hidden border-t-4 shadow-lg hover:shadow-xl transition-shadow"
        style={{ borderTopColor: `var(--${color}-500)` }}
      >
        <CardContent className="p-6">
          <div className="flex items-center justify-between space-y-0">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                {title}
              </p>
              <p className="text-3xl font-bold">{value}</p>
            </div>
            <div
              className={`p-2 rounded-full bg-${color}-100 text-${color}-600 dark:bg-${color}-900/30 dark:text-${color}-400`}
            >
              {icon}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
          <div className="mt-4 flex items-center text-sm">
            {changeType === "increase" ? (
              <TrendingUp className="mr-1 h-4 w-4 text-green-600" />
            ) : (
              <TrendingDown className="mr-1 h-4 w-4 text-red-600" />
            )}
            <span
              className={`font-medium ${
                changeType === "increase" ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}
            </span>
            <span className="text-muted-foreground ml-1">
              depuis le mois dernier
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function NationalStatistics() {
  const statistics = [
    {
      title: "Écoles",
      value: "5,234",
      icon: <Building2 className="h-5 w-5" />,
      change: "+12",
      changeType: "increase" as const,
      color: "blue",
      description: "Établissements actifs",
    },
    {
      title: "Enseignants",
      value: "24,567",
      icon: <Users className="h-5 w-5" />,
      change: "+89",
      changeType: "increase" as const,
      color: "green",
      description: "Personnel éducatif",
    },
    {
      title: "Élèves",
      value: "487,932",
      icon: <GraduationCap className="h-5 w-5" />,
      change: "+1,243",
      changeType: "increase" as const,
      color: "purple",
      description: "Inscrits cette année",
    },
    {
      title: "Taux de réussite",
      value: "62%",
      icon: <TrendingUp className="h-5 w-5" />,
      change: "+2.5%",
      changeType: "increase" as const,
      color: "amber",
      description: "Examens nationaux",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statistics.map((stat, index) => (
        <StatisticCard key={stat.title} {...stat} index={index} />
      ))}
    </div>
  );
}