import profileJson from './profile.json'
import experienceJson from './experience.json'
import researchJson from './research.json'
import projectsJson from './projects.json'
import skillsJson from './skills.json'
import educationJson from './education.json'
import achievementsJson from './achievements.json'
import type {
  Profile,
  Experience,
  ResearchItem,
  ProjectsData,
  SkillsData,
  EducationData,
  Achievement,
} from './types'

export const profile = profileJson as Profile
export const experience = experienceJson as Experience[]
export const research = researchJson as ResearchItem[]
export const projects = projectsJson as ProjectsData
export const skills = skillsJson as SkillsData
export const education = educationJson as EducationData
export const achievements = achievementsJson as Achievement[]

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
