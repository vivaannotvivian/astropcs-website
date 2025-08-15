import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  Zap,
  Star,
  CheckCircle
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  About GameForge
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Your Local Gaming
                <span className="block text-gradient">PC Experts</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Based in the heart of the city, GameForge has been building dream gaming machines for the local community since 2019. We combine technical expertise with personalized service to deliver PCs that exceed your gaming expectations.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "100% locally owned and operated",
                "Personal consultation for every build",
                "Premium components from trusted brands",
                "Comprehensive testing before delivery"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="glow-effect">
              Visit Our Workshop
            </Button>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="card-hover border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-background" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      123 Tech Street, Gaming District<br />
                      Downtown, City 12345
                    </p>
                    <p className="text-sm text-primary">Easy parking & public transport access</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-neon-purple flex items-center justify-center">
                    <Clock className="h-6 w-6 text-background" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 10AM - 7PM</p>
                      <p>Saturday: 10AM - 6PM</p>
                      <p>Sunday: 12PM - 5PM</p>
                    </div>
                    <p className="text-sm text-primary">Extended hours during gaming events</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-purple to-gaming-red flex items-center justify-center">
                    <Award className="h-6 w-6 text-background" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Credentials</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>✓ Intel Certified Partner</p>
                      <p>✓ AMD Authorized Builder</p>
                      <p>✓ NVIDIA Elite Partner</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                      <span className="text-sm text-primary ml-2">4.9/5 Customer Rating</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;