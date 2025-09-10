import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <Card className="p-8">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-lg leading-relaxed mb-6">
                Hello, World! I am <strong>PRANAV ATOLE</strong> — a Computer Engineer passionate about creating 
                high-performance, user-centric software solutions with intuitive and engaging designs.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                With <strong>5+ years of experience</strong>, I specialize in building high-quality web and mobile 
                applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, 
                I love exploring new technologies and turning ideas into reality through personal projects.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                One of my key projects, <a 
                  href="https://zadark.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  ZaDark
                </a>, enhances the Zalo experience on PC and Web, surpassing <strong>80,000 downloads</strong> on 
                SourceForge and <strong>15,000 active users</strong> on the Chrome Web Store since 2022.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                I'm also the creator of <a 
                  href="https://react-wheel-picker.chanhdai.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  React Wheel Picker
                </a> — iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support. 
                It has earned <strong>221 stars on GitHub</strong> and was selected for <strong>Vercel's Open Source Program</strong> summer 2025 cohort, 
                receiving $3,600 in Vercel platform credits, an OSS Starter Pack, and priority community support.
              </p>
              
              <p className="text-lg leading-relaxed font-semibold">
                Let's connect and collaborate!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};