import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { DashboardDemo } from "@/pages/DashboardDemo";
import { FormsDemo } from "@/pages/FormsDemo";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { applyTheme, getThemePreference } from "@/lib/theme";
import { useEffect } from "react";

// Initialize theme on app load
if (typeof window !== "undefined") {
  const theme = getThemePreference();
  applyTheme(theme);
}

export function App() {
  useEffect(() => {
    // Apply theme on mount
    const theme = getThemePreference();
    applyTheme(theme);
  }, []);

  // Get base path from Vite's import.meta.env.BASE_URL
  // For custom domain (pr4veen.in), base path is "/"
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/demo/dashboard" element={<DashboardDemo />} />
        <Route path="/demo/forms" element={<FormsDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;