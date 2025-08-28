import { Award, MapPin } from 'lucide-react'

interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  status?: string;
  modules?: string[];
  results?: string;
}

interface Certification {
  title: string;
  issuer: string;
  year?: string;
  status?: string;
}

interface Achievement {
  title: string;
  institution: string;
  description: string;
}

export default function Education() {
  const education: Education[] = [
    {
      degree: "BSc (Hons) in Software Engineering",
      institution: "University of Colombo School of Computing",
      period: "2023 - Present",
      gpa: "3.66/4.00",
      status: "Current"
    },
    {
      degree: "BCS Level 5 Diploma in IT",
      institution: "BCS, The Chartered Institute for IT",
      period: "2022",
      modules: ["Database Systems", "Object Oriented Programming", "Professional Issues in IS Practice", "System Analysis and Design"]
    },
    {
      degree: "BCS Level 4 Certificate in IT",
      institution: "BCS, The Chartered Institute for IT",
      period: "2023",
    },
    {
      degree: "GCE Advanced Level Examination",
      institution: "Ananda College, Colombo 10",
      period: "2022",
      results: "Z-Score: 1.93 | ICT: 'A' | Combined Maths: 'B' | Physics: 'B'"
    },
    {
      degree: "Diploma in Information Technology",
      institution: "ESOFT Metro Campus",
      period: "2019"
    },
    {
      degree: "GCE Ordinary Level Examination",
      institution: "Carey College, Colombo 08",
      period: "2018",
      results: "9 'A's"
    }
  ]

  const certifications: Certification[] = [
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "AWS Educate",
      year: "2024"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI & Stanford Online",
      status: "In Progress"
    }
  ]

  const achievements: Achievement[] = [
    {
      title: "Director's List",
      institution: "University of Colombo School of Computing",
      description: "Recognition for academic excellence: Year 2 Semester 1 and Semester 2"
    },
    {
      title: "Inter-faculty Championship - Football",
      institution: "University of Colombo",
      description: "Represented UCSC in Football and placed 2nd runners-up (2024)"
    },
    {
      title: "AIESEC Member - Incoming Global Volunteer Team",
      institution: "AIESEC in University of Colombo",
      description: "Member of Incoming Global Volunteer (IGV) Team : Engaged with international volunteers by supporting them during their stay in Sri Lanka (2024-2025)"
    },
    {
      title: "Western Music & Dance Competition",
      institution: "All Island Inter-School Competition",
      description: "Performed as a member of the Senior Brass Band and secured 2nd runners-up (2017)"
    }
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education & <span className="text-teal-400">Achievements</span>
        </h2>
        
        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-teal-400">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-teal-400/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  <span className="text-teal-400 font-medium">{edu.period}</span>
                </div>
                <div className="flex items-center mb-2">
                  <MapPin size={16} className="text-gray-400 mr-2" />
                  <p className="text-gray-300">{edu.institution}</p>
                </div>
                {edu.gpa && (
                  <div className="mb-2">
                    <span className="text-teal-400 font-medium">Current GPA: </span>
                    <span className="text-white">{edu.gpa}</span>
                  </div>
                )}
                {edu.results && (
                  <p className="text-gray-300 mb-2">{edu.results}</p>
                )}
                {edu.modules && (
                  <div>
                    <span className="text-teal-400 font-medium">Key Modules: </span>
                    <span className="text-gray-300">{edu.modules.join(', ')}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-teal-400">Certifications & Courses</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-teal-400/30 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-gray-300 mb-2">{cert.issuer}</p>
                {cert.year && <p className="text-teal-400">{cert.year}</p>}
                {cert.status && <p className="text-teal-400">{cert.status}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-teal-400">Achievements & Activities</h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-teal-400/30 transition-all duration-300">
                <div className="flex items-start">
                  <Award className="text-teal-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{achievement.title}</h4>
                    <p className="text-teal-400 mb-2">{achievement.institution}</p>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}