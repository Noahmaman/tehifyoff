"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, ExternalLink, BarChart } from "lucide-react";
import { motion } from "framer-motion";

export function CampaignList() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Sale 2024",
      status: "Active",
      budget: "$5,000",
      spent: "$2,340",
      reach: "45.2K",
      engagement: "4.8%",
      color: "bg-green-500",
    },
    {
      id: 2,
      name: "New Product Launch",
      status: "Scheduled",
      budget: "$10,000",
      spent: "$0",
      reach: "0",
      engagement: "0%",
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "Brand Awareness",
      status: "Active",
      budget: "$3,000",
      spent: "$1,250",
      reach: "28.5K",
      engagement: "3.2%",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-6">
      {campaigns.map((campaign, index) => (
        <motion.div
          key={campaign.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${campaign.color}`} />
                <CardTitle>{campaign.name}</CardTitle>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <BarChart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium">{campaign.status}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Budget</p>
                  <p className="font-medium">{campaign.budget}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Spent</p>
                  <p className="font-medium">{campaign.spent}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Reach</p>
                  <p className="font-medium">{campaign.reach}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="font-medium">{campaign.engagement}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}