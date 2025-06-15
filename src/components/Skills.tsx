import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone, GitBranch, Settings, Palette, CreditCard, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Ecosystems',
      icon: Code,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Flutter', level: 90, logo: '🦋' },
        { name: 'Vue.js', level: 75, logo: '💚' },
        { name: 'Vuetify', level: 70, logo: '🎨' },
        { name: 'React', level: 80, logo: '⚛️' },
        { name: 'Next.js', level: 75, logo: '▲' },
        { name: 'Vite', level: 85, logo: '⚡' },
        { name: 'Ionic', level: 70, logo: '📱' },
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Android', level: 85, logo: '🤖' },
        { name: 'iOS', level: 75, logo: '🍎' },
        { name: 'Flutter', level: 90, logo: '🦋' },
        { name: 'Ionic', level: 70, logo: '📱' },
      ]
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Kotlin', level: 85, logo: '🟣' },
        { name: 'Spring Boot', level: 90, logo: '🍃' },
        { name: 'Python', level: 80, logo: '🐍' },
        { name: 'FastAPI', level: 75, logo: '⚡' },
        { name: 'Flask', level: 70, logo: '🌶️' },
        { name: 'GraphQL', level: 70, logo: '📊' },
        { name: 'REST', level: 90, logo: '🔗' },
      ]
    },
    {
      title: 'Data Layer',
      icon: Database,
      color: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'PostgreSQL', level: 85, logo: '🐘' },
        { name: 'MongoDB', level: 80, logo: '🍃' },
        { name: 'Neo4j', level: 65, logo: '🔗' },
        { name: 'Firestore', level: 75, logo: '🔥' },
        { name: 'Tableau', level: 70, logo: '📊' },
        { name: 'Kedro', level: 60, logo: '🔧' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-indigo-500 to-blue-600',
      skills: [
        { name: 'AWS', level: 85, logo: '☁️' },
        { name: 'GCP', level: 80, logo: '🌐' },
        { name: 'Terraform', level: 75, logo: '🏗️' },
        { name: 'Kubernetes', level: 80, logo: '⚓' },
        { name: 'ArgoCD', level: 70, logo: '🔄' },
        { name: 'Docker', level: 85, logo: '🐳' },
        { name: 'APISIX', level: 65, logo: '🚪' },
        { name: 'Temporal', level: 60, logo: '⏰' },
      ]
    },
    {
      title: 'Linux Environments',
      icon: Settings,
      color: 'from-teal-500 to-green-600',
      skills: [
        { name: 'Red Hat', level: 75, logo: '🎩' },
        { name: 'Kali Linux', level: 70, logo: '🐉' },
        { name: 'Parrot OS', level: 65, logo: '🦜' },
        { name: 'Ubuntu', level: 85, logo: '🟠' },
      ]
    },
    {
      title: 'Embedded & IoT',
      icon: Wrench,
      color: 'from-yellow-500 to-orange-600',
      skills: [
        { name: 'Arduino', level: 80, logo: '🔌' },
        { name: 'Embedded C', level: 75, logo: '⚙️' },
      ]
    },
    {
      title: 'Payment Solutions',
      icon: CreditCard,
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Razorpay', level: 80, logo: '💳' },
        { name: 'Fast2SMS', level: 75, logo: '📱' },
      ]
    },
    {
      title: 'Design Tools',
      icon: Palette,
      color: 'from-violet-500 to-purple-600',
      skills: [
        { name: 'Figma', level: 80, logo: '🎨' },
        { name: 'Photoshop', level: 70, logo: '🖼️' },
        { name: 'Canva', level: 85, logo: '✨' },
      ]
    },
    {
      title: 'Modern Tools',
      icon: GitBranch,
      color: 'from-gray-500 to-slate-600',
      skills: [
        { name: 'Bit', level: 70, logo: '🧩' },
        { name: 'Hasura', level: 75, logo: '⚡' },
        { name: 'Git', level: 95, logo: '📝' },
        { name: 'GitHub', level: 90, logo: '🐙' },
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
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning the entire technology stack - from frontend to cloud infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.logo}</span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-xs">
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

        {/* Tech Stack Overview */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technology Ecosystem
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { category: 'Frontend', count: skillCategories[0].skills.length, icon: '🎨', color: 'from-blue-500 to-purple-600' },
              { category: 'Backend', count: skillCategories[2].skills.length, icon: '⚙️', color: 'from-green-500 to-teal-600' },
              { category: 'Cloud', count: skillCategories[4].skills.length, icon: '☁️', color: 'from-orange-500 to-red-600' },
              { category: 'Tools', count: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0), icon: '🛠️', color: 'from-purple-500 to-pink-600' }
            ].map((stat, index) => (
              <motion.div
                key={stat.category}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </motion.div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.count}+
                </h4>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Microservices Architecture', 'Event-Driven Design', 'API Gateway', 'Service Mesh',
              'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Observability', 'Security Best Practices',
              'Agile Methodologies', 'Code Review', 'Performance Optimization', 'Team Leadership'
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