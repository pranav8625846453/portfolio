import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import webCert from "@/assets/web-cert.jpg";

interface BlogPost {
  title: string;
  image: string;
  
}

const blogPosts: BlogPost[] = [
  {
    title: "✨ Excited to share that I’ve successfully completed the Full Stack Web Development (Delta) course from Apna College! 🚀 ",
    image: webCert,
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold"> Certificate And Achievment </h2>
         
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
        
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};