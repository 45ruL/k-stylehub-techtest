import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-foreground">ModernShop</h2>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ModernShop. All rights reserved.
          </p>
        </div>

        {/* Center - Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Right - Socials */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
