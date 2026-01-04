import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { applyTheme, getThemePreference, setThemePreference } from "@/lib/theme";

type SimpleTheme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<SimpleTheme>("light");

  React.useEffect(() => {
    const currentTheme = getThemePreference();
    // Convert system theme to light or dark
    const effectiveTheme: SimpleTheme = currentTheme === "system" 
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : currentTheme === "dark" ? "dark" : "light";
    
    setTheme(effectiveTheme);
    applyTheme(effectiveTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme: SimpleTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setThemePreference(newTheme);
    applyTheme(newTheme);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

