import { Github, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  status: 'Ongoing' | 'Completed';
  highlights: string[];
  type?: string;
  image?: string;
}

export default function Projects() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const projects: Project[] = [
    {
      title: "Zypher: CI/CD Pipeline Security Assistant",
      description: "Full-stack web application performing static analysis on CI/CD configuration files with vulnerability detection and best practices enforcement. Features rule-based scan engine, integrated knowledge base, and detailed reporting.",
      tech: ["Next.js", "Tailwind CSS", "FastAPI", "MongoDB", "GitHub API"],
      github: "https://github.com/anupasiriwardana/zypher",
      status: "Ongoing",
      highlights: [
        "Rule-based scan engine", 
        "Detailed reporting with severity scores, code location, and remediation guidance", 
        "Dynamic rule loading system", 
        "Custom Rule development and testing workspace",
        "Integrated knowledge base"
      ],
      type : "Group Project",
      image: "/Zypher3.png"
    },
    {
      title: "SkillSwap: AI-Powered Skill Exchange Platform",
      description: "Dynamic web application facilitating skill-sharing through AI-driven matching, video calls, and credit-based economy. Features triple-mode system (Teach & Learn, Learn Only, Teach Only) and integrated communication tools.",
      tech: ["React", "Spring Boot", "PostgreSQL", "Daily.co API", "OpenAI API"],
      github: "https://github.com/anupasiriwardana/SkillSwap",
      status: "Ongoing",
      highlights: ["AI-Powered Matching Algorithm", "Video Call Integration", "Credit-Based Economy", "Calendar Synchronization"],
      image: "/SkillSwap4.png"
    },
    {
      title: "GymVerse: Gym & Fitness Management Platform",
      description: "A comprehensive platform that connects members, trainers and the owner into a single ecosystem, while providing a holistic fitness experience and gym management tools —all within a dynamic web application.",
      tech: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
      github: "https://github.com/Threadstone15/Group_Project_48",
      status: "Completed",
      highlights: ["Custom SPA Routing System", "Personalized Workout and Meal Plans", "Workout Progress Logging", "QR-Based Attendance", "Fitness Progress Tracking & Analytics", "Simplified Interaction with Trainers via Chat", "Class Scheduling and Booking with a Custom Calendar Integration", "Analytics Dashboard for Gym Owner", "Membership Management & Trainer Onboarding"],
      type: "Group Project",
      image: "/GymVerse.png"
    },
    {
      title: "VolunteerLink: Volunteer Platform",
      description: "A web application designed to connect volunteers with organizations and recruiters seeking skilled individuals for various opportunities and projects.",
      tech: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS"],
      github: "https://github.com/anupasiriwardana/VolunteerLink",
      status: "Completed",
      highlights: ["User Registration & Profile Management", "Opportunity Listings", "Volunteer Application Management","Application Status Tracking", "Opportunity Matching"],
      type: "Group Project",
      image: "/VolunteerLink.png"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-teal-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedCards.includes(index)
            
            return (
              <div 
                key={index} 
                className="bg-gray-900 rounded-lg border border-gray-700 hover:border-teal-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/10 overflow-hidden"
              >
                {/* Project Image */}
                {project.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  {/* Header */}
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
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>
                  
                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleCard(index)}
                    className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors mb-4 w-full justify-center py-2 border border-teal-400/30 rounded-lg hover:bg-teal-400/5"
                  >
                    <span className="text-sm">{isExpanded ? 'Show Less' : 'Show More'}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {/* Expandable Content */}
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="space-y-4 pt-2">
                      {/* Key Highlights */}
                      <div>
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
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-teal-400 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Links and Type */}
                      <div className="flex justify-between items-center pt-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-teal-400 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                          <span className="text-sm">View Code</span>
                        </a>
                        {project.type && (
                          <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-600">
                            {project.type}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}