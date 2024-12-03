"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Upload, Plus, X } from "lucide-react";

interface FeedCreatorProps {
  open: boolean;
  onClose: () => void;
}

export function FeedCreator({ open, onClose }: FeedCreatorProps) {
  const [items, setItems] = useState<Array<{ id: number; image: string; title: string }>>([]);
  const [currentTab, setCurrentTab] = useState("upload");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItems([
          ...items,
          {
            id: Date.now(),
            image: reader.result as string,
            title: file.name,
          },
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Create New Feed</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <Label>Feed Name</Label>
            <Input placeholder="Enter feed name..." className="mt-1" />
          </div>

          <Tabs value={currentTab} onValueChange={setCurrentTab}>
            <TabsList className="grid grid-cols-2 w-[400px]">
              <TabsTrigger value="upload">Upload Content</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="relative group border rounded-lg overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 object-cover"
                    />
                    <button
                      onClick={() => setItems(items.filter((i) => i.id !== item.id))}
                      className="absolute top-2 right-2 p-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <label className="border-2 border-dashed rounded-lg p-4 hover:border-purple-500 transition-colors cursor-pointer flex flex-col items-center justify-center">
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept="image/*"
                  />
                  <Plus className="h-8 w-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Add Item</span>
                </label>
              </div>
            </TabsContent>

            <TabsContent value="preview">
              <div className="border rounded-lg p-4">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  Preview will appear here
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-yellow-500">
              Create Feed
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}