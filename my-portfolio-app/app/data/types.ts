export interface Profile {
  name: string
  shortName: string
  role: string
  interests: string
  headline: string
  photo: string
  resume: string
  location: string
  email: string
  phone: string
  links: { github: string; linkedin: string }
  about: string[]
  stats: { value: string; label: string }[]
  focus: string[]
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  summary: string
  projects: { name: string; description: string }[]
  tech: string[]
}

export interface ResearchItem {
  area: string
  title: string
  status: string
  context: string
  description: string
  tech: string[]
}

export interface FeaturedProject {
  title: string
  subtitle: string
  status: 'Ongoing' | 'Completed'
  type: string
  image: string
  github: string
  description: string
  highlights: string[]
  tech: string[]
}

export interface OtherProject {
  title: string
  type: string
  github?: string
  description: string
  tech: string[]
}

export interface ProjectsData {
  featured: FeaturedProject[]
  other: OtherProject[]
}

export interface SkillsData {
  categories: { title: string; skills: string[] }[]
  soft: string[]
}

export interface EducationData {
  education: { title: string; institution: string; period: string; detail?: string; current?: boolean }[]
  certifications: { title: string; issuer: string; year?: string; detail?: string }[]
}

export interface Achievement {
  title: string
  org: string
  year: string
  description: string
}
