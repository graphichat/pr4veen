import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { animate } from "motion";
import { cn } from "@/lib/utils";

export function MoreCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    const handleMouseEnter = () => {
      animate(
        card,
        {
          y: -4,
        },
        {
          duration: 0.2,
          ease: "easeOut",
        }
      );
    };

    const handleMouseLeave = () => {
      animate(
        card,
        {
          y: 0,
        },
        {
          duration: 0.2,
          ease: "easeOut",
        }
      );
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      className="group flex h-full flex-col overflow-hidden pt-0 transition-all hover:border-primary/50 hover:shadow-md border-dashed"
    >
      {/* Image Section */}
      <div className={cn("relative aspect-video w-full bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50")}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-muted-foreground/40 select-none">
            +
          </div>
        </div>
      </div>

      {/* Body Section */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold leading-tight mb-2">
              View All Projects
            </CardTitle>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore all my projects and see the complete UX design process in action.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1" />

      {/* Footer Section */}
      <CardFooter className="pt-4">
        <Button
          asChild
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <Link to="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

