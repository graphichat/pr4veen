import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Medal, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const awards = [
  {
    icon: Trophy,
    title: "Product Design Excellence Award",
    organization: "IQLine",
    year: "2025",
    description: "In recognition of creativity and user-focused design — delivering impactful solutions that set a benchmark in product excellence. Presented by Ayush Garg (Director & Founder) and Amit Jain (Director & Co-Founder).",
  },
  {
    icon: Star,
    title: "Best Performer",
    organization: "IQLine",
    year: "2024",
    description: "Recognised for outstanding performance in leading UX modernisation initiatives for the IQHealth platform and driving design team excellence.",
  },
  {
    icon: Medal,
    title: "Product Idea Award — Winnovate 1.0",
    organization: "Robert Bosch Engineering (RBEI/ECS)",
    year: "2014",
    description: "Certificate of Appreciation for valuable contribution towards a product idea. Selected among the top three winners in Winnovate 1.0 for conceptualising a new Bosch Tools product.",
  },
  {
    icon: Award,
    title: "Best Performer",
    organization: "NDesign",
    year: "2017",
    description: "Recognised as Best Performer within one month of joining for delivering high-quality visual and interaction design outputs for US-based enterprise clients.",
  },
];

export function Awards() {
  return (
    <section id="awards" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Awards & Recognition</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Recognition for contributions to design, innovation, and team leadership across 10+ years.
          </p>
        </MotionDiv>
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <MotionDiv key={award.title + award.organization} animation="slideUp" trigger="inView" delay={index * 0.1}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <award.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{award.year}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{award.title}</CardTitle>
                  <CardDescription className="text-sm font-medium">{award.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
