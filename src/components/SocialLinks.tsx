import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Github, 
  Linkedin, 
  Youtube, 
  ExternalLink,
  MessageCircle,
  Code
} from "lucide-react";

interface SocialLink {
  name: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    username: "ncdai",
    url: "https://linkedin.com/in/ncdai",
    icon: <Linkedin className="h-5 w-5" />,
    color: "text-blue-600"
  },
  {
    name: "GitHub",
    username: "pranav8625846453",
    url: "https://github.com/pranav8625846453",
    icon: <Github className="h-5 w-5" />,
    color: "text-gray-800 dark:text-gray-200"
  },

];

export const SocialLinks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Social Links</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((link) => (
            <Card key={link.name} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className={`${link.color} transition-transform group-hover:scale-110`}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{link.name}</p>
                    <p className="text-sm text-muted-foreground">{link.username}</p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};