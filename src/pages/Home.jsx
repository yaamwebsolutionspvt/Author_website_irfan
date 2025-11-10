import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import SchemaAuthor from "../seo/SchemaAuthor";
import { useSiteData } from "../context/SiteDataContext";
import Hero from "../components/Hero";
import Section from "../components/Section";
import BookCard from "../components/BookCard";
import UpcomingBookCard from "../components/UpcomingBookCard";
import VideoCarousel from "../components/VideoCarousel";
import PressArticles from "../components/PressArticles";
import { getUpcomingBooks } from "../data/books";

const Home = () => {
  const { bio, books } = useSiteData();
  const upcomingBooks = getUpcomingBooks();
  const publishedBook = books.find((book) => book.id === "lafzoon-kay-aansoo");

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
      <Section id="about-preview" title="About the Author" className="bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
      {/* Press & Media Coverage Section */}
      <Section
        id="press"
        title="Press & Media Coverage"
        subtitle="Featured articles and news coverage"
        className="bg-white"
      >
        <PressArticles />
      </Section>

      {/* Videos Section */}
      <Section
        id="videos"
        title="Videos"
        subtitle="Watch our latest content"
        className="bg-gray-50"
      >
        <VideoCarousel
          videos={[
            // Add your Cloudinary video URLs here
            // You can pass videos as simple strings (URLs) or as objects with more details
            //
            // Option 1: Simple URL strings (thumbnails will be auto-generated)
            "https://res.cloudinary.com/dw1sh368y/video/upload/v1762747595/VID-20251108-WA0002_zyykjm.mp4",
            "https://res.cloudinary.com/dw1sh368y/video/upload/v1762747524/VID-20251108-WA0001_stpy5g.mp4",
            "https://res.cloudinary.com/dw1sh368y/video/upload/v1762747818/VID-20251108-WA0003_wqadxc.mp4",
            "https://res.cloudinary.com/dw1sh368y/video/upload/v1762748225/VID-20251108-WA0004_vl5eq7.mp4",

            //
            // Option 2: Full object with custom thumbnail and title
            // {
            //   id: 1,
            //   url: 'https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/video1.mp4',
            //   thumbnail: 'https://res.cloudinary.com/your-cloud-name/video/upload/so_0,w_800,f_jpg/v1234567890/video1.jpg',
            //   title: 'Video Title 1'
            // },
            // {
            //   id: 2,
            //   url: 'https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/video2.mp4',
            //   thumbnail: 'https://res.cloudinary.com/your-cloud-name/video/upload/so_0,w_800,f_jpg/v1234567890/video2.jpg',
            //   title: 'Video Title 2'
            // },
          ]}
          autoPlay={true}
          interval={8000}
        />
      </Section>

      {/* Call to Action Section */}
      <Section
        className="relative overflow-hidden"
        containerClass="container mx-auto px-4 py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,24,39,0.12),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl rounded-3xl border border-gray-200 bg-white/70 p-12 text-center shadow-xl backdrop-blur"
        >
          <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 shadow-sm">
            Let’s collaborate
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            For inquiries, speaking engagements, or collaborations, feel free to reach out and share your vision. We’ll respond as soon as possible.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gray-900 px-8 py-3 text-white transition-all hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg"
            >
              Contact Me
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
            <Link
              to="/books"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-300 px-8 py-3 text-gray-700 transition-all hover:-translate-y-0.5 hover:border-gray-400 hover:text-gray-900"
            >
              Explore Books
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default Home;
