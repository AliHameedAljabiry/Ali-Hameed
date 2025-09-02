'use client'

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'NextWizard',
      description: 'An interactive guide to building modern full-stack apps with Next.js. We help developers go from zero to production by integrating cutting-edge tools and services into simple, step-by-step recipes..',
      image: '/images/nextwizard.png',
      tags: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
      category: 'Full Stack',
      github: 'https://github.com/AliHameedAljabiry/NextWizard',
      demo: 'https://next-wizard.vercel.app'
    },
    {
      id: 2,
      title: 'University Library',
      description: 'A comprehensive university library management system with user authentication, book catalog, borrowing features, and admin panel for managing books, users, and borrowing records and book issues and book returns.',
      image: '/images/bookwize.png',
      tags: ['React', 'Next.js', 'Typescript', 'PostgreSQL'],
      category: 'Full Stack',
      github: 'https://github.com/AliHameedAljabiry/university-library',
      demo: 'https://university-library-blue.vercel.app/'
    },
    {
      id: 3,
      title: 'Startups',
      description: ' A landing page for a fictional startup company, featuring modern design elements, responsive layout, and smooth scrolling effects.',
      image: '/images/startups.png',
      tags: ['React', 'Next.js', 'Typescript', 'Sanity CMS'],
      category: 'Full Stack',
      github: 'https://github.com/AliHameedAljabiry/startups',
      demo: 'https://startups-msvp.vercel.app/'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'An interactive 3D portfolio showcasing Three.js capabilities with smooth animations and responsive design. Features particle systems and shader effects.',
      image: '/images/task-manager.png',
      tags: ['React', 'TypeScript', 'Bootstrap'],
      category: 'Frontend',
      github: 'https://github.com/AliHameedAljabiry/Task-Manager',
      demo: 'https://task-manager-1z5j.vercel.app/'
    },
    {
      id: 5,
      title: 'Vanlife',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/images/vanlife.png',
      tags: ['React', 'React Router', 'Typescript', 'Firebase'],
      category: 'Full Stack',
      github: 'https://github.com/AliHameedAljabiry/Van-life',
      demo: 'https://van-life-seven-opal.vercel.app/'
    },
    {
      id: 6,
      title: 'UI Admin Dashboard',
      description: 'A sleek and modern admin dashboard template with responsive design, interactive charts, and customizable widgets for data visualization and management.',
      image: '/images/ui-admin.png',
      tags: ['HTML', 'CSS'],
      category: 'Frontend',
      github: 'https://github.com/AliHameedAljabiry/UI-Admin-Dashboard',
      demo: 'https://alihameedaljabiry.github.io/UI-Admin-Dashboard/'
    },
    
   
  ];

  const categories = ['All', 'Frontend', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in frontend development, 
            full-stack applications, and creative web experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                {filter === category && (
                  <motion.div
                    layoutId="filter-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <Image
                  width={200}
                  height={48}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 dark:from-blue-500/20 dark:to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-200/50 dark:border-blue-700/50">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Let's Work Together
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to help bring your ideas to life with modern web technologies.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
