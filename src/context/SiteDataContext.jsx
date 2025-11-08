import React from 'react';
import { createContext, useContext } from 'react';
import { books } from '../data/books';

const SiteDataContext = createContext();

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within SiteDataProvider');
  }
  return context;
};

export const SiteDataProvider = ({ children }) => {
  const bio = {
    name: 'Irfan Mohi-ud-din',
    email: 'mkirfanahmad@gmail.com',
    phone: ['7006791561', '8491065601'],
    location: 'Nully Poshwari, Shopian (J&K), India',
    born: '1999',
    roles: ['Author', 'Imam', 'Khateeb', 'Teacher', 'Motivational Speaker'],
    tagline: 'Irfan Mohi-ud-din — Young Kashmiri Author, Imam, Khateeb, Teacher & Motivational Speaker.',
    websiteHeading: 'Words that awaken hearts and guide the soul.',
    shortBio: 'Irfan Mohi-ud-din is a Kashmiri author, imam, khateeb, and teacher from Nully Poshwari, Shopian (born 1999). He completed his Maulvi Fazil in 2018 and earned his Post Graduation in Islamic Studies in 2020. Presently, he is working as a Bahaadati Ustaad (senior teacher), while continuing his literary and religious mission. His first book, Lafzon Ke Aansoo (2025), reflects his heartfelt emotions and spiritual journey. His upcoming works include Safar-e-Dil (An Eternal Story), Ek Kadmon Ka Safar, and Dilon Ki Sada — each capturing the essence of love, faith, and human struggle.',
    fullBio: `Irfan Mohi-ud-din is a Kashmiri writer, imam, khateeb, teacher, and motivational speaker from Nully Poshwari, Shopian.

Born in 1999, he developed an early love for words, faith, and reflection — transforming his emotions and life experiences into writing that touches the soul.

He completed his Maulvi Fazil degree in 2018, laying a strong foundation in Islamic scholarship, and later achieved his Post Graduation in Islamic Studies in 2020. Alongside his academic journey, Irfan Mohi-ud-din started working as a Bahaadati Ustaad, where he continues to teach, guide, and inspire young students with a blend of spirituality, education, and moral discipline.

As an imam and khateeb, he has delivered numerous sermons and lectures across mosques and educational institutions, encouraging youth to find hope, patience, and direction in their faith. His voice has become a source of guidance for many seeking peace and purpose in life.

His first published work, Lafzon Ke Aansoo (2025), is a deeply emotional and reflective book based on true experiences — portraying love, loss, hope, and the search for inner peace.

Following its success, Irfan Mohi-ud-din is working on new titles:

Safar-e-Dil (An Eternal Story) — a soulful journey through love and faith

Ek Kadmon Ka Safar — the steps of struggle and perseverance

Dilon Ki Sada — the echoes of emotion, pain, and remembrance

Apart from writing, he is also a motivational speaker and community leader, addressing social issues such as depression, addiction, and moral decline among youth, guiding them back to righteousness through education and faith.

His literary and religious works have been featured across Kashmiri newspapers, digital platforms, and media outlets, recognizing him as a promising and influential young voice from Shopian.`
  };

  const siteData = {
    bio,
    books
  };

  return (
    <SiteDataContext.Provider value={siteData}>
      {children}
    </SiteDataContext.Provider>
  );
};

