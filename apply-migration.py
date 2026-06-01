#!/usr/bin/env python3
"""
Run this from your repo root:
  cd /Users/praveen/Programming/IQLine/pr4veen
  python3 /path/to/apply-portfolio-changes.py
"""
import os, sys, base64

ROOT = os.getcwd()

def write(path, content):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  wrote: {path}")

files = {}

files["src/components/sections/Philosophy.tsx"] = '''\
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
'''

files["src/components/sections/Experience.tsx"] = '''\
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
      "Reduced doctors\' note-taking time by 30% through interaction optimisation.",
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
'''

files["src/components/ui/currently-widget.tsx"] = '''\
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const items = [
  { emoji: "📖", label: "Reading", value: "Winning People Without Losing Yourself — Ankur Warikoo" },
  { emoji: "🛠️", label: "Working on", value: "IQHealth HIMS Platform — modular healthcare facility workflows" },
  { emoji: "🤔", label: "Thinking about", value: "Adding an AI companion to this portfolio — something that sits on the dock like a design co-pilot" },
];

export function CurrentlyWidget() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Sparkles className="h-4 w-4 text-primary" />
          Currently
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="flex gap-3">
            <span className="text-lg shrink-0 leading-snug">{item.emoji}</span>
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{item.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
'''

files["src/components/sections/Awards.tsx"] = '''\
import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Medal, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const awards = [
  {
    icon: Trophy,
    title: "Product Design Excellence Award",
    organization: "IQLine",
    year: "2025",
    description: "In recognition of creativity and user-focused design — delivering impactful solutions that set a benchmark in product excellence. Presented by Ayush Garg (Director & Founder) and Amit Jain (Director & Co-Founder).",
  },
  {
    icon: Star,
    title: "Best Performer",
    organization: "IQLine",
    year: "2024",
    description: "Recognised for outstanding performance in leading UX modernisation initiatives for the IQHealth platform and driving design team excellence.",
  },
  {
    icon: Medal,
    title: "Product Idea Award — Winnovate 1.0",
    organization: "Robert Bosch Engineering (RBEI/ECS)",
    year: "2014",
    description: "Certificate of Appreciation for valuable contribution towards a product idea. Selected among the top three winners in Winnovate 1.0 for conceptualising a new Bosch Tools product.",
  },
  {
    icon: Award,
    title: "Best Performer",
    organization: "NDesign",
    year: "2017",
    description: "Recognised as Best Performer within one month of joining for delivering high-quality visual and interaction design outputs for US-based enterprise clients.",
  },
];

export function Awards() {
  return (
    <section id="awards" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Awards & Recognition</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Recognition for contributions to design, innovation, and team leadership across 10+ years.
          </p>
        </MotionDiv>
        <div className="grid gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <MotionDiv key={award.title + award.organization} animation="slideUp" trigger="inView" delay={index * 0.1}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <award.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">{award.year}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{award.title}</CardTitle>
                  <CardDescription className="text-sm font-medium">{award.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
'''

files["src/components/sections/Blogs.tsx"] = '''\
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
'''

files["src/components/sections/Hobbies.tsx"] = '''\
import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Clapperboard, Code2 } from "lucide-react";

const hobbies = [
  {
    icon: Crown,
    title: "Chess",
    description: "I play chess for the same reason I design — both reward thinking three moves ahead and punish the assumption that your first idea is your best one.",
  },
  {
    icon: Clapperboard,
    title: "Movies",
    description: "Certified movie buff. I watch everything from arthouse to blockbusters and dissect how directors guide attention — which turns out to be exactly what UX designers do.",
  },
  {
    icon: Code2,
    title: "Creating Software",
    description: "I build things in code when I want to test an idea without a handoff meeting. Knowing how things are built makes me a better designer of how they should feel.",
  },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="px-4 py-20 bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">Outside of Work</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The things I do when I\'m not designing — and that secretly make me a better designer.
          </p>
        </MotionDiv>
        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {hobbies.map((hobby, index) => (
            <MotionDiv key={hobby.title} animation="slideUp" trigger="inView" delay={index * 0.1}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <hobby.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{hobby.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{hobby.description}</CardDescription>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
'''

