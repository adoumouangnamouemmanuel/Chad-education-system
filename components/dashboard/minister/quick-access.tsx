"use client";

import { motion } from "framer-motion";
import { Building2, BarChart3, User, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function QuickAccessShortcuts() {
  const shortcuts = [
    {
      title: "Mon profil",
      icon: <User className="h-5 w-5" />,
      href: "/dashboard/minister/profile",
      color: "blue",
    },
    {
      title: "Performance régionale",
      icon: <BarChart3 className="h-5 w-5" />,
      href: "/dashboard/minister/performance",
      color: "green",
    },
    {
      title: "Programmes scolaires",
      icon: <BookOpen className="h-5 w-5" />,
      href: "/dashboard/minister/curriculum",
      color: "purple",
      badge: "Nouveau",
    },
    {
      title: "Infrastructure scolaire",
      icon: <Building2 className="h-5 w-5" />,
      href: "/dashboard/minister/schools/needs",
      color: "amber",
      badge: 5,
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Accès rapide</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shortcuts.map((shortcut, index) => (
          <motion.div
            key={shortcut.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="transition-all duration-300"
          >
            <Link href={shortcut.href} className="block h-full">
              <Card
                className="h-full border-l-4 shadow-md hover:shadow-lg transition-shadow"
                style={{ borderLeftColor: `var(--${shortcut.color}-500)` }}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div
                    className={`p-2 rounded-full bg-${shortcut.color}-100 text-${shortcut.color}-600 dark:bg-${shortcut.color}-900/30 dark:text-${shortcut.color}-400 mb-2`}
                  >
                    {shortcut.icon}
                  </div>
                  <h3 className="font-medium text-sm">{shortcut.title}</h3>
                  {typeof shortcut.badge === "number" && (
                    <Badge className="mt-2 bg-blue-500 text-white">
                      {shortcut.badge}
                    </Badge>
                  )}
                  {typeof shortcut.badge === "string" && (
                    <Badge className="mt-2 bg-green-500 text-white">
                      {shortcut.badge}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
