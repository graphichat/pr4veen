import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Base path for GitHub Pages
  // Use "/pr4veen/" for production builds (GitHub Pages)
  // Use "/" for local development (npm run dev)
  const base = command === "build" ? "/pr4veen/" : "/";

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
})
