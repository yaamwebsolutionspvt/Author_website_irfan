import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../seo/SEO';
import SchemaAuthor from '../seo/SchemaAuthor';
import { useSiteData } from '../context/SiteDataContext';
import Section from '../components/Section';
import BookCard from '../components/BookCard';
import UpcomingBookCard from '../components/UpcomingBookCard';
import { getUpcomingBooks } from '../data/books';

const Books = () => {
  const { bio, books } = useSiteData();
  const upcomingBooks = getUpcomingBooks();
  const publishedBook = books.find(book => book.id === 'lafzoon-kay-aansoo');

  return (
    <>
      <SEO
        title="Books by Irfan Mohi-ud-din"
        description={`Explore the literary works of ${bio.name}, including Lafzoon Kay Aansoo and upcoming books: Safar-e-Dil, Ek Kadmon Ka Safar, and Dilon Ki Sada.`}
        keywords="Irfan Mohi-ud-din books, Lafzoon Kay Aansoo, Safar-e-Dil, Ek Kadmon Ka Safar, Dilon Ki Sada, Kashmiri literature, Islamic books, spiritual books"
        canonical="https://www.irfanmohiuddin.com/books"
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
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Books
          </h1>
          <p className="text-xl text-gray-600 font-light italic">
            Literary works that awaken hearts and guide the soul
          </p>
        </motion.div>
      </Section>

      {/* Published Book Section */}
      {publishedBook && (
        <Section
          className="bg-white"
          title="Published Book"
          subtitle="Currently Available"
        >
          <div className="max-w-2xl mx-auto">
            <BookCard book={publishedBook} index={0} />
          </div>
        </Section>
      )}

      {/* Upcoming Books Section */}
      {upcomingBooks.length > 0 && (
        <Section
          className="bg-gray-50"
          title="Upcoming Books"
          subtitle="Works in Progress"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingBooks.map((book, index) => (
              <UpcomingBookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* About the Author Section */}
      <Section
        className="bg-white"
        title="About the Author"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 leading-relaxed text-center mb-6">
              {bio.shortBio}
            </p>
            <div className="text-center">
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-sm hover:bg-gray-800 transition-colors"
              >
                Learn More About the Author
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Books;

