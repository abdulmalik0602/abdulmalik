import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Calendar, MapPin, Star } from 'lucide-react';

const Volunteering: React.FC = () => {
  const volunteerExperiences = [
    {
      id: 1,
      title: 'President',
      organization: 'SIT-ECO Club',
      duration: 'Jan 2021 - Mar 2024',
      period: '3 yrs 3 mos',
      category: 'Social Services',
      description: 'Led environmental initiatives and sustainability programs, organizing campus-wide eco-friendly events and awareness campaigns.',
      achievements: [
        'Organized 15+ environmental awareness programs',
        'Led team of 50+ student volunteers',
        'Implemented campus-wide waste reduction initiatives',
        'Coordinated tree plantation drives reaching 1000+ saplings'
      ],
      color: 'from-green-500 to-emerald-600',
      icon: Heart
    },
    {
      id: 2,
      title: 'Student Ambassador',
      organization: 'Intel Corporation',
      duration: 'Jan 2021 - Feb 2022',
      period: '1 yr 2 mos',
      category: 'Science and Technology',
      description: 'Represented Intel on campus, promoting technology education and organizing tech workshops for fellow students.',
      achievements: [
        'Conducted 10+ technical workshops',
        'Mentored 100+ students in technology careers',
        'Organized Intel technology showcase events',
        'Built bridge between industry and academia'
      ],
      color: 'from-blue-500 to-indigo-600',
      icon: Star
    },
    {
      id: 3,
      title: 'Training and Placement Cell Student Co-Ordinator',
      organization: 'Sethu Institute of Technology',
      duration: 'Jan 2022 - Jan 2024',
      period: '2 yrs 1 mo',
      category: 'Education',
      description: 'Coordinated placement activities, assisted students with career guidance, and facilitated industry-academia interactions.',
      achievements: [
        'Assisted 200+ students with placement preparation',
        'Coordinated 25+ company recruitment drives',
        'Organized career guidance sessions',
        'Improved placement rate by 30%'
      ],
      color: 'from-purple-500 to-violet-600',
      icon: Award
    },
    {
      id: 4,
      title: 'Student Welfare Committee',
      organization: 'Sethu Institute of Technology',
      duration: 'Jan 2021 - Mar 2024',
      period: '3 yrs 3 mos',
      category: 'Science and Technology',
      description: 'Worked on student welfare initiatives, addressing academic and personal concerns of fellow students.',
      achievements: [
        'Resolved 100+ student grievances',
        'Implemented student feedback systems',
        'Organized mental health awareness programs',
        'Enhanced campus life quality'
      ],
      color: 'from-teal-500 to-cyan-600',
      icon: Users
    },
    {
      id: 5,
      title: 'Program Assessment Committee',
      organization: 'Sethu Institute of Technology',
      duration: 'Jan 2021 - Mar 2024',
      period: '3 yrs 3 mos',
      category: 'Education',
      description: 'Participated in curriculum evaluation and program assessment activities to improve educational quality.',
      achievements: [
        'Evaluated 10+ academic programs',
        'Provided student perspective on curriculum',
        'Contributed to program improvement initiatives',
        'Enhanced learning outcomes assessment'
      ],
      color: 'from-orange-500 to-red-600',
      icon: Award
    },
    {
      id: 6,
      title: 'Student Representative',
      organization: 'Sethu Institute of Technology',
      duration: 'Sep 2020 - Mar 2024',
      period: '3 yrs 7 mos',
      category: 'Education',
      description: 'Represented student body in academic committees and administrative meetings, voicing student concerns and suggestions.',
      achievements: [
        'Represented 500+ students in committees',
        'Facilitated student-administration communication',
        'Advocated for student rights and facilities',
        'Contributed to policy improvements'
      ],
      color: 'from-pink-500 to-rose-600',
      icon: Users
    },
    {
      id: 7,
      title: 'Hostel Student Committee Head',
      organization: 'Sethu Institute of Technology',
      duration: 'Jan 2021 - Apr 2023',
      period: '2 yrs 4 mos',
      category: 'Education',
      description: 'Led hostel management committee, ensuring proper facilities and resolving accommodation-related issues for students.',
      achievements: [
        'Managed accommodation for 300+ students',
        'Improved hostel facilities and services',
        'Organized cultural and recreational activities',
        'Maintained peaceful hostel environment'
      ],
      color: 'from-indigo-500 to-purple-600',
      icon: Heart
    }
  ];

  const impactStats = [
    { label: 'Years of Service', value: '4+', icon: Calendar },
    { label: 'Students Impacted', value: '1000+', icon: Users },
    { label: 'Leadership Roles', value: '7', icon: Award },
    { label: 'Programs Organized', value: '50+', icon: Star }
  ];

  return (
    <section id="volunteering" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Community Leadership
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Dedicated to making a positive impact through volunteer leadership and community service
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
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

        {/* Volunteer Experiences */}
        <div className="space-y-8">
          {volunteerExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Icon and Meta */}
                <div className="lg:w-1/4">
                  <motion.div
                    className={`w-16 h-16 mb-4 bg-gradient-to-r ${experience.color} rounded-2xl flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <experience.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {experience.period}
                    </div>
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${experience.color} text-white text-xs font-medium rounded-full`}>
                      {experience.category}
                    </span>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:w-3/4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-4">
                    {experience.organization}
                  </h4>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      {experience.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Passionate About Making a Difference
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Through leadership roles and community service, I've learned the value of collaboration, 
              empathy, and social responsibility. These experiences have shaped my approach to both 
              technology and teamwork.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteering;