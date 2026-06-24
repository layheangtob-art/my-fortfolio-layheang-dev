export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
}

export interface TimelineItem {
  period: string
  company: string
  title: string
  roleTag: string
  bullets: string[]
  initials: string
  accent: 'violet' | 'cyan'
  isCurrent?: boolean
  website?: string
}

export interface TechStackItem {
  name: string
  icon: string
  color?: string
}

export interface HighlightItem {
  title: string
  tone: 'purple' | 'blue' | 'green' | 'orange' | 'violet' | 'silver'
  span: 'normal' | 'tall' | 'wide'
}

export interface ProjectItem {
  title: string
  description: string
  stack: string[]
  tone: 'purple' | 'silver' | 'violet' | 'dark'
  github?: string
  live?: string
}

export interface AchievementItem {
  title: string
  description: string
  badge: string
  symbol: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
]

export const stats: StatItem[] = [
  { value: '5+', label: 'Projects Completed' },
  { value: '4+', label: 'Tech Stacks' },
  { value: '1+', label: 'Years Of Experience' },
]

export const experience: TimelineItem[] = [
  {
    period: 'Sep 2024 — Present',
    company: 'Freelance Projects',
    title: 'Full Stack Web Developer',
    roleTag: 'Developer',
    initials: 'FP',
    accent: 'violet',
    isCurrent: true,
    website: 'https://github.com/layheangtob-art',
    bullets: [
      'Build responsive web applications with Vue, TypeScript, and reusable component architecture.',
      'Design modern interfaces with thoughtful spacing, hierarchy, and conversion-focused layouts.',
      'Deliver client projects from concept to deployment with clean code and clear communication.',
    ],
  },
  {
    period: 'Jun 2023 — Aug 2024',
    company: 'Campus Tech Club',
    title: 'Frontend Developer Intern',
    roleTag: 'Internship',
    initials: 'CT',
    accent: 'cyan',
    bullets: [
      'Developed club websites and event landing pages with Vue and modern CSS.',
      'Collaborated with designers to translate Figma mockups into responsive UI.',
      'Improved page performance and accessibility across student-facing projects.',
    ],
  },
]

export const education: TimelineItem[] = [
  {
    period: '2022 — 2026',
    company: 'Royal University of Phnom Penh',
    title: 'Bachelor of IT Engineering',
    roleTag: 'Degree',
    initials: 'RU',
    accent: 'violet',
    website: 'https://www.rupp.edu.kh',
    bullets: [
      'Study software engineering, algorithms, databases, and computer systems fundamentals.',
      'Complete coursework in web development, UI design, and practical product thinking.',
      'Collaborate on academic projects that combine engineering discipline with real-world outcomes.',
    ],
  },
  {
    period: '2019 — 2022',
    company: 'Preah Sisowath High School',
    title: 'Science Major Graduate',
    roleTag: 'School',
    initials: 'PS',
    accent: 'cyan',
    bullets: [
      'Built a strong foundation in mathematics, physics, and problem solving.',
      'Participated in school technology activities and introductory programming workshops.',
      'Developed communication and teamwork skills through group academic projects.',
    ],
  },
]

export const techStack: TechStackItem[] = [
  { name: 'React.js', icon: 'react', color: '61DAFB' },
  { name: 'Next.js', icon: 'nextdotjs', color: 'FFFFFF' },
  { name: 'Vue.js', icon: 'vuedotjs', color: '41B883' },
  { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
  { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4' },
  { name: 'Node.js', icon: 'nodedotjs', color: '339933' },
  { name: 'Express.js', icon: 'express', color: 'FFFFFF' },
  { name: 'NestJS', icon: 'nestjs', color: 'E0234E' },
  { name: 'PHP', icon: 'php', color: '777BB4' },
  { name: 'Laravel', icon: 'laravel', color: 'FF2D20' },
  { name: 'RESTful APIs', icon: 'swagger', color: '85EA2D' },
  { name: 'Postman', icon: 'postman', color: 'FF6C37' },
  { name: 'MySQL', icon: 'mysql', color: '4479A1' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' },
  { name: 'Git', icon: 'git', color: 'F05032' },
  { name: 'GitHub', icon: 'github', color: 'FFFFFF' },
  { name: 'Docker', icon: 'docker', color: '2496ED' },
  { name: 'Jenkins', icon: 'jenkins', color: 'D24939' },
  { name: 'Ansible', icon: 'ansible', color: 'EE0000' },
  { name: 'Kubernetes', icon: 'kubernetes', color: '326CE5' },
  { name: 'Figma', icon: 'figma', color: 'F24E1E' },
  { name: 'Vercel', icon: 'vercel', color: 'FFFFFF' },
  { name: 'Render', icon: 'render', color: 'FFFFFF' },
  { name: 'Railway', icon: 'railway', color: 'FFFFFF' },
]

export const visualHighlights: HighlightItem[] = [
  { title: 'Portfolio UI', tone: 'purple', span: 'tall' },
  { title: 'Dashboard Concept', tone: 'blue', span: 'normal' },
  { title: 'Mobile Layout', tone: 'green', span: 'wide' },
  { title: 'Brand System', tone: 'orange', span: 'normal' },
  { title: 'Landing Page', tone: 'violet', span: 'tall' },
  { title: 'Component Library', tone: 'silver', span: 'normal' },
]

export const featuredProjects: ProjectItem[] = [
  {
    title: 'Personal Portfolio',
    description:
      'A dark-themed portfolio with animated hero, timeline experience, and responsive project showcase.',
    stack: ['Vue 3', 'TypeScript', 'CSS'],
    tone: 'purple',
    github: 'https://github.com/layheangtob-art',
    live: '#home',
  },
  {
    title: 'Task Manager App',
    description:
      'A productivity app with drag-and-drop boards, filters, and clean dashboard interactions.',
    stack: ['Vue', 'Pinia', 'Tailwind'],
    tone: 'violet',
    github: 'https://github.com/layheangtob-art',
  },
  {
    title: 'E-Commerce UI',
    description:
      'Product listing and checkout flow focused on conversion, clarity, and mobile-first layout.',
    stack: ['Vue', 'REST API', 'CSS'],
    tone: 'silver',
    github: 'https://github.com/layheangtob-art',
    live: '#projects',
  },
  {
    title: 'Admin Dashboard',
    description:
      'Analytics dashboard with charts, tables, and role-based navigation for internal tools.',
    stack: ['TypeScript', 'Vue', 'Charts'],
    tone: 'dark',
    github: 'https://github.com/layheangtob-art',
  },
]

export const achievements: AchievementItem[] = [
  {
    title: 'Web Development Track',
    description: 'Completed intensive frontend coursework with Vue and TypeScript projects.',
    badge: '100%',
    symbol: '★',
  },
  {
    title: 'UI Design Fundamentals',
    description: 'Built consistent design systems with Figma, spacing, and typography practice.',
    badge: '95%',
    symbol: '◆',
  },
  {
    title: 'Hackathon Participant',
    description: 'Collaborated on a rapid prototype and presented a working demo in 48 hours.',
    badge: '2024',
    symbol: '⚡',
  },
]
