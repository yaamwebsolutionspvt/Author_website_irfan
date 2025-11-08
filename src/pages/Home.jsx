import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../seo/SEO';
import SchemaAuthor from '../seo/SchemaAuthor';
import { useSiteData } from '../context/SiteDataContext';
import Hero from '../components/Hero';
import Section from '../components/Section';
import BookCard from '../components/BookCard';
import UpcomingBookCard from '../components/UpcomingBookCard';
import { getUpcomingBooks } from '../data/books';

const Home = () => {
  const { bio, books } = useSiteData();
  const upcomingBooks = getUpcomingBooks();
  const publishedBook = books.find(book => book.id === 'lafzoon-kay-aansoo');

  return (
    <>
      <SEO
        title={bio.tagline}
        description={bio.shortBio}
        keywords="Irfan Mohi-ud-din, Kashmiri author, Imam, Khateeb, Teacher, Motivational Speaker, Lafzoon Kay Aansoo, Kashmiri literature, Islamic scholar, Shopian, young author"
        canonical="https://www.irfanmohiuddin.com/"
        ogImage="https://www.irfanmohiuddin.com/images/hero-author-portrait.jpg"
      />
      <SchemaAuthor />
      
      <Hero />

      {/* About Preview Section */}
      <Section
        id="about-preview"
        title="About the Author"
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg mx-auto"
          >
            <p className="text-gray-700 leading-relaxed text-center">
              {bio.shortBio}
            </p>
            <div className="mt-8 text-center">
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-sm hover:bg-gray-800 transition-colors"
              >
                Read Full Biography
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Published Book Section */}
      {publishedBook && (
        <Section
          id="books"
          title="Published Book"
          subtitle="Explore the latest literary work"
          className="bg-gray-50"
        >
          <div className="max-w-2xl mx-auto">
            <BookCard book={publishedBook} index={0} />
          </div>
        </Section>
      )}

      {/* Upcoming Books Section */}
      {upcomingBooks.length > 0 && (
        <Section
          id="upcoming-books"
          title="Upcoming Books"
          subtitle="Future works in progress"
          className="bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingBooks.map((book, index) => (
              <UpcomingBookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* Call to Action Section */}
      <Section
        className="bg-gray-500 text-white"
        containerClass="container mx-auto px-4 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            For inquiries, speaking engagements, or collaborations, feel free to reach out.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-sm hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;

