import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Shield, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: 'Deloitte Australia - Data Analytics Job Simulation',
      issuer: 'Forage',
      issueDate: 'Feb 2025',
      credentialId: 'NoPPvNtQsRTPZLLJJ',
      status: 'Active',
      category: 'Data Analytics',
      color: 'from-blue-500 to-indigo-600',
      skills: ['Data Analytics', 'Business Intelligence', 'Problem Solving']
    },
    {
      id: 2,
      title: 'Salesforce Certified AI Associate',
      issuer: 'Salesforce',
      issueDate: 'Jan 2025',
      credentialId: 'Cert5587941_AIAssociate_20250104',
      status: 'Active',
      category: 'AI/ML',
      color: 'from-cyan-500 to-blue-600',
      skills: ['Artificial Intelligence', 'Salesforce', 'AI Ethics']
    },
    {
      id: 3,
      title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
      issuer: 'Microsoft',
      issueDate: 'Nov 2024',
      status: 'Active',
      category: 'AI/ML',
      color: 'from-green-500 to-emerald-600',
      skills: ['Generative AI', 'Computer Ethics', 'Artificial Intelligence']
    },
    {
      id: 4,
      title: 'Introduction to CIP',
      issuer: 'OPSWAT Academy',
      issueDate: 'Nov 2024',
      expiryDate: 'Oct 2025',
      credentialId: '3HFM0HIclg',
      status: 'Active',
      category: 'Cybersecurity',
      color: 'from-red-500 to-pink-600',
      skills: ['Cybersecurity', 'Critical Infrastructure Protection']
    },
    {
      id: 5,
      title: 'Linux Foundation Certified System Administrator (LFCS)',
      issuer: 'The Linux Foundation',
      issueDate: 'Nov 2024',
      status: 'Active',
      category: 'System Administration',
      color: 'from-yellow-500 to-orange-600',
      skills: ['Linux Administration', 'System Management', 'DevOps']
    },
    {
      id: 6,
      title: 'Project Management Foundations: Requirements',
      issuer: 'LinkedIn',
      issueDate: 'Aug 2024',
      status: 'Active',
      category: 'Project Management',
      color: 'from-purple-500 to-violet-600',
      skills: ['Requirements Management', 'Project Management']
    },
    {
      id: 7,
      title: 'Academy Accreditation - Generative AI Fundamentals',
      issuer: 'Databricks',
      issueDate: 'Mar 2024',
      expiryDate: 'Mar 2026',
      credentialId: '99454881',
      status: 'Active',
      category: 'AI/ML',
      color: 'from-teal-500 to-cyan-600',
      skills: ['Generative AI', 'Machine Learning', 'Data Science']
    },
    {
      id: 8,
      title: 'The Joy of Computing Using Python',
      issuer: 'NPTEL',
      issueDate: 'Apr 2023',
      status: 'Active',
      category: 'Programming',
      color: 'from-indigo-500 to-purple-600',
      skills: ['Python Programming', 'Computer Science', 'Problem Solving']
    },
    {
      id: 9,
      title: 'Google Digital Marketing and E-Commerce',
      issuer: 'Google',
      issueDate: 'Jan 2023',
      status: 'Active',
      category: 'Digital Marketing',
      color: 'from-pink-500 to-rose-600',
      skills: ['Digital Marketing', 'E-Commerce', 'Analytics']
    }
  ];

  const categories = ['All', 'AI/ML', 'Data Analytics', 'Cybersecurity', 'System Administration', 'Project Management', 'Programming', 'Digital Marketing'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                    {cert.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Issued {cert.issueDate}</span>
                  {cert.expiryDate && (
                    <span className="text-orange-600 dark:text-orange-400">
                      • Expires {cert.expiryDate}
                    </span>
                  )}
                </div>
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-xs font-medium rounded-full`}>
                  {cert.category}
                </span>
              </div>

              {/* Skills */}
              {cert.skills && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button
              <motion.button
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary-600 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Shield className="w-4 h-4" />
                View Credential
                <ExternalLink className="w-3 h-3" />
              </motion.button> */}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { label: 'Total Certifications', value: certifications.length, color: 'from-blue-500 to-purple-600' },
            { label: 'Active Credentials', value: certifications.filter(c => c.status === 'Active').length, color: 'from-green-500 to-teal-600' },
            { label: 'AI/ML Focused', value: certifications.filter(c => c.category === 'AI/ML').length, color: 'from-purple-500 to-pink-600' },
            { label: 'Recent (2024-25)', value: certifications.filter(c => c.issueDate.includes('2024') || c.issueDate.includes('2025')).length, color: 'from-orange-500 to-red-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
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
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </motion.div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;