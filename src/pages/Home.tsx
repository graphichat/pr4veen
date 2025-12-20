import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { useEffect } from "react";
import { animate } from "motion";

export function Home() {
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects limit={5} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

