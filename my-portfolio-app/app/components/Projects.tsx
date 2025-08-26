import { Github } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  status: 'Ongoing' | 'Completed';
  highlights: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Zypher: CI/CD Pipeline Security Assistant",
      description: "Full-stack web application performing static analysis on CI/CD configuration files with vulnerability detection and best practices enforcement. Features rule-based scan engine, integrated knowledge base, and detailed reporting.",
      tech: ["Next.js", "Tailwind CSS", "FastAPI", "MongoDB", "GitHub API"],
      github: "https://github.com/anupasiriwardana/zypher",
      status: "Ongoing",
      highlights: ["RESTful API Development", "Production Deployment on Render", "Swagger UI Testing", "Sprint Planning & Collaboration"]
    },
    {
      title: "SkillSwap: AI-Powered Skill Exchange Platform",
      description: "Dynamic web application facilitating skill-sharing through AI-driven matching, video calls, and credit-based economy. Features triple-mode system (Teach & Learn, Learn Only, Teach Only) and integrated communication tools.",
      tech: ["React", "Spring Boot", "PostgreSQL", "Daily.co API", "OpenAI API"],
      github: "https://github.com/anupasiriwardana/SkillSwap",
      status: "Ongoing",
      highlights: ["AI-Powered Matching Algorithm", "Video Call Integration", "Credit-Based Economy", "Calendar Synchronization"]
    },
    {
      title: "GymVerse: Gym Management Platform",
      description: "Comprehensive fitness management platform with personalized plans, class booking, progress analytics, and gym management tools. Built with custom JavaScript routing system for Single Page Application behavior.",
      tech: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
      github: "https://github.com/Threadstone15/Group_Project_48",
      status: "Completed",
      highlights: ["Custom SPA Routing System", "Calendar Integration", "QR-Based Attendance", "Progress Analytics"]
    },
    {
      title: "VolunteerLink: Volunteer Platform",
      description: "Platform connecting volunteers with meaningful opportunities and enabling organizations to recruit skilled individuals. Built comprehensive RESTful API backend with thorough testing using Postman.",
      tech: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS"],
      github: "https://github.com/anupasiriwardana/VolunteerLink",
      status: "Completed",
      highlights: ["RESTful API Design", "Postman Testing", "Application Management", "Opportunity Matching"]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-teal-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-teal-400/30 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/10"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white pr-4">{project.title}</h3>
                <span className={`px-3 py-1 text-xs rounded-full flex-shrink-0 ${
                  project.status === 'Ongoing' 
                    ? 'bg-teal-400/10 text-teal-400 border border-teal-400/30' 
                    : 'bg-gray-700 text-gray-300 border border-gray-600'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-teal-400 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-teal-400 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}