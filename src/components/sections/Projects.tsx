import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFeatureCard } from "@/components/projects/ProjectFeatureCard";
import { MoreCard } from "@/components/projects/MoreCard";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { BlurFade } from "@/components/ui/blur-fade";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProjectsProps {
  limit?: number; // Optional limit for home page
  featuredLayout?: boolean; // If true, use featured layout (alternating content/image)
}

export function Projects({ limit, featuredLayout = false }: ProjectsProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  // Filter projects by category if selected
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  // Sort: featured projects first, then others
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  // Apply limit if provided (for home page)
  const displayedProjects = limit
    ? sortedProjects.slice(0, limit)
    : sortedProjects;

  const showMoreCard = limit !== undefined && filteredProjects.length > limit;

  // Featured layout for home page
  if (featuredLayout) {
    return (
      <section id="projects" className="px-4 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Projects</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A collection of SaaS products I've designed and built. Each project showcases the UX design process 
              from research to implementation.
            </p>
          </MotionDiv>

          {/* Featured Projects - Vertical Stack with Alternating Layout */}
          {displayedProjects.length > 0 && (
            <div className="space-y-16">
              {displayedProjects.map((project, index) => (
                <BlurFade key={project.id} delay={0.1 + index * 0.08} inView>
                  <ProjectFeatureCard
                    project={project}
                    reverse={index % 2 === 0}
                  />
                </BlurFade>
              ))}
            </div>
          )}

          {/* View All CTA */}
          <MotionDiv animation="slideUp" trigger="inView" delay={0.4} className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </section>
    );
  }

  // Default grid layout for projects page
  return (
    <section id="projects" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Projects</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A collection of SaaS products I've designed and built. Each project showcases the UX design process 
            from research to implementation.
            {limit && ` Showing ${displayedProjects.length}${showMoreCard ? '+' : ''} of ${filteredProjects.length} projects.`}
          </p>
        </MotionDiv>

        {/* Projects Grid */}
        {displayedProjects.length > 0 ? (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">All Projects</h3>
                <p className="text-sm text-muted-foreground">
                  {displayedProjects.length} {displayedProjects.length === 1 ? "project" : "projects"}
                  {selectedCategory && ` in ${selectedCategory}`}
                </p>
              </div>
              
              {/* Category Filter */}
              {categories.length > 1 && (
                <div className="flex flex-wrap items-center gap-2">
                  {selectedCategory && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                      className="h-8 gap-1.5 text-xs"
                    >
                      <X className="h-3.5 w-3.5" />
                      Clear
                    </Button>
                  )}
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer transition-colors text-xs",
                        selectedCategory === category && "bg-primary text-primary-foreground"
                      )}
                      onClick={() =>
                        setSelectedCategory(selectedCategory === category ? null : category)
                      }
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayedProjects.map((project, index) => (
                <BlurFade key={project.id} delay={0.05 + index * 0.06} inView className="h-full">
                  <ProjectCard project={project} />
                </BlurFade>
              ))}
              {showMoreCard && (
                <BlurFade delay={0.05 + displayedProjects.length * 0.06} inView className="h-full">
                  <MoreCard />
                </BlurFade>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
