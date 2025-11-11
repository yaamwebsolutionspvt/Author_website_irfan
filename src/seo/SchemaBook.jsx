import React, { useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext';

const SchemaBook = ({ book }) => {
  const { bio } = useSiteData();
  const baseUrl = 'https://irfanmohiuddin.in';

  useEffect(() => {
    if (!book) return;

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: book.title,
      description: book.fullDescription || book.description,
      author: {
        '@type': 'Person',
        name: bio.name,
        url: baseUrl
      },
      datePublished: book.isPublished ? book.releaseDate : undefined,
      bookFormat: 'https://schema.org/Hardcover',
      inLanguage: 'ur',
      publisher: {
        '@type': 'Organization',
        name: 'Irfan Mohiuddin'
      },
      image: book.image || `${baseUrl}/images/bookcover.png`,
      url: `${baseUrl}/books/${book.id}`
    };

    // Remove undefined fields
    Object.keys(schemaData).forEach(key => {
      if (schemaData[key] === undefined) {
        delete schemaData[key];
      }
    });

    // Remove existing schema script if any
    let existingScript = document.querySelector('script[type="application/ld+json"][data-schema="book"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append new schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'book');
    script.textContent = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [book, bio]);

  return null;
};

export default SchemaBook;

