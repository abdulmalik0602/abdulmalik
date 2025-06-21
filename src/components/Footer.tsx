import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/abdulmalik0602', 
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/p-a-abdul-malik/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Coffee, 
      href: 'https://buymeacoffee.com/abdulmalik0602', 
      label: 'Buy me a Coffee',
      color: 'hover:text-yellow-400'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo and Brand */}
            <motion.button
              onClick={scrollToHome}
              className="flex items-center gap-3 mb-6 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-12 h-12 rounded-xl overflow-hidden"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/logo.png"
                  alt="Abdul Malik P A Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-secondary-300 transition-all">
                  Abdul Malik P A
                </h3>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>
            </motion.button>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions and 
              leading teams to deliver exceptional results. Specializing in cloud-native 
              applications and microservices architecture.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>fueled by</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left py-1"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Let's Connect</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                Ready to discuss your next project?
              </p>
              <motion.a
                href="mailto:paabdulmalikwork@gmail.com"
                className="block text-primary-400 hover:text-primary-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                paabdulmalikwork@gmail.com
              </motion.a>
              <motion.a
                href="tel:+919087035132"
                className="block text-secondary-400 hover:text-secondary-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                +91 9087035132
              </motion.a>
              <p className="text-gray-400">Kadayanallur, Tenkasi, Tamil Nadu, India</p>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors ${social.color}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Abdul Malik P A Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-400 text-sm">
                © {currentYear} Abdul Malik P A. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <motion.button
                className="hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.button>
              <motion.button
                className="hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600" />
      </div>
    </footer>
  );
};

export default Footer;