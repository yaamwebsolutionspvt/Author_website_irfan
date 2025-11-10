import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaNewspaper, FaInstagram } from 'react-icons/fa';

const PressArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Young Kashmiri Author Irfan Mohiuddin Inspires Hearts with His Debut Book \"Lafzon Ke Aansoo\"",
      source: "AUYK Blogs",
      sourceUrl: "https://blog.aaounheyaadkarai.in/2025/10/young-kashmiri-author-irfan-mohiuddin.html",
      description: "Irfan Mohiuddin is a young, passionate, and multi-talented individual born in the peaceful and beautiful village of Nully Poshwari, Shopian District. Through his sermons and teaching, he has inspired many young minds to walk on the path of truth and light.",
      date: "October 18, 2025",
      category: "Author Spotlight"
    },
    {
      id: 2,
      title: "Young Kashmiri Author Irfan Mohiuddin Inspires Hearts with His Debut Book \"Lafzon Ke Aansoo\"",
      source: "Deccan Live",
      sourceUrl: "https://www.deccanlive.in/2025/10/young-kashmiri-author-irfan-mohiuddin.html",
      description: "From the very beginning of his life, Irfan Mohiuddin has had a deep connection with knowledge, spirituality, and literature. \"Lafzon Ke Aansoo\" is not just a book — it is a reflection of his heart, his emotions, his struggles, his tears, and his dreams.",
      date: "October 18, 2025",
      category: "Literature"
    },
    {
      id: 3,
      title: "Young Kashmiri Author Irfan Mohiuddin Inspires Hearts with His Debut Book \"Lafzon Ke Aansoo\"",
      source: "Eternity Times",
      sourceUrl: "https://www.eternitytimes.com/2025/10/young-kashmiri-author-irfan-mohiuddin.html",
      description: "What makes Irfan Mohiuddin unique is his ability to express emotions with purity. His poetry and storytelling style take the reader on a journey — a journey of the heart, the soul, and the unspoken emotions.",
      date: "October 18, 2025",
      category: "Author Feature"
    },
    {
      id: 4,
      title: "Irfan Mohiuddin Inspires Hearts with His Debut Book \"Lafzon Ke Aansoo\"",
      source: "Network KNT",
      sourceUrl: "https://networkknt.com/2025/10/21/irfan-mohiuddin-inspires-hearts-with-his-debut-book-lafzon-ke-aansoo/",
      description: "As a young, determined, and spiritually grounded author from Nully Poshwari, Irfan Mohiuddin dreams to leave a lasting impact on society through his words. He believes that a pen can heal hearts, and literature can change lives.",
      date: "October 21, 2025",
      category: "Inspiration"
    },
    {
      id: 5,
      title: "Young Kashmiri Author Irfan Mohiuddin Inspires Hearts with His Debut Book \"Lafzon Ke Aansoo\"",
      source: "R9 News",
      sourceUrl: "https://r9news.in/2025/10/23/young-kashmiri-author-irfan-mohiuddin-inspires-hearts-with-his-debut-book-lafzon-ke-aansoo/",
      description: "Irfan Mohiuddin's journey does not end here. Along with \"Lafzon Ke Aansoo\", his next upcoming books — \"Dilon Ki Sada\" and \"An Eternal Story\" — are already in progress.",
      date: "October 23, 2025",
      category: "News"
    },
    {
      id: 6,
      title: "Young Kashmiri Author Irfan Mohiuddin Inspires Hearts with His Debut Book \"Lafzon Ke Aansoo\"",
      source: "India Times Now",
      sourceUrl: "https://indiatimesnow.in/young-kashmiri-author-irfan-mohiuddin-inspires-hearts-with-his-debut-book-lafzon-ke-aansoo/",
      description: "Through his writings, Irfan Mohiuddin wants to give strength to those who are broken, hope to those who have lost their way, and a voice to those who stay silent.",
      date: "October 2025",
      category: "Media Coverage"
    },
    {
      id: 7,
      title: "Young Kashmiri Author Irfan Mohiuddin Inspires Hearts with His Debut Book \"Lafzon Ke Aansoo\"",
      source: "Nevs Asia",
      sourceUrl: "https://www.nevsasia.com/2025/10/young-kashmiri-author-irfan-mohiuddin.html?m=1",
      description: "Irfan Mohiuddin pursued his education in Urdu and Islamic Studies, which became the solid foundation for his intellectual and spiritual growth. Along with his academic journey, he has dedicated his life to serving people as a teacher, Khateeb, and Imam.",
      date: "October 2025",
      category: "Feature Story"
    },
    {
      id: 8,
      title: "Young Kashmiri Author Irfan Mohiuddin",
      source: "Dhunt",
      sourceUrl: "https://dhunt.in/12g2DG",
      description: "A young author from Kashmir making waves in the literary world with his debut book \"Lafzon Ke Aansoo\", touching hearts and inspiring minds across generations.",
      date: "October 2025",
      category: "Social Media"
    },
    {
      id: 9,
      title: "Irfan Mohiuddin - Author Spotlight",
      source: "Instagram",
      sourceUrl: "https://www.instagram.com/p/DP9XB23En-k/?igsh=NHo2OHk0bW1rdXJy",
      description: "Discover the inspiring journey of young Kashmiri author Irfan Mohiuddin and his debut book \"Lafzon Ke Aansoo\" that is inspiring hearts across the valley and beyond.",
      date: "October 2025",
      category: "Social Media"
    }
  ];

  const getSourceIcon = (source) => {
    const sourceLower = source.toLowerCase();
    if (sourceLower.includes('instagram')) {
      return <FaInstagram className="w-4 h-4 text-pink-600" />;
    }
    return <FaNewspaper className="w-4 h-4 text-gray-600" />;
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group relative"
          >
            <div className="p-6 h-full flex flex-col relative z-10">
              {/* Source Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    {getSourceIcon(article.source)}
                  </div>
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {article.source}
                  </span>
                </div>
                {article.category && (
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-gray-200 transition-colors">
                    {article.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors leading-tight">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                {article.description}
              </p>

              {/* Date and Link */}
              <div className="mt-auto pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {article.date}
                  </span>
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-md transition-all duration-200 group/link"
                    aria-label={`Read article on ${article.source}`}
                  >
                    <span>Read Article</span>
                    <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-lg transition-colors duration-300 pointer-events-none" />
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default PressArticles;

