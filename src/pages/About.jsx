import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../seo/SEO';
import SchemaAuthor from '../seo/SchemaAuthor';
import { useSiteData } from '../context/SiteDataContext';
import PressArticles from '../components/PressArticles';
import Section from '../components/Section';

const About = () => {
  const { bio } = useSiteData();

  return (
    <>
      <SEO
        title="About Irfan Mohiuddin"
        description={`Learn about ${bio.name}, a Kashmiri author, imam, khateeb, teacher, and motivational speaker from Shopian. Discover his journey, education, and literary works.`}
        keywords="Irfan Mohiuddin biography, Kashmiri author, Imam Shopian, Khateeb, Islamic scholar, Bahaadati Ustaad, Maulvi Fazil, Islamic Studies, motivational speaker Kashmir"
        canonical="https://www.irfanmohiuddin.com/about"
        ogImage="https://www.irfanmohiuddin.com/images/about-author-library.jpg"
      />
      <SchemaAuthor />

      {/* Hero Section */}
      <section className="bg-linear-to-b from-gray-50 to-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4"
            >
              About Irfan Mohiuddin
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 font-light italic"
            >
              {bio.websiteHeading}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Author Portrait & Bio Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Author Image */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:sticky lg:top-24"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dw1sh368y/image/upload/v1762746305/about-author-library_lz3f0n.webp"
                    alt="Irfan Mohiuddin in his study, surrounded by books - author, imam, and teacher"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Biography Text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div className="text-gray-700 leading-relaxed space-y-5 text-base md:text-lg">
                  {bio.fullBio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
       {/* Press & Media Coverage Section */}
       <Section
        id="press"
        title="Press & Media Coverage"
        titleTag="h2"
        subtitle="Featured articles and news coverage"
        className="bg-white"
      >
        <PressArticles />
      </Section>

      {/* Key Information Cards */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-12">
              Key Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900">
                    Education
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-gray-900 font-semibold mr-3 mt-1">•</span>
                    <span className="flex-1">Maulvi Fazil (2018)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-900 font-semibold mr-3 mt-1">•</span>
                    <span className="flex-1">Post Graduation in Islamic Studies (2020)</span>
                  </li>
                </ul>
              </motion.div>

              {/* Roles Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900">
                    Roles & Expertise
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {bio.roles.map((role, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-900 font-semibold mr-3 mt-1">•</span>
                      <span className="flex-1">{role}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900">
                    Location
                  </h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">{bio.location}</p>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900">
                    Contact
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <a href={`mailto:${bio.email}`} className="hover:text-gray-900 hover:underline transition-colors flex items-center">
                      <span className="mr-2">📧</span>
                      {bio.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${bio.phone[0]}`} className="hover:text-gray-900 transition-colors flex items-center">
                      <span className="mr-2">📱</span>
                      {bio.phone[0]}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${bio.phone[1]}`} className="hover:text-gray-900 transition-colors flex items-center">
                      <span className="mr-2">📱</span>
                      {bio.phone[1]}
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">
                Mission & Vision
              </h2>
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6 border-l-4 border-gray-900 pl-6">
                "Apart from writing, he is also a motivational speaker and community leader, addressing social issues such as depression, addiction, and moral decline among youth, guiding them back to righteousness through education and faith."
              </blockquote>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Through his words, teachings, and guidance, Irfan Mohiuddin continues to inspire and uplift communities, making a lasting impact on hearts and souls.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

