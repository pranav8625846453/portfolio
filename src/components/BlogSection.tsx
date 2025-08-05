import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  date: string;
  isNew?: boolean;
  image: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Manu Arora reviewed My Portfolio Website!",
    date: "04.08.2025",
    isNew: true,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: "React Wheel Picker joins Vercel's Open Source Program!",
    date: "24.07.2025", 
    isNew: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: "Grateful for the Feedback on My Portfolio Website",
    date: "14.07.2025",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    url: "#"
  },
  {
    title: "Followed by @shadcn on X",
    date: "21.06.2025",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
    url: "#"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Blog</h2>
          <Button variant="outline" asChild>
            <a href="#all-posts" className="flex items-center gap-2">
              All Posts
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <a href={post.url} className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {post.isNew && (
                      <Badge variant="default" className="text-xs">
                        New
                      </Badge>
                    )}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Published on {post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};