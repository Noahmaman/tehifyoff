"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Settings, Copy, ExternalLink, Trash2 } from "lucide-react";
import { FeedCreator } from "@/components/feed-creator";
import { FeedPreview } from "@/components/feed-preview";
import { motion } from "framer-motion";

export default function FeedsPage() {
  const [showCreator, setShowCreator] = useState(false);
  const [feeds, setFeeds] = useState([
    {
      id: 1,
      name: "Summer Collection",
      items: 12,
      views: "2.3K",
      engagement: "4.8%",
      script: "<script src='https://tehify.com/feed/summer-collection'></script>",
    },
    {
      id: 2,
      name: "New Products",
      items: 8,
      views: "1.5K",
      engagement: "5.2%",
      script: "<script src='https://tehify.com/feed/new-products'></script>",
    },
  ]);

  const copyScript = (script: string) => {
    navigator.clipboard.writeText(script);
    // Add toast notification here
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Content Feeds</h1>
          <p className="text-muted-foreground">
            Create and manage your content feeds for website integration
          </p>
        </div>
        <Button
          onClick={() => setShowCreator(true)}
          className="bg-gradient-to-r from-purple-600 to-yellow-500 hover:from-purple-700 hover:to-yellow-600"
        >
          <Plus className="mr-2 h-4 w-4" /> Create New Feed
        </Button>
      </div>

      <div className="grid gap-6">
        {feeds.map((feed, index) => (
          <motion.div
            key={feed.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">{feed.name}</CardTitle>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Items</p>
                    <p className="text-2xl font-semibold">{feed.items}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Views</p>
                    <p className="text-2xl font-semibold">{feed.views}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Engagement</p>
                    <p className="text-2xl font-semibold">{feed.engagement}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Integration</p>
                    <div className="flex items-center mt-1">
                      <Input
                        value={feed.script}
                        readOnly
                        className="text-sm font-mono bg-gray-50"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyScript(feed.script)}
                        className="ml-2"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <FeedCreator open={showCreator} onClose={() => setShowCreator(false)} />
      <FeedPreview />
    </div>
  );
}