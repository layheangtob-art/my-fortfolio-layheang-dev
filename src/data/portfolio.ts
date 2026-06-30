import invaLogo from "../assets/logos/inva-logo.png";
import antLogo from "../assets/logos/antLogo.png";
import ruppLogo from "../assets/logos/ruppLogo.png";
import aecLogo from "../assets/logos/aceLogo.png";
import ruppGroupPhoto from "../assets/highlights/rupp1.jpg";
import ruppGroupPhoto2 from "../assets/highlights/rupp2.jpg";
import ruppGroupPhoto3 from "../assets/highlights/rupp3.jpeg";
import ruppGroupPhoto4 from "../assets/highlights/rupp4.png";
import ruppGroupPhoto5 from "../assets/highlights/rupp5.jpg";
import ruppGroupPhoto6 from "../assets/highlights/rupp6.png";
import khmerNewsPortal from "../assets/projects/1.png";
import wearplus from "../assets/projects/2.png";
import khmerNewsUxUi from "../assets/projects/khmer-news-ux-ui.png";
import vesspaimg from "../assets/projects/vesspa.png";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TimelineItem {
  period: string;
  company: string;
  title: string;
  roleTag: string;
  bullets: string[];
  initials?: string;
  logo?: string;
  accent: "violet" | "cyan";
  isCurrent?: boolean;
  website?: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  color?: string;
}

export interface HighlightItem {
  title: string;
  tone: "purple" | "blue" | "green" | "orange" | "violet" | "silver";
  span: "normal" | "tall" | "wide" | "wide-tall";
  image?: string;
  alt?: string;
}

export interface ProjectItem {
  title: string;
  description: string | string[];
  stack: string[];
  tone: "purple" | "silver" | "violet" | "dark";
  image?: string;
  alt?: string;
  github?: string;
  live?: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  badge: string;
  symbol: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
];

export const stats: StatItem[] = [
  { value: "5+", label: "Projects Completed" },
  { value: "4+", label: "Tech Stacks" },
  { value: "1+", label: "Years Of Experience" },
];

export const experience: TimelineItem[] = [
  {
    period: "Aug 2025- Oct 2025",
    company:
      "Inva Real Estate investment and valuation co. ltd - Web Development",
    title: "Web Developer",
    roleTag: "Web Developer",
    logo: invaLogo,
    accent: "violet",
    // isCurrent: true,
    website: "https://github.com/layheangtob-art",
    bullets: [
      "Developed dynamic UI components, ensuring clean, reusable, and scalable code.",
      "Debugged and optimized features to improve performance and user experience.",
      "Delivered weekly progress reports and presented updates in meetings with the Senior Web Developer.",
    ],
  },
  {
    period: "Feb 2024- Feb 2025",
    company:
      "ANT Training Center - Ministry of Post and Telecommunications Full Scholarship",
    title: "Frontend Developer",
    roleTag: "Full-Stack Developer",
    logo: antLogo,
    accent: "cyan",
    website: "https://github.com/layheangtob-art",
    bullets: [
      "Developed PHP, Laravel with MySQL, Postman .",
      "Proficient in Git and clean code principles.",
      "Experienced in frontend integration, reusable modules, and code reviews.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    period: "2022 — 2026",
    company: "Royal University of Phnom Penh",
    title: "Bachelor of IT Engineering",
    roleTag: "Bachelor Degree",
    logo: ruppLogo,
    initials: "RU",
    accent: "violet",
    website: "https://www.rupp.edu.kh",
    bullets: [
      "Study software engineering, algorithms, databases, and focus on web development.",
      "Complete coursework in web development, UI design, and practical product thinking.",
      "Collaborate on academic projects that combine engineering discipline with real-world outcomes.",
    ],
  },
  {
    period: "2022 - Present",
    company: "Australian Centre of Education",
    title: "English Language Program (GEP)",
    roleTag: "English",
    logo: aecLogo,
    // initials: 'PS',
    accent: "cyan",
    bullets: [
      // 'Built a strong foundation in mathematics, physics, and problem solving.',
      // 'Participated in school technology activities and introductory programming workshops.',
      // 'Developed communication and teamwork skills through group academic projects.',
    ],
  },
];

export const techStack: TechStackItem[] = [
  { name: "HTML", icon: "html5", color: "F54927" },
  { name: "CSS", icon: "css", color: "663399" },
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "Vue.js", icon: "vuedotjs", color: "41B883" },
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
  { name: "Figma", icon: "figma", color: "ffffff" },
  { name: "PHP", icon: "php", color: "777BB4" },
  { name: "Laravel", icon: "laravel", color: "FF2D20" },
  { name: "RESTful APIs", icon: "swagger", color: "85EA2D" },
  { name: "Postman", icon: "postman", color: "FF6C37" },
  { name: "MySQL", icon: "mysql", color: "4479A1" },
  { name: "GitHub", icon: "github", color: "FFFFFF" },
  { name: "Docker", icon: "docker", color: "2496ED" },
  { name: "Figma", icon: "figma", color: "F24E1E" },
  { name: "Vercel", icon: "vercel", color: "FFFFFF" },
  { name: "Hostinger", icon: "hostinger", color: "673DE6" },
  { name: "Cloudflare", icon: "cloudflare", color: "faae40" },
  { name: "Adobe Photoshop", icon: "adobephotoshop" },
  { name: "Adobe Illustrator", icon: "adobeillustrator" },
  { name: "Adobe After Effects", icon: "adobeaftereffects" },
];

