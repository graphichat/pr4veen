import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Clapperboard, Code2 } from "lucide-react";

const hobbies = [
  {
    icon: Crown,
    title: "Chess",
    description: "I play chess for the same reason I design — both reward thinking three moves ahead and punish the assumption that your first idea is your best one.",
  },
  {
    icon: Clapperboard,
    title: "Movies",
    description: "Certified movie buff. I watch everything from arthouse to blockbusters and dissect how directors guide attention — which turns out to be exactly what UX designers do.",
  },
  {
    icon: Code2,
    title: "Creating Software",
    description: "I build things in code when I want to test an idea without a handoff meeting. Knowing how things are built makes me a better designer of how they should feel.",
  },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="px-4 py-20 bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Outside of Work</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The things I do when I'm not designing — and that secretly make me a better designer.
          </p>
        </MotionDiv>
        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <MotionDiv key={hobby.title} animation="slideUp" trigger="inView" delay={index * 0.1}>
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
                  <CardDescription className="text-sm leading-relaxed">{hobby.description}</CardDescription>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
