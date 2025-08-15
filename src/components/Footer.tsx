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
              Your local gaming PC experts, building dream machines since 2025.
            </p>
          </div>

          {/* Empty columns for spacing on large screens */}
          <div className="hidden lg:block" />
          <div className="hidden lg:block" />

          {/* Contact Info */}
          <div className="space-y-4 lg:col-start-4">
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
            © 2024 Astro PCs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;