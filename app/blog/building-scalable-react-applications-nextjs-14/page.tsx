'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

export default function BlogPost() {
  return (
    <div className="min-h-screen section-padding py-20">
      <div className="container-max max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to all posts
          </Link>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Building Scalable React Applications with Next.js 14
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              January 15, 2024
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              8 min read
            </div>
            <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full">
              React
            </span>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Next.js 14 introduces several new features and improvements that make building scalable React applications easier than ever. In this article, we'll explore how to leverage these features to create performant, maintainable, and user-friendly web applications.
            </p>
            
            <h2>The App Router: A Game-Changer</h2>
            <p>
              The App Router represents a paradigm shift in how we structure Next.js applications. By organizing routes as directories and using special files like page.js, layout.js, and loading.js, we can create more intuitive and maintainable codebases.
            </p>
            
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>
{`// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  return <div>Post: {params.slug}</div>
}`}
              </code>
            </pre>
            
            <h2>Server Components: Performance by Default</h2>
            <p>
              React Server Components allow us to render components on the server, reducing the JavaScript sent to the client and improving performance. This is especially beneficial for content-heavy pages.
            </p>
            
            <h2>Data Fetching Patterns</h2>
            <p>
              Next.js 14 provides multiple ways to fetch data, each suited for different scenarios:
            </p>
            
            <ul>
              <li><strong>Server Components</strong>: Fetch data directly in server components without useEffect or useState</li>
              <li><strong>Route Handlers</strong>: Create API endpoints using the app/api directory</li>
              <li><strong>Server Actions</strong>: Execute server-side code directly from client components</li>
            </ul>
            
            <h2>Optimizing for Core Web Vitals</h2>
            <p>
              Performance is crucial for user experience and SEO. Next.js 14 includes built-in optimizations for Core Web Vitals:
            </p>
            
            <ul>
              <li><strong>Automatic Image Optimization</strong>: The next/image component automatically optimizes images</li>
              <li><strong>Font Optimization</strong>: next/font ensures fonts load efficiently without layout shifts</li>
              <li><strong>Script Optimization</strong>: Control how scripts load with the next/script component</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>
              Next.js 14 provides a robust foundation for building scalable React applications. By leveraging its features like the App Router, Server Components, and built-in optimizations, you can create fast, maintainable, and user-friendly web experiences.
            </p>
            
            <p>
              In future articles, we'll dive deeper into specific aspects of Next.js 14 and explore advanced patterns for building complex applications.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}