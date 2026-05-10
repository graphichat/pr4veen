# Portfolio Task List

Sourced from `docs/designreview.md`. Split into two tracks:

- **Your Tasks** — requires your input, decision, or content before anything can be built
- **AI-Ready Tasks** — pure code work, zero human input needed, safe to hand off directly

---

## Your Tasks

These are blocked on you. Each one says what you need to provide and what happens with it after.

---

### Content & Assets You Need to Provide

**Y-1 — Headshot photo**
Place a professional headshot at `public/images/praveen-headshot.jpg`.
→ _After: hand Y-1 to AI to wire into `src/components/sections/About.tsx`_

**Y-2 — Correct satisfaction metric**
The hero says 25% user satisfaction increase; the About body says 35%. Which number is accurate?
→ _After: hand Y-2 to AI to fix consistency across `Hero.tsx`, `About.tsx`, and `Footer.tsx`_

**Y-3 — Real blog article URLs**
Do you have actual published articles on Medium? Provide the URLs (up to 4), or confirm you want the Blogs section removed until you publish.
→ _After: hand Y-3 to AI to update `src/components/sections/Blogs.tsx` with real links, or remove the section_

**Y-4 — Real awards / recognition**
Provide 1–3 actual awards or recognition moments from HealthPlix or IQLine (title, org, year, one-line description), or confirm you want the Awards section hidden.
→ _After: hand Y-4 to AI to replace placeholder data in `src/components/sections/Awards.tsx`_

**Y-5 — Real testimonials**
Ask 2–3 former colleagues for a short quote (2–3 sentences). Collect: their name, company, role, and a LinkedIn-hosted or personal photo URL.
→ _After: hand Y-5 to AI to replace fictional data in `src/components/sections/Testimonials.tsx` using the `<Avatar>` component_

**Y-6 — Resume PDF**
Export your latest resume as a PDF and place it at `public/resume/praveen-nalakurthi-resume.pdf`.
→ _After: hand Y-6 to AI to add a "Download Resume" button to `src/components/sections/Hero.tsx`_

