import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { useEffect } from "react";
import { animate } from "motion";

export function ContactPage() {
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


