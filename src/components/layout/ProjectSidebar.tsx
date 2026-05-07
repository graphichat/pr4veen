import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  currentProjectId?: string;
}

export function ProjectSidebar({ currentProjectId = "" }: ProjectSidebarProps) {
  return (
    <aside className="fixed top-[73px] left-0 h-[calc(100vh-73px)] w-64 border-r bg-background hidden lg:block">
      <div className="p-6 h-full overflow-hidden flex flex-col">
        {/* Project List */}
        <div className="space-y-2 flex-1 overflow-hidden">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-4">
            Projects
          </div>
          <nav className="space-y-1 overflow-y-auto">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  currentProjectId === project.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {project.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
