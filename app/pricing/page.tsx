import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="py-20 bg-purple-50 dark:bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-card rounded-lg shadow-lg p-8 ${
                plan.featured ? "ring-2 ring-purple-600" : ""
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button
                  className={`w-full ${
                    plan.featured
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams",
    price: "29",
    featured: false,
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "1GB storage",
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "99",
    featured: true,
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "299",
    featured: false,
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "24/7 priority support",
      "Unlimited storage",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];