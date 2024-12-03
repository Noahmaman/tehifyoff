"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Plus, MoreHorizontal, Mail, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

export function TeamMembers() {
  const [members] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Manager",
      email: "sarah@acme.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director",
      email: "michael@acme.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Content Strategist",
      email: "emily@acme.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Team Members</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" /> Add Member
        </Button>
      </div>

      <div className="divide-y">
        {members.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between py-4"
          >
            <div className="flex items-center space-x-4">
              <Avatar className="w-10 h-10">
                <img src={member.avatar} alt={member.name} className="object-cover" />
              </Avatar>
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">{member.email}</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Mail className="h-4 w-4 mr-2" /> Send Invite
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash className="h-4 w-4 mr-2" /> Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}