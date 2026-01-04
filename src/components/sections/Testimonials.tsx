import { MotionDiv } from "@/components/animations/MotionDiv";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Praveen's design leadership transformed our product's user experience. His attention to detail and user-centric approach resulted in a 25% increase in user satisfaction.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      quote: "Working with Praveen was a game-changer. His ability to translate complex requirements into intuitive designs helped us reduce development time by 30%.",
      name: "Michael Rodriguez",
      designation: "Engineering Lead at InnovateCo",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      quote: "Praveen's design system implementation streamlined our entire workflow. The consistency and quality he brought to our products is unmatched.",
      name: "Emily Watson",
      designation: "Design Director at Creative Labs",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      quote: "The UX research and design process Praveen led was exceptional. His insights helped us understand our users better and build products they truly love.",
      name: "James Kim",
      designation: "CEO at StartupHub",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      quote: "Praveen's expertise in design systems and stakeholder management made him an invaluable partner. He consistently delivered high-quality work on time.",
      name: "Lisa Thompson",
      designation: "VP of Product at ScaleTech",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="testimonials" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Testimonials</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            What colleagues and clients say about working with me.
          </p>
        </MotionDiv>

        <MotionDiv animation="slideUp" trigger="inView" delay={0.2}>
          <div className="[&>div]:!py-0">
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