files["src/components/sections/Hero.tsx"] = '''\
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ChevronDown, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useRef, useEffect } from "react";
import { animate } from "motion";

export function Hero({ onNavigate }: { onNavigate?: (sectionId: string) => void }) {
  const arrowRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (arrowRef.current) {
      animate(arrowRef.current, { y: [0, 10, 0] }, { duration: 1.5, repeat: Infinity, ease: "easeInOut" });
    }
    if (scrollIndicatorRef.current) {
      animate(scrollIndicatorRef.current, { y: [0, 8, 0] }, { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 });
    }
  }, []);

  return (
    <AuroraBackground>
      <section className="relative flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-4 py-12 sm:py-20 text-center overflow-hidden pb-24 sm:pb-32 w-full">
        <div className="relative z-10 mx-auto max-w-4xl space-y-6 sm:space-y-8 w-full mt-12 sm:mt-0">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[200px] sm:h-[300px] w-[300px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[80px] sm:blur-[120px]" />
          <MotionDiv animation="slideUp" delay={0} duration={0.8}>
            <div className="space-y-4 sm:space-y-6">
              <Badge variant="outline" className="mb-2 sm:mb-4 border-primary/30 bg-primary/10 text-primary px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm backdrop-blur-sm">
                Available for new opportunities
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
                Hi, I\'m <br className="sm:hidden" />
                <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                  Praveen Kumar N
                </span>
              </h1>
              <p className="text-xl font-medium text-foreground/80 sm:text-2xl lg:text-3xl">Product Design Lead</p>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground/90 leading-relaxed px-2 sm:px-0">
                With over a decade of experience, I lead teams to create user-centered, innovative solutions.
                I\'ve driven redesigns that boosted user satisfaction by 25%, reduced note-taking time by 30%,
                and increased user adoption by 40%. Explore my work and see the UX design process in action.
              </p>
            </div>
          </MotionDiv>
          <MotionDiv animation="slideUp" delay={0.3} duration={0.8}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Button size="lg" className="group" onClick={() => onNavigate?.("projects")}>
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="/resume/praveen-nalakurthi-resume.pdf" download>
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </MotionDiv>
        </div>
        <button
          ref={scrollIndicatorRef}
          onClick={() => onNavigate?.("projects")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-pointer"
          aria-label="View projects"
          type="button"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </section>
    </AuroraBackground>
  );
}
'''

