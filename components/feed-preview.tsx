"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function FeedPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const demoItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      title: "Premium Watch",
      price: "$299",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      title: "Wireless Headphones",
      price: "$199",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      title: "Camera Lens",
      price: "$499",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % demoItems.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + demoItems.length) % demoItems.length);
  };

  return (
    <>
      {/* Demo Button that would be embedded on client websites */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-yellow-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        View Collection
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-[600px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <img
                        src={demoItems[currentIndex].image}
                        alt={demoItems[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                        <h3 className="text-white text-2xl font-bold mb-2">
                          {demoItems[currentIndex].title}
                        </h3>
                        <p className="text-white text-xl">{demoItems[currentIndex].price}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 flex justify-center space-x-2">
              {demoItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-purple-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}