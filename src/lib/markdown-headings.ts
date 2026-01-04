/**
 * Extract headings from markdown content
 * Returns an array of sections with their subsections
 */

export interface Heading {
  id: string;
  text: string;
  level: number; // 2 for H2, 3 for H3
}

/**
 * Convert heading text to a valid ID
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Extract headings from markdown content
 */
export function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length; // Number of # characters
    const text = match[2].trim();
    const id = slugify(text);

    headings.push({
      id,
      text,
      level,
    });
  }

  return headings;
}

/**
 * Group headings into sections with subsections
 */
export interface Section {
  id: string;
  text: string;
  subsections: Array<{ id: string; text: string }>;
}

export function groupHeadings(headings: Heading[]): Section[] {
  const sections: Section[] = [];
  let currentSection: Section | null = null;

  for (const heading of headings) {
    if (heading.level === 2) {
      // New H2 section
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        id: heading.id,
        text: heading.text,
        subsections: [],
      };
    } else if (heading.level === 3 && currentSection) {
      // H3 subsection
      currentSection.subsections.push({
        id: heading.id,
        text: heading.text,
      });
    }
  }

  // Add the last section
  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

