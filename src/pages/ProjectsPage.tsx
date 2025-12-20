import { ProjectHeader } from "@/components/layout/ProjectHeader";
import { ProjectSidebar } from "@/components/layout/ProjectSidebar";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { useRef, useEffect, useState } from "react";
import { animate, inView, stagger } from "motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // Page entrance animation
    animate(
      document.body,
      {
        opacity: [0, 1],
      },
      {
        duration: 0.5,
      }
    );

    // Animate all projects with stagger
    if (projectsContainerRef.current) {
      const cards = projectsContainerRef.current.querySelectorAll("[data-project-card]");
      inView(
        projectsContainerRef.current,
        () => {
          animate(
            cards as NodeListOf<HTMLElement>,
            {
              opacity: [0, 1],
              y: [20, 0],
            },
            {
              duration: 0.5,
              delay: stagger(0.08),
            }
          );
        },
        {
          margin: "-50px",
        }
      );
    }
  }, [selectedCategory]);

  return (
    <div className="flex min-h-screen flex-col">
      <ProjectHeader />
      <div className="flex flex-1 pt-[73px]">
        {/* Left Sidebar - Projects */}
        <ProjectSidebar currentProjectId="" />

        {/* Main Content */}
        <main className="flex-1 min-w-0 ml-64">
          <div className="mx-auto max-w-6xl px-6 py-8">
            {/* Header */}
            <MotionDiv animation="slideUp" trigger="mount" className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-3">My Projects</h1>
              <p className="text-muted-foreground">
                A collection of SaaS products I've designed and built. Each project showcases the UX design process 
                from research to implementation.
              </p>
            </MotionDiv>

            {/* Projects Grid */}
            {sortedProjects.length > 0 ? (
              <div>
                <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">All Projects</h3>
                    <p className="text-sm text-muted-foreground">
                      {sortedProjects.length} {sortedProjects.length === 1 ? "project" : "projects"}
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

                <div
                  ref={projectsContainerRef}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {sortedProjects.map((project) => (
                    <div key={project.id} data-project-card className="h-full">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
