"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export function CampaignAnalytics() {
  const campaignData = [
    { name: "Summer Sale", impressions: 4000, clicks: 2400, conversions: 400 },
    { name: "New Product", impressions: 3000, clicks: 1398, conversions: 210 },
    { name: "Brand Awareness", impressions: 2000, clicks: 9800, conversions: 290 },
    { name: "Holiday Special", impressions: 2780, clicks: 3908, conversions: 500 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="impressions" fill="#8884d8" />
                <Bar dataKey="clicks" fill="#82ca9d" />
                <Bar dataKey="conversions" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {topCampaigns.map((campaign, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">{campaign.name}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">CTR</p>
                    <p className="text-lg font-bold">{campaign.ctr}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Conv. Rate</p>
                    <p className="text-lg font-bold">{campaign.convRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ROI</p>
                    <p className="text-lg font-bold">{campaign.roi}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const topCampaigns = [
  { name: "Summer Sale 2024", ctr: "4.8%", convRate: "2.3%", roi: "3.2x" },
  { name: "New Product Launch", ctr: "3.9%", convRate: "1.8%", roi: "2.7x" },
  { name: "Brand Awareness", ctr: "5.2%", convRate: "2.7%", roi: "3.8x" },
  { name: "Holiday Special", ctr: "4.5%", convRate: "2.1%", roi: "3.0x" },
];