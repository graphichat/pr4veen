import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Medal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Awards() {
  const awards = [
    {
      icon: Trophy,
      title: "Design Excellence Award",
      organization: "Company Recognition",
      year: "2023",
      description: "Recognized for outstanding contribution to product design and user experience.",
    },
    {
      icon: Star,
      title: "Innovation in UX",
      organization: "Design Community",
      year: "2022",
      description: "Awarded for innovative approaches to solving complex user experience challenges.",
    },
    {
      icon: Medal,
      title: "Team Leadership Excellence",
      organization: "Internal Recognition",
      year: "2021",
      description: "Recognized for exceptional leadership and mentorship in the design team.",
    },
  ];

  return (
    <section id="awards" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Awards & Recognition</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Recognition for contributions to design, innovation, and team leadership.
          </p>
        </MotionDiv>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, index) => (
            <MotionDiv
              key={award.title}
              animation="slideUp"
              trigger="inView"
              delay={index * 0.1}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <award.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {award.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{award.title}</CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {award.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv animation="slideUp" trigger="inView" delay={0.4} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            More awards and recognitions coming soon...
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}

