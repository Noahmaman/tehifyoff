"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyDetails } from "@/components/profile/company-details";
import { BrandSettings } from "@/components/profile/brand-settings";
import { TeamMembers } from "@/components/profile/team-members";
import { Integrations } from "@/components/profile/integrations";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const [currentTab, setCurrentTab] = useState("company");

  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold mb-2">Company Profile</h1>
        <p className="text-muted-foreground">
          Manage your company information and settings
        </p>
      </motion.div>

      <Card>
        <CardContent className="py-6">
          <Tabs value={currentTab} onValueChange={setCurrentTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="company">Company Details</TabsTrigger>
              <TabsTrigger value="brand">Brand Settings</TabsTrigger>
              <TabsTrigger value="team">Team Members</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>

            <TabsContent value="company">
              <CompanyDetails />
            </TabsContent>

            <TabsContent value="brand">
              <BrandSettings />
            </TabsContent>

            <TabsContent value="team">
              <TeamMembers />
            </TabsContent>

            <TabsContent value="integrations">
              <Integrations />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}