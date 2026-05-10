import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Clock } from "lucide-react";
import { type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFeatureCardProps {
  project: Project;
  reverse?: boolean;
}

export function ProjectFeatureCard({ project, reverse = false }: ProjectFeatureCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
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

  return (
    <div className="group grid gap-8 md:grid-cols-2 items-center relative">
      <Link to={`/project/${project.id}`} aria-label={`View ${project.title}`} className="absolute inset-0 z-0" />

      <div className={cn("order-1", reverse && "md:order-2")}>
        <div className={cn("relative aspect-video w-full rounded-lg overflow-hidden bg-gradient-to-br", gradient, "transition-transform duration-300 group-hover:scale-[1.02]")}>
          {project.featured && (
            <Badge variant="secondary" className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm shadow-sm">Featured</Badge>
          )}
          {project.projectImage ? (
            <>
              {!imgLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
              <img
                src={project.projectImage}
                alt={project.title}
                onLoad={() => setImgLoaded(true)}
                className={cn("h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", !imgLoaded && "opacity-0")}
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-white/30 select-none">{project.title.charAt(0)}</div>
            </div>
          )}
        </div>
      </div>

      <div className={cn("order-2 space-y-4", reverse && "md:order-1")}>
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-2">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
        </div>
        {topTechStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topTechStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm font-normal">{tech}</Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="outline" className="text-sm text-muted-foreground font-normal">+{project.techStack.length - 3}</Badge>
            )}
          </div>
        )}
        <div className="flex items-center gap-4 pt-2 relative z-10">
          <Button asChild variant="default" className="group/btn">
            <Link to={`/project/${project.id}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3 shrink-0" />
            {project.readingTime} min read
          </span>
        </div>
      </div>
    </div>
  );
}
