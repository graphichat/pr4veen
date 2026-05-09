# Writing Project Content with MDX

This project has been upgraded from standard Markdown (`.md`) to **MDX** (`.mdx`), allowing you to seamlessly mix Markdown formatting with React components.

This guide explains how to format your project files, how to add images, and how to embed Figma prototypes.

## 1. File Format and Structure
All project content should be stored in the `/src/content/projects/` directory using the `.mdx` extension.

Every file requires YAML frontmatter at the very top for metadata:

```mdx
---
title: "Project Title"
id: "project-id"
addedOn: "2024-06-18"
projectImage: "/images/projects/thumbnail.png"
description: "Short project summary."
techStack:
  - "Figma"
  - "React"
category: "SaaS"
featured: false
---

# Project Title
Your content begins here...
```

## 2. Standard Markdown Elements
All standard Markdown syntax is fully supported and is automatically styled to match the site's sleek, premium design.

- **Headings**: `# H1`, `## H2`, `### H3` (These automatically generate the right sidebar Table of Contents!)
- **Lists**: `- Item` or `1. Item`
- **Links**: `[Link Text](https://url.com)`
- **Bold/Italics**: `**bold**`, `*italics*`

## 3. Adding Images

Images use standard Markdown syntax but are seamlessly enhanced behind the scenes. They automatically receive rounded corners, shadows, and responsive sizing.

### Local Images (Assets)
For images stored locally in your `public/` directory (e.g., `public/images/projects/`):

```mdx
![Dashboard View](/images/projects/dashboard-view.png)
```
*(Note: Always use absolute paths starting with `/` referencing your public folder.)*

### Internet Images
For images hosted externally:

```mdx
![Design Inspiration](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000)
```

## 4. Embedding Figma Prototypes

To showcase your designs interactively, a custom `<FigmaEmbed />` component is available globally in all your `.mdx` files. You do **not** need to import it.

**How to get the Figma URL:**
1. Open your file in Figma.
2. Click **Share** in the top right.
3. Click **Copy link** (Make sure permissions allow viewing).

**How to use it in your MDX file:**

```mdx
<FigmaEmbed url="https://www.figma.com/file/YOUR_FILE_ID/Your-File-Name" />
```

### Customizing the Figma Embed
You can optionally customize the height and width:

```mdx
<FigmaEmbed 
  url="https://www.figma.com/file/YOUR_FILE_ID" 
  height={800} 
  width="100%" 
/>
```

## 5. Adding New Custom Components

If you ever want to build more custom components (like a custom Video player, a Callout Box, etc.) to use in your MDX files:

1. Open `/src/components/markdown/MarkdownContent.tsx`.
2. Locate the `mdxComponents` object.
3. Add your new React component there.
4. It will instantly become available in every `.mdx` file!
