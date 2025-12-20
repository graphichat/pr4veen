import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  // Base path for GitHub Pages
  // For project pages (username.github.io/repository-name): use "/pr4veen/"
  // For user/organization pages (username.github.io) or custom domain: use "/"
  base: "/pr4veen/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
