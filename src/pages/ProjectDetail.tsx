import { useParams, Link } from "react-router-dom";
import { ProjectHeader } from "@/components/layout/ProjectHeader";
import { ProjectSidebar } from "@/components/layout/ProjectSidebar";
import { SectionOverview } from "@/components/layout/SectionOverview";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { useEffect } from "react";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 100);
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Initial scroll
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [projectId]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <ProjectHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
            <p className="text-muted-foreground mb-4">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ProjectHeader />
      <div className="flex flex-1 pt-[73px]">
        {/* Left Sidebar - Projects */}
        <ProjectSidebar currentProjectId={project.id} />

        {/* Main Content */}
        <main className="flex-1 min-w-0 ml-64 mr-64">
          <div className="mx-auto max-w-4xl px-6 py-8">
            {/* Header */}
            <MotionDiv animation="slideUp" trigger="mount" className="mb-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.featured && <Badge>Featured</Badge>}
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight mb-3">{project.title}</h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </MotionDiv>

            {/* Markdown Content */}
            <MotionDiv animation="slideUp" trigger="inView" delay={0.1}>
              <MarkdownContent content={project.content} />
            </MotionDiv>

            {/* Tech Stack Section */}
            <section id="tech" className="scroll-mt-20 mb-12 mt-12">
              <MotionDiv animation="slideUp" trigger="inView" delay={0.2}>
                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-4">Technology & Tools</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm px-3 py-1.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            </section>
          </div>
        </main>

        {/* Right Sidebar - Section Overview */}
        <SectionOverview content={project.content} />
      </div>
    </div>
  );
}
