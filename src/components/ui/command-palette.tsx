import { useState, useEffect, useCallback } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { useNavigate } from "react-router-dom";
import { Search, FolderKanban, Home, User, Mail, BookOpen } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "projects", label: "All Projects", icon: FolderKanban, path: "/projects" },
  { id: "about", label: "About", icon: User, path: "/about" },
  { id: "contact", label: "Contact", icon: Mail, path: "/contact" },
  { id: "blogs", label: "Blogs", icon: BookOpen, path: "/#blogs" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleSelect = useCallback(
    (path: string) => {
      navigate(path);
      setOpen(false);
      setQuery("");
    },
    [navigate]
  );

  const filteredNav = navItems.filter(
    (i) => !query || i.label.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = projects.filter(
    (p) =>
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  const hasResults = filteredNav.length > 0 || filteredProjects.length > 0;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/4 -translate-x-1/2 z-[60] w-full max-w-lg rounded-xl border bg-background shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          aria-describedby={undefined}
        >
          <DialogPrimitive.Title className="sr-only">
            Command Palette
          </DialogPrimitive.Title>

          {/* Search input */}
          <div className="flex items-center gap-3 border-b px-4 py-3">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or navigate…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
              esc
            </kbd>
          </div>

          {/* Results */}
          <div className="py-2 max-h-80 overflow-y-auto">
            {!hasResults && (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No results for &ldquo;{query}&rdquo;
              </p>
            )}

            {filteredNav.length > 0 && (
              <div>
                <p className="px-4 py-1 text-xs font-medium text-muted-foreground">
                  Navigate
                </p>
                {filteredNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      className={cn(
                        "flex w-full items-center gap-3 px-4 py-2 text-sm",
                        "hover:bg-accent hover:text-accent-foreground cursor-pointer text-left"
                      )}
                      onClick={() => handleSelect(item.path)}
                      type="button"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {filteredProjects.length > 0 && (
              <div>
                <p className="px-4 py-1 text-xs font-medium text-muted-foreground">
                  Projects
                </p>
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    className={cn(
                      "flex w-full items-center gap-3 px-4 py-2 text-sm",
                      "hover:bg-accent hover:text-accent-foreground cursor-pointer text-left"
                    )}
                    onClick={() => handleSelect(`/project/${project.id}`)}
                    type="button"
                  >
                    <FolderKanban className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="flex-1 truncate">{project.title}</span>
                    <span className="ml-auto text-xs text-muted-foreground shrink-0">
                      {project.category}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
