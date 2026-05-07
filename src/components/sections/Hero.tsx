import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useRef, useEffect } from "react";
import { animate } from "motion";

export function Hero({ onNavigate }: { onNavigate?: (sectionId: string) => void }) {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (arrowRef.current) {
      // Continuous bounce animation
      const bounceAnimation = () => {
        animate(
          arrowRef.current!,
          {
            y: [0, 10, 0],
          },
          {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }
        );
      };
      bounceAnimation();
    }
  }, []);

  return (
    <AuroraBackground>
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:py-20 text-center overflow-hidden pb-24 sm:pb-32 w-full">
        {/* Content - centered with proper z-index */}
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 sm:space-y-8 w-full mt-12 sm:mt-0">
          {/* Decorative glow blob */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[200px] sm:h-[300px] w-[300px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[80px] sm:blur-[120px]" />
          
          <MotionDiv animation="slideUp" delay={0} duration={0.8}>
            <div className="space-y-4 sm:space-y-6">
              <Badge variant="outline" className="mb-2 sm:mb-4 border-primary/30 bg-primary/10 text-primary px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm backdrop-blur-sm">
                Available for new opportunities
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
                Hi, I'm <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                  Praveen Kumar N
                </span>
              </h1>
              <p className="text-xl font-medium text-foreground/80 sm:text-2xl lg:text-3xl">
                Product Design Lead
              </p>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground/90 leading-relaxed px-2 sm:px-0">
                With over a decade of experience, I lead teams to create user-centered, innovative solutions. 
                I've driven redesigns that boosted user satisfaction by 25%, reduced note-taking time by 30%, 
                and increased user adoption by 40%. Explore my work and see the UX design process in action.
              </p>
            </div>
          </MotionDiv>
          <MotionDiv animation="slideUp" delay={0.3} duration={0.8}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group" onClick={() => onNavigate?.("projects")}>
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
    </AuroraBackground>
  );
}

