import { MotionDiv } from "@/components/animations/MotionDiv";
import { useRef, useEffect } from "react";
import { animate, inView, stagger } from "motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Briefcase, Award, Target, Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export function About() {
  const skills = [
    "User Research & Interviews",
    "Figma & Design Systems",
    "Wireframing & Prototyping",
    "Design Thinking",
    "Stakeholder Management",
    "Design System Development",
    "Framer & 3D Spline",
    "Cross-Functional Collaboration",
    "Design Reviews & Testing",
    "Design Tokens & PRDs",
  ];
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      const skillBadges = skillsRef.current.querySelectorAll("[data-skill]");
      inView(
        skillsRef.current,
        () => {
          animate(
            skillBadges as NodeListOf<HTMLElement>,
            {
              opacity: [0, 1],
              scale: [0.8, 1],
            },
            {
              duration: 0.4,
              delay: stagger(0.05),
            }
          );
        },
        {
          margin: "-100px",
        }
      );
    }
  }, []);

  const achievements = [
    {
      icon: Target,
      metric: "25%",
      label: "User Satisfaction Increase",
    },
    {
      icon: Award,
      metric: "30%",
      label: "Time Reduction",
    },
    {
      icon: User,
      metric: "40%",
      label: "User Adoption Increase",
    },
    {
      icon: Briefcase,
      metric: "10+",
      label: "Years Experience",
    },
  ];

  return (
    <section id="about" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header with Photo */}
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          {/* Photo Placeholder */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className={cn(
                "relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden",
                "bg-gradient-to-br from-primary/20 via-primary/10 to-muted",
                "border-4 border-background shadow-lg",
                "flex items-center justify-center"
              )}>
                {/* Placeholder icon - will be replaced with actual image */}
                <User className="h-16 w-16 sm:h-20 sm:w-20 text-muted-foreground/50" />
                {/* Camera icon overlay hint */}
                <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 shadow-md">
                  <Camera className="h-4 w-4" />
                </div>
              </div>
              {/* Image element - uncomment and add src when ready */}
              {/* <img
                src="/path-to-your-image.jpg"
                alt="Praveen Kumar N"
                className="h-full w-full object-cover"
              /> */}
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">About Me</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A Product Design Lead with over a decade of experience creating user-centered solutions
          </p>
        </MotionDiv>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Main About Card */}
          <MotionDiv animation="slideUp" trigger="inView" delay={0.1} className="md:col-span-2 h-full">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Professional Background
                </CardTitle>
                <CardDescription>
                  Leading design teams to deliver impactful user experiences
                </CardDescription>
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
                  user experiences. I've successfully increased user engagement by 35%, reduced doctors' note-taking time 
                  by 30%, and boosted new user adoption by 40%.
                </p>
              </CardContent>
            </Card>
          </MotionDiv>

          {/* Achievements Card */}
          <MotionDiv animation="slideUp" trigger="inView" delay={0.2} className="h-full">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Key Achievements
                </CardTitle>
                <CardDescription>
                  Measurable impact and results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="text-2xl font-bold">{achievement.metric}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.label}</p>
                      {idx < achievements.length - 1 && <Separator className="mt-4" />}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </MotionDiv>

          {/* Skills Card - Full Width */}
          <MotionDiv animation="fadeIn" trigger="inView" delay={0.3} className="md:col-span-2 lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Design Skills & Expertise
                </CardTitle>
                <CardDescription>
                  Core competencies and areas of expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div ref={skillsRef} className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      data-skill
                      variant="secondary"
                      className="text-sm font-medium transition-all hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
