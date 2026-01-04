import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, ExternalLink, Instagram } from "lucide-react";
import { MotionDiv } from "@/components/animations/MotionDiv";

export function SocialMedia() {
  return (
    <section id="social-media" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Social Media</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with me on various platforms
          </p>
        </MotionDiv>

        <MotionDiv animation="slideUp" trigger="inView" delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
              <CardDescription>
                Follow me on these platforms to stay updated
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://linkedin.com/in/pr4veen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/pr4veen</p>
                </div>
              </a>
              <a
                href="https://figma.com/@pr4veen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                <ExternalLink className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Figma</p>
                  <p className="text-sm text-muted-foreground">figma.com/@pr4veen</p>
                </div>
              </a>
              <a
                href="https://medium.com/@pr4veen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                <ExternalLink className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Medium</p>
                  <p className="text-sm text-muted-foreground">medium.com/@pr4veen</p>
                </div>
              </a>
              <a
                href="https://instagram.com/pr4veen_n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                <Instagram className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-muted-foreground">instagram.com/pr4veen_n</p>
                </div>
              </a>
              <a
                href="https://pr4veen.designfolio.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border p-4 transition-colors hover:bg-accent"
              >
                <ExternalLink className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Designfolio</p>
                  <p className="text-sm text-muted-foreground">pr4veen.designfolio.me</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
}


