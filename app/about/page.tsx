'use client'

import { motion } from 'framer-motion'
import { Code, Coffee, Music, Camera, Award, Users } from 'lucide-react'

const skills = [
  { name: 'React/Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'Python', level: 85 },
  { name: 'AWS/Cloud', level: 82 },
  { name: 'PostgreSQL', level: 80 }
]

const achievements = [
  {
    icon: Award,
    title: 'AWS Certified Solutions Architect',
    description: 'Achieved professional certification in cloud architecture'
  },
  {
    icon: Users,
    title: 'Led Team of 8 Developers',
    description: 'Successfully managed and mentored a cross-functional development team'
  },
  {
    icon: Code,
    title: '50+ Projects Delivered',
    description: 'Completed diverse projects from startups to enterprise applications'
  }
]

const interests = [
  { icon: Coffee, name: 'Coffee Brewing', description: 'Exploring different brewing methods and coffee origins' },
  { icon: Music, name: 'Music Production', description: 'Creating electronic music in my spare time' },
  { icon: Camera, name: 'Photography', description: 'Capturing moments through street and landscape photography' }
]

export default function About() {
  return (
    <div className="min-h-screen section-padding py-20">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer who loves creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-6">My Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                My journey into web development started during college when I built my first website 
                for a local business. The excitement of seeing code come to life in the browser and 
                the immediate impact it had on the business owner sparked a passion that continues to drive me today.
              </p>
              <p>
                Over the past 5+ years, I've had the privilege of working with startups, established 
                companies, and everything in between. Each project has taught me something new and 
                reinforced my belief that great software is built through collaboration, attention to detail, 
                and a deep understanding of user needs.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new coffee shops, experimenting with music 
                production, or capturing the world through my camera lens. I believe that diverse experiences 
                outside of technology make me a better developer and problem solver.
              </p>
              <p>
                I'm always excited to take on new challenges and work with teams that share my passion 
                for creating exceptional digital experiences. Let's build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6">Skills & Expertise</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-primary-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Work Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8 mb-20"
        >
          <h2 className="text-3xl font-semibold text-center mb-8">My Work Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-600">User-Centered Design</h3>
              <p className="text-gray-700">
                Every line of code I write is with the end user in mind. I believe great software 
                should be intuitive, accessible, and solve real problems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Continuous Learning</h3>
              <p className="text-gray-700">
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                trends, tools, and best practices in web development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Quality & Performance</h3>
              <p className="text-gray-700">
                I prioritize writing clean, maintainable code and optimizing for performance 
                to ensure applications scale effectively.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Collaboration</h3>
              <p className="text-gray-700">
                The best solutions come from diverse perspectives. I thrive in collaborative 
                environments where ideas can be shared and refined.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Personal Interests */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-center mb-12">Beyond Code</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <interest.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{interest.name}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}