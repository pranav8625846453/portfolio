import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const techCategories = [
  {
    title: "Languages",
    technologies: [
      "Java",
      "JavaScript",
      
    ]
  },
  {
    title: "Frontend",
    technologies: [
      "React",
      "Tailwind CSS",
      "React Router",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Express.js",
    ]
  },
  {
    title: "Database",
    technologies: [
      "MySQL",
      "MongoDB", 
    ]
  },
  {
    title: "Tools & Others",
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
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