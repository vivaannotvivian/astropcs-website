import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Monitor, Zap } from "lucide-react";
import heroImage from "@/assets/hero-gaming-pc.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Premium Gaming PCs
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Build Your
                <span className="block text-gradient">Dream Machine</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Custom gaming PCs designed and built locally in Powell Ohio. From entry-level builds to extreme performance rigs, we craft the perfect machine for your gaming needs.
              </p>
            </div>


          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-effect">
              <img
                src={heroImage}
                alt="High-end gaming PC setup with RGB lighting"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border">
              <Cpu className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border">
              <Monitor className="h-8 w-8 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;