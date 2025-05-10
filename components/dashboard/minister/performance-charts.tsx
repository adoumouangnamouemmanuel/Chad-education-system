"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  BarChart3,
  GraduationCap,
  TrendingUp,
  Filter,
  Download,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for charts
const performanceData = [
  { region: "N'Djamena", success: 78, average: 65, national: 62 },
  { region: "Logone", success: 65, average: 58, national: 62 },
  { region: "Mayo-Kebbi", success: 72, average: 61, national: 62 },
  { region: "Moyen-Chari", success: 58, average: 52, national: 62 },
  { region: "Ouaddaï", success: 55, average: 48, national: 62 },
  { region: "Salamat", success: 52, average: 45, national: 62 },
  { region: "Kanem", success: 48, average: 42, national: 62 },
];

const enrollmentTrendData = [
  { year: "2018", primary: 420000, secondary: 180000, total: 600000 },
  { year: "2019", primary: 435000, secondary: 190000, total: 625000 },
  { year: "2020", primary: 442000, secondary: 195000, total: 637000 },
  { year: "2021", primary: 450000, secondary: 205000, total: 655000 },
  { year: "2022", primary: 465000, secondary: 215000, total: 680000 },
  { year: "2023", primary: 480000, secondary: 225000, total: 705000 },
];

const enrollmentTrendDataQuarterly = [
  { quarter: "Q1 2023", primary: 475000, secondary: 220000, total: 695000 },
  { quarter: "Q2 2023", primary: 477000, secondary: 222000, total: 699000 },
  { quarter: "Q3 2023", primary: 479000, secondary: 224000, total: 703000 },
  { quarter: "Q4 2023", primary: 480000, secondary: 225000, total: 705000 },
];

