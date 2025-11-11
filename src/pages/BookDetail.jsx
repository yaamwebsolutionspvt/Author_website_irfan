import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import SchemaAuthor from '../seo/SchemaAuthor';
import { useSiteData } from '../context/SiteDataContext';
import Section from '../components/Section';
import { getBookById } from '../data/books';

const BookDetail = () => {
  const { id } = useParams();
  const { bio } = useSiteData();
  const book = getBookById(id);

  if (!book) {
    return <Navigate to="/books" replace />;
  }

  const pageTitle = `${book.title}${book.subtitle ? ` — ${book.subtitle}` : ''} by Irfan Mohiuddin`;
  const pageDescription = book.fullDescription || book.description;

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`${book.title}, Irfan Mohiuddin, ${book.subtitle || ''}, Kashmiri literature, ${book.isPublished ? 'published book' : 'upcoming book'}`}
        canonical={`https://www.irfanmohiuddin.com/books/${id}`}
        ogTitle={pageTitle}
        ogDescription={pageDescription}
      />
      <SchemaAuthor />

      {/* Hero Section */}
      <Section
        className="bg-linear-to-b from-gray-50 to-white"
        containerClass="container mx-auto px-4 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link
            to="/books"
            className="inline-block text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            ← Back to Books
          </Link>
          
          <div className="text-center mb-8">
            {!book.isPublished && (
              <span className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-semibold rounded-full mb-4">
                Coming Soon
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {book.title}
            </h1>
            {book.subtitle && (
              <p className="text-2xl text-gray-600 font-light italic mb-6">
                {book.subtitle}
              </p>
            )}
            <p className="text-lg text-gray-600">
              by <span className="font-semibold">{bio.name}</span>
            </p>
          </div>
        </motion.div>
      </Section>

      {/* Book Details */}
      <Section
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Book Cover */}
            <div className="mb-8 text-center">
              <div className="inline-flex w-full max-w-md items-center justify-center overflow-hidden rounded-lg border border-gray-200 shadow-sm bg-white">
                <img
                  src={book.image || '/images/https://res.cloudinary.com/dw1sh368y/image/upload/v1762829904/lafzonkyansoobook_dqwb92.webp.png'}
                  alt={`${book.title} cover`}
                  className="max-h-[32rem] w-full object-contain"
                />
              </div>
            </div>

            {/* Release Date */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Release Information
              </h2>
              <p className="text-gray-700">
                <span className="font-semibold">Release Date:</span> {book.releaseDate}
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-semibold">Status:</span> {book.isPublished ? 'Published' : 'Upcoming'}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                About This Book
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {book.fullDescription ? (
                  <p>{book.fullDescription}</p>
                ) : (
                  <p>{book.description}</p>
                )}
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                About the Author
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {bio.shortBio}
              </p>
              <Link
                to="/about"
                className="inline-block text-sm font-medium text-gray-900 hover:text-gray-700 underline"
              >
                Read Full Biography →
              </Link>
            </div>
          </motion.article>
        </div>
      </Section>

      {/* Call to Action */}
      <Section
        className="bg-gray-50"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Explore More Books
            </h2>
            <p className="text-gray-600 mb-6">
              Discover other literary works by Irfan Mohiuddin
            </p>
            <Link
              to="/books"
              className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-sm hover:bg-gray-800 transition-colors"
            >
              View All Books
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default BookDetail;

