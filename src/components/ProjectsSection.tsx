import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award } from "lucide-react";

interface Project {
  name: string;
  period: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
  awards?: string[];
}

const projects: Project[] = [
  {
    name: "React Wheel Picker",
    period: "05.2025—Present",
    description: "iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.",
    highlights: [
      "📱 Natural touch scrolling with smooth inertia effect",
      "🖱️ Mouse drag and scroll support for desktop", 
      "🔄 Infinite loop scrolling",
      "🎨 Unstyled components for complete style customization",
      "⚡️ Easy installation via shadcn CLI"
    ],
    technologies: ["React", "TypeScript", "Monorepo", "Turborepo", "NPM Registry"],
    links: {
      demo: "https://react-wheel-picker.chanhdai.com",
      github: "https://github.com/ncdai/react-wheel-picker"
    },
    awards: ["Vercel's Open Source Program Summer 2025 Cohort"]
  },
  {
    name: "chanhdai.com",
    period: "01.2025—Present", 
    description: "A minimal portfolio, component registry, and blog.",
    highlights: [
      "Clean & modern design",
      "Light & Dark theme support",
      "vCard integration",
      "SEO optimization with JSON-LD schema",
      "AI-friendly /llms.txt",
      "Installable PWA"
    ],
    technologies: ["Next.js 15", "Tailwind CSS v4", "Radix UI", "Motion", "shadcn/ui"],
    links: {
      github: "https://github.com/ncdai/chanhdai.com"
    }
  },
  {
    name: "ZaDark",
    period: "01.2022—Present",
    description: "ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.",
    highlights: [
      "80,000+ downloads on SourceForge",
      "15,000+ active users via Chrome Web Store", 
      "Earned 10M+ VND in net sales from Safari Extension",
      "Community Leader badge by SourceForge"
    ],
    technologies: ["Browser Extension", "CLI", "Docusaurus 3"],
    links: {
      demo: "https://zadark.com"
    },
    awards: ["Bronze Medal — 10th Design, Manufacturing, and Application Award 2022"]
  }
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
                      {project.awards && (
                        <Award className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{project.period}</p>
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

                  {project.awards && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Awards & Recognition:</h4>
                      <ul className="space-y-1">
                        {project.awards.map((award, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-yellow-600 dark:text-yellow-500">
                            <Award className="h-4 w-4" />
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
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