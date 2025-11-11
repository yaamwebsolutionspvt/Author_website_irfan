import React, { useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext';
import { books } from '../data/books';

const SchemaAuthor = () => {
  const { bio } = useSiteData();
  const baseUrl = 'https://irfanmohiuddin.in'; // Update with actual domain

  useEffect(() => {
    // Published books
    const publishedBooks = books
      .filter(book => book.isPublished)
      .map(book => ({
        '@type': 'Book',
        name: book.title,
        description: book.description,
        datePublished: book.releaseDate,
        author: {
          '@type': 'Person',
          name: bio.name
        }
      }));

    // Create schema data
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: bio.name,
      description: 'Kashmiri author, imam, khateeb, teacher, and motivational speaker',
      jobTitle: bio.roles,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nully Poshwari',
        addressRegion: 'Shopian, J&K',
        addressCountry: 'India'
      },
      birthDate: bio.born,
      email: bio.email,
      telephone: bio.phone,
      url: baseUrl,
      sameAs: [
        bio.socialMedia?.facebook,
        bio.socialMedia?.twitter,
        bio.socialMedia?.instagram,
        bio.socialMedia?.linkedin,
        bio.socialMedia?.youtube
      ].filter(Boolean), // Filter out undefined/null values
      knowsAbout: ['Islamic Studies', 'Kashmiri Literature', 'Religious Education', 'Motivational Speaking'],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Maulvi Fazil, Post Graduation in Islamic Studies'
      },
      worksFor: {
        '@type': 'Organization',
        name: 'Bahaadati Ustaad'
      }
    };

    // Add published works if any
    if (publishedBooks.length > 0) {
      schemaData.creator = publishedBooks;
    }

    // Remove existing schema script if any
    let existingScript = document.querySelector('script[type="application/ld+json"][data-schema="author"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append new schema script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'author');
    script.textContent = JSON.stringify(schemaData, null, 2);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [bio]);

  return null;
};

export default SchemaAuthor;

