import { loadProjects, type Project } from "@/lib/markdown";

// Re-export types and functions
export type { Project } from "@/lib/markdown";
export { getProjectById } from "@/lib/markdown";

// Load projects from markdown files
export const projects: Project[] = loadProjects();

