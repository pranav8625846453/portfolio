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
                Hello, World! I am <strong>PRANAV ATOLE</strong> — a Computer Engineer passionate
                about creating high-performance, user-centric software solutions with intuitive
                and engaging designs.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I specialize in building high-quality websites using React, TypeScript, and modern
                front-end technologies. Beyond work, I love exploring new technologies and turning
                ideas into reality through personal projects.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I am studying in 3rd year Computer Engineering at Savitribai Phule Pune University,
                with expected degree completion in 2027.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                I'm the creator of{" "}
                <a
                  href="https://ecommfree.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Ecommerce
                </a>{" "}
                — a free, full-stack e-commerce platform built with React and Node.js. It provides a
                modern storefront at{" "}
                <a
                  href="https://ecommfree.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  ecommerce
                </a>{" "}
                and a powerful admin panel at{" "}
                <a
                  href="https://ecommfree-admin.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  ecommerce-admin
                </a>
                , enabling product management, order tracking, and real-time analytics.
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
