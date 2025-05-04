"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Sample data for the chart
const generateData = () => [
  { name: "N'Djamena", average: 68, national: 62 },
  { name: "Logone", average: 64, national: 62 },
  { name: "Mayo-Kebbi", average: 61, national: 62 },
  { name: "Ouaddaï", average: 59, national: 62 },
  { name: "Kanem", average: 57, national: 62 },
  { name: "Batha", average: 56, national: 62 },
]

export function PerformanceChart() {
  const [data, setData] = useState<{ name: string; average: number; national: number }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setData(generateData())
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="average" name="Regional Average" fill="#3b82f6" />
          <Bar dataKey="national" name="National Average" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
