export type Theme = "light" | "dark" | "system";

export function getThemePreference(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem("theme") as Theme | null;
  return stored || "system";
}

export function setThemePreference(theme: Theme): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("theme", theme);
}

export function applyTheme(theme: Theme): void {
  if (typeof window === "undefined") return;

  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
}

export function getEffectiveTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const root = window.document.documentElement;
  return root.classList.contains("dark") ? "dark" : "light";
}

