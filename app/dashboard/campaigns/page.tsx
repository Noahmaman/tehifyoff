"use client";

import { useState } from "react";
import { CampaignList } from "@/components/campaigns/campaign-list";
import { CampaignMetrics } from "@/components/campaigns/campaign-metrics";
import { CampaignCreator } from "@/components/campaigns/campaign-creator";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CampaignsPage() {
  const [showCreator, setShowCreator] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Campaigns</h1>
          <p className="text-muted-foreground">
            Create and manage your advertising campaigns
          </p>
        </div>
        <Button
          onClick={() => setShowCreator(true)}
          className="bg-gradient-to-r from-purple-600 to-yellow-500 hover:from-purple-700 hover:to-yellow-600"
        >
          <Plus className="mr-2 h-4 w-4" /> New Campaign
        </Button>
      </div>

      <CampaignMetrics />
      <CampaignList />
      <CampaignCreator open={showCreator} onClose={() => setShowCreator(false)} />
    </div>
  );
}