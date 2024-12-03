"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

export function CompanyDetails() {
  const [companyData, setCompanyData] = useState({
    name: "Acme Inc.",
    website: "https://acme.com",
    industry: "Technology",
    size: "50-100",
    description: "Leading provider of innovative solutions...",
    logo: "/placeholder-logo.png",
  });

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCompanyData({ ...companyData, logo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Logo Upload */}
      <div className="flex items-center space-x-6">
        <Avatar className="w-24 h-24">
          <img src={companyData.logo} alt="Company logo" className="object-cover" />
        </Avatar>
        <div>
          <Label htmlFor="logo-upload" className="cursor-pointer">
            <div className="flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>Upload new logo</span>
            </div>
          </Label>
          <input
            id="logo-upload"
            type="file"
            className="hidden"
            onChange={handleLogoUpload}
            accept="image/*"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Recommended: 400x400px or larger
          </p>
        </div>
      </div>

      {/* Company Information Form */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Company Name</Label>
          <Input
            value={companyData.name}
            onChange={(e) =>
              setCompanyData({ ...companyData, name: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label>Website</Label>
          <Input
            value={companyData.website}
            onChange={(e) =>
              setCompanyData({ ...companyData, website: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label>Industry</Label>
          <Input
            value={companyData.industry}
            onChange={(e) =>
              setCompanyData({ ...companyData, industry: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label>Company Size</Label>
          <select
            value={companyData.size}
            onChange={(e) =>
              setCompanyData({ ...companyData, size: e.target.value })
            }
            className="w-full rounded-md border border-input bg-background px-3 py-2"
          >
            <option>1-10</option>
            <option>11-50</option>
            <option>50-100</option>
            <option>101-500</option>
            <option>500+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Company Description</Label>
        <Textarea
          value={companyData.description}
          onChange={(e) =>
            setCompanyData({ ...companyData, description: e.target.value })
          }
          rows={4}
        />
      </div>

      <div className="flex justify-end">
        <Button className="bg-gradient-to-r from-purple-600 to-yellow-500">
          Save Changes
        </Button>
      </div>
    </motion.div>
  );
}