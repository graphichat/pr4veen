# Portfolio Design Review — pr4veen.in

**Reviewed:** May 2026  
**Stack:** React 19 + Vite + Tailwind CSS v4 + Motion + shadcn/ui  
**Overall assessment:** Strong technical foundation with polished animations and a coherent purple/OKLCH palette. The biggest gaps are content authenticity (placeholders still live in production paths), missing personal narrative, and several high-impact UI patterns that are one component away from being exceptional.

---

## 1. Critical Content Issues (Fix First)

These are things that will immediately undermine credibility with a hiring manager or potential client who looks closely.

### 1.1 About Section — No Real Photo

`src/components/sections/About.tsx:80–100`

The about section renders a `<User>` icon placeholder with a camera badge. The `<img>` is commented out. This is the most personal element of any portfolio and it's currently blank. Add your real headshot — this single change has outsized impact on trust and warmth.

```tsx
// Replace the div+icon block with:
<img
  src="/images/praveen-headshot.jpg"
  alt="Praveen Kumar N"
  className="h-full w-full object-cover"
/>
```

### 1.2 Blog Articles — Placeholder URLs

`src/components/sections/Blogs.tsx:14–36`

All four blog links point to non-existent Medium slugs (`/designing-for-scale`, `/ux-research-process`, etc.). Clicking any of them returns a 404 on Medium. Either link to real published articles or remove this section entirely until you have real content. Fake blog links destroy credibility faster than having no blog section.

### 1.3 Awards — Generic Placeholder Data

`src/components/sections/Awards.tsx:8–29`

All three awards say "Company Recognition", "Design Community", and "Internal Recognition" — these are unmistakably placeholder text. Replace with your actual recognition from HealthPlix or IQLine, or remove this section until you have real entries. Even one real award with specifics is more impactful than three generic ones.

### 1.4 Testimonials — Fictional People

`src/components/sections/Testimonials.tsx:6–35`

Testimonials use random Unsplash profile photos with invented names like "Sarah Chen at TechFlow" and "Michael Rodriguez at InnovateCo". These companies don't exist and the photos are stock. If you don't have real testimonials yet, remove this section — it reads as dishonest rather than aspirational. If you do have real colleagues who can vouch for you, ask them and add their actual LinkedIn-verifiable names.

### 1.5 Metrics Inconsistency

- Hero text: "boosted user satisfaction by **25%**, reduced note-taking time by **30%**, increased user adoption by **40%**"
- About card text: "increased user engagement by **35%**, reduced doctors' note-taking time by **30%**, boosted new user adoption by **40%**"

Two different satisfaction numbers (25% vs 35%). Pick one and make it consistent across Hero, About, and footer.

### 1.6 Footer Title Mismatch

`src/components/layout/Footer.tsx:15`

Footer says "Senior Product Designer" but your hero says "Product Design Lead." Use the same title everywhere — the more senior title (Lead) is the accurate one and should be consistent.

### 1.7 Contact Form — No Submission Handler

`src/components/sections/Contact.tsx:63`

