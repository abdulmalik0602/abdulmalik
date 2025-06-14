import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Users, Code, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'Kadit Innovations',
      position: 'Full Stack Developer',
      duration: 'Jan 2023 - Present',
      location: 'Remote',
      type: 'Full-time',
      description: 'Leading full-stack development initiatives with focus on microservices architecture and cloud-native solutions.',
      responsibilities: [
        'Developed and maintained microservices-based SaaS platform serving 10,000+ users',
        'Implemented cloud infrastructure on AWS with auto-scaling capabilities',
        'Led code review processes and mentored junior developers',
        'Optimized application performance resulting in 40% faster response times',
        'Managed Git repositories and established CI/CD pipelines',
        'Collaborated with cross-functional teams in agile development environment'
      ],
      technologies: ['Java', 'Spring Boot', 'Flutter', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
      achievements: [
        'Reduced deployment time by 60% through automation',
        'Achieved 99.9% uptime for critical services',
        'Led team of 5 developers on major project deliveries',
        'Implemented security best practices reducing vulnerabilities by 80%'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      company: 'Previous Role',
      position: 'Junior Developer',
      duration: 'Jun 2022 - Dec 2022',
      location: 'On-site',
      type: 'Contract',
      description: 'Started journey in software development with focus on backend technologies and database management.',
      responsibilities: [
        'Developed REST APIs using Spring Boot framework',
        'Worked on database design and optimization',
        'Participated in code reviews and testing processes',
        'Collaborated with senior developers on complex features',
        'Maintained and updated existing codebase',
        'Learned and applied industry best practices'
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Git', 'Jenkins'],
      achievements: [
        'Successfully delivered first production feature within 2 weeks',
        'Improved database query performance by 25%',
        'Completed training on enterprise development practices',
        'Received positive feedback for quick learning and adaptation'
      ],
      color: 'from-green-500 to-teal-600'
    }
  ];

  const skills = [
    { name: 'Team Leadership', icon: Users, description: 'Led and mentored development teams' },
    { name: 'Code Review', icon: Code, description: 'Established code quality standards' },
    { name: 'Project Management', icon: Briefcase, description: 'Managed multiple concurrent projects' },
    { name: 'Performance Optimization', icon: Award, description: 'Optimized applications for scale' }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A journey of continuous growth, innovation, and technical excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-secondary-600 to-accent-600 transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-primary-600 rounded-full transform md:-translate-x-1/2 -translate-y-2" />

                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <motion.div
                    className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-3">
                          {exp.company}
                        </h4>
                      </div>
                      <div className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium`}>
                        {exp.type}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {responsibility}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <Award className="w-4 h-4 text-accent-600 dark:text-accent-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Leadership & Professional Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;