"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageCircle, Bookmark, Send, MoreHorizontal } from "lucide-react";

interface InstagramPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  adData: {
    primaryText: string;
    headline: string;
    imageUrl?: string;
    destinationUrl: string;
  };
}

export function InstagramPreview({ isOpen, onClose, adData }: InstagramPreviewProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto h-[80vh] p-0 bg-transparent border-none">
        {/* iPhone Frame */}
        <div className="relative w-full h-full max-w-[375px] mx-auto bg-black rounded-[3rem] p-3 shadow-2xl">
          {/* iPhone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl"></div>
          
          {/* Screen Content */}
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* Instagram Post */}
            <div className="h-full overflow-y-auto">
              {/* Post Header */}
              <div className="flex items-center justify-between p-3 border-b">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-500 w-full h-full flex items-center justify-center text-white text-xs font-semibold">
                      T
                    </div>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">your_business</p>
                    <p className="text-xs text-gray-500">Sponsored</p>
                  </div>
                </div>
                <button>
                  <MoreHorizontal className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Post Image */}
              <div className="aspect-square bg-gray-100">
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

              {/* Action Buttons */}
              <div className="p-3">
                <div className="flex justify-between mb-2">
                  <div className="flex space-x-4">
                    <Heart className="h-6 w-6" />
                    <MessageCircle className="h-6 w-6" />
                    <Send className="h-6 w-6" />
                  </div>
                  <Bookmark className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold mb-1">1,234 likes</p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">your_business</span>{" "}
                    {adData.primaryText}
                  </p>
                  <p className="text-sm text-gray-500">View all 48 comments</p>
                  <p className="text-xs text-gray-400 uppercase">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}