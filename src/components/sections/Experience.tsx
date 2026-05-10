import { MotionDiv } from "@/components/animations/MotionDiv";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const timeline = [
  {
    role: "Product Design Lead",
    company: "IQLine",
    period: "Sep 2024 – Present",
    color: "bg-primary",
    highlights: [
      "Leading UX and product modernisation for IQHealth — a modular HIMS platform for healthcare facility operations and diagnostics.",
      "Designed and launched a Sample Transport Management System for end-to-end inter-facility medical sample tracking.",
      "Driving architectural redesign with focus on modularity, integrations, and multi-product interoperability.",
      "Introduced modern design workflows, reusable design systems, and AI-assisted tooling to accelerate collaboration.",
    ],
  },
  {
    role: "Design Lead",
    company: "HealthPlix Technologies",
    period: "Aug 2021 – Apr 2024",
    color: "bg-purple-500",
    highlights: [
      "Redesigned EMR Visit Pad workflows — improved user satisfaction by 25% and reduced clinical documentation friction.",
      "Reduced doctors' note-taking time by 30% through interaction optimisation.",
      "Launched redesigned Doctor App — increased new user adoption by 40% within six months.",
      "Led UX across healthcare products while mentoring designers and improving design review processes.",
    ],
  },
  {
    role: "Senior UX Designer",
    company: "HealthPlix Technologies",
    period: "Aug 2018 – Aug 2021",
    color: "bg-pink-500",
    highlights: [
      "Redesigned Patient App — increased engagement by 35% through usability and onboarding improvements.",
      "Rebuilt and standardised the company-wide UI/UX process for better scalability and collaboration.",
      "Improved EMR task completion rate by 25% by redesigning complex clinical workflows.",
    ],
  },
  {
    role: "UI Designer",
    company: "NDesign",
    period: "Aug 2017 – Aug 2018",
    color: "bg-orange-500",
    highlights: [
      "Delivered enterprise UI solutions, branding assets, and product videos directly with the CEO.",
      "Improved client satisfaction by 30% through intuitive interfaces for US-based clients.",
      "Recognised as Best Performer within one month of joining.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Robert Bosch",
    period: "Jul 2013 – Jul 2015",
    color: "bg-slate-500",
    highlights: [
      "Maintained and optimised C++ route calculation algorithms for automotive navigation systems in premium vehicles.",
      "Selected among top three winners in Winnovate 1.0 for conceptualising a new Bosch Tools product idea.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Experience</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            10+ years bridging engineering thinking and human-centred design across healthcare and enterprise platforms.
          </p>
        </MotionDiv>

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-10">
            {timeline.map((item, index) => (
              <MotionDiv
                key={`${item.company}-${item.role}`}
                animation="slideInLeft"
                trigger="inView"
                delay={index * 0.08}
              >
                <div className="relative pl-12 sm:pl-16">
                  <div className={cn("absolute left-[11px] sm:left-[19px] top-1.5 h-3 w-3 rounded-full ring-2 ring-background", item.color)} />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{item.role}</h3>
                      <p className="text-primary font-medium text-sm">{item.company}</p>
                    </div>
                    <Badge variant="outline" className="self-start shrink-0 text-xs text-muted-foreground">
                      {item.period}
                    </Badge>
                  </div>
                  <ul className="space-y-1.5">
                    {item.highlights.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary shrink-0 mt-1">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
