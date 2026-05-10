import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FolderKanban } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-extrabold bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent select-none mb-4">
        404
      </p>
      <h1 className="text-2xl font-bold mb-2">Page wandered off the design system</h1>
      <p className="text-muted-foreground mb-8 max-w-sm">
        This page doesn't exist — or it moved without leaving a redirect. Either way, you can find your way back below.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/projects">
            <FolderKanban className="mr-2 h-4 w-4" />
            View Projects
          </Link>
        </Button>
      </div>
    </div>
  );
}
