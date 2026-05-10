import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { CurrentlyWidget } from "@/components/ui/currently-widget";
import { User, Briefcase, Award, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    label: "Strategy & Research",
    skills: [
      { name: "User Research & Interviews", tooltip: "Conducted 12+ user interviews per product cycle at HealthPlix" },
      { name: "Design Thinking", tooltip: "Applied double diamond framework across 6+ product redesigns" },
      { name: "Design Reviews & Testing", tooltip: "Led bi-weekly design critique and usability test sessions" },
    ],
  },
  {
    label: "Craft & Tools",
    skills: [
      { name: "Figma & Design Systems", tooltip: "Built design systems from scratch at HealthPlix and IQLine" },
      { name: "Wireframing & Prototyping", tooltip: "Delivered high-fidelity prototypes for usability testing and dev handoff" },
      { name: "Framer & 3D Spline", tooltip: "Used for interactive motion prototypes and 3D UI explorations" },
      { name: "Design Tokens & PRDs", tooltip: "Authored product requirement documents and token documentation" },
    ],
  },
  {
    label: "Leadership & Process",
    skills: [
      { name: "Stakeholder Management", tooltip: "Managed design reviews with C-suite and engineering leads" },
      { name: "Cross-Functional Collaboration", tooltip: "Worked alongside product, engineering, and clinical teams" },
      { name: "Design System Development", tooltip: "Created token-based design systems used across multiple products" },
    ],
  },
];

const achievements = [
  { icon: Target, value: 25, suffix: "%", label: "User Satisfaction Increase" },
  { icon: Award, value: 30, suffix: "%", label: "Time Reduction" },
  { icon: User, value: 40, suffix: "%", label: "User Adoption Increase" },
  { icon: Briefcase, value: 10, suffix: "+", label: "Years Experience" },
];

export function About() {
  return (
    <TooltipProvider>
      <section id="about" className="px-4 py-20 bg-muted/20">
        <div className="mx-auto max-w-6xl">
          <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className={cn("h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden", "border-4 border-background shadow-lg")}>
                <img src="/images/praveen-headshot.png" alt="Praveen Kumar N" className="h-full w-full object-cover" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">About Me</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A Product Design Lead with over a decade of experience creating user-centered solutions
            </p>
          </MotionDiv>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MotionDiv animation="slideUp" trigger="inView" delay={0.1} className="md:col-span-2 h-full">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Professional Background
                  </CardTitle>
                  <CardDescription>Leading design teams to deliver impactful user experiences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    With over a decade of experience, I lead teams to create user-centered, innovative solutions.
                    At HealthPlix Technologies Ltd., I drove redesigns that boosted user satisfaction and adoption rates.
                    Currently, as Product Design Lead at IQLine, I'm working on redesigning the architecture of the
                    entire Health Facility Software, focusing on integration and modularity.
                  </p>
                  <Separator />
                  <p className="text-muted-foreground leading-relaxed">
                    Skilled in user research, prototyping, and design systems, I excel in managing stakeholder expectations
                    and cross-functional collaboration. My passion for design excellence ensures impactful and intuitive
                    user experiences. I've successfully reduced doctors' note-taking time by 30% and boosted new user adoption by 40%.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv animation="slideUp" trigger="inView" delay={0.2} className="h-full">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Key Achievements
                  </CardTitle>
                  <CardDescription>Measurable impact and results</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  {achievements.map((achievement, idx) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-2xl font-bold flex items-baseline">
                            <NumberTicker value={achievement.value} suffix={achievement.suffix} className="tabular-nums" />
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.label}</p>
                        {idx < achievements.length - 1 && <Separator className="mt-4" />}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv animation="slideUp" trigger="inView" delay={0.25} className="h-full">
              <CurrentlyWidget />
            </MotionDiv>

            <MotionDiv animation="fadeIn" trigger="inView" delay={0.3} className="md:col-span-2 lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Design Skills & Expertise
                  </CardTitle>
                  <CardDescription>Core competencies — hover any skill for context</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3">
                    {skillCategories.map((category) => (
                      <div key={category.label}>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{category.label}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <Tooltip key={skill.name} content={skill.tooltip}>
                              <Badge variant="secondary" className="text-sm font-medium cursor-default transition-all hover:scale-105">
                                {skill.name}
                              </Badge>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
