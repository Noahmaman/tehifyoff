"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Facebook, Instagram, Twitter, Youtube, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Integrations() {
  const [integrations, setIntegrations] = useState([
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      connected: true,
      status: "Connected as Acme Inc.",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      connected: true,
      status: "Connected as @acme",
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: Twitter,
      connected: false,
      status: "Not connected",
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: Youtube,
      connected: false,
      status: "Not connected",
    },
  ]);

  const toggleIntegration = (id: string) => {
    setIntegrations(
      integrations.map((integration) =>
        integration.id === id
          ? { ...integration, connected: !integration.connected }
          : integration
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="grid gap-6">
        {integrations.map((integration, index) => (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <integration.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">{integration.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {integration.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch
                    checked={integration.connected}
                    onCheckedChange={() => toggleIntegration(integration.id)}
                  />
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Website Integration */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-medium">Website Integration</h4>
              <p className="text-sm text-muted-foreground">
                Add Tehify to your website
              </p>
            </div>
          </div>
          <Button>Get Code</Button>
        </div>
      </Card>
    </motion.div>
  );
}