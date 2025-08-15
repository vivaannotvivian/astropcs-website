import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Zap,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Zap className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Build Your
            <span className="block text-gradient">Dream PC?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. We're here to help bring your gaming vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <Phone className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(555) 123-GAME</p>
                    <p className="text-sm text-primary">Mon-Fri 10AM-7PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-neon-purple flex items-center justify-center">
                    <Mail className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@gameforge.local</p>
                    <p className="text-sm text-primary">24-hour response</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-purple to-gaming-red flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Live Chat</h3>
                    <p className="text-muted-foreground">Instant support</p>
                    <p className="text-sm text-primary">Available now</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gaming-red to-primary flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Tech Street</p>
                    <p className="text-sm text-primary">Free parking available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your gaming needs and we'll create a custom quote for you.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your full name" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input placeholder="(555) 123-4567" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Budget Range</label>
                    <Input placeholder="$1,000 - $2,000" className="bg-background/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Details</label>
                  <Textarea 
                    placeholder="Tell us about your gaming needs, preferred games, resolution requirements, etc."
                    rows={4}
                    className="bg-background/50"
                  />
                </div>

                <Button size="lg" className="w-full glow-effect group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll respond within 24 hours with your custom quote and next steps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;