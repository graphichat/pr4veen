import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function ProjectHeader() {
  const location = useLocation();
  // If we're on a project detail page, go back to projects list, otherwise go to home
  const backTo = location.pathname.startsWith("/project/") ? "/?section=projects" : "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to={backTo} aria-label={backTo === "/" ? "Back to Home" : "Back to Projects"}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-bold">My Projects</h1>
        </div>
      </div>
    </header>
  );
}
