export const books = [
  {
    id: 'lafzoon-kay-aansoo',
    title: 'Lafzoon Kay Aansoo',
    subtitle: 'Tears of Words',
    releaseDate: '21 October 2025',
    isPublished: true,
    description: 'A deeply emotional and reflective book based on true experiences — portraying love, loss, hope, and the search for inner peace.',
    fullDescription: 'Lafzoon Kay Aansoo (Tears of Words) is Irfan Mohiuddin\'s first published work, scheduled for release on 21 October 2025. This deeply emotional and reflective book is based on true experiences, portraying love, loss, hope, and the search for inner peace. Through heartfelt words, the author takes readers on a spiritual journey that touches the soul and awakens the heart.',
    image: 'https://res.cloudinary.com/dw1sh368y/image/upload/v1762829904/lafzonkyansoobook_dqwb92.webp'
  },
  {
    id: 'safar-e-dil',
    title: 'Safar-e-Dil',
    subtitle: 'An Eternal Story',
    releaseDate: 'Coming Soon',
    isPublished: false,
    description: 'A soulful journey through love and faith.',
    fullDescription: 'Safar-e-Dil (An Eternal Story) is an upcoming work that promises to take readers on a soulful journey through love and faith. This book explores the eternal nature of spiritual connections and the profound impact of faith on the human experience.',
    image: 'https://res.cloudinary.com/dw1sh368y/image/upload/v1762829898/saferidilbook_vw6ivd.webp'
  },
  {
    id: 'ek-kadmon-ka-safar',
    title: 'Ek Kadmon Ka Safar',
    releaseDate: 'Coming Soon',
    isPublished: false,
    description: 'The steps of struggle and perseverance.',
    fullDescription: 'Ek Kadmon Ka Safar captures the essence of struggle and perseverance. Through this work, the author shares insights into the journey of life, where each step teaches valuable lessons about resilience, determination, and the strength found in faith.',
    image: 'https://res.cloudinary.com/dw1sh368y/image/upload/v1762829879/ekkadamkadsafarbook_zwfpqa.webp'
  },
  {
    id: 'dilon-ki-sada',
    title: 'Dilon Ki Sada',
    releaseDate: 'Coming Soon',
    isPublished: false,
    description: 'The echoes of emotion, pain, and remembrance.',
    fullDescription: 'Dilon Ki Sada (The Echoes of Hearts) is a powerful exploration of emotion, pain, and remembrance. This upcoming work delves into the depths of human experience, capturing the echoes of feelings that resonate within the heart and soul.',
    image: 'https://res.cloudinary.com/dw1sh368y/image/upload/v1762829896/dilonkasafarbook_tgxdfh.webp'
  }
];

export const getBookById = (id) => {
  return books.find(book => book.id === id);
};

export const getPublishedBooks = () => {
  return books.filter(book => book.isPublished);
};

export const getUpcomingBooks = () => {
  return books.filter(book => !book.isPublished);
};

