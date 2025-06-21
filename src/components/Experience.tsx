import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Users, Code, Award } from 'lucide-react';
import kadit from '../assets/kadit.png';
import shiash from '../assets/shiash.png';
import zetspire from '../assets/zetspire.png';
import whizifi from '../assets/whizifi.png';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'KADIT Innovations',
      position: 'Full-stack Developer',
      duration: 'Sep 2024 - Present',
      period: '10 mos',
      location: 'Kadayanallur, Tamil Nadu, India',
      type: 'Full-time',
      logo: kadit,
      description: 'Leading full-stack development initiatives with focus on microservices architecture and cloud-native solutions.',
      responsibilities: [
        'Developed and maintained microservices-based SaaS platform serving 10,000+ users',
        'Implemented cloud infrastructure on AWS with auto-scaling capabilities',
        'Led code review processes and mentored junior developers',
        'Optimized application performance resulting in 40% faster response times',
        'Managed Git repositories and established CI/CD pipelines',
        'Collaborated with cross-functional teams in agile development environment'
      ],
      technologies: ['Nginx', 'Computer Science', 'Java', 'Spring Boot', 'Flutter', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
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
      company: 'KADIT Innovations',
      position: 'Flutter Developer',
      duration: 'Dec 2023 - Dec 2024',
      period: '1 yr 1 mo',
      location: 'Kadayanallur, Tamil Nadu, India',
      type: 'Full-time',
      logo:kadit,
      description: 'Specialized in cross-platform mobile application development using Flutter framework.',
      responsibilities: [
        'Developed cross-platform mobile applications using Flutter',
        'Implemented responsive UI/UX designs for mobile platforms',
        'Integrated REST APIs and real-time data synchronization',
        'Optimized app performance for both iOS and Android platforms',
        'Collaborated with design team for pixel-perfect implementations',
        'Maintained code quality through testing and code reviews'
      ],
      technologies: ['Android', 'Computer Science', 'Flutter', 'Dart', 'Firebase', 'REST APIs', 'SQLite'],
      achievements: [
        'Delivered 5+ mobile applications with 4.8+ app store ratings',
        'Reduced app loading time by 50% through optimization',
        'Implemented offline-first architecture for better UX',
        'Achieved 95% code reusability across platforms'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      company: 'KADIT Innovations',
      position: 'Machine Learning / QA Intern',
      duration: 'Jul 2023 - Sep 2023',
      period: '3 mos',
      location: 'Kadayanallur, Tamil Nadu, India',
      type: 'Internship',
      logo: kadit,
      description: 'Gained hands-on experience in machine learning and quality assurance processes.',
      responsibilities: [
        'Developed machine learning models for data analysis',
        'Performed quality assurance testing for software applications',
        'Analyzed data patterns and created predictive models',
        'Documented testing procedures and bug reports',
        'Collaborated with development team on feature testing',
        'Learned industry best practices in ML and QA'
      ],
      technologies: ['Computer Science', 'Career Development', 'Python', 'Machine Learning', 'Testing'],
      achievements: [
        'Built 3 ML models with 85%+ accuracy',
        'Identified and resolved 50+ software bugs',
        'Improved testing efficiency by 30%',
        'Completed comprehensive ML training program'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      company: 'Shiash Info Solutions Private Limited',
      position: 'Full-stack Developer Intern',
      duration: 'Dec 2022 - Mar 2023',
      period: '4 mos',
      location: 'Remote',
      type: 'Internship',
      logo: shiash,
      description: 'Started journey in full-stack development with focus on web technologies and database management.',
      responsibilities: [
        'Developed web applications using modern frameworks',
        'Worked on both frontend and backend development',
        'Implemented database design and optimization',
        'Participated in code reviews and testing processes',
        'Collaborated with remote team members effectively',
        'Learned agile development methodologies'
      ],
      technologies: ['Computer Science', 'Full-Stack Development', 'JavaScript', 'Node.js', 'React'],
      achievements: [
        'Successfully delivered first full-stack project',
        'Improved database query performance by 25%',
        'Completed training on modern web technologies',
        'Received positive feedback for quick learning'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      company: 'Zetspire Technologies',
      position: 'IoT Researcher',
      duration: 'Nov 2022 - Dec 2022',
      period: '2 mos',
      location: 'Madurai, Tamil Nadu, India',
      type: 'Internship',
      logo: zetspire, // Using placeholder as no specific logo provided
      description: 'Explored Internet of Things technologies and their practical applications.',
      responsibilities: [
        'Researched IoT technologies and applications',
        'Developed prototypes using IoT sensors and devices',
        'Analyzed data from connected devices',
        'Documented research findings and recommendations',
        'Collaborated with research team on IoT projects',
        'Presented findings to technical stakeholders'
      ],
      technologies: ['Career Development', 'IoT', 'Arduino', 'Sensors', 'Data Analysis'],
      achievements: [
        'Completed 2 IoT research projects',
        'Developed working IoT prototypes',
        'Published research documentation',
        'Gained expertise in embedded systems'
      ],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 6,
      company: 'WhiziFi Robotics Lab',
      position: 'Robotics Engineer Trainee',
      duration: 'Sep 2021 - Aug 2022',
      period: '1 yr',
      location: 'Hybrid',
      type: 'Trainee',
      logo: whizifi,
      description: 'Foundation training in robotics engineering and automation technologies.',
      responsibilities: [
        'Learned robotics fundamentals and programming',
        'Worked on robotic system design and development',
        'Programmed robotic controllers and sensors',
        'Participated in robotics competitions and projects',
        'Collaborated with engineering team on automation solutions',
        'Developed problem-solving skills in robotics'
      ],
      technologies: ['Career Development', 'Robotics', 'Programming', 'Automation', 'Engineering'],
      achievements: [
        'Completed comprehensive robotics training',
        'Built 3 functional robotic systems',
        'Won 2nd place in robotics competition',
        'Developed strong foundation in automation'
      ],
      color: 'from-indigo-500 to-purple-600'
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
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A progressive career path from trainee to full-stack developer, marked by continuous growth and technical excellence
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid gap-8 lg:gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Left Column - Company Logo and Meta */}
                <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
                  <motion.div
                    className="w-20 h-20 mb-4 rounded-2xl overflow-hidden shadow-lg bg-white p-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>

                  <div className="text-center lg:text-left space-y-2">
                    <div className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium inline-block`}>
                      {exp.type}
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:w-3/4">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Responsibilities
                    </h5>
                    <div className="grid gap-2">
                      {exp.responsibilities.slice(0, 4).map((responsibility, idx) => (
                        <motion.div
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
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies and Achievements in Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Technologies */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.slice(0, 6).map((tech) => (
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
                      <div className="space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-2"
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
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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