**Y-7 — Calendar booking URL**
Create a free account on [cal.com](https://cal.com) (or Calendly). Set up a 30-min "Intro Call" event. Copy the public booking URL.
→ _After: hand Y-7 to AI to add a "Schedule a Call" button to the hero_

**Y-8 — Formspree endpoint**
Go to [formspree.io](https://formspree.io), create a form, copy the endpoint URL (looks like `https://formspree.io/f/xabcdefg`).
→ _After: hand Y-8 to AI to wire the contact form in `src/components/sections/Contact.tsx`_

**Y-9 — OG social preview image**
In Figma, create a 1200×630px image with your name, title, and purple gradient background. Export as PNG and place at `public/og-image.png`.
→ _After: AI-5 already adds the meta tags — it just needs this image to exist at that path_

---

### Content You Need to Write

**Y-10 — Design philosophy statement**
Write 2–4 sentences or a single strong quote expressing how you approach design. This is your opinionated point of view — not a job description. Example prompt to get started: _"What do you believe about design that most designers wouldn't agree with?"_
→ _After: hand Y-10 to AI to build a styled pull-quote component and insert it between the hero and projects sections_

**Y-11 — Career timeline data**
Write your career history in this format:

```
- Role: Product Design Lead
  Company: IQLine
  Period: 2023 – Present
  Impact: Redesigning entire Health Facility Software architecture

- Role: [Your title]
  Company: HealthPlix Technologies Ltd.
  Period: [Years]
  Impact: [1–2 bullet points]

- [Add earlier roles if applicable]
```
→ _After: hand Y-11 to AI to build a `<Timeline>` component section_

**Y-12 — "Currently" widget content**
Fill in what's true for you right now (update monthly):

```
Reading: [book title]
Working on: [current project/focus]
Thinking about: [a design question or topic]
```
→ _After: hand Y-12 to AI to build a "Currently" card widget in the About section_

**Y-13 — Hobbies content**
Open `src/components/sections/Hobbies.tsx` and check if it has real content. If not, list 3–4 genuine hobbies (e.g., Photography, Cycling, Reading, Cooking). One line each is enough.
→ _After: hand Y-13 to AI to populate the Hobbies section and wire it into the home page after Awards_

**Y-14 — Process / "How I Work" description**
For each of your four design phases, write one sentence describing what you do and one concrete output:

```
Discover: [what you do] → [output]
Define:   [what you do] → [output]
Design:   [what you do] → [output]
Deliver:  [what you do] → [output]
```
→ _After: hand Y-14 to AI to build a visual "How I Work" section_

**Y-15 — Per-project outcome metrics**
For each project case study, provide the key result metric (e.g., "+25% user satisfaction", "30% faster note-taking"). These get added as a stat badge on each project card.
→ _After: hand Y-15 to AI to add metric overlays to `ProjectCard` and `ProjectFeatureCard`_

---

## AI-Ready Tasks

Hand any of these directly to an AI agent. Each task is self-contained — no questions needed, no content to wait for. File paths and what to do are spelled out.

Phrase to use when handing off: _"Do exactly what this task says. The codebase is at `/Users/praveen/Programming/IQLine/pr4veen`."_

---

### Credibility Fixes

**A-1 — Fix title inconsistency in footer**
File: `src/components/layout/Footer.tsx`, line 15.
Change "Senior Product Designer" to "Product Design Lead". That's the only change needed.

**A-2 — Fix footer social icons**
File: `src/components/layout/Footer.tsx`, lines 72–95.
The Medium, Instagram, and Figma links all use `<ExternalLink>` from lucide-react. Replace with brand-specific icons from `@tabler/icons-react` (already installed):
- Medium → `IconBrandMedium`
- Instagram → `IconBrandInstagram`
- Figma → `IconBrandFigma`
- LinkedIn already uses `<Linkedin>` from lucide — leave it as-is.

**A-3 — Add basic OG / SEO meta tags**
File: `index.html`, inside `<head>`.
Add these tags (the og:image will render once Y-9 is done):
```html
<meta name="description" content="Portfolio of Praveen Kumar N — Product Design Lead with 10+ years in healthcare SaaS." />
<meta property="og:title" content="Praveen Kumar N — Product Design Lead" />
<meta property="og:description" content="Portfolio of a Product Design Lead with 10+ years experience in healthcare SaaS." />
<meta property="og:image" content="https://pr4veen.in/og-image.png" />
<meta property="og:url" content="https://pr4veen.in" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Praveen Kumar N — Product Design Lead" />
<meta name="twitter:description" content="Portfolio of a Product Design Lead with 10+ years experience in healthcare SaaS." />
```

**A-4 — Add custom 404 page**
File: `src/App.tsx`.
Add a catch-all route at the bottom of the router. Create `src/pages/NotFound.tsx` with the site's design aesthetic: use the same header/footer, show a large "404" in the gradient text style, a one-liner ("This page wandered off the design system"), and two buttons — "Go Home" and "View Projects".

---

### Accessibility & Performance

**A-5 — Add prefers-reduced-motion support**
File: `src/components/animations/MotionDiv.tsx`.
At the top of the component, check `window.matchMedia("(prefers-reduced-motion: reduce)").matches`. If true, render children with no animation (opacity 1, no transforms, no delay). Keep the existing animation logic for users without this preference.

**A-6 — Add keyboard navigation to floating dock**
File: `src/components/ui/floating-dock.tsx`.
Add a `useEffect` that listens for `keydown` on `document`. Keys 1–8 (or however many dock items exist) should call the corresponding dock item's `onClick`. Also ensure all dock items are reachable via `Tab` and activatable via `Enter`/`Space`.

**A-7 — Add reading time to project cards and case study headers**
Files: `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectFeatureCard.tsx`, `src/components/layout/ProjectHeader.tsx`, and `src/data/projects.ts`.
In `projects.ts`, add a `readingTime` field computed from the MDX content word count: `Math.ceil(wordCount / 200)` minutes. Display it with a `Clock` icon (lucide) in the card footer and project header.

**A-8 — Add print stylesheet for case study pages**
File: `src/index.css`.
Add a `@media print` block that: hides the floating dock, header, left sidebar (`ProjectSidebar`), right sidebar (`SectionOverview`), and footer; sets main content to full width; disables animations; and sets text to black on white.

---

### UI Components (install + wire in)

**A-9 — Add NumberTicker to achievement metrics**
Run `npx shadcn@latest add number-ticker` to install.
File: `src/components/sections/About.tsx`, lines 152–162.
For each achievement, parse the numeric part from `achievement.metric` (e.g., `"25%"` → `25`, `"10+"` → `10`). Replace the `<span>` with `<NumberTicker value={n} />` followed by the suffix (`%` or `+`). Animate triggers `inView`. Keep the existing icon and label.

**A-10 — Add Marquee tools strip**
Run `npx shadcn@latest add marquee` to install.
Create `src/components/sections/ToolsStrip.tsx`. Use `<Marquee pauseOnHover>` with a list of tools Praveen uses: Figma, FigJam, Framer, Spline, Notion, Linear, Miro, Lottie Files, Zeplin, Maze. Use `@tabler/icons-react` brand icons where available, fall back to text. Add a fading gradient mask on left/right edges.
Wire it into `src/pages/Home.tsx` between the Projects section and the About section.

**A-11 — Add CommandDialog (⌘K project search)**
Run `npx shadcn@latest add command` to install.
Create `src/components/ui/command-palette.tsx`. The palette opens on `Ctrl+K` / `Cmd+K`. It should list:
- All projects (from `src/data/projects.ts`) under a "Projects" group — selecting navigates to `/project/:id`
- Sections ("About", "Contact", "Blogs") under a "Navigate" group — selecting scrolls to that section on the home page or routes to the page
Add a keyboard shortcut hint (`⌘K`) in the header, visible on desktop only. Wire the `CommandDialog` into `src/App.tsx` or `src/components/layout/Header.tsx` so it's always available.

**A-12 — Add Toast / Sonner for future form feedback**
Run `npx shadcn@latest add sonner` to install.
Add `<Toaster />` to `src/App.tsx` (root level). In `src/components/sections/Contact.tsx`, add a placeholder `onSubmit` handler that currently does: `e.preventDefault()` and `toast.info("Form not yet connected — please email praveen.nalakurthi@gmail.com directly.")`. This makes the form non-silent even before Formspree is wired (Y-8).

**A-13 — Add Tooltip to skill badges**
Run `npx shadcn@latest add tooltip` to install.
File: `src/components/sections/About.tsx`, inside the skills `flex flex-wrap` div.
Wrap each `<Badge>` with `<Tooltip>`. The tooltip content for each skill should be a short factual sentence inferrable from the resume context in the codebase. Example content per skill:
- "User Research & Interviews" → "Conducted 12+ user interviews per product cycle at HealthPlix"
- "Figma & Design Systems" → "Built design systems from scratch at HealthPlix and IQLine"
- "Design Thinking" → "Applied double diamond framework across 6+ product redesigns"
- "Stakeholder Management" → "Managed design reviews with C-suite and engineering leads"
- "Design System Development" → "Created token-based design systems used across multiple products"
- "Wireframing & Prototyping" → "Delivered high-fidelity prototypes for usability testing and dev handoff"
- "Framer & 3D Spline" → "Used for interactive motion and 3D UI explorations"
- "Cross-Functional Collaboration" → "Worked alongside product, engineering, and clinical teams"
- "Design Reviews & Testing" → "Led bi-weekly design critique and usability test sessions"
- "Design Tokens & PRDs" → "Authored product requirement documents and token documentation"

**A-14 — Add BlurFade to project card reveals**
Run `npx shadcn@latest add blur-fade` to install.
Files: `src/components/sections/Projects.tsx` (grid layout section, lines 176–184) and the featured layout map (lines 88–96).
Replace the `data-project-card` wrapper divs with `<BlurFade delay={0.25 + index * 0.05} inView>`. Remove the existing `inView + animate + stagger` imperative animation block since BlurFade handles the reveal declaratively. Keep the `data-project-card` attribute if needed for other selectors.

**A-15 — Add back-to-top button**
Create `src/components/ui/back-to-top.tsx`. It renders a circular button (fixed, bottom-6 right-6, z-50) with a `ChevronUp` icon that appears after 500px of scroll and smoothly scrolls `window` to top on click. Use `motion` (already installed) for fade-in/out. Wire it into `src/App.tsx` so it appears on all routes.

**A-16 — Add standalone scroll indicator to hero**
File: `src/components/sections/Hero.tsx`.
Below the existing button group (after line 72), add a standalone bouncing `<ChevronDown>` icon centered at the bottom of the hero section. Use the existing `arrowRef` + `animate` pattern already in the file (lines 11–31) — just add a second ref and apply the same `y: [0, 10, 0]` animation. Style it as `text-muted-foreground/50`, small (h-5 w-5). Clicking it should call `onNavigate?.("projects")`.

**A-17 — Add alternating section background tints**
File: `src/pages/Home.tsx` (or wherever sections are composed).
Add `bg-muted/20` to the About section wrapper and the Testimonials section wrapper, leaving Hero, Projects, Blogs, Awards, Contact with the default `bg-background`. This creates a subtle visual rhythm without changing any component internals — just add a className to the section wrappers at the page composition level.

**A-18 — Reorganize skills into category columns**
File: `src/components/sections/About.tsx`.
Replace the flat 10-badge array with a 3-column grouped layout:

```
Strategy & Research    |  Craft & Tools           |  Leadership & Process
-----------------------|--------------------------|------------------------
User Research          |  Figma & Design Systems  |  Stakeholder Management
Design Thinking        |  Wireframing & Prototyping|  Cross-Functional Collab
Design Reviews & Testing| Framer & 3D Spline      |  Design System Development
                       |  Design Tokens & PRDs    |
```

Each column gets a small heading label above its badges. Keep the existing `inView` stagger animation — just reorganize the data structure into `{ category: string, skills: string[] }[]`.

**A-19 — Add ProcessPhase MDX component**
Create `src/components/markdown/ProcessPhase.tsx`. Props: `phase: string`, `output: string`, optional `icon?: string`. Render it as a horizontal step card with a numbered circle, phase name in bold, an arrow, and the output in muted text. Export it from the MDX components map in `src/lib/markdown.ts` (or wherever MDX components are registered) so it can be used inside `.mdx` files as `<ProcessPhase />`.

**A-20 — Add Avatar component for testimonials**
Run `npx shadcn@latest add avatar` to install.
File: `src/components/ui/animated-testimonials.tsx` (or wherever the testimonial image is rendered).
Replace the raw `<img>` in the testimonial carousel with `<Avatar><AvatarImage src={...} /><AvatarFallback>{initials}</AvatarFallback></Avatar>`. Write a small `initials(name: string)` helper that takes the first letter of first and last name.

**A-21 — Add Skeleton loading states for project images**
Run `npx shadcn@latest add skeleton` to install.
Files: `src/components/projects/ProjectCard.tsx` and `src/components/projects/ProjectFeatureCard.tsx`.
Wrap each `<img>` in a container that shows `<Skeleton>` until the image `onLoad` fires. Use a `useState(false)` → `setLoaded(true)` on `onLoad`. Hide the skeleton and show the image once loaded.

---

### When Y-tasks are Done → Hand These to AI

These tasks depend on content you provide (Y-tasks above). Once you have the content, hand both the Y-task output and this instruction to the AI agent.

**AY-1 — Wire in headshot** _(requires Y-1)_
File: `src/components/sections/About.tsx`, lines 80–100.
Uncomment the `<img>` tag and set `src="/images/praveen-headshot.jpg"`. Remove the `<User>` icon div and the `<Camera>` overlay div entirely. Keep the existing `rounded-full overflow-hidden border-4` wrapper.

**AY-2 — Fix metric consistency** _(requires Y-2: which number is correct)_
Files: `src/components/sections/Hero.tsx` line 57, `src/components/sections/About.tsx` line 129, and the achievement array at line 54.
Make all three use the single correct number Praveen confirmed. Also update the `NumberTicker` value once A-9 is done.

**AY-3 — Update or remove blog section** _(requires Y-3)_
If real URLs are provided: File `src/components/sections/Blogs.tsx`, update `link` field for each blog entry with the real URLs, and update titles/dates to match the actual articles.
If removing: Comment out the `<Blogs />` render in the home page and remove it from the floating dock items.

**AY-4 — Update awards with real data** _(requires Y-4)_
File: `src/components/sections/Awards.tsx`. Replace the placeholder award objects with Praveen's real entries. If fewer than 3, remove unused cards.

**AY-5 — Wire real testimonials** _(requires Y-5)_
File: `src/components/sections/Testimonials.tsx`. Replace the 5 fake testimonial objects with real ones. Use `<Avatar>` (installed in A-20) for photos with initials fallback.

**AY-6 — Add resume download button** _(requires Y-6)_
File: `src/components/sections/Hero.tsx`, lines 62–71 (the button group).
Add a third button: `<Button variant="ghost" size="lg" asChild><a href="/resume/praveen-nalakurthi-resume.pdf" download>Download Resume <Download className="ml-2 h-4 w-4" /></a></Button>`.

**AY-7 — Add calendar booking button** _(requires Y-7)_
File: `src/components/sections/Hero.tsx`.
Add a "Schedule a Call" link near the "Available for new opportunities" badge (line 43), as a small ghost button linking to the cal.com URL with `target="_blank"`.

**AY-8 — Wire Formspree to contact form** _(requires Y-8)_
File: `src/components/sections/Contact.tsx`.
Add `onSubmit` handler that POSTs to the Formspree endpoint using `fetch`. Show loading state on the button during submission. On success, call `toast.success(...)`. On error, call `toast.error(...)`. Uses the Toaster installed in A-12.

**AY-9 — Build design philosophy pull-quote** _(requires Y-10)_
Create `src/components/sections/Philosophy.tsx`. Style Praveen's philosophy text as a large centered block-quote (text-2xl or text-3xl, italic, max-w-3xl) with his name beneath it in small caps. Use the gradient text style already established (`bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent`) for an opening quotation mark. Add a subtle `bg-muted/20` background. Wire it into the home page between Hero and Projects.

**AY-10 — Build career Timeline section** _(requires Y-11)_
Install shadcn Timeline block. Create `src/components/sections/Experience.tsx` using a vertical timeline layout. Each node: role (bold), company (primary color), period (muted), impact bullet points. Wire into the About page and optionally as a section on the home page.

**AY-11 — Build "Currently" widget** _(requires Y-12)_
Create `src/components/ui/currently-widget.tsx`. A compact card (max-w-xs) with three rows: Reading, Working on, Thinking about. Each row has an emoji prefix and the value in muted text. Add it to the About section as a fourth card in the grid, or to the project sidebar.

**AY-12 — Populate and wire Hobbies section** _(requires Y-13)_
File: `src/components/sections/Hobbies.tsx`. Replace placeholder content with Praveen's real hobbies. Wire `<Hobbies />` into `src/pages/Home.tsx` after the Awards section. Add it to the floating dock if it makes sense.

**AY-13 — Build "How I Work" process section** _(requires Y-14)_
Create `src/components/sections/Process.tsx`. Four horizontal (desktop) or vertical (mobile) steps: Discover, Define, Design, Deliver. Each step: a numbered circle, phase name, Praveen's one-sentence description, and the concrete output. Use subtle connector lines between steps. Add a section entry in the home page and floating dock.

**AY-14 — Add outcome metrics to project cards** _(requires Y-15)_
Files: `src/data/projects.ts`, `src/components/projects/ProjectCard.tsx`, `src/components/projects/ProjectFeatureCard.tsx`.
Add a `metric?: string` field to the project type. Update each project entry with its metric. In the card components, render the metric as a small badge or callout at the bottom of the image area.
