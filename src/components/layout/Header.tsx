import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";



const sectionTitles: Record<string, string> = {
  home: "Praveen Kumar N",
  projects: "My Projects",
  about: "About",
  blogs: "Blogs",
  testimonials: "Testimonials",
  awards: "Awards",
  social: "Social Media",
  contact: "Contact",
};

interface HeaderProps {
  activeSection?: string;
}

export function Header({ activeSection }: HeaderProps = {}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";



  // Get title based on active section or default to "Praveen Kumar N"
  const headerTitle = activeSection ? sectionTitles[activeSection] || "Praveen Kumar N" : "Praveen Kumar N";

  return (
    <header className={`sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${!isHomePage ? "border-b" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 relative" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold font-mono">pr4veen</span>
          </Link>
        </div>
        {/* Center Title - Only show on home page when activeSection is provided */}
        {isHomePage && activeSection && (
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
            <h1 className="text-lg font-semibold">{headerTitle}</h1>
          </div>
        )}

        <div className="flex flex-1 justify-end items-center gap-4">
          {/* ⌘K hint — clicking triggers the keyboard shortcut visually */}
          <kbd
            className="hidden sm:inline-flex items-center gap-1 rounded border bg-muted px-2 py-1 text-[11px] text-muted-foreground cursor-pointer hover:bg-accent transition-colors select-none"
            title="Open command palette (⌘K)"
            onClick={() => {
              const event = new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true });
              document.dispatchEvent(event);
            }}
          >
            <span>⌘</span><span>K</span>
          </kbd>
          <ThemeToggle />
        </div>
      </nav>

    </header>
  );
}
