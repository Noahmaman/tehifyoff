"use client";

import Lottie from "lottie-react";
import analyticsAnimation from "@/public/animations/analytics.json";
import { motion } from "framer-motion";

export function HeroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full min-h-[500px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-yellow-500/10 rounded-2xl transform -rotate-1"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-purple-500/10 to-yellow-500/10 rounded-2xl transform rotate-1"></div>
      
      <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-purple-100 dark:border-purple-800 shadow-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm text-gray-500">AI Campaign Analytics</div>
        </div>

        <div className="relative h-[400px]">
          <Lottie
            animationData={analyticsAnimation}
            loop={true}
            className="w-full h-full"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 dark:from-gray-900/90 to-transparent p-6"
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "ROI", value: "+126%", color: "text-green-500" },
                { label: "CTR", value: "4.8%", color: "text-blue-500" },
                { label: "Conv.", value: "12.3%", color: "text-purple-500" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center shadow-lg"
                >
                  <div className={`text-lg font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}