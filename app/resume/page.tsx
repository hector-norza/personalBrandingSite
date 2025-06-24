'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function Resume() {
  return (
    <div className="min-h-screen section-padding py-20">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Resume</h1>
          <p className="text-gray-600 mb-8">
            Download my resume or view it below
          </p>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center">
            <Download className="mr-2" size={20} />
            Download PDF
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white shadow-lg rounded-lg p-8 mb-8"
        >
          {/* Header */}
          <div className="text-center mb-8 pb-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-2">Your Full Name</h2>
            <p className="text-xl text-primary-600 mb-4">Full-Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                your.email@example.com
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                (555) 123-4567
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Your City, State
              </div>
              <div className="flex items-center">
                <Linkedin size={16} className="mr-2" />
                linkedin.com/in/yourprofile
              </div>
              <div className="flex items-center">
                <Github size={16} className="mr-2" />
                github.com/yourusername
              </div>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-600">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed">
              Passionate full-stack developer with 5+ years of experience building scalable web applications. 
              Expertise in React, Node.js, and cloud technologies. Strong problem-solving skills and commitment 
              to writing clean, maintainable code. Proven track record of delivering high-quality solutions 
              that drive business growth.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-600">Professional Experience</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">Senior Full-Stack Developer</h4>
                  <p className="text-primary-600">Tech Company Inc.</p>
                </div>
                <span className="text-gray-500">2022 - Present</span>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Led development of microservices architecture serving 100K+ users</li>
                <li>• Improved application performance by 40% through optimization</li>
                <li>• Mentored junior developers and conducted code reviews</li>
                <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold">Full-Stack Developer</h4>
                  <p className="text-primary-600">Startup Solutions</p>
                </div>
                <span className="text-gray-500">2020 - 2022</span>
              </div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Built responsive web applications using React and Node.js</li>
                <li>• Integrated third-party APIs and payment systems</li>
                <li>• Collaborated with design team to implement pixel-perfect UIs</li>
                <li>• Maintained 99.9% uptime for production applications</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-600">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                    <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((skill) => (
                    <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-600">Education</h3>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                <p className="text-primary-600">University Name</p>
              </div>
              <span className="text-gray-500">2016 - 2020</span>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h3 className="text-xl font-semibold mb-4 text-primary-600">Certifications</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• AWS Certified Solutions Architect - Associate (2023)</li>
              <li>• Google Cloud Professional Developer (2022)</li>
              <li>• MongoDB Certified Developer (2021)</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </div>
  )
}