import { Zap, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent">
                <Zap className="h-6 w-6 text-background" />
              </div>
              <span className="text-xl font-bold text-gradient">GameForge</span>
            </div>
            <p className="text-muted-foreground">
              Your local gaming PC experts, building dream machines since 2019.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Mon-Fri 10AM-7PM</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <a href="#builds" className="block text-muted-foreground hover:text-primary transition-colors">
                Custom PC Builds
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                PC Repair & Upgrade
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                System Optimization
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Technical Support
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#builds" className="block text-muted-foreground hover:text-primary transition-colors">
                Featured Builds
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Warranty Info
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(555) 123-GAME</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">hello@gameforge.local</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  123 Tech Street<br />
                  Gaming District<br />
                  Downtown, City 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 GameForge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Warranty
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;