files["src/components/sections/About.tsx"] = '''\
import { MotionDiv } from "@/components/animations/MotionDiv";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { CurrentlyWidget } from "@/components/ui/currently-widget";
import { User, Briefcase, Award, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    label: "Strategy & Research",
    skills: [
      { name: "User Research & Interviews", tooltip: "Conducted 12+ user interviews per product cycle at HealthPlix" },
      { name: "Design Thinking", tooltip: "Applied double diamond framework across 6+ product redesigns" },
      { name: "Design Reviews & Testing", tooltip: "Led bi-weekly design critique and usability test sessions" },
    ],
  },
  {
    label: "Craft & Tools",
    skills: [
      { name: "Figma & Design Systems", tooltip: "Built design systems from scratch at HealthPlix and IQLine" },
      { name: "Wireframing & Prototyping", tooltip: "Delivered high-fidelity prototypes for usability testing and dev handoff" },
      { name: "Framer & 3D Spline", tooltip: "Used for interactive motion prototypes and 3D UI explorations" },
      { name: "Design Tokens & PRDs", tooltip: "Authored product requirement documents and token documentation" },
    ],
  },
  {
    label: "Leadership & Process",
    skills: [
      { name: "Stakeholder Management", tooltip: "Managed design reviews with C-suite and engineering leads" },
      { name: "Cross-Functional Collaboration", tooltip: "Worked alongside product, engineering, and clinical teams" },
      { name: "Design System Development", tooltip: "Created token-based design systems used across multiple products" },
    ],
  },
];

const achievements = [
  { icon: Target, value: 25, suffix: "%", label: "User Satisfaction Increase" },
  { icon: Award, value: 30, suffix: "%", label: "Time Reduction" },
  { icon: User, value: 40, suffix: "%", label: "User Adoption Increase" },
  { icon: Briefcase, value: 10, suffix: "+", label: "Years Experience" },
];

export function About() {
  return (
    <TooltipProvider>
      <section id="about" className="px-4 py-20 bg-muted/20">
        <div className="mx-auto max-w-6xl">
          <MotionDiv animation="slideUp" trigger="inView" className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className={cn("h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden", "border-4 border-background shadow-lg")}>
                <img src="/images/praveen-headshot.jpg" alt="Praveen Kumar N" className="h-full w-full object-cover" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">About Me</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A Product Design Lead with over a decade of experience creating user-centered solutions
            </p>
          </MotionDiv>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MotionDiv animation="slideUp" trigger="inView" delay={0.1} className="md:col-span-2 h-full">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Professional Background
                  </CardTitle>
                  <CardDescription>Leading design teams to deliver impactful user experiences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    With over a decade of experience, I lead teams to create user-centered, innovative solutions.
                    At HealthPlix Technologies Ltd., I drove redesigns that boosted user satisfaction and adoption rates.
                    Currently, as Product Design Lead at IQLine, I\'m working on redesigning the architecture of the
                    entire Health Facility Software, focusing on integration and modularity.
                  </p>
                  <Separator />
                  <p className="text-muted-foreground leading-relaxed">
                    Skilled in user research, prototyping, and design systems, I excel in managing stakeholder expectations
                    and cross-functional collaboration. My passion for design excellence ensures impactful and intuitive
                    user experiences. I\'ve successfully reduced doctors\' note-taking time by 30% and boosted new user adoption by 40%.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv animation="slideUp" trigger="inView" delay={0.2} className="h-full">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Key Achievements
                  </CardTitle>
                  <CardDescription>Measurable impact and results</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  {achievements.map((achievement, idx) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-2xl font-bold flex items-baseline">
                            <NumberTicker value={achievement.value} suffix={achievement.suffix} className="tabular-nums" />
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{achievement.label}</p>
                        {idx < achievements.length - 1 && <Separator className="mt-4" />}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv animation="slideUp" trigger="inView" delay={0.25} className="h-full">
              <CurrentlyWidget />
            </MotionDiv>

            <MotionDiv animation="fadeIn" trigger="inView" delay={0.3} className="md:col-span-2 lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Design Skills & Expertise
                  </CardTitle>
                  <CardDescription>Core competencies — hover any skill for context</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3">
                    {skillCategories.map((category) => (
                      <div key={category.label}>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{category.label}</p>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <Tooltip key={skill.name} content={skill.tooltip}>
                              <Badge variant="secondary" className="text-sm font-medium cursor-default transition-all hover:scale-105">
                                {skill.name}
                              </Badge>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
'''

files["src/components/projects/ProjectCard.tsx"] = '''\
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Clock } from "lucide-react";
import { type Project } from "@/data/projects";
import { useRef, useEffect, useState } from "react";
import { animate } from "motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const handleMouseEnter = () => animate(card, { y: -4 }, { duration: 0.2, ease: "easeOut" });
    const handleMouseLeave = () => animate(card, { y: 0 }, { duration: 0.2, ease: "easeOut" });
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const topTechStack = project.techStack.slice(0, 3);
  const gradientColors = [
    "from-blue-500/60 via-purple-500/60 to-pink-500/60",
    "from-green-500/60 via-emerald-500/60 to-teal-500/60",
    "from-orange-500/60 via-red-500/60 to-rose-500/60",
    "from-indigo-500/60 via-blue-500/60 to-cyan-500/60",
    "from-violet-500/60 via-purple-500/60 to-fuchsia-500/60",
    "from-amber-500/60 via-yellow-500/60 to-orange-500/60",
  ];
  const gradient = gradientColors[project.id.charCodeAt(0) % gradientColors.length];

  return (
    <Link to={`/project/${project.id}`} className="block h-full group">
      <Card ref={cardRef} className="flex h-full flex-col overflow-hidden pt-0 cursor-pointer transition-all hover:border-primary/50 hover:shadow-md">
        <div className={cn("relative aspect-video w-full overflow-hidden bg-gradient-to-br", gradient)}>
          {project.featured && (
            <Badge variant="secondary" className="absolute top-3 right-3 z-10 bg-background/90 backdrop-blur-sm shadow-sm">Featured</Badge>
          )}
          {project.projectImage ? (
            <>
              {!imgLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
              <img
                src={project.projectImage}
                alt={project.title}
                onLoad={() => setImgLoaded(true)}
                className={cn("h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", !imgLoaded && "opacity-0")}
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold text-white/30 select-none">{project.title.charAt(0)}</div>
            </div>
          )}
        </div>
        <CardHeader className="pb-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed line-clamp-2">{project.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-1 space-y-3">
          {topTechStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {topTechStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs font-normal">{tech}</Badge>
              ))}
              {project.techStack.length > 3 && (
                <Badge variant="outline" className="text-xs text-muted-foreground font-normal">+{project.techStack.length - 3}</Badge>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-4">
          <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 shrink-0" />
              <span>{project.readingTime} min read</span>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
'''

