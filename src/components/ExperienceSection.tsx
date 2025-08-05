import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  type: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Simplamo Enterprise JSC",
    position: "Senior Frontend Developer & UI Design Lead",
    type: "Full-time",
    period: "10.2022—Present",
    current: true,
    description: [
      "Develop AI Chat and AI Assistant features",
      "Develop Whiteboards with real-time collaboration",
      "Build and maintain the Zalo Mini App for Simplamo",
      "Develop interactive chart and analytics widgets for Dashboard",
      "Ensure UI/UX consistency and adherence to standards",
      "Implement robust frontend solutions for web and mobile platforms"
    ],
    technologies: ["TypeScript", "Next.js", "React Native", "MobX", "Tailwind CSS", "Zalo Mini App"]
  },
  {
    company: "Quaric Co., Ltd.",
    position: "Software Engineer & Founder",
    type: "Part-time",
    period: "03.2024—Present",
    current: true,
    description: [
      "Integrated VNPAY-QR for secure transactions",
      "Registered e-commerce site with online.gov.vn for compliance",
      "Developed online ordering to streamline purchases",
      "Build and maintain ZaDark.com with Docusaurus",
      "Develop ZaDark extension with 15,000+ active users"
    ],
    technologies: ["Next.js", "Strapi", "Auth0", "VNPAY-QR", "Docker", "Google Cloud", "Docusaurus"]
  },
  {
    company: "Tung Tung JSC",
    position: "Web Developer",
    type: "Full-time", 
    period: "2020—2022",
    description: [
      "Built a scalable design system for consistency and efficiency",
      "Built complex rich-text editor based on ProseMirror and Slate",
      "Integrated APIs with Backend Team to enhance functionality"
    ],
    technologies: ["React", "Redux", "Storybook", "Lerna"]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="grid gap-6 lg:grid-cols-4">
                <div className="lg:col-span-3">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="h-5 w-5 text-muted-foreground" />
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        {exp.current && (
                          <Badge variant="default" className="text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-primary">{exp.position}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span>•</span>
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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