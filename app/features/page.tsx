import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Shield,
  Users,
  BarChart,
  Cloud,
  Globe,
  Clock,
  Lock,
} from "lucide-react";

export default function Features() {
  return (
    <div className="py-20 bg-purple-50 dark:bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to streamline your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <feature.icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized platform.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security to keep your data safe and protected.",
    icon: Shield,
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with your team in real-time.",
    icon: Users,
  },
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights with comprehensive analytics tools.",
    icon: BarChart,
  },
  {
    title: "Cloud Storage",
    description: "Secure cloud storage for all your important files and data.",
    icon: Cloud,
  },
  {
    title: "Global Access",
    description: "Access your workspace from anywhere in the world.",
    icon: Globe,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support to help you succeed.",
    icon: Clock,
  },
  {
    title: "Data Privacy",
    description: "Your data is encrypted and protected at all times.",
    icon: Lock,
  },
];