const teacherQualificationData = [
  { name: "Licence", value: 45 },
  { name: "Master", value: 25 },
  { name: "Doctorat", value: 5 },
  { name: "Diplôme d'État", value: 25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export function RegionalPerformanceChart() {
  const [chartType, setChartType] = useState("bar");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full shadow-lg border-blue-100 dark:border-blue-800">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                Performance Régionale
              </CardTitle>
              <CardDescription>
                Comparaison des taux de réussite par région
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select value={chartType} onValueChange={setChartType}>
                <SelectTrigger className="w-[130px] h-8">
                  <div className="flex items-center gap-1">
                    <Filter className="h-3 w-3" />
                    <SelectValue placeholder="Type de graphique" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bar">Barres</SelectItem>
                  <SelectItem value="line">Lignes</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="h-8">
                <Download className="h-3 w-3 mr-1" />
                Exporter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "bar" ? (
                <BarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="success"
                    name="Taux de réussite"
                    fill="#0088FE"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationBegin={200}
                  />
                  <Bar
                    dataKey="average"
                    name="Moyenne régionale"
                    fill="#00C49F"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationBegin={400}
                  />
                  <Bar
                    dataKey="national"
                    name="Moyenne nationale"
                    fill="#FFBB28"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationBegin={600}
                  />
                </BarChart>
              ) : (
                <LineChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="success"
                    name="Taux de réussite"
                    stroke="#0088FE"
                    strokeWidth={3}
                    dot={{ r: 6, strokeWidth: 2, fill: "white" }}
                    activeDot={{ r: 8 }}
                    animationDuration={1500}
                  />
                  <Line
                    type="monotone"
                    dataKey="average"
                    name="Moyenne régionale"
                    stroke="#00C49F"
                    strokeWidth={3}
                    dot={{ r: 6, strokeWidth: 2, fill: "white" }}
                    activeDot={{ r: 8 }}
                    animationDuration={1500}
                    animationBegin={300}
                  />
                  <Line
                    type="monotone"
                    dataKey="national"
                    name="Moyenne nationale"
                    stroke="#FFBB28"
                    strokeWidth={3}
                    dot={{ r: 6, strokeWidth: 2, fill: "white" }}
                    activeDot={{ r: 8 }}
                    animationDuration={1500}
                    animationBegin={600}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function EnrollmentTrendChart() {
  const [timeframe, setTimeframe] = useState("yearly");
  const [chartType, setChartType] = useState("area");

  // Select data based on timeframe
  const data =
    timeframe === "yearly" ? enrollmentTrendData : enrollmentTrendDataQuarterly;
  const xAxisKey = timeframe === "yearly" ? "year" : "quarter";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg border-blue-100 dark:border-blue-800">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Tendances d'inscription
              </CardTitle>
              <CardDescription>
                Évolution des inscriptions scolaires
              </CardDescription>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Tabs
                value={timeframe}
                onValueChange={setTimeframe}
                className="w-auto"
              >
                <TabsList className="h-8">
                  <TabsTrigger value="yearly" className="text-xs px-2 py-1">
                    Annuel
                  </TabsTrigger>
                  <TabsTrigger value="quarterly" className="text-xs px-2 py-1">
                    Trimestriel
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <Select value={chartType} onValueChange={setChartType}>
                <SelectTrigger className="w-[130px] h-8">
                  <div className="flex items-center gap-1">
                    <Filter className="h-3 w-3" />
                    <SelectValue placeholder="Type de graphique" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="area">Aire</SelectItem>
                  <SelectItem value="line">Lignes</SelectItem>
                  <SelectItem value="bar">Barres</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm" className="h-8">
                <Download className="h-3 w-3 mr-1" />
                Exporter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "area" && (
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorPrimary"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#0088FE" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#0088FE"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient
                      id="colorSecondary"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#00C49F" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#00C49F"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey={xAxisKey} />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="primary"
                    name="Primaire"
                    stroke="#0088FE"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorPrimary)"
                    animationDuration={1500}
                  />
                  <Area
                    type="monotone"
                    dataKey="secondary"
                    name="Secondaire"
                    stroke="#00C49F"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorSecondary)"
                    animationDuration={1500}
                    animationBegin={300}
                  />
                </AreaChart>
              )}

              {chartType === "line" && (
                <LineChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey={xAxisKey} />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="primary"
                    name="Primaire"
                    stroke="#0088FE"
                    strokeWidth={3}
                    dot={{ r: 6, strokeWidth: 2, fill: "white" }}
                    activeDot={{ r: 8 }}
                    animationDuration={1500}
                  />
                  <Line
                    type="monotone"
                    dataKey="secondary"
                    name="Secondaire"
                    stroke="#00C49F"
                    strokeWidth={3}
                    dot={{ r: 6, strokeWidth: 2, fill: "white" }}
                    activeDot={{ r: 8 }}
                    animationDuration={1500}
                    animationBegin={300}
                  />
                </LineChart>
              )}

              {chartType === "bar" && (
                <BarChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey={xAxisKey} />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="primary"
                    name="Primaire"
                    fill="#0088FE"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                  />
                  <Bar
                    dataKey="secondary"
                    name="Secondaire"
                    fill="#00C49F"
                    radius={[4, 4, 0, 0]}
                    animationDuration={1500}
                    animationBegin={300}
                  />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
        <CardFooter className="border-t p-3 text-xs text-muted-foreground">
          Source: Ministère de l'Éducation Nationale -{" "}
          {new Date().getFullYear()}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function TeacherQualificationChart() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full shadow-lg border-blue-100 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-500" />
            Qualifications des Enseignants
          </CardTitle>
          <CardDescription>
            Répartition des qualifications du personnel enseignant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={teacherQualificationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  animationBegin={0}
                  animationDuration={1500}
                >
                  {teacherQualificationData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e2e8f0",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function PerformanceCharts({ filters }: { filters: any }) {
  return (
    <div className="space-y-6">
      <RegionalPerformanceChart />
      <EnrollmentTrendChart />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TeacherQualificationChart />
      </div>
    </div>
  );
}
