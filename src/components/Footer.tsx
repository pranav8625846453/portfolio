import { Button } from "@/components/ui/button";
import { Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-4">
              Let's connect and collaborate on exciting projects together!
            </p>
            <Button asChild>
              <a
                href="mailto:pranavatole20@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>

          <div></div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#portfolio" className="hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-foreground transition-colors">
                 Certificate And Achievment
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex items-center justify-between text-sm text-muted-foreground">
          <p>© 2025 PRANAV ATOLE. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};