import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../seo/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for could not be found. Return to the homepage to explore Irfan Mohiuddin's books, biography, and contact information."
        canonical="https://irfanmohiuddin.in/404"
        ogImage="https://irfanmohiuddin.in/images/hero-author-portrait.jpg"
      />

      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            className="mb-8"
          >
            <div className="text-9xl md:text-[12rem] font-serif font-bold text-gray-900 leading-none" aria-hidden="true">
              404
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-md mx-auto">
              The page you are looking for seems to have wandered off into the pages of an unwritten book.
            </p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-1 bg-gray-900 mx-auto mb-8"
          />

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-sm hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
            >
              Return Home
            </Link>
            <Link
              to="/books"
              className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-sm border-2 border-gray-900 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
            >
              Browse Books
            </Link>
          </motion.div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4">You might also be interested in:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-900"
              >
                About
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors underline decoration-gray-300 hover:decoration-gray-900"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;

