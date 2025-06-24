'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Rss } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with Next.js 14',
    excerpt: 'Learn how to leverage the latest features in Next.js 14 to build performant and scalable React applications.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    slug: 'building-scalable-react-applications-nextjs-14'
  },
  {
    id: 2,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the emerging trends and technologies that will shape web development in 2024 and beyond.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Web Development',
    slug: 'future-web-development-trends-2024'
  },
  {
    id: 3,
    title: 'Optimizing Database Performance in Node.js Applications',
    excerpt: 'Best practices and techniques for improving database performance in your Node.js applications.',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Backend',
    slug: 'optimizing-database-performance-nodejs'
  },
  {
    id: 4,
    title: 'Creating Accessible Web Components with ARIA',
    excerpt: 'A comprehensive guide to building accessible web components using ARIA attributes and best practices.',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Accessibility',
    slug: 'creating-accessible-web-components-aria'
  },
  {
    id: 5,
    title: 'Deploying Full-Stack Applications to AWS',
    excerpt: 'Step-by-step guide to deploying your full-stack applications to AWS using modern DevOps practices.',
    date: '2023-12-20',
    readTime: '12 min read',
    category: 'DevOps',
    slug: 'deploying-fullstack-applications-aws'
  }
]

const categories = ['All', 'React', 'Web Development', 'Backend', 'Accessibility', 'DevOps']

export default function Blog() {
  return (
    <div className="min-h-screen section-padding py-20">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Thoughts, tutorials, and insights about web development, technology, and best practices
          </p>
          <Link
            href="/rss.xml"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <Rss className="mr-2" size={20} />
            Subscribe to RSS Feed
          </Link>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {post.readTime}
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 hover:text-primary-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Read More
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-lg p-8 mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles. No spam, unsubscribe at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            />
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}