import yaml from "js-yaml";

export interface ProjectMetadata {
  title: string;
  id: string;
  addedOn: string;
  projectImage: string;
  description: string;
  techStack: string[];
  category: string;
  featured: boolean;
}

export interface Project extends ProjectMetadata {
  content: string; // Markdown content
}

/**
 * Parse a markdown file with YAML frontmatter
 * Browser-compatible version that doesn't rely on Node.js Buffer
 */
export function parseMarkdownFile(fileContent: string): Project {
  // Match YAML frontmatter (between --- markers)
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = fileContent.match(frontmatterRegex);
  
  if (!match) {
    throw new Error("Invalid markdown file: missing YAML frontmatter");
  }
  
  const frontmatter = match[1];
  const content = match[2];
  
  // Parse YAML frontmatter
  const data = yaml.load(frontmatter) as ProjectMetadata;
  
  return {
    ...data,
    content: content.trim(),
  };
}

/**
 * Load all project markdown files
 * In Vite, we use import.meta.glob to dynamically import markdown files
 */
export function loadProjects(): Project[] {
  // Use Vite's glob import to get all markdown files
  // The path must be relative to the project root
  const modules = import.meta.glob("/src/content/projects/*.md", { 
    eager: true,
    query: "?raw",
    import: "default"
  });

  const projects: Project[] = [];

  for (const path in modules) {
    const content = modules[path] as string;
    const project = parseMarkdownFile(content);
    projects.push(project);
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

