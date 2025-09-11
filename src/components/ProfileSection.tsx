import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe, Volume2 } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

export const ProfileSection = () => {
  const playPronunciation = () => {
    // Placeholder for pronunciation feature
    console.log("Playing pronunciation...");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                      PRANAV ATOLE
                    </h1>

                  </div>
                  <p className="text-xl text-muted-foreground">COMPUTER ENGINEER</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-lg">
                  <span className="font-semibold">MERN Stack Developer & DSA IN JAVA</span>{" "}
                </p>
              </div>

              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+91 8625844653" className="hover:text-foreground">
                    +91 8625844653
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="email:pranavatole@gmail.com" className="hover:text-foreground">
                    pranavatole@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
            <div className="relative aspect-square max-w-md mx-auto">
              <img
                src={profileAvatar}
                alt="pranav atole"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};