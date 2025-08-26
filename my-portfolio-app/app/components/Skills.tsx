interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS", "PHP", "R", "SQL"],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Next.js", "React", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS", "FastAPI"],
      icon: "⚛️"
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      icon: "🗄️"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Docker", "Jira", "Postman", "Vercel", "Render"],
      icon: "🛠️"
    }
  ]

  const softSkills: string[] = [
    "Team Collaboration",
    "Problem Solving", 
    "Adaptability",
    "Communication",
    "Cross-cultural Communication",
    "Project Coordination"
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & <span className="text-teal-400">Technologies</span>
        </h2>
        
        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-teal-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-lg font-semibold text-teal-400">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-full hover:bg-teal-400 hover:text-gray-900 transition-colors duration-300 cursor-default border border-gray-700 hover:border-teal-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Soft <span className="text-teal-400">Skills</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex items-center bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="w-3 h-3 bg-teal-400 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}