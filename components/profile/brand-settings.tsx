"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export function BrandSettings() {
  const [brandColors, setBrandColors] = useState({
    primary: "#6366F1",
    secondary: "#EC4899",
    accent: "#8B5CF6",
  });

  const [fonts, setFonts] = useState({
    heading: "Inter",
    body: "Inter",
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Color Palette */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Brand Colors</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label>Primary Color</Label>
            <div className="flex space-x-2">
              <Input
                type="color"
                value={brandColors.primary}
                onChange={(e) =>
                  setBrandColors({ ...brandColors, primary: e.target.value })
                }
                className="w-12 h-12 p-1 rounded-lg"
              />
              <Input
                value={brandColors.primary}
                onChange={(e) =>
                  setBrandColors({ ...brandColors, primary: e.target.value })
                }
                className="flex-1"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Secondary Color</Label>
            <div className="flex space-x-2">
              <Input
                type="color"
                value={brandColors.secondary}
                onChange={(e) =>
                  setBrandColors({ ...brandColors, secondary: e.target.value })
                }
                className="w-12 h-12 p-1 rounded-lg"
              />
              <Input
                value={brandColors.secondary}
                onChange={(e) =>
                  setBrandColors({ ...brandColors, secondary: e.target.value })
                }
                className="flex-1"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Accent Color</Label>
            <div className="flex space-x-2">
              <Input
                type="color"
                value={brandColors.accent}
                onChange={(e) =>
                  setBrandColors({ ...brandColors, accent: e.target.value })
                }
                className="w-12 h-12 p-1 rounded-lg"
              />
              <Input
                value={brandColors.accent}
                onChange={(e) =>
                  setBrandColors({ ...brandColors, accent: e.target.value })
                }
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Typography</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Heading Font</Label>
            <select
              value={fonts.heading}
              onChange={(e) => setFonts({ ...fonts, heading: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2"
            >
              <option>Inter</option>
              <option>Roboto</option>
              <option>Open Sans</option>
              <option>Montserrat</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Body Font</Label>
            <select
              value={fonts.body}
              onChange={(e) => setFonts({ ...fonts, body: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2"
            >
              <option>Inter</option>
              <option>Roboto</option>
              <option>Open Sans</option>
              <option>Montserrat</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="bg-gradient-to-r from-purple-600 to-yellow-500">
          Save Brand Settings
        </Button>
      </div>
    </motion.div>
  );
}