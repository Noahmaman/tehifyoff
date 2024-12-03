"use client";

import { AIAssistant } from "@/components/ai-assistant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Wand2, History, Settings } from "lucide-react";

export default function AIDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">AI Creative Assistant</h1>
            <p className="text-muted-foreground">
              Get AI-powered insights and optimization for your ad campaigns
            </p>
          </div>
        </div>

        <Tabs defaultValue="assistant" className="space-y-8">
          <TabsList>
            <TabsTrigger value="assistant">
              <Bot className="h-4 w-4 mr-2" />
              Assistant
            </TabsTrigger>
            <TabsTrigger value="generator">
              <Wand2 className="h-4 w-4 mr-2" />
              Creative Generator
            </TabsTrigger>
            <TabsTrigger value="history">
              <History className="h-4 w-4 mr-2" />
              Analysis History
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              AI Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="assistant">
            <AIAssistant />
          </TabsContent>

          <TabsContent value="generator">
            <Card>
              <CardHeader>
                <CardTitle>AI Creative Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Coming soon: Generate new ad creatives based on your brand guidelines and past performance data.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Analysis History</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Coming soon: View past AI analyses and track improvements over time.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>AI Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Coming soon: Customize AI behavior and preferences.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}