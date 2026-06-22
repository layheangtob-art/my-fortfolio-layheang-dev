export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
}

export interface ServiceItem {
  title: string
  description: string
  active?: boolean
}

export interface WorkItem {
  title: string
  tag: string
  tone: 'purple' | 'silver' | 'violet' | 'dark'
}

export interface ResumeItem {
  period: string
  title: string
  place: string
}

export interface SkillItem {
  name: string
  level: string
}

export interface TestimonialItem {
  name: string
  role: string
  quote: string
}

export interface BlogPost {
  title: string
  tag: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Resume', href: '#resume' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
]

export const stats: StatItem[] = [
  { value: '14', label: 'Years Of Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '1.5K', label: 'Code Commits' },
  { value: '14', label: 'Happy Clients' },
]

export const services: ServiceItem[] = [
  {
    title: 'Web Development',
    description:
      'Build responsive web applications with Vue, TypeScript, reusable components, and clean architecture.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Design modern interfaces with thoughtful spacing, color systems, hierarchy, and conversion-focused layouts.',
  },
  {
    title: 'Content Writing',
    description:
      'Write product-friendly copy for landing pages, feature descriptions, and polished portfolio storytelling.',
  },
  {
    title: 'Digital Marketing',
    description:
      'Support online presence with strong messaging, campaign visuals, and simple conversion funnels.',
    active: true,
  },
]

export const featuredWorks: WorkItem[] = [
  { title: 'Judges a Book', tag: 'Brand Portfolio', tone: 'purple' },
  { title: 'Mobile Landing', tag: 'App Showcase', tone: 'silver' },
  { title: 'Admin System', tag: 'Dashboard UI', tone: 'violet' },
  { title: 'Studio Website', tag: 'Creative Agency', tone: 'dark' },
]

export const experience: ResumeItem[] = [
  {
    period: '2024 - Present',
    title: 'Lead Developer',
    place: 'CIB on the Mobile',
  },
  {
    period: '2023 - 2024',
    title: 'Full Stack Web Developer',
    place: 'Freelance Projects',
  },
  {
    period: '2022 - 2023',
    title: 'UI/UX Designer',
    place: 'Product Design Studio',
  },
  {
    period: '2021 - 2022',
    title: 'Junior Graphic Designer',
    place: 'Creative Team',
  },
]

export const education: ResumeItem[] = [
  {
    period: '2022 - 2026',
    title: 'Programming Course',
    place: 'Your University Name',
  },
  {
    period: '2021 - 2022',
    title: 'Graphic Design Course',
    place: 'Design Learning Program',
  },
  {
    period: '2019 - 2022',
    title: 'High School Graduate',
    place: 'Your High School Name',
  },
  {
    period: '2018 - 2019',
    title: 'Intro To Technology',
    place: 'Basic Computer Class',
  },
]

export const skillItems: SkillItem[] = [
  { name: 'Figma', level: '95%' },
  { name: 'Sketch', level: '87%' },
  { name: 'XD', level: '90%' },
  { name: 'WordPress', level: '84%' },
  { name: 'Vue', level: '92%' },
  { name: 'HTML', level: '96%' },
]

export const testimonials: TestimonialItem[] = [
  {
    name: 'Sok Dara',
    role: 'Product Manager',
    quote:
      'Layheang combines design awareness with frontend skill and always delivers a clean final result.',
  },
  {
    name: 'Malis Chan',
    role: 'Startup Founder',
    quote:
      'The portfolio and product pages felt modern, professional, and easy for our users to understand.',
  },
]

export const blogPosts: BlogPost[] = [
  {
    title: 'The Role of Typography in Design',
    tag: 'Design',
  },
  {
    title: 'The Future of Responsive Layouts',
    tag: 'Development',
  },
  {
    title: 'Why Color Matters in Web UI',
    tag: 'Branding',
  },
]
