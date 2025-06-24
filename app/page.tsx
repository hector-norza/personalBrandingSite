'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    tech: ['Next.js', 'Socket.io', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for business analytics',
    tech: ['React', 'D3.js', 'Python', 'FastAPI'],
    link: '#',
    github: '#'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding py-20 lg:py-32">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary-600">Your Name</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Full-stack developer passionate about creating exceptional digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/resume"
                className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
              >
                View Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding py-20 bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding py-20">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
              <p className="text-gray-600 mb-4">
                Ready to discuss your next project or just want to say hello?
              </p>
              <Link
                href="/contact"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-gray-600 mb-4">
                Check out my contributions and personal projects on GitHub
              </p>
              <a
                href="https://github.com/yourusername"
                className="text-primary-600 hover:text-primary-700 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Network</h3>
              <p className="text-gray-600 mb-4">
                Connect with me on LinkedIn for professional opportunities
              </p>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-primary-600 hover:text-primary-700 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}