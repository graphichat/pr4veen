export interface DesignProcess {
  phase: string;
  description: string;
  deliverables?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: string;
  featured: boolean;
  demoRoute?: string;
  externalLink?: string;
  imageUrl?: string;
  designProcess?: DesignProcess[];
  uxHighlights?: string[];
}

export const projects: Project[] = [
  {
    id: "emr-visit-pad",
    title: "EMR Visit Pad Redesign",
    description: "Redesigned the EMR Visit Pad at HealthPlix, boosting user satisfaction by 25% and cutting doctors' note-taking time by 30%.",
    longDescription: "Led the complete redesign of the EMR Visit Pad, focusing on streamlining the note-taking workflow for doctors. The redesign emphasized reducing cognitive load and improving efficiency through user-centric design changes.",
    techStack: ["Figma", "User Research", "Design Systems", "Prototyping"],
    category: "Healthcare SaaS",
    featured: true,
    demoRoute: "/demo/dashboard",
    uxHighlights: [
      "Boosted user satisfaction by 25%",
      "Reduced note-taking time by 30%",
      "User-centric workflow redesign",
      "Improved task completion rates"
    ],
    designProcess: [
      {
        phase: "User Research & Analysis",
        description: "Conducted extensive user interviews with doctors to understand pain points in the existing EMR system.",
        deliverables: ["User personas", "Task flows", "Pain point analysis"]
      },
      {
        phase: "Workflow Redesign",
        description: "Restructured the UI design process and redesigned workflows to reduce cognitive load.",
        deliverables: ["Wireframes", "User flows", "Information architecture"]
      },
      {
        phase: "Design & Prototyping",
        description: "Created high-fidelity designs with interactive prototypes focusing on efficiency and ease of use.",
        deliverables: ["Design system", "High-fidelity mockups", "Interactive prototypes"]
      },
      {
        phase: "Testing & Iteration",
        description: "Conducted usability testing with doctors and iterated based on feedback to optimize the design.",
        deliverables: ["Usability test reports", "Design iterations", "Final designs"]
      }
    ]
  },
  {
    id: "doctor-app-redesign",
    title: "Doctor App Redesign",
    description: "Launched redesigned Doctor App at HealthPlix, increasing new user adoption by 40% in six months.",
    longDescription: "Led the complete redesign of the Doctor App, focusing on improving onboarding experience and core functionality. The redesign resulted in significant increase in new user adoption.",
    techStack: ["Figma", "Framer", "User Testing", "Design Systems"],
    category: "Healthcare SaaS",
    featured: true,
    demoRoute: "/demo/forms",
    uxHighlights: [
      "Increased new user adoption by 40%",
      "Improved onboarding experience",
      "Enhanced core functionality",
      "Mobile-first responsive design"
    ],
    designProcess: [
      {
        phase: "Discovery & Research",
        description: "Analyzed user adoption data and conducted interviews with new users to identify barriers.",
        deliverables: ["Analytics insights", "User interview transcripts", "Barrier analysis"]
      },
      {
        phase: "Design Exploration",
        description: "Explored different onboarding patterns and core feature layouts to improve usability.",
        deliverables: ["Design explorations", "Pattern library", "Component designs"]
      },
      {
        phase: "Prototyping & Testing",
        description: "Built interactive prototypes using Framer and tested with real users to validate design decisions.",
        deliverables: ["Interactive prototypes", "Test results", "Design refinements"]
      },
      {
        phase: "Launch & Monitoring",
        description: "Collaborated with development teams for implementation and monitored adoption metrics post-launch.",
        deliverables: ["Design specs", "Implementation guidelines", "Post-launch analysis"]
      }
    ]
  },
  {
    id: "patient-app-redesign",
    title: "Patient App Redesign",
    description: "Redesigned Patient App at HealthPlix, increasing user engagement by 35%.",
    longDescription: "Completely restructured the Patient App UI, focusing on improving user engagement and making healthcare information more accessible to patients.",
    techStack: ["Figma", "User Research", "Design Systems", "Responsive Design"],
    category: "Healthcare SaaS",
    featured: false,
    externalLink: "https://pr4veen.designfolio.me",
    uxHighlights: [
      "Increased user engagement by 35%",
      "Improved information accessibility",
      "Enhanced user experience",
      "Mobile-first design approach"
    ],
    designProcess: [
      {
        phase: "User Research",
        description: "Studied patient behaviors and conducted interviews to understand engagement barriers.",
        deliverables: ["Research findings", "User stories"]
      },
      {
        phase: "Design",
        description: "Restructured UI and created designs focused on improving engagement and accessibility.",
        deliverables: ["Design mockups", "Prototypes"]
      }
    ]
  },
  {
    id: "sample-transport-system",
    title: "Sample Transport Tracking Module",
    description: "Designed a comprehensive Sample Transport Tracking Module at IQLine to track and transfer medical samples between facilities with real-time monitoring and status updates.",
    longDescription: "Led the design and development of a comprehensive Sample Transport Tracking Module that enables healthcare facilities to track medical samples in real-time as they are transferred between locations. The system provides end-to-end visibility, status updates, and ensures sample integrity throughout the transport process. Focused on creating an intuitive interface that reduces errors and improves operational efficiency for healthcare staff managing sample logistics.",
    techStack: ["Figma", "UX Strategy", "Design Systems", "Prototyping", "User Research"],
    category: "Healthcare SaaS",
    featured: false,
    externalLink: "https://www.figma.com/deck/UI150sxdtJ4yGMqQTszJav/Sample-Transport-Tracking-Module",
    uxHighlights: [
      "Real-time sample tracking and monitoring",
      "Facility-to-facility transfer workflow optimization",
      "Status updates and notifications system",
      "Streamlined tracking interface for healthcare staff",
      "Sample integrity and chain of custody management"
    ],
    designProcess: [
      {
        phase: "Discovery & Research",
        description: "Conducted user research with healthcare facility staff to understand sample transport workflows, pain points, and requirements for tracking systems.",
        deliverables: ["User interviews", "Workflow analysis", "Pain point identification", "Requirements documentation"]
      },
      {
        phase: "UX Strategy & Information Architecture",
        description: "Defined UX strategy for sample tracking workflows, created information architecture, and mapped out user journeys for different user roles.",
        deliverables: ["UX strategy document", "Information architecture", "User journey maps", "User personas"]
      },
      {
        phase: "Wireframing & Prototyping",
        description: "Created wireframes and interactive prototypes for the tracking module, focusing on real-time updates, status visibility, and ease of use.",
        deliverables: ["Low-fidelity wireframes", "Interactive prototypes", "User flow diagrams"]
      },
      {
        phase: "Design & Testing",
        description: "Developed high-fidelity designs with a comprehensive design system, conducted usability testing, and iterated based on feedback.",
        deliverables: ["Design system", "High-fidelity mockups", "Usability test reports", "Design iterations"]
      }
    ]
  },
  {
    id: "project-management",
    title: "Project Management Tool",
    description: "A collaborative project management solution with kanban boards, time tracking, and team communication.",
    techStack: ["Figma", "User Research", "Design Systems", "Next.js"],
    category: "SaaS",
    featured: false,
    externalLink: "https://example.com",
    uxHighlights: [
      "Collaborative workspace design",
      "Real-time updates visualization",
      "Mobile-first responsive design"
    ],
    designProcess: [
      {
        phase: "Research",
        description: "Studied team workflows and collaboration patterns.",
        deliverables: ["Research findings", "User stories"]
      },
      {
        phase: "Design",
        description: "Created designs for kanban boards and collaboration features.",
        deliverables: ["Design mockups", "Prototypes"]
      }
    ]
  },
  {
    id: "crm-system",
    title: "CRM System",
    description: "Customer relationship management system with lead tracking, pipeline management, and automated workflows.",
    techStack: ["Figma", "UX Strategy", "Design Systems", "React"],
    category: "SaaS",
    featured: false,
    externalLink: "https://example.com",
    uxHighlights: [
      "Sales pipeline visualization",
      "Workflow automation design",
      "Data-heavy interface optimization"
    ],
    designProcess: [
      {
        phase: "Strategy",
        description: "Defined UX strategy for sales team workflows.",
        deliverables: ["UX strategy", "Design brief"]
      },
      {
        phase: "Design",
        description: "Designed pipeline views and automation interfaces.",
        deliverables: ["Design mockups"]
      }
    ]
  },
];

