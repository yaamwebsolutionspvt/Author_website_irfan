import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

const Hero = () => {
  const { bio } = useSiteData();

  return (
    <section className="relative bg-linear-to-b from-gray-50 to-white min-h-[calc(100vh-80px)] flex items-center py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
              {bio.tagline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light italic mb-6">
              {bio.websiteHeading}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#books"
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors"
              >
                Explore Books
              </a>
              <Link
                to="/about"
                className="px-6 py-2.5 bg-white text-gray-900 border-2 border-gray-900 text-sm font-medium rounded-sm hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Author Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl max-w-lg mx-auto lg:max-w-none">
              <img
                src="https://res.cloudinary.com/dw1sh368y/image/upload/v1762746310/hero-author-portrait_gtdi2i.webp"
                alt="Irfan Mohi-ud-din, Kashmiri author, imam, khateeb, teacher, and motivational speaker"
                className="w-full h-auto object-cover max-h-[60vh] lg:max-h-[70vh]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

