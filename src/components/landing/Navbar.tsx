import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";

const Navbar = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <QrCode className="w-6 h-6 text-coral" />
          <span className="font-heading font-bold text-lg text-primary-foreground">Label Ease</span>
        </div>
        <div className="hidden sm:flex items-center gap-8">
          <a href="#how-it-works" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            How It Works
          </a>
          <a href="#signup" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            Pricing
          </a>
          <Button variant="cta" size="sm" onClick={onCtaClick}>
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
