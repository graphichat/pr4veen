import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Clock } from "lucide-react";
import { type Project } from "@/data/projects";
import { useRef, useEffect, useState } from "react";
import { animate } from "motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const handleMouseEnter = () => animate(card, { y: -4 }, { duration: 0.2, ease: "easeOut" });
    const handleMouseLeave = () => animate(card, { y: 0 }, { duration: 0.2, ease: "easeOut" });
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const topTechStack = project.techStack.slice(0, 3);
  const gradientColors = [
    "from-blue-500/60 via-purple-500/60 to-pink-500/60",
    "from-green-500/60 via-emerald-500/60 to-teal-500/60",
    "from-orange-500/60 via-red-500/60 to-rose-500/60",
    "from-indigo-500/60 via-blue-500/60 to-cyan-500/60",
    "from-violet-500/60 via-purple-500/60 to-fuchsia-500/60",
    "from-amber-500/60 via-yellow-500/60 to-orange-500/60",
  ];
  const gradient = gradientColors[project.id.charCodeAt(0) % gradientColors.length];
  const thumbnailSrc = project.thumbnail || project.projectImage;

  return (
    <Link to={`/project/${project.id}`} className="block h-full group">
      <Card ref={cardRef} className="flex h-full flex-col overflow-hidden pt-0 cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
        <div className={cn("relative aspect-video w-full overflow-hidden bg-gradient-to-br", gradient)}>
          {project.featured && (
            <Badge variant="secondary" className="absolute top-3 right-3 z-10 bg-background/90 backdrop-blur-sm shadow-sm">Featured</Badge>
          )}
          {thumbnailSrc ? (
            <>
              {!imgLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
              <img
                src={thumbnailSrc}
                alt={project.title}
                onLoad={() => setImgLoaded(true)}
                className={cn("h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", !imgLoaded && "opacity-0")}
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold text-white/30 select-none">{project.title.charAt(0)}</div>
            </div>
          )}
        </div>
        <CardHeader className="pb-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed line-clamp-2">{project.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-1 space-y-3">
          {topTechStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {topTechStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs font-normal">{tech}</Badge>
              ))}
              {project.techStack.length > 3 && (
                <Badge variant="outline" className="text-xs text-muted-foreground font-normal">+{project.techStack.length - 3}</Badge>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-4">
          <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 shrink-0" />
              <span>{project.readingTime} min read</span>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
