"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar } from "@/components/ui/avatar";
import { Globe, MoreHorizontal, ThumbsUp, MessageCircle, Share } from "lucide-react";

interface FacebookPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  adData: {
    primaryText: string;
    headline: string;
    imageUrl?: string;
    destinationUrl: string;
  };
}

export function FacebookPreview({ isOpen, onClose, adData }: FacebookPreviewProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Facebook Ad Preview</DialogTitle>
        </DialogHeader>
        <div className="bg-white rounded-lg shadow p-4 max-w-xl mx-auto">
          {/* Post Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Avatar className="w-10 h-10">
                <div className="bg-purple-600 w-full h-full flex items-center justify-center text-white font-semibold">
                  T
                </div>
              </Avatar>
              <div>
                <p className="font-semibold">Your Business Name</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span>Sponsored</span>
                  <span className="mx-1">·</span>
                  <Globe className="h-3 w-3" />
                </div>
              </div>
            </div>
            <button className="text-gray-500">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Post Content */}
          <div className="space-y-4">
            <p className="text-gray-900">{adData.primaryText}</p>
            
            {/* Ad Image */}
            <div className="relative aspect-[1.91/1] bg-gray-100 rounded-lg overflow-hidden">
              {adData.imageUrl ? (
                <img
                  src={adData.imageUrl}
                  alt="Ad preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Preview Image
                </div>
              )}
            </div>

            {/* Ad Headline and Link */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-3">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {new URL(adData.destinationUrl || "https://example.com").hostname}
                </p>
                <h3 className="font-bold text-gray-900 mt-1">{adData.headline}</h3>
              </div>
            </div>

            {/* Engagement Bar */}
            <div className="border-t pt-3">
              <div className="flex justify-between text-gray-500">
                <button className="flex items-center space-x-2 hover:text-gray-700">
                  <ThumbsUp className="h-5 w-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-gray-700">
                  <MessageCircle className="h-5 w-5" />
                  <span>Comment</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-gray-700">
                  <Share className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}