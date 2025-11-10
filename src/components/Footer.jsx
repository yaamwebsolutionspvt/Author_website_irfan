import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';
import { useSiteData } from '../context/SiteDataContext';

const Footer = () => {
  const { bio } = useSiteData();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, url: bio.socialMedia?.facebook, color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, url: bio.socialMedia?.twitter, color: 'hover:text-sky-500' },
    { name: 'Instagram', icon: FaInstagram, url: bio.socialMedia?.instagram, color: 'hover:text-pink-600' },
    // { name: 'LinkedIn', icon: FaLinkedin, url: bio.socialMedia?.linkedin, color: 'hover:text-blue-700' },
    // { name: 'YouTube', icon: FaYoutube, url: bio.socialMedia?.youtube, color: 'hover:text-red-600' },
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/books', label: 'Books' },
    { path: '/contact', label: 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="relative mt-auto bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-white!">
              {bio.name}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {bio.websiteHeading}
            </p>
            
            {/* Social Media Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white ${social.color} transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl md:text-2xl font-serif font-bold mb-4 text-white!">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mr-3 group-hover:bg-white transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl md:text-2xl font-serif font-bold mb-4 text-white!">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${bio.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-start group"
                >
                  <FaEnvelope className="w-4 h-4 mt-1 mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">{bio.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${bio.phone[0]}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <FaPhone className="w-4 h-4 mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                  {bio.phone[0]}
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 mr-3 shrink-0 text-gray-400" />
                <span className="text-gray-300 leading-relaxed">{bio.location}</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {bio.name}. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 text-gray-500 text-xs">
            <span className="flex items-center gap-1.5">
              Crafted with <FaHeart className="text-red-500 w-3 h-3" />
            </span>
            <span className="hidden md:inline">•</span>
            <span>
             by{" "}
              <a
                href="https://yaamwebsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 underline"
              >
                yaamwebsolutions.com
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

