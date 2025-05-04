"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// This is a simplified placeholder for the actual map component
// In a real implementation, you would use a proper mapping library like react-leaflet or react-simple-maps
export function RegionalMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null)

  const regions = [
    { id: "ndjamena", name: "N'Djamena", schools: 245, students: 78500, color: "#3498db" },
    { id: "logone", name: "Logone Oriental", schools: 312, students: 45600, color: "#2ecc71" },
    { id: "mayo-kebbi", name: "Mayo-Kebbi", schools: 287, students: 39800, color: "#9b59b6" },
    { id: "ouaddai", name: "Ouaddaï", schools: 198, students: 28700, color: "#f1c40f" },
    { id: "kanem", name: "Kanem", schools: 156, students: 19200, color: "#e74c3c" },
    { id: "batha", name: "Batha", schools: 143, students: 17800, color: "#1abc9c" },
  ]

  return (
    <div className="h-[400px] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <p>Interactive map of Chad's regions</p>
          <p className="text-sm">(Placeholder for actual map implementation)</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="grid grid-cols-3 gap-2">
          {regions.map((region) => (
            <motion.div
              key={region.id}
              whileHover={{ scale: 1.05 }}
              className="p-3 rounded-lg cursor-pointer"
              style={{ backgroundColor: `${region.color}20` }}
              onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
            >
              <div className="text-sm font-medium" style={{ color: region.color }}>
                {region.name}
              </div>
              <div className="text-xs text-muted-foreground">{region.schools} schools</div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeRegion && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border"
        >
          {regions.find((r) => r.id === activeRegion)?.name} Region Details
        </motion.div>
      )}
    </div>
  )
}
