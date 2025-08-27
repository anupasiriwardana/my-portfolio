export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-teal-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a Software Engineering undergraduate who&apos;s eager to learn and 
              loves taking on challenges that expand my skill set. With a strong 
              foundation in programming, data structures, algorithms, and agile methodologies, I enjoy 
              building reliable and efficient solutions from concept to deployment.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My research interests are focused on AI security with behavioral biometrics analysis and 
              I&apos;m passionate about exploring the intersection of artificial intelligence and cybersecurity.
            </p>

            {/* <div className="flex flex-wrap gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <span className="text-teal-400 font-medium">Current GPA:</span>
                <span className="ml-2 text-white">3.66/4.00</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <span className="text-teal-400 font-medium">Location:</span>
                <span className="ml-2 text-white">Colombo, Sri Lanka</span>
              </div>
            </div> */}
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-teal-400 mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Full Stack Web Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  RESTful API Design & Development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  Database Design & Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  API Testing & Integration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  System Analysis & Design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}