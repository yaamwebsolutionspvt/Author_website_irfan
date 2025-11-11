import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage
}) => {
  const location = useLocation();
  const baseUrl = 'https://irfanmohiuddin.in'; // Update with actual domain
  const currentUrl = canonical || `${baseUrl}${location.pathname}`;
  const finalTitle = title ? `${title} | Irfan Mohiuddin` : 'Irfan Mohiuddin Young Kashmiri Author, Imam, Khateeb, Teacher & Motivational Speaker.';
  const finalDescription = description || 'Irfan Mohiuddin is a Kashmiri author, imam, khateeb, teacher, and motivational speaker. Words that awaken hearts and guide the soul.';
  const finalKeywords = keywords || 'Irfan Mohiuddin, Kashmiri author, Imam, Khateeb, Teacher, Motivational Speaker, Lafzoon Kay Aansoo, Kashmiri literature, Islamic scholar, Shopian';
  const finalOgTitle = ogTitle || finalTitle;
  const finalOgDescription = ogDescription || finalDescription;
  const finalOgImage = ogImage || `${baseUrl}/images/hero-author-portrait.jpg`;
  const finalTwitterTitle = twitterTitle || finalTitle;
  const finalTwitterDescription = twitterDescription || finalDescription;
  const finalTwitterImage = twitterImage || finalOgImage;

  useEffect(() => {
    // Update title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update description
    updateMetaTag('description', finalDescription);

    // Update keywords
    updateMetaTag('keywords', finalKeywords);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Open Graph tags
    updateMetaTag('og:title', finalOgTitle, true);
    updateMetaTag('og:description', finalOgDescription, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', finalOgImage, true);
    updateMetaTag('og:site_name', 'Irfan Mohiuddin', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', finalTwitterTitle);
    updateMetaTag('twitter:description', finalTwitterDescription);
    updateMetaTag('twitter:image', finalTwitterImage);
  }, [
    finalTitle, 
    finalDescription, 
    finalKeywords, 
    currentUrl,
    finalOgTitle,
    finalOgDescription,
    finalOgImage,
    ogType,
    twitterCard,
    finalTwitterTitle,
    finalTwitterDescription,
    finalTwitterImage
  ]);

  return null;
};

export default SEO;

