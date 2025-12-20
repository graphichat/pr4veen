import { useParams, Link } from "react-router-dom";
import { ProjectHeader } from "@/components/layout/ProjectHeader";
import { ProjectSidebar } from "@/components/layout/ProjectSidebar";
import { SectionOverview } from "@/components/layout/SectionOverview";
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Sparkles,
  Layers,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Calendar,
} from "lucide-react";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { useEffect } from "react";

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
                    {project.longDescription || project.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.demoRoute && (
                  <Button asChild size="lg">
                    <Link to={project.demoRoute}>
                      View Interactive Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {project.externalLink && (
                  <Button asChild variant="outline" size="lg">
                    <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                      View Live Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </MotionDiv>

            {/* Overview Section */}
            <section id="overview" className="scroll-mt-20 mb-12">
              <MotionDiv animation="slideUp" trigger="inView" delay={0.1}>
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">Project Overview</h2>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Executive Summary</CardTitle>
                    <CardDescription className="text-sm">
                      A comprehensive overview of the project objectives, scope, and outcomes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Target className="h-3.5 w-3.5 text-primary" />
                        Objectives
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.longDescription || project.description}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Users className="h-3.5 w-3.5 text-primary" />
                        Target Users
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Designed for healthcare professionals and medical staff who require efficient, 
                        user-friendly tools for managing patient data and workflows.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        Timeline
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Project completed with iterative design cycles, user testing, and continuous 
                        improvement based on feedback.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            </section>

            {/* UX Highlights Section */}
            {project.uxHighlights && project.uxHighlights.length > 0 && (
              <section id="highlights" className="scroll-mt-20 mb-12">
                <MotionDiv animation="slideUp" trigger="inView" delay={0.2}>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold">UX Highlights & Impact</h2>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Key Achievements</CardTitle>
                      <CardDescription className="text-sm">
                        Measurable outcomes and improvements achieved through the design process.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        {project.uxHighlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-4 rounded-lg border bg-muted/50"
                          >
                            <TrendingUp className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium">{highlight}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              </section>
            )}

            {/* Design Process Section */}
            {project.designProcess && project.designProcess.length > 0 && (
              <section id="process" className="scroll-mt-20 mb-12">
                <MotionDiv animation="slideUp" trigger="inView" delay={0.3}>
                  <div className="flex items-center gap-2 mb-6">
                    <Layers className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold">Design Process</h2>
                  </div>
                  <div className="space-y-4">
                    {project.designProcess.map((phase, idx) => (
                      <Card key={idx}>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                              {idx + 1}
                            </div>
                            <CardTitle className="text-base">{phase.phase}</CardTitle>
                          </div>
                          <CardDescription className="text-sm mt-2">{phase.description}</CardDescription>
                        </CardHeader>
                        {phase.deliverables && phase.deliverables.length > 0 && (
                          <CardContent>
                            <div className="mt-4 pt-4 border-t">
                              <h4 className="text-xs font-semibold mb-3">Deliverables</h4>
                              <div className="flex flex-wrap gap-2">
                                {phase.deliverables.map((deliverable, dIdx) => (
                                  <Badge key={dIdx} variant="outline" className="text-xs">
                                    {deliverable}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </div>
                </MotionDiv>
              </section>
            )}

            {/* Tech Stack Section */}
            <section id="tech" className="scroll-mt-20 mb-12">
              <MotionDiv animation="slideUp" trigger="inView" delay={0.4}>
                <div className="flex items-center gap-2 mb-6">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">Technology & Tools</h2>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Tech Stack</CardTitle>
                    <CardDescription className="text-sm">
                      Technologies and tools used in the design and development process.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm px-3 py-1.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            </section>
          </div>
        </main>

        {/* Right Sidebar - Section Overview */}
        <SectionOverview />
      </div>
    </div>
  );
}
