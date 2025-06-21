import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Master of Business Administration',
      institution: 'S.Veerasamy Chettiar College of Engineering and Technology',
      duration: '2024 - Present',
      status: 'Pursuing',
      location: 'Tamil Nadu, India',
      logo: '/svc.png',
      description: 'Pursuing MBA to complement technical expertise with business acumen and leadership skills.',
      highlights: [
        'Strategic Management and Leadership',
        'Business Analytics and Decision Making',
        'Entrepreneurship and Innovation',
        'Project Management and Operations'
      ],
      color: 'from-purple-500 to-violet-600',
      icon: GraduationCap
    },
    {
      id: 2,
      degree: 'Bachelor of Engineering - Computer Science and Engineering',
      institution: 'Sethu Institute of Technology',
      duration: 'Jul 2020 - Mar 2024',
      status: 'Completed',
      grade: '8.22 CGPA',
      location: 'Tamil Nadu, India',
      logo: '/sit.png',
      description: 'Comprehensive computer science education with strong foundation in programming, algorithms, and software engineering.',
      highlights: [
        'Data Structures and Algorithms',
        'Software Engineering and Design Patterns',
        'Database Management Systems',
        'Computer Networks and Security',
        'Machine Learning and AI',
        'Web and Mobile Application Development'
      ],
      achievements: [
        'Graduated with First Class Honors (8.22 CGPA)',
        'Active participant in multiple student committees',
        'Led various technical and non-technical initiatives',
        'Completed multiple internships during studies'
      ],
      color: 'from-blue-500 to-indigo-600',
      icon: BookOpen
    }
  ];

  const academicStats = [
    { label: 'CGPA Achieved', value: '8.22', icon: Star },
    { label: 'Years of Study', value: '4+', icon: Calendar },
    { label: 'Leadership Roles', value: '7+', icon: Award },
    { label: 'Degrees Pursued', value: '2', icon: GraduationCap }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Educational Background
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </motion.div>

        {/* Academic Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {academicStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Cards */}
        <div className="grid gap-8 lg:gap-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Left Column - Institution Logo and Meta */}
                <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
                  <motion.div
                    className="w-24 h-24 mb-4 rounded-2xl overflow-hidden shadow-lg bg-white p-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  
                  <div className="text-center lg:text-left space-y-2">
                    <div className={`px-4 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-medium inline-block`}>
                      {edu.status}
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs">{edu.location}</span>
                      </div>
                      {edu.grade && (
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                          <Award className="w-4 h-4 text-yellow-500" />
                          <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm">
                            {edu.grade}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:w-3/4">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Highlights and Achievements in Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Highlights */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Areas of Study
                      </h5>
                      <div className="space-y-2">
                        {edu.highlights.slice(0, 4).map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements (if available) */}
                    {edu.achievements && (
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Academic Achievements
                        </h5>
                        <div className="space-y-2">
                          {edu.achievements.slice(0, 4).map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-2"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                              <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Lifelong Learning Philosophy
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Education is not just about degrees—it's about continuous growth, curiosity, and the 
              pursuit of knowledge. I believe in combining theoretical foundations with practical 
              experience to create meaningful impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Critical Thinking', 'Problem Solving', 'Innovation', 'Leadership', 'Collaboration'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md border border-gray-200 dark:border-gray-700 text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;