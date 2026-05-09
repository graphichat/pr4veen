export interface ProjectMetadata {
  title: string;
  id: string;
  addedOn: string;
  projectImage: string;
  projectOldImage?: string;
  description: string;
  techStack: string[];
  category: string;
  featured: boolean;
}

export interface Project extends ProjectMetadata {
  content: string; // Markdown content (raw string for TOC)
  Component: React.ElementType; // The MDX component
}

/**
 * Load all project markdown files
 * In Vite, we use import.meta.glob to dynamically import markdown files
 */
export function loadProjects(): Project[] {
  // Use Vite's glob import to get all markdown files
  // The path must be relative to the project root
  const modules = import.meta.glob("/src/content/projects/*.mdx", { 
    eager: true,
  });
  const rawModules = import.meta.glob("/src/content/projects/*.mdx", { 
    eager: true,
    query: "?raw",
    import: "default"
  });

  const projects: Project[] = [];

  for (const path in modules) {
    const module = modules[path] as any;
    const rawContent = rawModules[path] as string;
    
    // Check if module has frontmatter
    if (!module.frontmatter) {
      console.warn(`Warning: Missing frontmatter in ${path}`);
      continue;
    }
    
    const data = module.frontmatter as ProjectMetadata;
    const Component = module.default;
    
    projects.push({
      ...data,
      content: rawContent,
      Component,
    });
  }

  // Sort by addedOn date (newest first), then by featured
  return projects.sort((a, b) => {
    const dateA = new Date(a.addedOn).getTime();
    const dateB = new Date(b.addedOn).getTime();
    
    // Featured projects first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    
    // Then by date (newest first)
    return dateB - dateA;
  });
}

/**
 * Get a single project by ID
 */
export function getProjectById(id: string): Project | null {
  const projects = loadProjects();
  return projects.find((p) => p.id === id) || null;
}