The form has `<form className="...">` with no `onSubmit` handler, no `action`, and no API call. Submitting it does nothing. Add [EmailJS](https://www.emailjs.com/), [Formspree](https://formspree.io/), or [Resend](https://resend.com/) to make it functional. This is a portfolio that people contact you through — it must actually work.

---

## 2. Personal Touches to Add

Things that would make the site feel like *you*, not just a well-built template.

### 2.1 Design Philosophy Statement

Add a short, opinionated section (3–5 sentences or a styled pull-quote) about how you approach design. Something like your actual belief about the relationship between research, aesthetics, and business outcomes. This is the one thing that differentiates senior designers from mid-level ones in portfolios — juniors show what they made, seniors show how they think.

**Where to add:** Between the hero and projects sections, or as a dedicated card in the About section.

**Example structure:**
```
"I believe good design disappears. My job is to remove friction so 
completely that the product feels inevitable — like it couldn't have 
been made any other way."
— styled as a large blockquote with your name under it
```

### 2.2 Career Timeline / Experience Section

You have a decade of experience but the site doesn't show the journey. A timeline from your earliest design role to now (IQLine → HealthPlix → before) makes your seniority tangible and shows career progression.

**Suggested entries:**
- IQLine — Product Design Lead (current)
- HealthPlix Technologies Ltd. — [your previous title]
- [Earlier roles if applicable]

**Best component for this:** shadcn `Timeline` block (see Section 3.2).

### 2.3 "How I Work" / Process Section

As a Product Design Lead you lead a process, not just execute one. Show the double diamond or your personal variation of it:

```
Discover → Define → Design → Deliver
```

Make it visual. Each phase gets an icon, a 1-sentence description, and a concrete output ("user interviews → affinity map → opportunity statement"). This is highly valued by clients and product managers who are deciding whether to hire a designer vs. a design lead.

### 2.4 Resume / CV Download

Add a "Download Resume" button in the hero or About section. Link it to a PDF you host in `/public/resume/praveen-nalakurthi-resume.pdf`. This is the most common action recruiters take after looking at a portfolio and it's completely missing.

```tsx
<Button variant="outline" size="lg" asChild>
  <a href="/resume/praveen-nalakurthi-resume.pdf" download>
    Download Resume
    <Download className="ml-2 h-4 w-4" />
  </a>
</Button>
```

### 2.5 "Tools I Use" Strip

A simple scrolling marquee of tool logos (Figma, FigJam, Spline, Framer, Notion, Linear, Miro, Lottie, etc.) adds personality and signals fluency without requiring a full section. Works beautifully between Projects and About.

### 2.6 Availability / Calendar Booking

You have "Available for new opportunities" badge on the hero but nowhere to act on it. Add a [Calendly](https://calendly.com) link (or [cal.com](https://cal.com) for open-source) so people can schedule a 30-minute intro call. This removes friction from the most important conversion action.

```tsx
<a href="https://cal.com/pr4veen/intro" target="_blank">
  <Button variant="outline" size="sm">
    <Calendar className="mr-2 h-4 w-4" />
    Schedule a Call
  </Button>
</a>
```

### 2.7 Location + Timezone

Add "Bengaluru, India • IST (UTC+5:30)" somewhere visible (hero, About card, or Contact section). International clients need to know this to gauge collaboration feasibility. It's a small human detail that makes you feel real.

### 2.8 "Currently" Widget

A small card or sidebar widget showing what you're currently reading, designing, or thinking about. Updates once a month. This is a well-loved pattern in senior designer portfolios and signals that you're engaged and growing.

```
Currently:
  📖 Reading: The Design of Everyday Things
  🎨 Working on: Health Facility Software redesign at IQLine
  💭 Thinking about: AI-assisted triage UX patterns
```

### 2.9 Hobbies Section (Currently Unused)

The `Hobbies` component exists in `src/components/sections/` but isn't rendered anywhere. If it has real content, include it — it humanizes you. If it's also a placeholder, fill it with 3–4 genuine hobbies (photography given the camera icon in About is a hint) and add it after Awards.

---

## 3. High-Impact shadcn Registry Components

These are specific components from the [shadcn/ui registry](https://ui.shadcn.com/blocks) and [Magic UI](https://magicui.design/) (which ships as shadcn-compatible) that would meaningfully elevate the portfolio.

### 3.1 Number Ticker — Animate Achievement Metrics

**Install:** `npx shadcn@latest add number-ticker` (Magic UI)

Your achievement numbers (25%, 30%, 40%, 10+) are static text. A `<NumberTicker>` that counts up when the stat scrolls into view is a design portfolio staple that shows you know how to use micro-interactions.

**Where:** Replace the static metric spans in `src/components/sections/About.tsx:154–159`:

```tsx
import { NumberTicker } from "@/components/ui/number-ticker";

// Before:
<span className="text-2xl font-bold">{achievement.metric}</span>

// After:
<NumberTicker value={25} className="text-2xl font-bold" />
<span className="text-2xl font-bold">%</span>
```

### 3.2 Timeline — Career Journey

**Install:** Available in shadcn blocks as "Timeline"

Replace or augment the About section with a vertical timeline showing your career progression. Each node gets: company name, role, year range, and 1–2 impact bullet points.

```tsx
<Timeline>
  <TimelineItem>
    <TimelineConnector />
    <TimelineHeader>
      <TimelineTime>2023 – Present</TimelineTime>
      <TimelineIcon />
      <TimelineTitle>Product Design Lead — IQLine</TimelineTitle>
    </TimelineHeader>
    <TimelineDescription>
      Redesigning architecture of the entire Health Facility Software
    </TimelineDescription>
  </TimelineItem>
  ...
</Timeline>
```

### 3.3 Marquee — Scrolling Tools/Skills Strip

**Install:** `npx shadcn@latest add marquee` (Magic UI)

A horizontal auto-scrolling strip of tool logos or skill badges between sections. Visually breaks the vertical rhythm and works as a transition between major sections.

```tsx
<Marquee className="py-4 [--duration:30s]" pauseOnHover>
  {tools.map((tool) => (
    <div key={tool.name} className="flex items-center gap-2 mx-6 text-muted-foreground">
      <tool.icon className="h-5 w-5" />
      <span className="text-sm font-medium">{tool.name}</span>
    </div>
  ))}
</Marquee>
```

### 3.4 Bento Grid — About / Stats Section

**Install:** `npx shadcn@latest add bento-grid` (Magic UI)

Replace the current 3-column card grid in About with a bento layout. This is a much more distinctive and modern presentation for mixed-size content (bio text, stats, skills, photo).

```
┌─────────────────┬────────┐
│   Photo + Bio   │ Stats  │
│                 │  25%   │
│                 │  30%   │
├─────────┬───────┴────────┤
│ Skills  │  Currently     │
│ badges  │  working on... │
└─────────┴────────────────┘
```

### 3.5 Word Rotate / Typing Animation — Hero Subtitle

**Install:** `npx shadcn@latest add word-rotate` or `typing-animation` (Magic UI)

The subtitle "Product Design Lead" is static. Rotating through 2–3 descriptors adds dynamism without gimmick:

```tsx
<WordRotate
  words={["Product Design Lead", "UX Strategist", "Design Systems Architect"]}
  className="text-xl font-medium text-foreground/80 sm:text-2xl"
/>
```

### 3.6 Blur Fade — Project Image Reveals

**Install:** `npx shadcn@latest add blur-fade` (Magic UI)

Your project cards use opacity+Y translation. `BlurFade` adds a blur-to-sharp reveal that feels more premium and is one of the signature effects on high-end design portfolios:

```tsx
<BlurFade delay={0.25 + index * 0.05} inView>
  <ProjectCard project={project} />
</BlurFade>
```

### 3.7 Animated Beam — Hero Connection Visualization

**Install:** `npx shadcn@latest add animated-beam` (Magic UI)

An optional but striking addition to the hero: a visual showing beams connecting "User Research → Design → Delivery" or connecting you (avatar) to icons representing stakeholders, developers, and users. Common in product-focused designer portfolios.

### 3.8 Avatar + AvatarGroup — Testimonials

**Install:** `npx shadcn@latest add avatar`

If you replace the fake testimonials with real ones, use proper `<Avatar>` components with real LinkedIn-sourced photos and initials fallbacks:

```tsx
<Avatar>
  <AvatarImage src={testimonial.photo} alt={testimonial.name} />
  <AvatarFallback>{initials(testimonial.name)}</AvatarFallback>
</Avatar>
```

### 3.9 Command — Project Search

**Install:** `npx shadcn@latest add command`

A `⌘K` command palette that lets users search across your projects, jump to sections, or trigger the contact form. This is a power-user feature that signals technical sophistication — valuable when your audience includes engineers and design-eng hybrids.

```tsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Search projects, sections..." />
  <CommandList>
    <CommandGroup heading="Projects">
      {projects.map(p => (
        <CommandItem key={p.id} onSelect={() => navigate(`/project/${p.id}`)}>
          {p.title}
        </CommandItem>
      ))}
    </CommandGroup>
  </CommandList>
</CommandDialog>
```

### 3.10 Skeleton — Loading States for Async Content

**Install:** `npx shadcn@latest add skeleton`

The contact form, project images, and any future API-fetched content need loading states. `<Skeleton>` components as placeholders prevent layout shift and feel polished.

### 3.11 Toast — Form Submission Feedback

**Install:** `npx shadcn@latest add toast` (already in many shadcn installs as `sonner`)

When the contact form is made functional, add a toast notification for success/error states instead of a silent redirect:

```tsx
toast.success("Message sent! I'll get back to you within 48 hours.")
toast.error("Something went wrong. Please email me directly.")
```

### 3.12 Tooltip — Skill Badge Detail

**Install:** `npx shadcn@latest add tooltip`

Wrap each skill badge in the About section with a `<Tooltip>` that shows a 1-sentence context:

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Badge data-skill variant="secondary">Figma & Design Systems</Badge>
  </TooltipTrigger>
  <TooltipContent>
    6+ years. Built design systems from scratch at HealthPlix and IQLine.
  </TooltipContent>
</Tooltip>
```

### 3.13 Progress / Radial Progress — Skills Proficiency

**Install:** `npx shadcn@latest add progress` or use a radial variant

Group skills by category (Research, Tools, Leadership, Delivery) and show proficiency levels. Flat badges with equal weight imply equal proficiency, which undersells your seniority in the skills that actually matter most.

```
Research & Strategy    ████████████░  90%
Design Tools (Figma)   ███████████░░  85%
Stakeholder Mgmt       ██████████░░░  80%
Prototyping            █████████░░░░  75%
```

---

## 4. UI/UX Improvements (No New Components Required)

### 4.1 Scroll-Down Indicator on Hero

The `ArrowDown` is inside the CTA button ("View Projects"). Add a separate, subtle standalone scroll indicator below the CTAs so first-time visitors understand the page continues. The floating dock is at the bottom but a bounce-animated chevron mid-hero is a more universal affordance.

### 4.2 Section Transition Backgrounds

Currently all sections are the same `bg-background`. Add alternating subtle backgrounds (`bg-muted/30` on alternating sections) to create visual breaks that help users feel progression as they scroll. The hero already has Aurora — continue that sense of deliberate visual rhythm.

### 4.3 Footer Brand Icons

`src/components/layout/Footer.tsx:72–95`

Medium, Instagram, and Figma social links all use `<ExternalLink>` (a generic icon). Import actual brand icons from `@tabler/icons-react` which you already have installed:

```tsx
import { IconBrandMedium, IconBrandInstagram, IconBrandFigma } from "@tabler/icons-react";
```

This makes the footer feel intentional rather than default.

### 4.4 Open Graph / SEO Meta Tags

The site has no `<meta property="og:*">` tags. When you share a link to your portfolio on LinkedIn or WhatsApp, it shows no preview image, no title, and no description. Add these to the `<head>` in `index.html`:

```html
<meta property="og:title" content="Praveen Kumar N — Product Design Lead" />
<meta property="og:description" content="Portfolio of a Product Design Lead with 10+ years experience in healthcare SaaS." />
<meta property="og:image" content="https://pr4veen.in/og-image.png" />
<meta property="og:url" content="https://pr4veen.in" />
<meta name="twitter:card" content="summary_large_image" />
```

Then create a 1200×630px OG image (a simple Figma export of your name + role on the purple gradient background).

### 4.5 Custom 404 Page

There is no 404/not-found route. Add one in `App.tsx` with your design aesthetic — a small fun moment ("Looks like this page took a wrong turn through the design system...") that also links back to home and projects.

### 4.6 Project Case Study Reading Time

Add estimated read time to project cards and case study headers. This sets expectations and makes the detail pages feel more like published work. Calculate from word count: `Math.ceil(wordCount / 200)` minutes.

### 4.7 Back-to-Top Button

On long project case study pages the user has to scroll all the way back up. A sticky back-to-top button (bottom-right, appears after 500px scroll) is a small but appreciated detail.

### 4.8 Print / PDF Stylesheet

Add a `@media print` stylesheet so your portfolio pages print cleanly (useful for recruiters who print case studies for review panels). Hides dock, animations, and sidebar; expands full page width.

### 4.9 Keyboard Navigation for Floating Dock

The floating dock is mouse/touch driven. Add keyboard support so users can press `1–8` to jump to sections, or at minimum `Tab` through dock items. This also improves accessibility.

### 4.10 Reduce Motion Support

`src/components/animations/MotionDiv.tsx` — check for `prefers-reduced-motion` and disable or reduce animations for users who have it enabled in their OS. This is both an accessibility requirement and good practice:

```tsx
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// Skip animations if true
```

---

## 5. Content & Structure Suggestions

### 5.1 Add a "Process" Case Study Template Element

Every project detail page should have a "Design Process" section showing the phases you went through for *that specific project*. Right now project MDX files are blank-slate articles. Adding a reusable process timeline MDX component would make every case study instantly more structured:

```mdx
<ProcessPhase phase="Discover" output="User interviews × 12, JTBD framework" />
<ProcessPhase phase="Define" output="Affinity map, problem statement, opportunity areas" />
<ProcessPhase phase="Design" output="Wireframes (3 iterations), design system components" />
<ProcessPhase phase="Deliver" output="Handoff specs, design tokens, dev QA sessions" />
```

### 5.2 "Before / After" Metrics on Project Cards

The project cards show the Compare slider for before/after images. Add the corresponding outcome metric as an overlay or footer: "+25% user satisfaction" makes the image comparison meaningful and memorable.

### 5.3 Skills Reorganization

The current 10-skill flat list in About could be organized into 3 columns by category:

| Strategy & Research | Craft & Tools | Leadership & Process |
|---|---|---|
| User Research & Interviews | Figma & Design Systems | Stakeholder Management |
| Design Thinking | Wireframing & Prototyping | Cross-Functional Collaboration |
| Design Reviews & Testing | Framer & 3D Spline | Design System Development |
| | Design Tokens & PRDs | |

### 5.4 Project Difficulty / Scope Tags

Add tags like "0→1 product", "Redesign", "Design System", "Research-led" to project cards. These are the taxonomy that product managers and design hiring managers use to think about fit.

---

## 6. Prioritized Action Plan

### Immediate (this week) — Credibility fixes
1. Add real headshot photo to About section
2. Fix or remove fake blog links
3. Remove or replace fake testimonials and awards with real ones or blank the section
4. Unify title to "Product Design Lead" everywhere
5. Fix the 25% vs 35% metric inconsistency
6. Add OG meta tags to `index.html`

### Short term (next 2 weeks) — Polish and completeness
7. Make the contact form functional (Formspree is the fastest: 5-minute setup)
8. Add resume PDF download button to hero
9. Add Calendar booking link (cal.com free tier)
10. Add location + timezone to About / Contact
11. Fix footer social icons to use brand icons
12. Add custom 404 page
13. Add `prefers-reduced-motion` support

### Medium term (this month) — Elevation
14. Add `<NumberTicker>` to achievement metrics in About
15. Add `<Marquee>` tools strip between Projects and About
16. Implement `<Timeline>` component for career history
17. Add `<CommandDialog>` for `⌘K` project search
18. Add `<Toast>` for contact form feedback
19. Add `<Tooltip>` to skill badges
20. Add Design Philosophy pull-quote to hero or About

### Longer term — Differentiation
21. Add "How I Work" process section (double diamond visualization)
22. Implement `<BentoGrid>` for About section layout
23. Add `<WordRotate>` to hero subtitle
24. Add `<BlurFade>` to project image reveals
25. Write and publish at least 2 real blog articles on Medium
26. Add "Currently" widget to sidebar or About
27. Add print stylesheet for case study pages
28. Collect 2–3 real testimonials with LinkedIn-verifiable identities

---

## 7. One Final Note

The technical execution of this portfolio is genuinely excellent — the Aurora hero, floating dock physics, MDX case study pipeline, alternating featured project layout, and the animation system are all things most designers wouldn't build themselves. The gap is entirely on the content and authenticity side. The site should feel like a window into a specific person with a specific point of view. Right now it reads as a well-built portfolio template. The suggestions above are mostly about filling that gap — adding the real you.
