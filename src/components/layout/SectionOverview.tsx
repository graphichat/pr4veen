import { useEffect, useState, useMemo } from "react";
import { FileText, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { extractHeadings, groupHeadings } from "@/lib/markdown-headings";

interface SectionOverviewProps {
  content: string;
}

export function SectionOverview({ content }: SectionOverviewProps) {
  const sections = useMemo(() => {
    const headings = extractHeadings(content);
    return groupHeadings(headings);
  }, [content]);

  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    if (sections.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const allIds = sections.flatMap((section) => [
        section.id,
        ...section.subsections.map((sub) => sub.id),
      ]);
      
      // Also include tech section if it exists
      const techSection = document.getElementById("tech");
      if (techSection) {
        allIds.push("tech");
      }

      // Check sections in reverse order to find the topmost visible one
      for (let i = allIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(allIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          // Find which section this ID belongs to
          const section = sections.find(
            (s) => s.id === allIds[i] || s.subsections.some((sub) => sub.id === allIds[i])
          );
          if (section) {
            setActiveSection(section.id);
          } else if (allIds[i] === "tech") {
            // Handle tech section separately
            setActiveSection("tech");
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

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

  if (sections.length === 0) {
    return null;
  }

  return (
    <aside className="fixed top-[73px] right-0 h-[calc(100vh-73px)] w-64 bg-background border-l hidden xl:block">
      <div className="p-6 h-full overflow-hidden flex flex-col">
        <div className="space-y-2 flex-1 overflow-hidden">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-4">
            Sections
          </div>
          <nav className="space-y-1 overflow-y-auto">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <div key={section.id} className="space-y-0.5">
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-left",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <FileText className="h-4 w-4 shrink-0" />
                    <span className="truncate">{section.text}</span>
                  </button>
                  {section.subsections.length > 0 && (
                    <div className="ml-7 space-y-0.5">
                      {section.subsections.map((subsection) => {
                        const isSubActive = activeSection === section.id;
                        return (
                          <button
                            key={subsection.id}
                            onClick={() => scrollToSection(subsection.id)}
                            className={cn(
                              "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs font-normal transition-colors text-left",
                              isSubActive
                                ? "text-accent-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            <span className="truncate">{subsection.text}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            {/* Tech Stack Section - Always at the end */}
            <div className="pt-2 mt-2 border-t">
              <button
                onClick={() => scrollToSection("tech")}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-left",
                  activeSection === "tech"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>Technology & Tools</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
}
