import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Camera, Music, BookOpen, Gamepad2 } from "lucide-react";

export function Hobbies() {
  const hobbies = [
    {
      icon: Palette,
      title: "Digital Art & Design",
      description: "Exploring creative expression through digital mediums and design experiments.",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and exploring visual storytelling through the lens.",
    },
    {
      icon: Music,
      title: "Music",
      description: "Enjoying various genres and discovering new sounds and artists.",
    },
    {
      icon: BookOpen,
      title: "Reading",
      description: "Diving into design books, tech articles, and creative literature.",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Exploring interactive experiences and game design principles.",
    },
  ];

  return (
    <section id="hobbies" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Hobbies & Interests</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Activities and interests that inspire my creative work and keep me balanced.
          </p>
        </MotionDiv>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <MotionDiv
              key={hobby.title}
              animation="slideUp"
              trigger="inView"
              delay={index * 0.1}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <hobby.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{hobby.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {hobby.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}


