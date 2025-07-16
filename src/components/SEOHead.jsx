import { useEffect } from 'react';

const SEOHead = ({ 
  title,
  description,
  keywords,
  canonical,
  image = '/og-image.jpg',
  type = 'website',
  author = 'Naomi, M.S., CCC-SLP'
}) => {
  const baseUrl = 'https://naomisspeechtherapy.com'; // Update with actual domain
  const fullUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  const defaultTitle = "Naomi's Speech Therapy - Specialized Cleft Palate Treatment";
  const defaultDescription = "Expert cleft palate speech therapy by licensed SLP Naomi. ASHA certified with 10+ years experience. Comprehensive evaluations, individual therapy, and family training available.";
  const defaultKeywords = "cleft palate speech therapy, speech language pathologist, articulation therapy, resonance management, ASHA certified SLP, speech evaluation, family training";

  const metaTitle = title || defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;

  useEffect(() => {
    // Update document title
    document.title = metaTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);
      
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel, href) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`);
      
      if (linkTag) {
        linkTag.setAttribute('href', href);
      } else {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', rel);
        linkTag.setAttribute('href', href);
        document.head.appendChild(linkTag);
      }
    };

    // Basic SEO Meta Tags
    updateMetaTag('description', metaDescription);
    updateMetaTag('keywords', metaKeywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('theme-color', '#0D9488'); // Teal color
    
    // Language and locale
    updateMetaTag('language', 'en-US');
    updateLinkTag('canonical', fullUrl);

    // Open Graph Meta Tags (Facebook, LinkedIn, etc.)
    updateMetaTag('og:title', metaTitle, true);
    updateMetaTag('og:description', metaDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', fullImageUrl, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', 'Naomi\'s Speech Therapy - Professional Cleft Palate Treatment', true);
    updateMetaTag('og:site_name', 'Naomi\'s Speech Therapy', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', metaTitle);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', fullImageUrl);
    updateMetaTag('twitter:image:alt', 'Naomi\'s Speech Therapy - Professional Cleft Palate Treatment');
    updateMetaTag('twitter:creator', '@naomispeechtherapy');
    updateMetaTag('twitter:site', '@naomispeechtherapy');

    // WhatsApp Meta Tags
    updateMetaTag('whatsapp:title', metaTitle);
    updateMetaTag('whatsapp:description', metaDescription);
    updateMetaTag('whatsapp:image', fullImageUrl);

    // Telegram Meta Tags
    updateMetaTag('telegram:title', metaTitle);
    updateMetaTag('telegram:description', metaDescription);
    updateMetaTag('telegram:image', fullImageUrl);

    // Discord Meta Tags (uses Open Graph)
    updateMetaTag('discord:title', metaTitle);
    updateMetaTag('discord:description', metaDescription);
    updateMetaTag('discord:image', fullImageUrl);

    // TikTok Meta Tags
    updateMetaTag('tiktok:title', metaTitle);
    updateMetaTag('tiktok:description', metaDescription);
    updateMetaTag('tiktok:image', fullImageUrl);

    // Apple Meta Tags (for iMessage and Apple devices)
    updateMetaTag('apple-mobile-web-app-title', 'Naomi\'s Speech Therapy');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateLinkTag('apple-touch-icon', '/apple-touch-icon.png');

    // Microsoft Meta Tags
    updateMetaTag('msapplication-TileColor', '#0D9488');
    updateMetaTag('msapplication-TileImage', '/mstile-144x144.png');

    // Additional Social Media Optimization
    updateMetaTag('article:author', author, true);
    updateMetaTag('article:publisher', 'Naomi\'s Speech Therapy', true);
    
    // Business/Medical specific tags
    updateMetaTag('medical:specialty', 'Speech-Language Pathology');
    updateMetaTag('medical:condition', 'Cleft Palate');
    updateMetaTag('business:contact_data:street_address', '123 Healthcare Plaza, Suite 200');
    updateMetaTag('business:contact_data:locality', 'City'); // Update with actual city
    updateMetaTag('business:contact_data:phone_number', '+15551234567');
    updateMetaTag('business:contact_data:website', baseUrl);

    // JSON-LD Structured Data for Healthcare Provider
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Naomi's Speech Therapy",
      "description": metaDescription,
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`,
      "image": fullImageUrl,
      "telephone": "+1-555-123-4567",
      "email": "naomi@speechtherapy.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Healthcare Plaza, Suite 200",
        "addressLocality": "City", // Update with actual city
        "addressRegion": "State", // Update with actual state
        "postalCode": "12345", // Update with actual zip
        "addressCountry": "US"
      },
      "medicalSpecialty": "Speech-Language Pathology",
      "areaServed": "United States",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Master of Science in Speech-Language Pathology"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certificate of Clinical Competence (CCC-SLP)"
        }
      ],
      "provider": {
        "@type": "Person",
        "name": "Naomi",
        "jobTitle": "Speech-Language Pathologist",
        "hasCredential": "M.S., CCC-SLP"
      },
      "offers": [
        {
          "@type": "MedicalService",
          "name": "Comprehensive Speech Evaluation",
          "description": "60-90 minute assessment including speech analysis and treatment planning",
          "offers": {
            "@type": "Offer",
            "price": "425",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "MedicalService",
          "name": "Individual Speech Therapy",
          "description": "One-on-one therapy sessions for cleft palate speech treatment",
          "offers": {
            "@type": "Offer",
            "price": "175",
            "priceCurrency": "USD"
          }
        }
      ]
    };

    // Update or create JSON-LD script tag
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (jsonLdScript) {
      jsonLdScript.textContent = JSON.stringify(structuredData);
    } else {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(jsonLdScript);
    }

  }, [metaTitle, metaDescription, metaKeywords, fullUrl, fullImageUrl, author, type]);

  return null;
};

export default SEOHead;