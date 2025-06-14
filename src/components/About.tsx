import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '1.5+', icon: Briefcase },
    { label: 'Projects Completed', value: '15+', icon: Award },
    { label: 'Technologies Mastered', value: '12+', icon: GraduationCap },
    { label: 'Happy Clients', value: '100%', icon: Heart },
  ];

  const highlights = [
    'Expert in Java, Kotlin, and Spring Boot development',
    'Proficient in Flutter for cross-platform mobile apps',
    'Cloud architecture specialist with AWS and GCP experience',
    'Microservices and containerization with Docker & Kubernetes',
    'Team leadership and agile development methodologies',
    'Code optimization and performance tuning specialist'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with a proven track record of delivering scalable solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey in Tech
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With over 1.5 years of intensive full-stack development experience, I've evolved from 
                a curious developer to a confident team leader. My journey at Kadit Innovations has 
                been marked by continuous learning, innovative problem-solving, and a passion for 
                creating robust, scalable solutions.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in building microservices-based SaaS platforms deployed on cloud 
                infrastructure, with a strong focus on code optimization and performance. My role 
                as Git and Cloud Admin has given me deep insights into DevOps practices and 
                team collaboration.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Based in Kadayanallur, Tenkasi, Tamil Nadu, India, I bring a unique perspective 
                to global technology challenges while staying rooted in my local community. 
                I believe in continuous learning and sharing knowledge with fellow developers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-3xl transform rotate-6" />
            
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h4
                      className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.div
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <blockquote className="text-center">
                  <p className="text-lg italic text-gray-600 dark:text-gray-400 mb-4">
                    "Excellence is not a skill, it's an attitude. I bring this mindset to every project I touch."
                  </p>
                  <cite className="text-primary-600 dark:text-primary-400 font-semibold">
                    — Abdul Malik P A
                  </cite>
                </blockquote>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;