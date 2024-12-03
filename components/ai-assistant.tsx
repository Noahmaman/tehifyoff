"use client";

import { useState } from "react";
import { Bot, Upload, Image, RefreshCw, MessageSquare, BarChart3, Target, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I can help analyze your ad creatives and suggest improvements. Upload an image or share your ad copy to get started.',
    },
  ]);
  const [userInput, setUserInput] = useState('');

  const quickLinks = [
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "Campaigns", href: "/dashboard/campaigns", icon: Target },
    { name: "Analytics", href: "/dashboard/analytics", icon: Activity },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setMessages(prev => [...prev,
        { role: 'user', content: `Uploaded: ${file.name}` },
        { role: 'assistant', content: 'Analyzing your creative...' },
        { role: 'assistant', content: `Analysis complete! Here's my feedback:
          • Strong visual hierarchy
          • Colors align well with brand guidelines
          • Consider adding more white space
          • Try testing a stronger call-to-action
          
          Would you like me to generate some alternative versions?` }
      ]);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: userInput }]);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I've analyzed your request. Here's a suggested improvement for your ad copy: Try emphasizing the benefit more directly and adding social proof. For example:\n\n'Transform your ad performance with AI-powered insights. Join 10,000+ marketers who've increased ROI by 40% with our platform.'"
      }]);
    }, 1000);
    setUserInput('');
  };

  return (
    <Card className="mb-8">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Bot className="h-5 w-5 text-purple-600 mr-2" />
            AI Creative Assistant
          </CardTitle>
          <div className="flex gap-2">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload Section */}
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center hover:border-purple-500 transition-colors">
              <input
                type="file"
                id="creative-upload"
                className="hidden"
                onChange={handleFileUpload}
                accept="image/*"
              />
              <label
                htmlFor="creative-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload your creative for AI analysis
                </p>
                <Button variant="outline" size="sm">
                  Choose File
                </Button>
              </label>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1" variant="outline">
                <Image className="h-4 w-4 mr-2" />
                Recent Creatives
              </Button>
              <Button className="flex-1" variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                AI Generate
              </Button>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="border rounded-lg flex flex-col h-[400px]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex",
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2",
                        message.role === 'user'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-800'
                      )}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <form
              onSubmit={handleSendMessage}
              className="border-t p-4 flex gap-2"
            >
              <Input
                placeholder="Ask for suggestions or feedback..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <Button type="submit">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}