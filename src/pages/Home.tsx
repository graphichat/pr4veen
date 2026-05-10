import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { SocialMedia } from "@/components/sections/SocialMedia";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { Blogs } from "@/components/sections/Blogs";
import { ToolsStrip } from "@/components/sections/ToolsStrip";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home as HomeIcon,
  FolderKanban,
  User,
  Mail,
  BookOpen,
  Share2,
  MessageSquare,
  Award,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { animate } from "motion";

const DOCK_ITEMS = [
  { id: "home", title: "Home", icon: <HomeIcon className="h-5 w-5" />, type: "internal" as const },
  { id: "projects", title: "Projects", icon: <FolderKanban className="h-5 w-5" />, type: "internal" as const },
  { id: "about", title: "About", icon: <User className="h-5 w-5" />, type: "internal" as const },
  { id: "blogs", title: "Blogs", icon: <BookOpen className="h-5 w-5" />, type: "internal" as const },
  { id: "testimonials", title: "Testimonials", icon: <MessageSquare className="h-5 w-5" />, type: "internal" as const },
  { id: "awards", title: "Awards", icon: <Award className="h-5 w-5" />, type: "internal" as const },
  { id: "social", title: "Social Media", icon: <Share2 className="h-5 w-5" />, type: "internal" as const },
  { id: "contact", title: "Contact", icon: <Mail className="h-5 w-5" />, type: "internal" as const },
];

export function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animate(document.body, { opacity: [0, 1] }, { duration: 0.5 });
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
      projects: projectsRef,
      about: aboutRef,
      blogs: blogsRef,
      testimonials: testimonialsRef,
      awards: awardsRef,
      social: socialRef,
      contact: contactRef,
    };

    const ref = refs[sectionId];
    if (ref?.current) {
      const headerOffset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // Keyboard navigation: 1–8 keys map to dock items
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Skip when typing in an input / textarea / contenteditable
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) return;
      // Skip if any modifier key is held (⌘K etc. handled elsewhere)
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const idx = parseInt(e.key) - 1;
      if (idx >= 0 && idx < DOCK_ITEMS.length) {
        scrollToSection(DOCK_ITEMS[idx].id);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex min-h-screen flex-col relative">
      <Header activeSection={activeSection} />
      <main className="flex-1">
        {/* Hero — default background */}
        <div style={{ display: activeSection === "home" ? "block" : "none" }}>
          <Hero onNavigate={scrollToSection} />
        </div>

        {/* Projects — subtle muted tint */}
        <div
          ref={projectsRef}
          id="projects-section"
          style={{ display: activeSection === "projects" ? "block" : "none" }}
        >
          <Projects />
        </div>

        {/* About — slightly different background; preceded by tools strip */}
        <div
          ref={aboutRef}
          id="about-section"
          style={{ display: activeSection === "about" ? "block" : "none" }}
        >
          <ToolsStrip />
          <About />
        </div>

        {/* Blogs — default background */}
        <div
          ref={blogsRef}
          id="blogs-section"
          style={{ display: activeSection === "blogs" ? "block" : "none" }}
        >
          <Blogs />
        </div>

        {/* Testimonials — primary tint */}
        <div
          ref={testimonialsRef}
          id="testimonials-section"
          className="bg-primary/5"
          style={{ display: activeSection === "testimonials" ? "block" : "none" }}
        >
          <Testimonials />
        </div>

        {/* Awards — default background */}
        <div
          ref={awardsRef}
          id="awards-section"
          style={{ display: activeSection === "awards" ? "block" : "none" }}
        >
          <Awards />
        </div>

        {/* Social — muted tint */}
        <div
          ref={socialRef}
          id="social-section"
          className="bg-muted/20"
          style={{ display: activeSection === "social" ? "block" : "none" }}
        >
          <SocialMedia />
        </div>

        {/* Contact — default background */}
        <div
          ref={contactRef}
          id="contact-section"
          style={{ display: activeSection === "contact" ? "block" : "none" }}
        >
          <Contact />
        </div>
      </main>

      {/* Floating Dock */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock
          items={DOCK_ITEMS}
          activeItem={activeSection}
          onItemClick={scrollToSection}
        />
      </div>
    </div>
  );
}
