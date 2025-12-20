import { useEffect, useState } from "react";
import { FileText, Sparkles, Layers, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "overview", label: "Overview", icon: FileText },
  { id: "highlights", label: "UX Highlights", icon: Sparkles },
  { id: "process", label: "Design Process", icon: Layers },
  { id: "tech", label: "Tech Stack", icon: CheckCircle2 },
];

export function SectionOverview() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="fixed top-[73px] right-0 h-[calc(100vh-73px)] w-64 bg-background">
      <div className="p-6 h-full overflow-hidden flex flex-col">
        <div className="space-y-2 flex-1 overflow-hidden">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-4">
            Sections
          </div>
          <nav className="space-y-1 overflow-y-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-left",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
