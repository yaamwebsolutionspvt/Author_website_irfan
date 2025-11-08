import React from 'react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteDataContext';

const Footer = () => {
  const { bio } = useSiteData();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Irfan Mohi-ud-din
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {bio.websiteHeading}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href={`mailto:${bio.email}`} className="hover:text-gray-900 transition-colors">
                  {bio.email}
                </a>
              </li>
              <li>
                <a href={`tel:${bio.phone[0]}`} className="hover:text-gray-900 transition-colors">
                  {bio.phone[0]}
                </a>
              </li>
              <li className="pt-2">
                {bio.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Irfan Mohi-ud-din. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

