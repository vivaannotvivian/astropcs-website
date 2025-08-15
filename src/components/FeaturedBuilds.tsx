import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Monitor, Zap } from "lucide-react";

const builds = [
  {
    id: 1,
    name: "Entry Gamer",
    price: "$899",
    popular: false,
    specs: {
      cpu: "AMD Ryzen 5 7600",
      gpu: "RTX 4060",
      ram: "16GB DDR5",
      storage: "1TB NVMe SSD"
    },
    performance: "1080p High Settings",
    description: "Perfect for 1080p gaming and everyday tasks"
  },
  {
    id: 2,
    name: "Performance Beast",
    price: "$1,599",
    popular: true,
    specs: {
      cpu: "Intel i7-13700K",
      gpu: "RTX 4070 Ti",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD"
    },
    performance: "1440p Ultra Settings",
    description: "High-performance gaming and content creation"
  },
  {
    id: 3,
    name: "Ultimate Rig",
    price: "$2,999",
    popular: false,
    specs: {
      cpu: "AMD Ryzen 9 7950X3D",
      gpu: "RTX 4080 Super",
      ram: "64GB DDR5",
      storage: "4TB NVMe SSD"
    },
    performance: "4K Ultra Settings",
    description: "No compromises, maximum performance"
  }
];

const FeaturedBuilds = () => {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready-to-Game
            <span className="block text-gradient">PC Configurations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our curated gaming PC builds or customize them to your exact specifications
          </p>
        </div>

        {/* Builds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {builds.map((build) => (
            <Card
              key={build.id}
              className={`relative card-hover border-border bg-card/50 backdrop-blur-sm ${
                build.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {build.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
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

              <CardFooter className="space-y-3">
                <Button className="w-full glow-effect" variant={build.popular ? "default" : "outline"}>
                  Customize Build
                </Button>
                <Button variant="ghost" className="w-full text-sm">
                  View Full Specs
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need something specific? We build custom PCs tailored to your exact needs.
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBuilds;