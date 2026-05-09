import { slugify } from "@/lib/markdown-headings";

export const mdxComponents: any = {
  h1: ({ node, children, ...props }: any) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h1 id={id} className="text-3xl font-bold mb-4 mt-6 first:mt-0 scroll-mt-20" {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ node, children, ...props }: any) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h2 id={id} className="text-2xl font-bold mb-3 mt-6 scroll-mt-20" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ node, children, ...props }: any) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h3 id={id} className="text-xl font-semibold mb-2 mt-4 scroll-mt-20" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ node, children, ...props }: any) => {
    const text = String(children);
    const id = slugify(text);
    return (
      <h4 id={id} className="text-lg font-semibold mb-2 mt-3 scroll-mt-20" {...props}>
        {children}
      </h4>
    );
  },
  p: ({ node, ...props }: any) => (
    <p className="mb-4 text-muted-foreground leading-relaxed" {...props} />
  ),
  ul: ({ node, ...props }: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground" {...props} />
  ),
  ol: ({ node, ...props }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground" {...props} />
  ),
  li: ({ node, ...props }: any) => (
    <li className="ml-4" {...props} />
  ),
  a: ({ node, ...props }: any) => (
    <a
      className="text-primary hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: ({ node, ...props }: any) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  code: ({ node, className, ...props }: any) => {
    const isInline = className?.includes("language-") === false || !className;
    return isInline ? (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
    ) : (
      <code className="block bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto" {...props} />
    );
  },
  // Custom components for images and Figma iframes
  img: ({ src, alt, ...props }: any) => (
    <img
      src={src}
      alt={alt || "Project Image"}
      className="rounded-lg shadow-md border border-border w-full my-6 object-cover aspect-video"
      {...props}
    />
  ),
  FigmaEmbed: ({ url, width = "100%", height = 600 }: any) => (
    <div className="w-full my-6 rounded-lg overflow-hidden border border-border shadow-md">
      <iframe
        style={{ border: "none" }}
        width={width}
        height={height}
        src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`}
        allowFullScreen
      ></iframe>
    </div>
  ),
};

