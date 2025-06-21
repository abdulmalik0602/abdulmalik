import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Cloud, Smartphone, X, Lock, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Transport Management Platform',
      description: 'Corporate transport system for Singapore-based firm with GPS-based route management, driver tracking, and admin controls.',
      fullDescription: 'A comprehensive transport management platform built for a Singapore-based corporate client. The system includes GPS-based route optimization, real-time driver tracking, passenger management, and comprehensive admin controls. Features include route planning, live tracking, automated notifications, and detailed analytics dashboard.',
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS Lambda', 'Cloudflare', 'Mapbox API'],
      category: 'Enterprise',
      isConfidential: true,
      platforms: ['1 Web App (Admin)', '2 Mobile Apps (Passenger & Driver)'],
      highlights: [
        'GPS-based route optimization and management',
        'Real-time driver and passenger tracking',
        'Automated notification system',
        'Comprehensive admin dashboard with analytics',
        'Multi-platform deployment (Web + Mobile)',
        'Integration with Mapbox for advanced mapping'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Healthcare SaaS Platform',
      description: 'Unified SaaS console enabling hospitals and clinics to manage electronic records, appointments, and patient analytics.',
      fullDescription: 'A comprehensive healthcare SaaS platform designed to modernize hospital and clinic operations. The platform provides electronic health records management, appointment scheduling, patient analytics, and telemedicine capabilities. Built with microservices architecture and deployed on Kubernetes for scalability.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'React Native', 'Kotlin', 'Spring Boot', 'GraphQL', 'Hasura', 'Apisix', 'Temporal', 'Kubernetes', 'Docker', 'AWS', 'Cloudflare'],
      category: 'Healthcare',
      isConfidential: true,
      platforms: ['1 Web Console', '1 Mobile App'],
      highlights: [
        'Electronic health records management',
        'Appointment scheduling and management',
        'Patient analytics and reporting',
        'Telemedicine integration',
        'Microservices architecture with Kubernetes',
        'GraphQL API with Hasura integration'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Community People Management System',
      description: 'Tamil-based local community CRM platform managing user identity, messaging, payments, and local events.',
      fullDescription: 'A specialized community management system designed for Tamil-speaking local communities. The platform provides user identity management, community messaging, payment processing, and local event organization. Features include multi-language support, payment gateway integration, and SMS notifications.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Firebase', 'Firestore', 'Google Cloud Run', 'Razorpay', 'Airtel DLT', 'Fast2SMS'],
      category: 'Community',
      isConfidential: true,
      platforms: ['1 Web App'],
      highlights: [
        'Multi-language support (Tamil/English)',
        'Community messaging and notifications',
        'Integrated payment processing with Razorpay',
        'Local event management and organization',
        'SMS integration with Fast2SMS and Airtel DLT',
        'Firebase-based real-time data synchronization'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Biologica – Medical Research Console',
      description: 'Web-based bioinformatics research portal for US-based antibody research company with phosphosite visualizations and graph-based data models.',
      fullDescription: 'A cutting-edge bioinformatics research platform developed for a US-based antibody research company. The platform modernizes phosphosite visualizations and implements graph-based data models for complex biological data analysis. Features include interactive data visualization, research workflow management, and collaborative tools.',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'TypeScript', 'Bit', 'Kedro', 'Neo4j', 'GraphQL', 'Apollo', 'Strawberry', 'ArgoCD', 'Nightingale', 'AWS', 'Kubernetes', 'Vuetify', 'Jira'],
      category: 'Research',
      isConfidential: true,
      platforms: ['1 Web Console'],
      highlights: [
        'Advanced phosphosite data visualization',
        'Graph-based data models with Neo4j',
        'Interactive bioinformatics research tools',
        'Collaborative research workflow management',
        'Modern TypeScript and Vue.js architecture',
        'Kubernetes deployment with ArgoCD'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Spotify Clone - Offline Music Player',
      description: 'Feature-rich offline music player with custom equalizer and album management capabilities.',
      fullDescription: 'A comprehensive music player application inspired by Spotify, built with Flutter. Features include offline music playback, custom equalizer, playlist management, album organization, and a modern, intuitive user interface. The app provides a seamless music experience with advanced audio controls.',
      image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Audio Players'],
      category: 'Mobile',
      github: 'https://github.com/abdulmalik0602',
      live: 'https://demo.musicplayer.com',
      highlights: [
        'Offline music playback capabilities',
        'Custom equalizer with multiple presets',
        'Advanced playlist and album management',
        'Modern and intuitive user interface',
        'Cross-platform compatibility (iOS/Android)',
        'Local storage optimization for music files'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 6,
      title: 'Quran App - Islamic Suite',
      description: 'Comprehensive Islamic application with Quran recitations, prayer times, translations, and live Mecca & Madina feed.',
      fullDescription: 'A complete Islamic companion app providing Quran recitations, prayer times, translations in multiple languages, and live feeds from Mecca and Madina. The app includes Hijri calendar, Qibla direction, and various Islamic utilities for daily religious practices.',
      image: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Various APIs', 'Quran Recitation API', 'Hijri Calendar API', 'Live Streaming'],
      category: 'Mobile',
      github: 'https://github.com/abdulmalik0602',
      live: 'https://play.google.com/store',
      highlights: [
        'Complete Quran with multiple recitations',
        'Prayer times with location-based calculations',
        'Multi-language translations (Tamil/English/Hindi)',
        'Live Mecca and Madina streaming',
        'Hijri calendar integration',
        'Qibla direction and Islamic utilities'
      ],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 7,
      title: 'School Bus Tracker',
      description: 'Real-time school bus tracking system with admin, driver, and parent interfaces for student safety and monitoring.',
      fullDescription: 'A comprehensive school bus tracking solution designed to enhance student safety and provide peace of mind to parents. The system includes real-time GPS tracking, automated notifications, student attendance management, and emergency alert systems.',
      image: 'https://images.pexels.com/photos/159658/school-bus-vehicle-children-159658.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Real-time Database', 'Push Notifications'],
      category: 'Education',
      github: 'https://github.com/abdulmalik0602',
      live: 'https://demo.schoolbustracker.com',
      highlights: [
        'Real-time GPS tracking for buses',
        'Multi-user interface (Admin/Driver/Parent)',
        'Student attendance management',
        'Automated arrival/departure notifications',
        'Emergency alert system',
        'Route optimization and management'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 8,
      title: 'Agro Flore – IoT Smart Farming',
      description: 'IoT-based smart farming solution with soil monitoring, crop management, and weather forecasting capabilities.',
      fullDescription: 'An innovative IoT-based smart farming platform that revolutionizes agricultural practices. The system provides real-time soil and nutrient monitoring, automated irrigation control, crop health analysis, and weather forecasting to optimize farming operations.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Firebase', 'ThingSpeak', 'Embedded C', 'Python', 'IoT Sensors', 'Weather API'],
      category: 'IoT',
      github: 'https://github.com/abdulmalik0602',
      live: 'https://demo.agroflore.com',
      highlights: [
        'Real-time soil and nutrient monitoring',
        'Automated irrigation control system',
        'Crop health analysis and recommendations',
        'Weather forecasting integration',
        'IoT sensor network management',
        'Data analytics and reporting dashboard'
      ],
      color: 'from-green-600 to-lime-600'
    },
    {
      id: 9,
      title: 'Artisan Harbor – Handicraft E-Commerce',
      description: 'Marketplace platform for rural artisans with product management, order processing, and secure payment integration.',
      fullDescription: 'A specialized e-commerce platform designed to empower rural artisans by providing them with a digital marketplace. The platform includes product showcase, inventory management, order processing, customer communication, and integrated payment solutions.',
      image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Firestore', 'Payment Gateway', 'Cloud Storage'],
      category: 'E-Commerce',
      github: 'https://github.com/abdulmalik0602',
      live: 'https://demo.artisanharbor.com',
      highlights: [
        'Artisan-focused marketplace design',
        'Product showcase with high-quality images',
        'Inventory and order management',
        'Secure payment processing',
        'Customer review and rating system',
        'Multi-language support for rural users'
      ],
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const categories = ['All', 'Enterprise', 'Healthcare', 'Community', 'Research', 'Mobile', 'Education', 'IoT', 'E-Commerce'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Enterprise': return Code;
      case 'Healthcare': return Database;
      case 'Community': return Code;
      case 'Research': return Database;
      case 'Mobile': return Smartphone;
      case 'Education': return Code;
      case 'IoT': return Cloud;
      case 'E-Commerce': return Code;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions spanning enterprise, healthcare, community, and personal projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);
            return (
              <motion.div
                key={project.id}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    {project.isConfidential && (
                      <div className="w-10 h-10 bg-red-500/90 rounded-full flex items-center justify-center">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}>
                      {project.category}
                    </span>
                    {project.isConfidential && (
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-xs font-medium rounded-full">
                        Confidential
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.isConfidential ? (
                      <motion.button
                        className="flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed text-sm"
                        disabled
                      >
                        <Lock className="w-4 h-4" />
                        Confidential
                      </motion.button>
                    ) : (
                      <>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </motion.a>
                      </>
                    )}
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4" />
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      {project.isConfidential && (
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-red-500/90 text-white rounded-full">
                          <Lock className="w-4 h-4" />
                          <span className="text-sm font-medium">Confidential Project</span>
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <span className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white font-medium rounded-full`}>
                          {project.category}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h2>
                      </div>

                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        {project.fullDescription}
                      </p>

                      {project.platforms && (
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Platform Coverage
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {project.platforms.map((platform) => (
                              <span
                                key={platform}
                                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Key Highlights
                        </h3>
                        <ul className="space-y-3">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        {project.isConfidential ? (
                          <div className="flex items-center gap-3 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg">
                            <Lock className="w-5 h-5" />
                            <span>This project is confidential and cannot be shared publicly</span>
                          </div>
                        ) : (
                          <>
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github className="w-5 h-5" />
                              View Code
                            </motion.a>
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink className="w-5 h-5" />
                              Live Demo
                            </motion.a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;