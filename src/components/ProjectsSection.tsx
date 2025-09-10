import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award } from "lucide-react";

interface Project {
  name: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    name: "E-COMMERCE WEBSITE",
    description: "Full-stack e-commerce platform with an integrated admin dashboard for product, order, and user management.",
    highlights: [
     "🛍️ Customer-facing storefront with product search, cart, and checkout",
"🛠️ Admin panel for inventory, orders, and user management",
"💳 Secure authentication and role-based access",
"📦 REST API integration with scalable backend",
"🎨 Responsive, modern UI built with React",
"⚡️ Deployed with Render for free and seamless hosting",
    ],
    technologies: ["React", "TypeScript"," Node.js / Express","MongoDB","REST API","Render (Deployment)"],
    links: {
      demo: "https://ecommfree.onrender.com",
      github: "https://github.com/pranav8625846453/ecommfree.git"
    },
    
  },
    {
    name: "AtHotel", 
    description: "Hotel booking platform with real-time availability, reservation management, and a modern user experience..",
    highlights: [
      "🏨 Browse hotels with detailed listings and image galleries",
"📅 Real-time booking with check-in / check-out date selection",
"👤 User authentication and profile-based reservation history",
"🛠️ Admin support for room management and booking control",
"🎨 Responsive React frontend for mobile and desktop",
"⚡️ Seamless deployment on Render",
    ],
    technologies: [ "HTML", "CSS", "JavaScript","Node.js / Express","MongoDB","REST API","Render (Deployment)"],
    links: {
      demo: "https://athotel.onrender.com",
      github: "https://github.com/pranav8625846453/ATHOTEL.git"
    }
  },
  {
    name: "PRANAVATOLE.COM", 
    description: "A minimal portfolio.",
    highlights: [
      "Clean & modern design",
      "Light & Dark theme support",
      "vCard integration",
      "SEO optimization with JSON-LD schema",
      "AI-friendly /llms.txt",
      "Installable PWA"
    ],
    technologies: ["React", "TypeScript","Render (Deployment)"],
    links: {
      github: ""
    }
  },

];

export const ProjectsSection = () => {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{project.name}</h3>
                     
                    </div>
                    
                  </div>
                  
                  <p className="text-lg mb-4">{project.description}</p>
                  
                  {project.highlights && (
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {project.links.demo && (
                      <Button asChild className="w-full">
                        <a 
                          href={project.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Demo
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button variant="outline" asChild className="w-full">
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};