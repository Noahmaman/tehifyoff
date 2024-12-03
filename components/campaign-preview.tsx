"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

interface CampaignPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  campaign: {
    name: string;
    audience: string;
    budget: string;
    duration: string;
  };
}

export function CampaignPreview({ isOpen, onClose, campaign }: CampaignPreviewProps) {
  if (!campaign) return null;

  const handlePreviewInNewTab = () => {
    const previewUrl = `/campaign-preview/${encodeURIComponent(campaign.name)}`;
    window.open(previewUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Campaign Preview: {campaign.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Campaign Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Target Audience</p>
                    <p className="font-medium">{campaign.audience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Budget</p>
                    <p className="font-medium">{campaign.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">{campaign.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Preview</h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              Campaign Preview Visualization
            </div>
          </Card>

          <button
            onClick={handlePreviewInNewTab}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            Open in New Tab
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}