import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Monitor, Zap } from "lucide-react";

const build = {
  id: 1,
  name: "A Budget Beast",
  price: "$575",
  specs: {
    cpu: "AMD Ryzen 5 3500X",
    gpu: "RX 590 8GB",
    ram: "16GB DDR4",
    storage: "500GB NVMe SSD"
  },
  performance: "1080p Medium Settings",
  description: "Competitive gaming at a budget. Perfect for FPS and MOBA games.",
};

const benchmarks = [
  { name: "No Benchmarks", score: "Coming Soon" }
];

const FeaturedBuilds = () => {
  const [showBenchmarks, setShowBenchmarks] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((current + 1) % benchmarks.length);
  const handlePrev = () => setCurrent((current - 1 + benchmarks.length) % benchmarks.length);

  return (
    <section id="builds" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Zap className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Featured Builds
            </span>
          </div>
          <h2 className="text-1xl sm:text-3xl lg:text-4xl font-bold">
            Current Builds
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our signature gaming PC builds optimized for high-performance gaming and content creation
          </p>
        </div>

        {/* Build Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Card className="relative card-hover border-border bg-card/50 backdrop-blur-sm ring-2 ring-primary">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              </div>
              
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{build.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{build.price}</div>
                </div>
                <p className="text-muted-foreground">{build.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Performance Badge */}
                <div className="bg-muted/50 rounded-lg p-3 text-center">
                  <div className="text-sm text-muted-foreground">Performance</div>
                  <div className="font-semibold text-primary">{build.performance}</div>
                </div>

                {/* Benchmarks Popup Trigger */}
                <div className="flex justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setShowBenchmarks(true)}
                    className="mt-2"
                  >
                    View Benchmarks
                  </Button>
                </div>

                {/* Benchmarks Popup */}
                {showBenchmarks && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-black rounded-lg shadow-lg p-6 w-80 relative">
                      <button
                        className="absolute top-2 right-2 text-muted-foreground"
                        onClick={() => setShowBenchmarks(false)}
                        aria-label="Close"
                      >
                        ×
                      </button>
                      <div className="flex flex-col items-center mt-2">
    <label htmlFor="benchmarks" className="mb-1 text-sm text-white">
      Select Benchmark
    </label>
    <select
      id="benchmarks"
      className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-primary bg-black text-white"
      value={current}
      onChange={e => setCurrent(Number(e.target.value))}
    >
      {benchmarks.map((b, idx) => (
        <option key={b.name} value={idx}>
          {b.name}
        </option>
      ))}
    </select>
    <div className="mt-3 text-center">
      <div className="text-lg font-bold">{benchmarks[current].name}</div>
      <div className="text-primary text-2xl font-semibold">{benchmarks[current].score}</div>
    </div>
  </div>
 </div>
</div>)}

                {/* Specs */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Cpu className="h-4 w-4 text-primary" />
                    <span className="text-sm">CPU: {build.specs.cpu}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Monitor className="h-4 w-4 text-accent" />
                    <span className="text-sm">GPU: {build.specs.gpu}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-4 w-4 text-neon-purple" />
                    <span className="text-sm">RAM: {build.specs.ram}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HardDrive className="h-4 w-4 text-neon-cyan" />
                    <span className="text-sm">Storage: {build.specs.storage}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Contact us to purchase this build or create your own unique gaming PC configuration.
          </p>
          <a href="mailto:AstroPcsBis@Gmail.com?subject=PC%20Build%20Inquiry" style={{ textDecoration: "none" }}>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBuilds;