"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AlertsNotifications } from "./alerts-notifications";
import { DashboardFilters } from "./dashboard-filters";
import { DashboardTabs } from "./dashboard-tabs";
import { EnhancedSchoolsTable } from "./enhanced-schools-table";
import { NationalStatistics } from "./national-statistics";
import { PerformanceCharts } from "./performance-charts";
import { QuickAccess } from "./quick-access";
import { RegionalMap } from "./regional-map";
import { SecondaryStatistics } from "./secondary-statistics";
import { ApprovalsTab } from "./tabs/approvals-tab";
import { InfrastructureTab } from "./tabs/infrastructure-tab";

export function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("overview");
  const [filters, setFilters] = useState({
    region: "all",
    schoolType: "all",
    timeframe: "year",
    academicYear: "2024-2025",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <motion.div
      className="p-4 md:p-6 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardFilters filters={filters} onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className="lg:col-span-2 space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <NationalStatistics filters={filters} />
          <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "overview" && (
            <>
              <SecondaryStatistics filters={filters} />
              <RegionalMap filters={filters} />
              <EnhancedSchoolsTable filters={filters} />
            </>
          )}

          {activeTab === "performance" && <PerformanceCharts />}
          {activeTab === "infrastructure" && <InfrastructureTab />}
          {activeTab === "approvals" && <ApprovalsTab />}
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AlertsNotifications />
          <QuickAccess />
        </motion.div>
      </div>
    </motion.div>
  );
}
