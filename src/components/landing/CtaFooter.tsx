import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Twitter } from "lucide-react";
import { toast } from "sonner";

const CtaFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're on the list! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <footer id="signup" className="bg-teal-dark py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Label with Purpose?
          </h2>
          <p className="text-primary-foreground/70 text-lg font-body mb-10">
            Join 100s of Etsy sellers shaping the future of inventory.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body h-12"
            />
            <Button variant="cta" type="submit" className="h-12 px-8 shrink-0">
              Get Early Access
            </Button>
          </form>

          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:hello@labelease.com" className="text-primary-foreground/60 hover:text-coral transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-coral transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-primary-foreground/40 font-body text-sm">
            © {new Date().getFullYear()} Label Ease. Built for makers, by makers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CtaFooter;
