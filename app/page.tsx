import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe, Shield, BarChart3, Target, Users, Rocket, ChartBar, LineChart, PieChart } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and CTA */}
            <div>
              <div className="inline-flex items-center px-4 py-1.5 mb-8 border border-purple-200 dark:border-purple-800 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium">AI-Powered Ad Campaigns</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Revolutionize Your Ad Strategy
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Create, manage, and optimize your ad campaigns with our AI-driven platform. 
                Get better results with less effort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 h-12 px-8">
                    Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Interactive Demo */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl transform -rotate-1"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-purple-500/10 to-blue-500/10 rounded-2xl transform rotate-1"></div>
              
              {/* Demo Container */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-purple-100 dark:border-purple-800 shadow-2xl p-6 transform transition-transform hover:scale-[1.02]">
                {/* Demo Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-500">AI Campaign Builder</div>
                </div>

                {/* Demo Content */}
                <div className="space-y-6">
                  {/* Campaign Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "ROI", value: "+126%", color: "text-green-500" },
                      { label: "CTR", value: "4.8%", color: "text-blue-500" },
                      { label: "Conv.", value: "12.3%", color: "text-purple-500" }
                    ].map((metric, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center">
                        <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* AI Suggestions */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm font-medium">AI Suggestion</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      "Increase budget allocation to high-performing demographics in the 25-34 age range"
                    </p>
                  </div>

                  {/* Live Campaign Preview */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-lg animate-pulse"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium">Live Campaign</span>
                        </div>
                        <span className="text-xs text-gray-500">Updated now</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Features Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sticky top-0 z-10 bg-white/80 dark:bg-background/80 backdrop-blur-lg py-6">
            <h2 className="text-3xl font-bold text-center">Powerful Features</h2>
          </div>
          
          <div className="space-y-24">
            {scrollFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-950/50 dark:to-blue-950/50 rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  {/* Feature Content */}
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30">
                      <feature.icon className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {feature.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>

                  {/* Interactive Demo */}
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
                      <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                        {feature.demo}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-100 dark:border-purple-900"
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-purple-600 mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses already succeeding with Tehify
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 h-12 px-8">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const stats = [
  { value: "10M+", label: "Ads Optimized" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "2x", label: "Average ROI Increase" },
];

const scrollFeatures = [
  {
    title: "AI-Powered Optimization",
    description: "Our AI analyzes your campaigns in real-time, automatically adjusting parameters to maximize ROI.",
    icon: Rocket,
    badge: "Smart Optimization",
    demo: (
      <div className="animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 bg-purple-200 dark:bg-purple-700 rounded w-1/4"></div>
          <div className="h-4 bg-green-200 dark:bg-green-700 rounded w-1/4"></div>
        </div>
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="flex-1 h-3 bg-purple-200 dark:bg-purple-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Smart Audience Targeting",
    description: "Machine learning algorithms identify and reach your ideal customers across platforms.",
    icon: Target,
    badge: "Precision Targeting",
    demo: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 animate-pulse rounded-lg"></div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="w-8 h-8 bg-purple-200 dark:bg-purple-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Real-Time Analytics",
    description: "Monitor performance metrics, audience engagement, and ROI tracking instantly.",
    icon: BarChart3,
    badge: "Live Insights",
    demo: (
      <div className="relative">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
              <div className="h-8 w-full bg-purple-200 dark:bg-purple-700 rounded mb-1"></div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
        <div className="h-32 bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-900 dark:to-blue-900 rounded-lg"></div>
      </div>
    ),
  },
];