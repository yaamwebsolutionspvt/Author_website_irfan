import React from 'react';
import { motion } from 'framer-motion';

const UpcomingBookCard = ({ book, index = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-6 hover:border-gray-400 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="text-sm text-gray-600 italic mb-2">{book.subtitle}</p>
          )}
        </div>
        <div className="ml-4 flex items-center gap-3">
          <div className="w-12 h-16 bg-white border border-gray-200 rounded shadow-sm overflow-hidden flex items-center justify-center">
            <img
              src={book.image || '/images/https://res.cloudinary.com/dw1sh368y/image/upload/v1762829904/lafzonkyansoobook_dqwb92.webp.png'}
              alt={`${book.title}${book.subtitle ? ` - ${book.subtitle}` : ''} upcoming book cover by Irfan Mohiuddin`}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
          <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full">
            Coming Soon
          </span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {book.description}
      </p>
      
      <div className="mt-4 pt-4 border-t border-gray-300">
        <span className="text-sm text-gray-600 italic">
          {book.releaseDate}
        </span>
      </div>
    </motion.article>
  );
};

export default UpcomingBookCard;

