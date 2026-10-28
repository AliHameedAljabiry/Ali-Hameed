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
      demo: 'https://nextwizard.alihameeddev.xyz'
    },
    {
      id: 2,
      title: 'University Library',
      description: 'A comprehensive university library management system with user authentication, book catalog, borrowing features, and admin panel for managing books, users, and borrowing records and book issues and book returns.',
      image: '/images/bookwize.png',
      tags: ['React', 'Next.js', 'Typescript', 'PostgreSQL'],
      category: 'Full Stack',
      github: 'https://github.com/AliHameedAljabiry/university-library',
      demo: 'https://nerdslibrary.alihameeddev.xyz'
    },
    {
      id: 3,
      title: 'CarePulse',
      description: 'A healthcare management system for modern clinics.',
      image: '/images/carepulse.png',
      tags: ['React', 'Next.js', 'Typescript', 'PostgreSQL'],
      category: 'Full Stack',
      github: 'https://github.com/AliHameedAljabiry/CarePulse',
      demo: 'https://carepulse.alihameeddev.xyz'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'An interactive 3D portfolio showcasing Three.js capabilities with smooth animations and responsive design. Features particle systems and shader effects.',
      image: '/images/task-manager.png',
      tags: ['React', 'TypeScript', 'Bootstrap'],
      category: 'Frontend',
      github: 'https://github.com/AliHameedAljabiry/Task-Manager',
      demo: 'https://taskmanager.alihameeddev.xyz'
    },
    {
      id: 5,
      title: 'Vanlife',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/images/vanlife.png',
      tags: ['React', 'React Router', 'Typescript', 'Firebase'],
      category: 'Full Stack',
      github: 'https://github.com/AliHameedAljabiry/Van-life',
      demo: 'https://vanlife.alihameeddev.xyz'
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
            The projects I have built are private and available for companies to review upon request. Please contact me to
              arrange a demonstration or code walkthrough.
          </p>
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
