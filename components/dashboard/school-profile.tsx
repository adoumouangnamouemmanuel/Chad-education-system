"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Edit,
  MapPin,
  Wifi,
  Zap,
  Building2,
  BookOpen,
  Droplets,
  Info,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SchoolProfile() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Sample school data
  const school = {
    name: "Lycée National de N'Djamena",
    type: "Public",
    registrationNumber: "SCH-2023-1234",
    establishedYear: 1975,
    location: {
      region: "N'Djamena",
      department: "N'Djamena",
      prefecture: "N'Djamena",
      subPrefecture: "1st Arrondissement",
      canton: "Centre",
      cityOrVillage: "N'Djamena",
    },
    infrastructure: {
      classrooms: {
        total: 28,
        usable: 25,
      },
      electricity: true,
      waterSource: "Municipal Water Supply",
      toilets: "12 (6 for boys, 6 for girls)",
      library: true,
      laboratory: true,
      sportsField: true,
      canteen: true,
      boarding: false,
      internetAccess: true,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  };

  const otherFacilities = [
    { name: "Laboratory", value: school.infrastructure.laboratory },
    { name: "Sports Field", value: school.infrastructure.sportsField },
    { name: "Canteen", value: school.infrastructure.canteen },
    { name: "Boarding", value: school.infrastructure.boarding },
  ];

  return (
    <TooltipProvider>
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white shadow-[0_10px_30px_rgba(59,130,246,0.3)]"
          variants={itemVariants}
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col md:flex-row justify-between gap-4">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-semibold">{school.name}</h3>
              <div className="flex items-center gap-1 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>
                  {school.location.cityOrVillage}, {school.location.region}
                </span>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/20 text-white hover:bg-white/30 border-white/40"
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Separator className="bg-blue-100" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold uppercase text-blue-600 mb-4 flex items-center">
              Basic Information
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="ml-2"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-blue-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-blue-50 border-blue-100 text-blue-700">
                    <p>Administrative information about the school</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            </h4>
            <motion.div
              className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              whileHover={{
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                y: -2,
              }}
              transition={{ duration: 0.2 }}
            >
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt className="font-medium text-blue-700">School Type</dt>
                <dd className="text-gray-700">{school.type}</dd>

                <dt className="font-medium text-blue-700">
                  Registration Number
                </dt>
                <dd className="text-gray-700">{school.registrationNumber}</dd>

                <dt className="font-medium text-blue-700">Established Year</dt>
                <dd className="text-gray-700">{school.establishedYear}</dd>

                <dt className="font-medium text-blue-700">Region</dt>
                <dd className="text-gray-700">{school.location.region}</dd>

                <dt className="font-medium text-blue-700">Department</dt>
                <dd className="text-gray-700">{school.location.department}</dd>

                <dt className="font-medium text-blue-700">Prefecture</dt>
                <dd className="text-gray-700">{school.location.prefecture}</dd>

                <dt className="font-medium text-blue-700">Sub-Prefecture</dt>
                <dd className="text-gray-700">
                  {school.location.subPrefecture}
                </dd>

                <dt className="font-medium text-blue-700">Canton</dt>
                <dd className="text-gray-700">{school.location.canton}</dd>
              </dl>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-semibold uppercase text-blue-600 mb-4 flex items-center">
              Infrastructure
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="ml-2"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-blue-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-blue-50 border-blue-100 text-blue-700">
                    <p>Physical facilities and resources</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard("classrooms")}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
              >
                <div className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-600">
                      Classrooms
                    </div>
                    <div className="text-xl font-bold text-blue-700">
                      {school.infrastructure.classrooms.usable} /{" "}
                      {school.infrastructure.classrooms.total}
                    </div>
                    <AnimatePresence>
                      {hoveredCard === "classrooms" && (
                        <motion.div
                          className="w-full h-1.5 bg-blue-100 rounded-full mt-1 overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <motion.div
                            className="h-full bg-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${
                                (school.infrastructure.classrooms.usable /
                                  school.infrastructure.classrooms.total) *
                                100
                              }%`,
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard("electricity")}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
              >
                <div className="p-4 flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      school.infrastructure.electricity
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-600">
                      Electricity
                    </div>
                    <div
                      className={`text-xl font-bold ${
                        school.infrastructure.electricity
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {school.infrastructure.electricity ? "Yes" : "No"}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard("internet")}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
              >
                <div className="p-4 flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      school.infrastructure.internetAccess
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    <Wifi className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-600">
                      Internet
                    </div>
                    <div
                      className={`text-xl font-bold ${
                        school.infrastructure.internetAccess
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {school.infrastructure.internetAccess ? "Yes" : "No"}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard("library")}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
              >
                <div className="p-4 flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      school.infrastructure.library
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-600">
                      Library
                    </div>
                    <div
                      className={`text-xl font-bold ${
                        school.infrastructure.library
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {school.infrastructure.library ? "Yes" : "No"}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-4 grid grid-cols-1 gap-4"
            >
              <motion.div
                className="bg-white rounded-xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                whileHover={{
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                  y: -2,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="h-5 w-5 text-blue-600" />
                  <div className="font-medium text-blue-700">Facilities</div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {otherFacilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg"
                      whileHover={{ x: 3 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      {facility.value ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-sm text-gray-700">
                        {facility.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-600" />
                    <div className="font-medium text-blue-700">
                      Water Source
                    </div>
                  </div>
                  <div className="text-sm ml-6 p-2 bg-blue-50 rounded-lg text-gray-700">
                    {school.infrastructure.waterSource}
                  </div>

                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-blue-600" />
                    <div className="font-medium text-blue-700">Toilets</div>
                  </div>
                  <div className="text-sm ml-6 p-2 bg-blue-50 rounded-lg text-gray-700">
                    {school.infrastructure.toilets}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </TooltipProvider>
  );
}
