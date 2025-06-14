import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, GitBranch, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Kotlin', level: 80 },
        { name: 'Microservices', level: 85 },
      ]
    },
    {
      title: 'Frontend & Mobile',
      icon: Smartphone,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'React', level: 75 },
        { name: 'TypeScript', level: 70 },
        { name: 'UI/UX Design', level: 75 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Google Cloud', level: 75 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 70 },
      ]
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      color: 'from-indigo-500 to-blue-600',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'GitLab', level: 80 },
        { name: 'CI/CD', level: 75 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Settings,
      color: 'from-teal-500 to-green-600',
      skills: [
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Code Review', level: 90 },
        { name: 'Performance Tuning', level: 80 },
        { name: 'Team Leadership', level: 85 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'REST APIs', 'GraphQL', 'JWT', 'OAuth', 'WebSockets', 'RabbitMQ', 
              'Apache Kafka', 'Elasticsearch', 'Jenkins', 'Terraform', 'Minikube', 
              'Linux', 'Nginx', 'SSL/TLS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;