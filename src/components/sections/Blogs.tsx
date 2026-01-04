import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Blogs() {
  const blogs = [
    {
      title: "Designing for Scale: Building Design Systems That Grow",
      description: "Exploring strategies for creating scalable design systems that adapt to evolving product needs and team growth.",
      date: "March 2024",
      category: "Design Systems",
      link: "https://medium.com/@pr4veen/designing-for-scale",
    },
    {
      title: "The UX Research Process: From Insights to Impact",
      description: "A deep dive into conducting effective user research and translating findings into actionable design decisions.",
      date: "February 2024",
      category: "UX Research",
      link: "https://medium.com/@pr4veen/ux-research-process",
    },
    {
      title: "Product Design Leadership: Balancing Vision and Execution",
      description: "Lessons learned from leading design teams and navigating the challenges of product design leadership.",
      date: "January 2024",
      category: "Leadership",
      link: "https://medium.com/@pr4veen/product-design-leadership",
    },
    {
      title: "Accessibility in Design: Beyond Compliance",
      description: "Understanding the importance of inclusive design and practical approaches to creating accessible digital experiences.",
      date: "December 2023",
      category: "Accessibility",
      link: "https://medium.com/@pr4veen/accessibility-in-design",
    },
  ];

  return (
    <section id="blogs" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Blogs & Articles</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Thoughts on design, UX, leadership, and the creative process.
          </p>
        </MotionDiv>

        <div className="grid gap-6 sm:grid-cols-2">
          {blogs.map((blog, index) => (
            <MotionDiv
              key={blog.title}
              animation="slideUp"
              trigger="inView"
              delay={index * 0.1}
            >
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {blog.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{blog.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {blog.description}
                  </CardDescription>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group/link"
                  >
                    Read Article
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv animation="slideUp" trigger="inView" delay={0.5} className="mt-12 text-center">
          <a
            href="https://medium.com/@pr4veen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Articles on Medium
            <ExternalLink className="h-4 w-4" />
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}


