"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  BookOpen,
  Building,
  Laptop,
  Ruler,
  Lightbulb,
  Droplet,
  Utensils,
  Wifi,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SecondaryStatisticsProps {
  filters: {
    region: string;
    schoolType: string;
    timeframe: string;
    academicYear: string;
  };
}

interface StatItemProps {
  title: string;
  value: number;
  target: number;
  icon: React.ReactNode;
  color: string;
  index: number;
}

function StatItem({ title, value, target, icon, color, index }: StatItemProps) {
  const percentage = Math.round((value / target) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
      className="flex items-center gap-4 p-3"
    >
      <div className={`p-2 rounded-lg ${color}`}>{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs font-semibold">
            {value.toLocaleString()} / {target.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Progress value={percentage} className="h-2" />
          <span className="text-xs font-medium">{percentage}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export function SecondaryStatistics({ filters }: SecondaryStatisticsProps) {
  // In a real app, these values would be fetched based on the filters
  const educationStats = [
    {
      title: "Manuels scolaires",
      value: 2850000,
      target: 3200000,
      icon: <BookOpen className="h-4 w-4 text-blue-700" />,
      color: "bg-blue-100",
    },
    {
      title: "Salles de classe",
      value: 68420,
      target: 75000,
      icon: <Building className="h-4 w-4 text-emerald-700" />,
      color: "bg-emerald-100",
    },
    {
      title: "Ordinateurs",
      value: 124680,
      target: 200000,
      icon: <Laptop className="h-4 w-4 text-purple-700" />,
      color: "bg-purple-100",
    },
    {
      title: "Matériel pédagogique",
      value: 1850000,
      target: 2000000,
      icon: <Ruler className="h-4 w-4 text-amber-700" />,
      color: "bg-amber-100",
    },
  ];

  const infrastructureStats = [
    {
      title: "Électrification",
      value: 9240,
      target: 12846,
      icon: <Lightbulb className="h-4 w-4 text-yellow-700" />,
      color: "bg-yellow-100",
    },
    {
      title: "Accès à l'eau",
      value: 10120,
      target: 12846,
      icon: <Droplet className="h-4 w-4 text-cyan-700" />,
      color: "bg-cyan-100",
    },
    {
      title: "Cantines scolaires",
      value: 7520,
      target: 12846,
      icon: <Utensils className="h-4 w-4 text-red-700" />,
      color: "bg-red-100",
    },
    {
      title: "Connexion internet",
      value: 5240,
      target: 12846,
      icon: <Wifi className="h-4 w-4 text-indigo-700" />,
      color: "bg-indigo-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border-none shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">
            Ressources éducatives
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {educationStats.map((stat, index) => (
            <StatItem
              key={stat.title}
              title={stat.title}
              value={stat.value}
              target={stat.target}
              icon={stat.icon}
              color={stat.color}
              index={index}
            />
          ))}
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold">
            Infrastructure scolaire
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {infrastructureStats.map((stat, index) => (
            <StatItem
              key={stat.title}
              title={stat.title}
              value={stat.value}
              target={stat.target}
              icon={stat.icon}
              color={stat.color}
              index={index}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}