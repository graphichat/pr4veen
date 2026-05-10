import { MotionDiv } from "@/components/animations/MotionDiv";

export function Philosophy() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <MotionDiv animation="fadeIn" trigger="inView">
          <div className="relative rounded-2xl bg-muted/20 border border-border/50 px-8 py-12 sm:px-12 text-center">
            <span
              aria-hidden="true"
              className="absolute top-6 left-8 text-6xl leading-none font-serif bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent select-none"
            >
              &ldquo;
            </span>

            <blockquote className="relative z-10 mt-4">
              <p className="text-xl sm:text-2xl lg:text-3xl italic font-medium leading-relaxed text-foreground/90 max-w-3xl mx-auto">
                I spent years writing C++ algorithms that helped machines find the shortest path.
                Then I realised I was more interested in the human navigating the route than the
                algorithm computing it. I didn&rsquo;t stop thinking in systems — I just started
                designing those systems for people.
              </p>
              <footer className="mt-6">
                <cite className="not-italic text-sm font-semibold tracking-widest uppercase text-muted-foreground">
                  — Praveen Kumar N
                </cite>
              </footer>
            </blockquote>

            <span
              aria-hidden="true"
              className="absolute bottom-6 right-8 text-6xl leading-none font-serif bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent select-none"
            >
              &rdquo;
            </span>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
