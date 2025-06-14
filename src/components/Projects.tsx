import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Cloud, Smartphone, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'SaaS Platform - Microservices Architecture',
      description: 'Enterprise-grade SaaS platform built with microservices architecture, deployed on AWS with auto-scaling capabilities.',
      fullDescription: 'Led the development of a comprehensive SaaS platform using microservices architecture. The platform serves thousands of users with 99.9% uptime. Implemented event-driven architecture, API gateway, service mesh, and comprehensive monitoring. Features include multi-tenancy, role-based access control, real-time notifications, and advanced analytics.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'RabbitMQ'],
      category: 'Backend',
      github: 'https://github.com/abdul-malik',
      live: 'https://demo.saasplatform.com',
      highlights: [
        'Implemented auto-scaling architecture handling 10,000+ concurrent users',
        'Reduced response time by 40% through code optimization',
        'Designed fault-tolerant system with 99.9% uptime',
        'Integrated CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      title: 'Cross-Platform Mobile App',
      description: 'Flutter-based mobile application with real-time features, offline support, and seamless cloud synchronization.',
      fullDescription: 'Developed a feature-rich mobile application using Flutter that works seamlessly across iOS and Android platforms. The app includes real-time chat, offline data synchronization, push notifications, and integrated payment processing. Implemented clean architecture patterns and state management using BLoC.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'SQLite', 'Push Notifications'],
      category: 'Mobile',
      github: 'https://github.com/abdul-malik',
      live: 'https://play.google.com/store',
      highlights: [
        'Cross-platform compatibility with single codebase',
        'Offline-first architecture with smart synchronization',
        'Real-time messaging with WebSocket integration',
        'Achieved 4.8/5 rating on app stores'
      ]
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Automation',
      description: 'Kubernetes-based deployment solution with Infrastructure as Code using Terraform and comprehensive monitoring.',
      fullDescription: 'Designed and implemented a complete cloud infrastructure automation solution using Kubernetes, Terraform, and monitoring tools. The solution includes auto-scaling, service mesh, observability, and disaster recovery. Reduced manual deployment efforts by 90% and improved system reliability.',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kubernetes', 'Terraform', 'AWS', 'Prometheus', 'Grafana', 'Helm', 'ArgoCD'],
      category: 'DevOps',
      github: 'https://github.com/abdul-malik',
      live: 'https://monitoring.example.com',
      highlights: [
        'Automated infrastructure provisioning with Terraform',
        'Implemented GitOps workflow with ArgoCD',
        'Set up comprehensive monitoring and alerting',
        '90% reduction in manual deployment tasks'
      ]
    },
    {
      id: 4,
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard with real-time data visualization, customizable widgets, and advanced filtering capabilities.',
      fullDescription: 'Built a comprehensive analytics dashboard that processes real-time data streams and provides interactive visualizations. The dashboard features customizable widgets, advanced filtering, drill-down capabilities, and export functionality. Handles millions of data points with sub-second response times.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Node.js', 'WebSocket', 'Chart.js', 'PostgreSQL'],
      category: 'Frontend',
      github: 'https://github.com/abdul-malik',
      live: 'https://dashboard.example.com',
      highlights: [
        'Real-time data processing with WebSocket streams',
        'Interactive charts with drill-down capabilities',
        'Customizable dashboard with drag-and-drop widgets',
        'Sub-second response times for complex queries'
      ]
    },
    {
      id: 5,
      title: 'API Gateway & Service Mesh',
      description: 'Scalable API gateway solution with rate limiting, authentication, monitoring, and service mesh integration.',
      fullDescription: 'Developed a robust API gateway solution that serves as the entry point for all microservices. Includes features like rate limiting, authentication, request/response transformation, and comprehensive monitoring. Integrated with service mesh for advanced traffic management and security.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Kong', 'Istio', 'Kubernetes', 'OAuth2', 'JWT', 'Prometheus', 'Jaeger'],
      category: 'Backend',
      github: 'https://github.com/abdul-malik',
      live: 'https://api.example.com',
      highlights: [
        'Centralized API management for 50+ microservices',
        'Implemented OAuth2 and JWT authentication',
        'Advanced rate limiting and throttling',
        'Distributed tracing with Jaeger integration'
      ]
    },
    {
      id: 6,
      title: 'Machine Learning Pipeline',
      description: 'End-to-end ML pipeline with automated model training, validation, deployment, and monitoring in production.',
      fullDescription: 'Built a complete machine learning pipeline that automates the entire ML lifecycle from data ingestion to model deployment. The pipeline includes automated feature engineering, model training, validation, A/B testing, and continuous monitoring. Deployed on Kubernetes with auto-scaling capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Kubeflow', 'Apache Airflow', 'MLflow', 'Docker'],
      category: 'ML/AI',
      github: 'https://github.com/abdul-malik',
      live: 'https://ml.example.com',
      highlights: [
        'Automated ML pipeline with Kubeflow',
        'A/B testing framework for model validation',
        'Real-time model serving with auto-scaling',
        'Comprehensive model monitoring and drift detection'
      ]
    }
  ];

  const categories = ['All', 'Backend', 'Mobile', 'DevOps', 'Frontend', 'ML/AI'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend': return Code;
      case 'Mobile': return Smartphone;
      case 'DevOps': return Cloud;
      case 'Frontend': return Code;
      case 'ML/AI': return Database;
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
            A showcase of innovative solutions and technical excellence
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
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
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
                      Live Demo
                    </motion.a>
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
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-medium rounded-full">
                          {project.category}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h2>
                      </div>

                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        {project.fullDescription}
                      </p>

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