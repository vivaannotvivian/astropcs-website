import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Cpu, 
  Shield, 
  HeadphonesIcon, 
  Zap, 
  Settings,
  Package,
  Clock
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Custom PC Builds",
    description: "Tailored gaming PCs built to your exact specifications and budget requirements.",
    features: ["Component Selection", "Performance Optimization", "Quality Testing"]
  },
  {
    icon: Package,
    title: "Pre-Built Systems",
    description: "Ready-to-ship gaming PCs for immediate delivery and setup.",
    features: ["Instant Availability", "Pre-tested Systems", "Quick Setup"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Zap className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Complete Gaming
            <span className="block text-gradient">PC Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom builds to repairs and upgrades, we provide comprehensive services for all your gaming PC needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-border bg-card/50 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
      </div>
    </section>
  );
};

export default Services;