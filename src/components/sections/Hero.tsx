import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useRef, useEffect } from "react";
import { animate } from "motion";

export function Hero() {
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
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center overflow-hidden pb-32">
      {/* Background Lines - positioned absolutely behind content */}
      <div className="absolute inset-0 z-0">
        <BackgroundLines className="h-full w-full" svgOptions={{ duration: 10 }}>
          <div></div>
        </BackgroundLines>
      </div>
      
      {/* Content - centered with proper z-index */}
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 w-full">
        <MotionDiv animation="slideUp" delay={0} duration={0.8}>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-primary">Praveen Kumar N</span>
            </h1>
            <p className="text-xl text-muted-foreground sm:text-2xl">
              Senior Product Designer
            </p>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              With over a decade of experience, I lead teams to create user-centered, innovative solutions. 
              I've driven redesigns that boosted user satisfaction by 25%, reduced note-taking time by 30%, 
              and increased user adoption by 40%. Explore my work and see the UX design process in action.
            </p>
          </div>
        </MotionDiv>
        <MotionDiv animation="slideUp" delay={0.3} duration={0.8}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="group">
              <Link to="/projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

