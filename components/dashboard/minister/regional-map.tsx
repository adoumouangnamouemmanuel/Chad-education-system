"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Info,
  ChevronRight,
  School,
  Users,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RegionalMapProps {
  filters: {
    region: string;
    schoolType: string;
    timeframe: string;
    academicYear: string;
  };
}

interface Region {
  id: string;
  name: string;
  path: string;
  color: string;
  hoverColor: string;
  activeColor: string;
  stats: {
    schools: number;
    students: number;
    teachers: number;
    successRate: number;
  };
  coordinates: {
    x: number;
    y: number;
  };
}

export function RegionalMap({ filters }: RegionalMapProps) {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef<SVGSVGElement>(null);

  // In a real app, these values would be fetched based on the filters
  const regions: Region[] = [
    {
      id: "nord",
      name: "Nord",
      path: "M50,50 L150,50 L150,150 L50,150 Z",
      color: "#d1fae5",
      hoverColor: "#a7f3d0",
      activeColor: "#6ee7b7",
      stats: {
        schools: 2845,
        students: 720000,
        teachers: 32500,
        successRate: 72.4,
      },
      coordinates: {
        x: 100,
        y: 100,
      },
    },
    {
      id: "sud",
      name: "Sud",
      path: "M50,200 L150,200 L150,300 L50,300 Z",
      color: "#dbeafe",
      hoverColor: "#bfdbfe",
      activeColor: "#93c5fd",
      stats: {
        schools: 2120,
        students: 540000,
        teachers: 24800,
        successRate: 68.7,
      },
      coordinates: {
        x: 100,
        y: 250,
      },
    },
    {
      id: "est",
      name: "Est",
      path: "M200,50 L300,50 L300,150 L200,150 Z",
      color: "#fae8ff",
      hoverColor: "#f5d0fe",
      activeColor: "#e9d5ff",
      stats: {
        schools: 2560,
        students: 620000,
        teachers: 28400,
        successRate: 74.2,
      },
      coordinates: {
        x: 250,
        y: 100,
      },
    },
    {
      id: "ouest",
      name: "Ouest",
      path: "M200,200 L300,200 L300,300 L200,300 Z",
      color: "#fef3c7",
      hoverColor: "#fde68a",
      activeColor: "#fcd34d",
      stats: {
        schools: 3120,
        students: 840000,
        teachers: 36500,
        successRate: 78.9,
      },
      coordinates: {
        x: 250,
        y: 250,
      },
    },
    {
      id: "centre",
      name: "Centre",
      path: "M125,125 L225,125 L225,225 L125,225 Z",
      color: "#fee2e2",
      hoverColor: "#fecaca",
      activeColor: "#fca5a5",
      stats: {
        schools: 2201,
        students: 480000,
        teachers: 20368,
        successRate: 81.2,
      },
      coordinates: {
        x: 175,
        y: 175,
      },
    },
  ];

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleRegionClick = (regionId: string) => {
    setActiveRegion(regionId === activeRegion ? null : regionId);
  };

  const getRegionColor = (region: Region) => {
    if (activeRegion === region.id) return region.activeColor;
    if (hoveredRegion === region.id) return region.hoverColor;
    return region.color;
  };

  const getRegionById = (id: string) => {
    return regions.find((region) => region.id === id);
  };

  const activeRegionData = activeRegion ? getRegionById(activeRegion) : null;

  return (
    <Card className="border-none shadow-lg overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <MapPin className="h-5 w-5 text-emerald-600" />
            Carte de distribution régionale
          </CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Cliquez sur une région pour voir ses statistiques détaillées
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[400px]">
          <div className="col-span-2 relative flex items-center justify-center bg-gray-50 p-4">
            {!isMapLoaded ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <svg
                  ref={mapRef}
                  viewBox="0 0 350 350"
                  className="w-full h-full"
                >
                  {regions.map((region) => (
                    <g key={region.id}>
                      <motion.path
                        d={region.path}
                        fill={getRegionColor(region)}
                        stroke="#4b5563"
                        strokeWidth="1"
                        onClick={() => handleRegionClick(region.id)}
                        onMouseEnter={() => setHoveredRegion(region.id)}
                        onMouseLeave={() => setHoveredRegion(null)}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        style={{ cursor: "pointer" }}
                      />
                      <motion.text
                        x={region.coordinates.x}
                        y={region.coordinates.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="12"
                        fontWeight="500"
                        fill="#1f2937"
                        pointerEvents="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {region.name}
                      </motion.text>

                      {/* Animated pin for active region */}
                      {activeRegion === region.id && (
                        <motion.circle
                          cx={region.coordinates.x}
                          cy={region.coordinates.y - 20}
                          r={5}
                          fill="#059669"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                        />
                      )}
                    </g>
                  ))}
                </svg>

                {/* Region markers with animations */}
                {regions.map((region, index) => (
                  <motion.div
                    key={region.id}
                    className="absolute"
                    style={{
                      left: `${(region.coordinates.x / 350) * 100}%`,
                      top: `${(region.coordinates.y / 350) * 100}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className={`h-6 w-6 rounded-full border-2 ${
                            activeRegion === region.id
                              ? "border-emerald-600 bg-emerald-100"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          <span className="sr-only">{region.name}</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-64 p-0">
                        <div className="p-4">
                          <h4 className="font-semibold">{region.name}</h4>
                          <div className="mt-2 space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm flex items-center gap-1">
                                <School className="h-3.5 w-3.5" /> Écoles
                              </span>
                              <span className="font-medium">
                                {region.stats.schools.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm flex items-center gap-1">
                                <Users className="h-3.5 w-3.5" /> Élèves
                              </span>
                              <span className="font-medium">
                                {region.stats.students.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm flex items-center gap-1">
                                <GraduationCap className="h-3.5 w-3.5" />{" "}
                                Enseignants
                              </span>
                              <span className="font-medium">
                                {region.stats.teachers.toLocaleString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm flex items-center gap-1">
                                <TrendingUp className="h-3.5 w-3.5" /> Taux de
                                réussite
                              </span>
                              <span className="font-medium">
                                {region.stats.successRate}%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="border-t p-2 bg-gray-50">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full justify-between text-xs"
                            onClick={() => handleRegionClick(region.id)}
                          >
                            Voir détails
                            <ChevronRight className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          <div className="p-4 bg-white">
            {activeRegionData ? (
              <motion.div
                key={activeRegionData.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">
                    {activeRegionData.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant="outline"
                      className="bg-emerald-50 text-emerald-700 border-emerald-200"
                    >
                      {filters.academicYear}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200"
                    >
                      {filters.schoolType === "all"
                        ? "Tous types"
                        : filters.schoolType}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-emerald-100">
                          <School className="h-4 w-4 text-emerald-700" />
                        </div>
                        <span className="font-medium">Écoles</span>
                      </div>
                      <span className="text-lg font-semibold">
                        {activeRegionData.stats.schools.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      22% des écoles nationales
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-blue-100">
                          <Users className="h-4 w-4 text-blue-700" />
                        </div>
                        <span className="font-medium">Élèves</span>
                      </div>
                      <span className="text-lg font-semibold">
                        {activeRegionData.stats.students.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      Ratio élèves/enseignant:{" "}
                      {Math.round(
                        activeRegionData.stats.students /
                          activeRegionData.stats.teachers
                      )}
                      :1
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-purple-100">
                          <GraduationCap className="h-4 w-4 text-purple-700" />
                        </div>
                        <span className="font-medium">Enseignants</span>
                      </div>
                      <span className="text-lg font-semibold">
                        {activeRegionData.stats.teachers.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {Math.round(
                        activeRegionData.stats.teachers /
                          activeRegionData.stats.schools
                      )}{" "}
                      enseignants par école en moyenne
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="mt-4 w-full border-dashed">
                  Voir rapport complet
                </Button>
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <MapPin className="h-10 w-10 text-gray-300 mb-2" />
                <h3 className="text-lg font-medium text-gray-700">
                  Sélectionnez une région
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Cliquez sur une région de la carte pour voir ses statistiques
                  détaillées
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}