files["src/components/projects/ProjectFeatureCard.tsx"] = '''\
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Clock } from "lucide-react";
import { type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFeatureCardProps {
  project: Project;
  reverse?: boolean;
}

export function ProjectFeatureCard({ project, reverse = false }: ProjectFeatureCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const topTechStack = project.techStack.slice(0, 3);
  const gradientColors = [
    "from-blue-500/60 via-purple-500/60 to-pink-500/60",
    "from-green-500/60 via-emerald-500/60 to-teal-500/60",
    "from-orange-500/60 via-red-500/60 to-rose-500/60",
    "from-indigo-500/60 via-blue-500/60 to-cyan-500/60",
    "from-violet-500/60 via-purple-500/60 to-fuchsia-500/60",
    "from-amber-500/60 via-yellow-500/60 to-orange-500/60",
  ];
  const gradient = gradientColors[project.id.charCodeAt(0) % gradientColors.length];

  return (
    <div className="group grid gap-8 md:grid-cols-2 items-center relative">
      <Link to={`/project/${project.id}`} aria-label={`View ${project.title}`} className="absolute inset-0 z-0" />

      <div className={cn("order-1", reverse && "md:order-2")}>
        <div className={cn("relative aspect-video w-full rounded-lg overflow-hidden bg-gradient-to-br", gradient, "transition-transform duration-300 group-hover:scale-[1.02]")}>
          {project.featured && (
            <Badge variant="secondary" className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm shadow-sm">Featured</Badge>
          )}
          {project.projectImage ? (
            <>
              {!imgLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
              <img
                src={project.projectImage}
                alt={project.title}
                onLoad={() => setImgLoaded(true)}
                className={cn("h-full w-full object-cover transition-transform duration-500 group-hover:scale-105", !imgLoaded && "opacity-0")}
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-white/30 select-none">{project.title.charAt(0)}</div>
            </div>
          )}
        </div>
      </div>

      <div className={cn("order-2 space-y-4", reverse && "md:order-1")}>
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-2">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
        </div>
        {topTechStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topTechStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm font-normal">{tech}</Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="outline" className="text-sm text-muted-foreground font-normal">+{project.techStack.length - 3}</Badge>
            )}
          </div>
        )}
        <div className="flex items-center gap-4 pt-2 relative z-10">
          <Button asChild variant="default" className="group/btn">
            <Link to={`/project/${project.id}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3 shrink-0" />
            {project.readingTime} min read
          </span>
        </div>
      </div>
    </div>
  );
}
'''

