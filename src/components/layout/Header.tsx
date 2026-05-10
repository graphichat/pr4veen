import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import * as React from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

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
        {!isHomePage && (
          <>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </>
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
      {!isHomePage && mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
