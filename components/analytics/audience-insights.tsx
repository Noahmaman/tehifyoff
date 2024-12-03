"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";

export function AudienceInsights() {
  const demographicData = [
    { name: "18-24", value: 25 },
    { name: "25-34", value: 35 },
    { name: "35-44", value: 20 },
    { name: "45+", value: 20 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-2 gap-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Age Demographics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Locations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div>
                  <div className="font-medium">{location.city}</div>
                  <div className="text-sm text-muted-foreground">{location.country}</div>
                </div>
                <div className="text-lg font-bold">{location.percentage}%</div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const locations = [
  { city: "New York", country: "United States", percentage: 25 },
  { city: "London", country: "United Kingdom", percentage: 20 },
  { city: "Paris", country: "France", percentage: 15 },
  { city: "Tokyo", country: "Japan", percentage: 12 },
  { city: "Berlin", country: "Germany", percentage: 10 },
];