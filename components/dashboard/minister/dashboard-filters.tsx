"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Filter,
  Calendar,
  MapPin,
  School,
  ChevronDown,
  Search,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardFiltersProps {
  filters: {
    region: string;
    schoolType: string;
    timeframe: string;
    academicYear: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export function DashboardFilters({
  filters,
  onFilterChange,
}: DashboardFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const regions = [
    { value: "all", label: "Toutes les régions" },
    { value: "nord", label: "Nord" },
    { value: "sud", label: "Sud" },
    { value: "est", label: "Est" },
    { value: "ouest", label: "Ouest" },
    { value: "centre", label: "Centre" },
  ];

  const schoolTypes = [
    { value: "all", label: "Tous les types" },
    { value: "primary", label: "Primaire" },
    { value: "secondary", label: "Secondaire" },
    { value: "highschool", label: "Lycée" },
    { value: "technical", label: "Technique" },
  ];

  const timeframes = [
    { value: "month", label: "Ce mois" },
    { value: "quarter", label: "Ce trimestre" },
    { value: "semester", label: "Ce semestre" },
    { value: "year", label: "Cette année" },
  ];

  const academicYears = [
    { value: "2024-2025", label: "2024-2025" },
    { value: "2023-2024", label: "2023-2024" },
    { value: "2022-2023", label: "2022-2023" },
  ];

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-emerald-600" />
          <h2 className="text-lg font-semibold">Filtres</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Rechercher..."
              className="pl-9 w-full md:w-[200px] h-9 bg-gray-50 border-gray-200"
            />
          </div>

          <Select
            value={filters.region}
            onValueChange={(value) => onFilterChange("region", value)}
          >
            <SelectTrigger className="w-full md:w-[180px] h-9 bg-gray-50">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-600" />
                <SelectValue placeholder="Région" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region.value} value={region.value}>
                  {region.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.academicYear}
            onValueChange={(value) => onFilterChange("academicYear", value)}
          >
            <SelectTrigger className="w-full md:w-[150px] h-9 bg-gray-50">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <SelectValue placeholder="Année académique" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {academicYears.map((year) => (
                <SelectItem key={year.value} value={year.value}>
                  {year.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
            className="h-9 border-dashed border-gray-300"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="mr-1">Plus de filtres</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Select
            value={filters.schoolType}
            onValueChange={(value) => onFilterChange("schoolType", value)}
          >
            <SelectTrigger className="w-full h-9 bg-gray-50">
              <div className="flex items-center gap-2">
                <School className="h-4 w-4 text-emerald-600" />
                <SelectValue placeholder="Type d'école" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {schoolTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.timeframe}
            onValueChange={(value) => onFilterChange("timeframe", value)}
          >
            <SelectTrigger className="w-full h-9 bg-gray-50">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <SelectValue placeholder="Période" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {timeframes.map((time) => (
                <SelectItem key={time.value} value={time.value}>
                  {time.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 h-9"
              onClick={() => {
                onFilterChange("region", "all");
                onFilterChange("schoolType", "all");
                onFilterChange("timeframe", "year");
                onFilterChange("academicYear", "2024-2025");
              }}
            >
              Réinitialiser
            </Button>
            <Button
              variant="default"
              size="sm"
              className="flex-1 h-9 bg-emerald-600 hover:bg-emerald-700"
            >
              Appliquer
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}