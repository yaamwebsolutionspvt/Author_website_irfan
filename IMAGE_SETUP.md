# Image Setup Guide

This document outlines where images have been integrated into the website and what you need to do to complete the setup.

## Image Integration Summary

### ✅ Images Already Integrated

All three author images have been integrated into the website components:

#### 1. Hero Section (Homepage)
- **File**: `src/components/Hero.jsx`
- **Image Path**: `/images/hero-author-portrait.jpg`
- **Description**: Outdoor portrait in garden setting (Image 3 from your collection)
- **Usage**: 
  - Featured prominently in the hero section
  - Used as default Open Graph image for social media sharing
  - Responsive layout with text content

#### 2. About Page
- **File**: `src/pages/About.jsx`
- **Image Path**: `/images/about-author-library.jpg`
- **Description**: Portrait in library/study with bookshelves (Image 1 from your collection)
- **Usage**:
  - Featured image above the biography section
  - Used as Open Graph image for the About page
  - Responsive with proper spacing

#### 3. Contact Page
- **File**: `src/pages/Contact.jsx`
- **Image Path**: `/images/contact-author-cafe.jpg`
- **Description**: Portrait in cafe/bookstore setting (Image 2 from your collection)
- **Usage**:
  - Featured in the hero section alongside contact heading
  - Used as Open Graph image for the Contact page
  - Two-column responsive layout

## 📋 Action Required

### Step 1: Add Images to Project

Place the three images in the `public/images/` directory with these exact filenames:

1. `hero-author-portrait.jpg` - Garden/outdoor portrait
2. `about-author-library.jpg` - Library/study portrait
3. `contact-author-cafe.jpg` - Cafe/bookstore portrait

### Step 2: Image Optimization (Recommended)

For best performance, optimize images before adding them:

- **Recommended sizes**:
  - Hero image: 1200x800px (3:2 ratio)
  - About image: 1200x800px (3:2 ratio)
  - Contact image: 1000x800px (5:4 ratio)

- **File size**: Aim for < 500KB per image
- **Tools**: Use TinyPNG, ImageOptim, or Squoosh for compression
- **Format**: JPEG is fine, WebP is better (with fallback)

### Step 3: Verify Images Load

After adding images:

1. Start the development server: `npm run dev`
2. Check each page:
   - Homepage: Hero section should show the garden portrait
   - About page: Library portrait should appear above biography
   - Contact page: Cafe portrait should appear in hero section
3. Test responsiveness on different screen sizes
4. Verify images have proper alt text (already implemented)

## 🎨 Image Features Implemented

### Responsive Design
- All images are responsive and scale properly on mobile, tablet, and desktop
- Images use `object-cover` for proper aspect ratio maintenance

### Performance Optimization
- Hero image uses `loading="eager"` for immediate display
- Other images use `loading="lazy"` for better performance
- Proper image sizing prevents layout shift

### SEO Optimization
- All images have descriptive alt text for accessibility and SEO
- Images are referenced in Open Graph meta tags for social sharing
- Proper semantic HTML structure

### Visual Design
- Images have shadow effects for depth
- Rounded corners for modern aesthetic
- Proper spacing and layout integration
- Gradient overlays where appropriate

## 📍 Image Locations in Code

### Hero Component
- File: `src/components/Hero.jsx`
- Lines: 49-57
- Layout: Two-column grid (text + image)

### About Page
- File: `src/pages/About.jsx`
- Lines: 54-61
- Layout: Centered, above biography content

### Contact Page
- File: `src/pages/Contact.jsx`
- Lines: 78-85
- Layout: Two-column grid (text + image)

### SEO Integration
- File: `src/seo/SEO.jsx`
- Default OG image: `hero-author-portrait.jpg`
- Page-specific images set in each page component

## 🚀 Next Steps

1. **Add the images** to `public/images/` directory
2. **Test the website** to ensure images load correctly
3. **Optimize images** if file sizes are too large
4. **Verify social sharing** - test Open Graph images on Facebook/Twitter debuggers
5. **Check mobile responsiveness** - ensure images look good on all devices

## 📝 Notes

- Images are referenced from the `public` directory, so paths start with `/images/`
- All images already have proper alt text for accessibility
- The website will work without images (placeholder behavior), but images should be added for production
- Consider creating multiple image sizes for different screen densities (retina displays)

## 🔍 Testing Checklist

- [ ] Hero image appears on homepage
- [ ] About page image appears above biography
- [ ] Contact page image appears in hero section
- [ ] Images are responsive on mobile devices
- [ ] Images load quickly (< 2 seconds)
- [ ] Alt text is visible in browser (inspect element)
- [ ] Social sharing previews show correct images (test with Facebook/Twitter debuggers)

---

**Need Help?** If you encounter any issues with images, check:
1. File names match exactly (case-sensitive)
2. Images are in `public/images/` directory
3. Image file formats are supported (JPEG, PNG, WebP)
4. Browser console for any 404 errors

