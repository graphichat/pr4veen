import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { SocialMedia } from "@/components/sections/SocialMedia";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { Blogs } from "@/components/sections/Blogs";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home as HomeIcon, FolderKanban, User, Mail, BookOpen, Share2, MessageSquare, Award } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { animate } from "motion";

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
    // Page entrance animation
    animate(
      document.body,
      {
        opacity: [0, 1],
      },
      {
        duration: 0.5,
      }
    );
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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const dockItems = [
    {
      id: "home",
      title: "Home",
      icon: <HomeIcon className="h-5 w-5" />,
      type: "internal" as const,
    },
    {
      id: "projects",
      title: "Projects",
      icon: <FolderKanban className="h-5 w-5" />,
      type: "internal" as const,
    },
    {
      id: "about",
      title: "About",
      icon: <User className="h-5 w-5" />,
      type: "internal" as const,
    },
    {
      id: "blogs",
      title: "Blogs",
      icon: <BookOpen className="h-5 w-5" />,
      type: "internal" as const,
    },
    {
      id: "testimonials",
      title: "Testimonials",
      icon: <MessageSquare className="h-5 w-5" />,
      type: "internal" as const,
    },
    {
      id: "awards",
      title: "Awards",
      icon: <Award className="h-5 w-5" />,
      type: "internal" as const,
    },
    {
      id: "social",
      title: "Social Media",
      icon: <Share2 className="h-5 w-5" />,
      type: "internal" as const,
    },
    {
      id: "contact",
      title: "Contact",
      icon: <Mail className="h-5 w-5" />,
      type: "internal" as const,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col relative">
      <Header activeSection={activeSection} />
      <main className="flex-1">
        <div style={{ display: activeSection === "home" ? "block" : "none" }}>
          <Hero onNavigate={scrollToSection} />
        </div>
        <div ref={projectsRef} id="projects-section" style={{ display: activeSection === "projects" ? "block" : "none" }}>
          <Projects />
        </div>
        <div ref={aboutRef} id="about-section" style={{ display: activeSection === "about" ? "block" : "none" }}>
          <About />
        </div>
        <div ref={blogsRef} id="blogs-section" style={{ display: activeSection === "blogs" ? "block" : "none" }}>
          <Blogs />
        </div>
        <div ref={testimonialsRef} id="testimonials-section" style={{ display: activeSection === "testimonials" ? "block" : "none" }}>
          <Testimonials />
        </div>
        <div ref={awardsRef} id="awards-section" style={{ display: activeSection === "awards" ? "block" : "none" }}>
          <Awards />
        </div>
        <div ref={socialRef} id="social-section" style={{ display: activeSection === "social" ? "block" : "none" }}>
          <SocialMedia />
        </div>
        <div ref={contactRef} id="contact-section" style={{ display: activeSection === "contact" ? "block" : "none" }}>
          <Contact />
        </div>
      </main>
      {/* Floating Dock at bottom */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock 
          items={dockItems} 
          activeItem={activeSection}
          onItemClick={scrollToSection}
        />
      </div>
    </div>
  );
}

