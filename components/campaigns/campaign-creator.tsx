"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface CampaignCreatorProps {
  open: boolean;
  onClose: () => void;
}

export function CampaignCreator({ open, onClose }: CampaignCreatorProps) {
  const [currentTab, setCurrentTab] = useState("details");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Create New Campaign</DialogTitle>
        </DialogHeader>

        <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="grid grid-cols-3 w-[400px]">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="targeting">Targeting</TabsTrigger>
            <TabsTrigger value="budget">Budget</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div>
              <Label>Campaign Name</Label>
              <Input placeholder="Enter campaign name..." className="mt-1" />
            </div>
            <div>
              <Label>Campaign Objective</Label>
              <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2">
                <option>Brand Awareness</option>
                <option>Traffic</option>
                <option>Engagement</option>
                <option>Conversions</option>
              </select>
            </div>
          </TabsContent>

          <TabsContent value="targeting" className="space-y-4">
            <div>
              <Label>Target Audience</Label>
              <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2">
                <option>Custom Audience</option>
                <option>Lookalike Audience</option>
                <option>Interest-based</option>
              </select>
            </div>
            <div>
              <Label>Location</Label>
              <Input placeholder="Enter locations..." className="mt-1" />
            </div>
          </TabsContent>

          <TabsContent value="budget" className="space-y-4">
            <div>
              <Label>Daily Budget</Label>
              <Input type="number" placeholder="Enter amount..." className="mt-1" />
            </div>
            <div>
              <Label>Campaign Duration</Label>
              <select className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2">
                <option>Continuous</option>
                <option>7 days</option>
                <option>14 days</option>
                <option>30 days</option>
                <option>Custom</option>
              </select>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-yellow-500">
            Create Campaign
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}