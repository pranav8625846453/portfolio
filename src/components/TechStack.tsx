import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const techCategories = [
  {
    title: "Languages",
    technologies: [
      "TypeScript",
      "JavaScript", 
      "Python",
      "PHP",
      "Java"
    ]
  },
  {
    title: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Motion",
      "React Router"
    ]
  },
  {
    title: "State Management",
    technologies: [
      "MobX-State-Tree",
      "Redux",
      "React Navigation"
    ]
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Bun",
      "LoopBack",
      "Laravel"
    ]
  },
  {
    title: "Database",
    technologies: [
      "MySQL",
      "MongoDB", 
      "Redis"
    ]
  },
  {
    title: "Tools & Others",
    technologies: [
      "Git",
      "Docker",
      "Figma",
      "Adobe Photoshop",
      "ChatGPT"
    ]
  }
];

export const TechStack = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category) => (
            <Card key={category.title} className="p-6">
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};