"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export function PerformanceMetrics() {
  const data = [
    { date: "Jan", impressions: 4000, clicks: 2400, conversions: 400 },
    { date: "Feb", impressions: 3000, clicks: 1398, conversions: 210 },
    { date: "Mar", impressions: 2000, clicks: 9800, conversions: 290 },
    { date: "Apr", impressions: 2780, clicks: 3908, conversions: 500 },
    { date: "May", impressions: 1890, clicks: 4800, conversions: 380 },
    { date: "Jun", impressions: 2390, clicks: 3800, conversions: 420 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Overall Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="impressions" stroke="#8884d8" />
                <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
                <Line type="monotone" dataKey="conversions" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold mb-2">{metric.value}</div>
                <p className="text-muted-foreground">{metric.label}</p>
                <div className={`text-sm mt-2 ${
                  metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.trend}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const metrics = [
  { label: "Total Impressions", value: "1.2M", trend: "+12.3% vs last month" },
  { label: "Click-through Rate", value: "4.8%", trend: "+0.5% vs last month" },
  { label: "Conversion Rate", value: "2.3%", trend: "-0.1% vs last month" },
];