export const visualHighlights: HighlightItem[] = [
  {
    title: "RUPP Campus",
    tone: "purple",
    span: "tall",
    image: ruppGroupPhoto,
    alt: "Group photo at Royal University of Phnom Penh",
  },
  {
    title: "RUPP Campus 2",
    tone: "blue",
    span: "normal",
    image: ruppGroupPhoto2,
  },
  {
    title: "Final Defense Year 4",
    tone: "green",
    span: "tall",
    image: ruppGroupPhoto4,
  },
  { title: "...", tone: "orange", span: "tall", image: ruppGroupPhoto5 },
  {
    title: "Final Defense At ANT Training Center",
    tone: "violet",
    span: "tall",
    image: ruppGroupPhoto3,
  },
  { title: "...", tone: "silver", span: "normal", image: ruppGroupPhoto6 },
];

export const featuredProjects: ProjectItem[] = [
  {
    title: "Design and develop News Portal using Laravel 12 ",
    description: [
      "The system is a web-based news application for users in Cambodia.",
      "It allows users to read the latest and trending news online.",
      "The system has two main roles: User (Reader) and Admin (Manage).",
      "Users can browse, search, read news articles easily and dark mode.",
      "Admin can manage news content (add, edit, delete) through a secure dashboard.",
      "News is organized into categories such as local news, international news, technology, sport, and entertainment.",
      "The website provides a Khmer audio reader.",
    ],
    stack: ["PHP Laravel ", "CSS", "JavaScript", "MySQL"],
    tone: "purple",
    image: khmerNewsPortal,
    alt: "Khmer News Portal homepage screenshot",
    github: "https://github.com/layheangtob-art",
    live: "https://kh-news.shop/",
  },
  {
    title: "WearPlus-E-Commerce ",
    description:
      "A productivity app with drag-and-drop boards, filters, and clean dashboard interactions.",
    stack: ["Vue", "Pinia", "Tailwind"],
    tone: "violet",
    image: wearplus,
    github: "https://github.com/layheangtob-art",
    live: "https://wear-plus-next-js-prisma-pogre-sql-e-commerce.vercel.app/",
  },
  {
    title: "Phsar Baitong",
    description:
      "Product listing and checkout flow focused on conversion, clarity, and mobile-first layout.",
    stack: ["Vue", "REST API", "CSS"],
    tone: "silver",
    github: "https://github.com/layheangtob-art",
    live: "#projects",
  },
  {
    title: "Admin Dashboard",
    description:
      "Analytics dashboard with charts, tables, and role-based navigation for internal tools.",
    stack: ["TypeScript", "Vue", "Charts"],
    tone: "dark",
    github: "https://github.com/layheangtob-art",
  },
];

export const uxUiProjects: ProjectItem[] = [
  {
    title: "Khmer News Portal — Responsive Mockup",
    description:
      "Multi-device mockup showcasing the responsive news portal layout across desktop, laptop, tablet, and mobile.",
    stack: ["Adobe Photoshop"],
    tone: "silver",
    image: khmerNewsUxUi,
    alt: "Khmer News Portal responsive UX/UI mockup on desktop, laptop, tablet, and mobile",
    github: "https://github.com/layheangtob-art",
    live: "https://www.figma.com/",
  },
  {
    title: "UX/UI Design — Khmer News Portal",
    description: [
      "Designed a clean, readable news experience tailored for Khmer-speaking users in Cambodia.",
      "Created wireframes and high-fidelity mockups for homepage, article detail, and category pages.",
      "Built a responsive layout system with consistent typography, spacing, and color tokens.",
      "Designed dark mode variants to improve reading comfort in low-light environments.",
      "Planned intuitive navigation for browsing, search, and category filtering on mobile and desktop.",
      "Delivered admin dashboard UI for content management flows (add, edit, delete articles).",
    ],
    stack: ["Figma", "Adobe XD", "Adobe Photoshop"],
    tone: "silver",
    image: vesspaimg,
    alt: "Khmer News Portal responsive UX/UI mockup on desktop, laptop, tablet, and mobile",
    github: "https://github.com/layheangtob-art",
    live: "https://www.figma.com/",
  },
  {
    title: "UX/UI Design — Khmer News Portal",
    description: [
      "Designed a clean, readable news experience tailored for Khmer-speaking users in Cambodia.",
      "Created wireframes and high-fidelity mockups for homepage, article detail, and category pages.",
      "Built a responsive layout system with consistent typography, spacing, and color tokens.",
      "Designed dark mode variants to improve reading comfort in low-light environments.",
      "Planned intuitive navigation for browsing, search, and category filtering on mobile and desktop.",
      "Delivered admin dashboard UI for content management flows (add, edit, delete articles).",
    ],
    stack: ["Figma", "Adobe XD", "Adobe Photoshop"],
    tone: "silver",
    image: vesspaimg,
    alt: "Khmer News Portal responsive UX/UI mockup on desktop, laptop, tablet, and mobile",
    github: "https://github.com/layheangtob-art",
    live: "https://www.figma.com/",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "Web Development Track",
    description:
      "Completed intensive frontend coursework with Vue and TypeScript projects.",
    badge: "100%",
    symbol: "★",
  },
  {
    title: "UI Design Fundamentals",
    description:
      "Built consistent design systems with Figma, spacing, and typography practice.",
    badge: "95%",
    symbol: "◆",
  },
  {
    title: "Hackathon Participant",
    description:
      "Collaborated on a rapid prototype and presented a working demo in 48 hours.",
    badge: "2024",
    symbol: "⚡",
  },
];