files["src/pages/Home.tsx"] = '''\
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { SocialMedia } from "@/components/sections/SocialMedia";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { Hobbies } from "@/components/sections/Hobbies";
import { Blogs } from "@/components/sections/Blogs";
import { ToolsStrip } from "@/components/sections/ToolsStrip";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home as HomeIcon, FolderKanban, User, Mail, BookOpen,
  Share2, MessageSquare, Award, Briefcase, Gamepad2,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { animate } from "motion";

const DOCK_ITEMS = [
  { id: "home", title: "Home", icon: <HomeIcon className="h-5 w-5" />, type: "internal" as const },
  { id: "projects", title: "Projects", icon: <FolderKanban className="h-5 w-5" />, type: "internal" as const },
  { id: "about", title: "About", icon: <User className="h-5 w-5" />, type: "internal" as const },
  { id: "experience", title: "Experience", icon: <Briefcase className="h-5 w-5" />, type: "internal" as const },
  { id: "blogs", title: "Blogs", icon: <BookOpen className="h-5 w-5" />, type: "internal" as const },
  { id: "testimonials", title: "Testimonials", icon: <MessageSquare className="h-5 w-5" />, type: "internal" as const },
  { id: "awards", title: "Awards", icon: <Award className="h-5 w-5" />, type: "internal" as const },
  { id: "hobbies", title: "Hobbies", icon: <Gamepad2 className="h-5 w-5" />, type: "internal" as const },
  { id: "social", title: "Social Media", icon: <Share2 className="h-5 w-5" />, type: "internal" as const },
  { id: "contact", title: "Contact", icon: <Mail className="h-5 w-5" />, type: "internal" as const },
];

export function Home() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => { animate(document.body, { opacity: [0, 1] }, { duration: 0.5 }); }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
      projects: projectsRef, about: aboutRef, experience: experienceRef,
      blogs: blogsRef, testimonials: testimonialsRef, awards: awardsRef,
      hobbies: hobbiesRef, social: socialRef, contact: contactRef,
    };
    const ref = refs[sectionId];
    if (ref?.current) {
      const headerOffset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const idx = parseInt(e.key) - 1;
      if (idx >= 0 && idx < DOCK_ITEMS.length) scrollToSection(DOCK_ITEMS[idx].id);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex min-h-screen flex-col relative">
      <Header activeSection={activeSection} />
      <main className="flex-1">
        <div style={{ display: activeSection === "home" ? "block" : "none" }}>
          <Hero onNavigate={scrollToSection} />
          <Philosophy />
        </div>
        <div ref={projectsRef} id="projects-section" style={{ display: activeSection === "projects" ? "block" : "none" }}><Projects /></div>
        <div ref={aboutRef} id="about-section" style={{ display: activeSection === "about" ? "block" : "none" }}><ToolsStrip /><About /></div>
        <div ref={experienceRef} id="experience-section" style={{ display: activeSection === "experience" ? "block" : "none" }}><Experience /></div>
        <div ref={blogsRef} id="blogs-section" style={{ display: activeSection === "blogs" ? "block" : "none" }}><Blogs /></div>
        <div ref={testimonialsRef} id="testimonials-section" className="bg-primary/5" style={{ display: activeSection === "testimonials" ? "block" : "none" }}><Testimonials /></div>
        <div ref={awardsRef} id="awards-section" style={{ display: activeSection === "awards" ? "block" : "none" }}><Awards /></div>
        <div ref={hobbiesRef} id="hobbies-section" style={{ display: activeSection === "hobbies" ? "block" : "none" }}><Hobbies /></div>
        <div ref={socialRef} id="social-section" className="bg-muted/20" style={{ display: activeSection === "social" ? "block" : "none" }}><SocialMedia /></div>
        <div ref={contactRef} id="contact-section" style={{ display: activeSection === "contact" ? "block" : "none" }}><Contact /></div>
      </main>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={DOCK_ITEMS} activeItem={activeSection} onItemClick={scrollToSection} />
      </div>
    </div>
  );
}
'''

print("Applying portfolio changes to:", ROOT)
print()
for path, content in files.items():
    write(path, content)

# Resume directory reminder
resume_dir = os.path.join(ROOT, "public", "resume")
os.makedirs(resume_dir, exist_ok=True)
print()
print("Done! 11 files written.")
print()
print("Next steps:")
print("  1. Copy your resume PDF to: public/resume/praveen-nalakurthi-resume.pdf")
print("  2. Copy your headshot to:   public/images/praveen-headshot.jpg")
print("  3. git add -A && git commit -m 'feat: populate real content, add new sections'")
print("  4. git push -u origin claude/update-portfolio-codebase-9PqzE")
