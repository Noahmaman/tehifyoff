"use client";

import {
  BarChart,
  Users,
  Activity,
  Settings,
  PlusCircle,
  Bell,
  Target,
  Sparkles,
  DollarSign,
  TrendingUp,
  Facebook,
  Image,
  Type,
  Link as LinkIcon,
  Eye,
  Menu,
  Instagram,
  X,
  Bot,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FacebookPreview } from "@/components/facebook-preview";
import { InstagramPreview } from "@/components/instagram-preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AIAssistant } from "@/components/ai-assistant";

export default function Dashboard() {
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [liveStats, setLiveStats] = useState(stats);
  const [selectedPlatform, setSelectedPlatform] = useState("facebook");
  const [showPreview, setShowPreview] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adData, setAdData] = useState({
    primaryText: "",
    headline: "",
    imageUrl: "",
    destinationUrl: "",
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((currentStats) =>
        currentStats.map((stat) => ({
          ...stat,
          value: updateStatValue(stat.value),
          change: updateChangeValue(stat.change),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setAdData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-20 bg-white dark:bg-card border-b p-4">
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Sidebar */}
      <div className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out bg-white dark:bg-card border-r",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Mobile Close Button */}
        <div className="lg:hidden absolute right-2 top-2">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-600">Tehify</h2>
        </div>
        <nav className="mt-6">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={cn(
        "transition-all duration-200 ease-in-out",
        "lg:ml-64 p-4 lg:p-8",
        "mt-16 lg:mt-0"
      )}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <h1 className="text-2xl font-bold">Ad Campaign Dashboard</h1>
          <div className="flex items-center space-x-4 w-full lg:w-auto">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 flex-1 lg:flex-none"
              onClick={() => setShowNewCampaign(true)}
            >
              <PlusCircle className="h-5 w-5 mr-2" /> New Campaign
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {liveStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Assistant */}
        <AIAssistant />

        {/* New Campaign Form */}
        {showNewCampaign && (
          <Card className="mb-8 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
                Create New Campaign
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="facebook" className="w-full">
                <TabsList className="mb-6 flex flex-wrap">
                  <TabsTrigger value="facebook" onClick={() => setSelectedPlatform("facebook")}>
                    <Facebook className="h-4 w-4 mr-2" /> Facebook
                  </TabsTrigger>
                  <TabsTrigger value="instagram" onClick={() => setSelectedPlatform("instagram")}>
                    <Instagram className="h-4 w-4 mr-2" /> Instagram
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="facebook" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Campaign Details */}
                    <div className="space-y-4">
                      <div>
                        <Label>Campaign Name</Label>
                        <Input placeholder="Enter campaign name" />
                      </div>
                      <div>
                        <Label>Campaign Objective</Label>
                        <select className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-800">
                          <option>Brand Awareness</option>
                          <option>Traffic</option>
                          <option>Engagement</option>
                          <option>Leads</option>
                          <option>Sales</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label>Daily Budget</Label>
                        <Input type="number" placeholder="Enter daily budget" />
                      </div>
                      <div>
                        <Label>Duration</Label>
                        <select className="w-full p-2 rounded-md border border-gray-200 dark:border-gray-800">
                          <option>7 days</option>
                          <option>14 days</option>
                          <option>30 days</option>
                          <option>Custom</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Ad Creative */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Ad Creative</h3>
                      <Button
                        variant="outline"
                        onClick={() => setShowPreview(true)}
                        className="flex items-center space-x-2"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Preview Ad
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>Primary Text</Label>
                        <Input
                          placeholder="Enter your ad's main text"
                          value={adData.primaryText}
                          onChange={(e) => handleInputChange("primaryText", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Headline</Label>
                        <Input
                          placeholder="Enter your headline"
                          value={adData.headline}
                          onChange={(e) => handleInputChange("headline", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Media</Label>
                      <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center">
                        <div className="flex flex-col items-center">
                          <Image className="h-12 w-12 text-gray-400 mb-4" />
                          <p className="text-sm text-muted-foreground">
                            Drag and drop your image or video here, or click to browse
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label>Destination URL</Label>
                      <div className="flex items-center space-x-2">
                        <LinkIcon className="h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Enter your landing page URL"
                          value={adData.destinationUrl}
                          onChange={(e) => handleInputChange("destinationUrl", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="instagram">
                  {/* Instagram-specific form fields */}
                  <div className="space-y-6">
                    {/* Similar structure to Facebook but with Instagram-specific options */}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end mt-6 space-x-4">
                <Button variant="outline" onClick={() => setShowNewCampaign(false)}>
                  Cancel
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Create Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Preview Modals */}
        {selectedPlatform === "facebook" ? (
          <FacebookPreview
            isOpen={showPreview}
            onClose={() => setShowPreview(false)}
            adData={adData}
          />
        ) : (
          <InstagramPreview
            isOpen={showPreview}
            onClose={() => setShowPreview(false)}
            adData={adData}
          />
        )}

        {/* Active Campaigns */}
        <Card>
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-4"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full mr-4 ${campaign.color}`}
                    />
                    <div>
                      <p className="font-medium">{campaign.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {campaign.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 w-full sm:w-auto">
                    <div className="text-right">
                      <p className="font-medium">{campaign.budget}</p>
                      <p className="text-sm text-muted-foreground">Budget</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const sidebarItems = [
  { name: "Dashboard", icon: BarChart, href: "/dashboard" },
  { name: "Campaigns", icon: Target, href: "/dashboard/campaigns" },
  { name: "Analytics", icon: Activity, href: "/dashboard/analytics" },
  { name: "AI Assistant", icon: Bot, href: "/dashboard/ai" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

const stats = [
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

const campaigns = [
  {
    name: "Summer Sale 2024",
    status: "Running - Day 12 of 30",
    budget: "$5,000",
    color: "bg-green-500",
  },
  {
    name: "New Product Launch",
    status: "Starting Tomorrow",
    budget: "$10,000",
    color: "bg-blue-500",
  },
  {
    name: "Brand Awareness",
    status: "Running - Day 5 of 14",
    budget: "$3,000",
    color: "bg-purple-500",
  },
];

function updateStatValue(value: string) {
  if (value.includes('K')) {
    const num = parseFloat(value) + (Math.random() - 0.5) * 0.1;
    return `${num.toFixed(1)}K`;
  }
  if (value.includes('%')) {
    const num = parseFloat(value) + (Math.random() - 0.5) * 0.2;
    return `${num.toFixed(1)}%`;
  }
  if (value.includes('$')) {
    const num = parseFloat(value.replace('$', '')) + (Math.random() - 0.5) * 0.3;
    return `$${num.toFixed(1)}K`;
  }
  return value;
}

function updateChangeValue(change: string) {
  const num = parseFloat(change) + (Math.random() - 0.5) * 0.5;
  return `${num > 0 ? '+' : ''}${num.toFixed(1)}%`;
}