"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  School,
  Users,
  GraduationCap,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface NationalStatisticsProps {
  filters: {
    region: string;
    schoolType: string;
    timeframe: string;
    academicYear: string;
  };
}

interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: number;
    trend: "up" | "down" | "neutral";
  };
  icon: React.ReactNode;
  color: string;
  delay: number;
}

function StatCard({ title, value, change, icon, color, delay }: StatCardProps) {
  const trendColor =
    change.trend === "up"
      ? "text-green-600"
      : change.trend === "down"
      ? "text-red-600"
      : "text-gray-600";

  const TrendIcon =
    change.trend === "up"
      ? ArrowUp
      : change.trend === "down"
      ? ArrowDown
      : ArrowRight;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay, duration: 0.4 }}
    >
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{title}</p>
              <h3 className="text-2xl font-bold mt-1">{value}</h3>
              <div className="flex items-center mt-2">
                <TrendIcon className={`h-4 w-4 mr-1 ${trendColor}`} />
                <span className={`text-xs font-medium ${trendColor}`}>
                  {change.value}%{" "}
                  {change.trend === "up"
                    ? "hausse"
                    : change.trend === "down"
                    ? "baisse"
                    : "stable"}
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-full ${color}`}>{icon}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function NationalStatistics({ filters }: NationalStatisticsProps) {
  // In a real app, these values would be fetched based on the filters
  const stats = [
    {
      title: "Écoles",
      value: "12,846",
      change: { value: 4.2, trend: "up" as const },
      icon: <School className="h-6 w-6 text-emerald-700" />,
      color: "bg-emerald-100",
    },
    {
      title: "Élèves",
      value: "3.2M",
      change: { value: 2.8, trend: "up" as const },
      icon: <Users className="h-6 w-6 text-blue-700" />,
      color: "bg-blue-100",
    },
    {
      title: "Enseignants",
      value: "142,568",
      change: { value: 1.5, trend: "up" as const },
      icon: <GraduationCap className="h-6 w-6 text-purple-700" />,
      color: "bg-purple-100",
    },
    {
      title: "Taux de réussite",
      value: "76.4%",
      change: { value: 3.2, trend: "up" as const },
      icon: <TrendingUp className="h-6 w-6 text-amber-700" />,
      color: "bg-amber-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
          color={stat.color}
          delay={0.1 + index * 0.1}
        />
      ))}
    </div>
  );
}
