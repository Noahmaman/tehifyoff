"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, TrendingUp, DollarSign } from "lucide-react";

export function CampaignMetrics() {
  const metrics = [
    {
      name: "Active Campaigns",
      value: "12",
      change: "+2.5%",
      icon: Target,
    },
    {
      name: "Total Reach",
      value: "854K",
      change: "+14.2%",
      icon: Users,
    },
    {
      name: "Conversion Rate",
      value: "3.2%",
      change: "+0.8%",
      icon: TrendingUp,
    },
    {
      name: "Total Spend",
      value: "$12.4K",
      change: "+5.4%",
      icon: DollarSign,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <metric.icon className="h-5 w-5 text-purple-600" />
              <span className={`text-sm ${
                metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.change}
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.name}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}