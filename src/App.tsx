import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Home } from "@/pages/Home";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { DashboardDemo } from "@/pages/DashboardDemo";
import { FormsDemo } from "@/pages/FormsDemo";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { NotFound } from "@/pages/NotFound";
import { CommandPalette } from "@/components/ui/command-palette";
import { BackToTop } from "@/components/ui/back-to-top";
import { applyTheme, getThemePreference } from "@/lib/theme";
import { useEffect } from "react";

// Initialize theme on app load
if (typeof window !== "undefined") {
  const theme = getThemePreference();
  applyTheme(theme);
}

// Inner component — lives inside BrowserRouter, so it has router context
function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/demo/dashboard" element={<DashboardDemo />} />
        <Route path="/demo/forms" element={<FormsDemo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Global overlays — available on every route */}
      <CommandPalette />
      <BackToTop />
      <Toaster position="bottom-center" richColors closeButton />
    </>
  );
}

export function App() {
  useEffect(() => {
    const theme = getThemePreference();
    applyTheme(theme);
  }, []);

  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
