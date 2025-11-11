import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BookCard = ({ book, index = 0 }) => {
  const isLafzoonKayAansoo = book.id === 'lafzoon-kay-aansoo';
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
    >
      {isLafzoonKayAansoo ? (
        // Two-column layout for Lafzoon Kay Aansoo
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 bg-white border-b md:border-b-0 md:border-r border-gray-200">
            <div className="w-full h-72 md:h-72 bg-gray-50 overflow-hidden">
              <img
                src={book.image || '/images/https://res.cloudinary.com/dw1sh368y/image/upload/v1762829904/lafzonkyansoobook_dqwb92.webp.png'}
                alt={`${book.title}${book.subtitle ? ` - ${book.subtitle}` : ''} book cover by Irfan Mohiuddin`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 p-4 flex flex-col justify-between">
            <div>
              <div className="mb-2">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="text-sm text-gray-600 italic mb-1">{book.subtitle}</p>
                )}
              </div>
              
              <p className="text-gray-700 mb-2 leading-relaxed text-sm">
                {book.description}
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                {book.releaseDate}
              </span>
              <Link
                to={`/books/${book.id}`}
                className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Original vertical layout for other books
        <>
          <div className="w-full bg-white border-b border-gray-200">
            <div className="w-full h-64 bg-gray-50 overflow-hidden">
              <img
                src={book.image || '/images/https://res.cloudinary.com/dw1sh368y/image/upload/v1762829904/lafzonkyansoobook_dqwb92.webp.png'}
                alt={`${book.title}${book.subtitle ? ` - ${book.subtitle}` : ''} book cover by Irfan Mohiuddin`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                {book.title}
              </h3>
              {book.subtitle && (
                <p className="text-sm text-gray-600 italic mb-2">{book.subtitle}</p>
              )}
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
              {book.description}
            </p>
            
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-600">
                {book.releaseDate}
              </span>
              <Link
                to={`/books/${book.id}`}
                className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </>
      )}
    </motion.article>
  );
};

export default BookCard;

