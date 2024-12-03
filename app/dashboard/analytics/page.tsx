"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PerformanceMetrics } from "@/components/analytics/performance-metrics";
import { AudienceInsights } from "@/components/analytics/audience-insights";
import { CampaignAnalytics } from "@/components/analytics/campaign-analytics";
import { motion } from "framer-motion";

export default function AnalyticsPage() {
  const [currentTab, setCurrentTab] = useState("performance");

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Track and analyze your campaign performance
        </p>
      </motion.div>

      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="audience">Audience Insights</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="performance">
          <PerformanceMetrics />
        </TabsContent>

        <TabsContent value="audience">
          <AudienceInsights />
        </TabsContent>

        <TabsContent value="campaigns">
          <CampaignAnalytics />
        </TabsContent>
      </Tabs>
    </div>
  );
}