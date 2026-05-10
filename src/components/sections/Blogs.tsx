import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogs = [
  {
    title: "How to Avoid Operational Nightmares in the Design Stage",
    description: "Practical strategies for catching operational blind spots early — before they become expensive engineering rework or user-facing failures.",
    date: "2024",
    category: "Product Design",
    link: "https://medium.com/@pr4veen/how-to-avoid-operational-nightmares-in-the-design-stage-03aedb63f962",
  },
  {
    title: "UX Lesson We Can Learn with the Empty Soap Packaging Problem",
    description: "A classic engineering puzzle reframed through a UX lens — what a factory floor problem reveals about designing for edge cases and human behaviour.",
    date: "2024",
    category: "UX Research",
    link: "https://medium.com/@pr4veen/ux-lesson-we-can-learn-with-the-empty-soap-packaging-problem-11c0589e5ea8",
  },
];

export function Blogs() {
  return (
    <section id="blogs" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Blogs & Articles</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Thoughts on design, UX, and the creative process — published on Medium.
          </p>
        </MotionDiv>
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {blogs.map((blog, index) => (
            <MotionDiv key={blog.title} animation="slideUp" trigger="inView" delay={index * 0.1}>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <Card className="h-full group-hover:shadow-lg group-hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">{blog.category}</Badge>
                    </div>
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors leading-snug">{blog.title}</CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{blog.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed mb-4">{blog.description}</CardDescription>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Read Article
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            </MotionDiv>
          ))}
        </div>
        <MotionDiv animation="slideUp" trigger="inView" delay={0.3} className="mt-12 text-center">
          <a href="https://medium.com/@pr4veen" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            View All Articles on Medium
            <ExternalLink className="h-4 w-4" />
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}
