export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://gig-shield.com/#organization",
    "name": "Gig Shield",
    "legalName": "Gig Shield Insurance Services",
    "url": "https://gig-shield.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gig-shield.com/logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://gig-shield.com/og-image.jpg",
    "description": "Leading provider of affordable insurance coverage for gig workers, freelancers, delivery drivers, and independent contractors in India. Starting at just ₹40/month.",
    "email": "contact@gig-shield.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@gig-shield.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.linkedin.com/company/gigshield",
      "https://twitter.com/GigShield",
      "https://www.instagram.com/gigshield"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://gig-shield.com/#service",
    "serviceType": "Gig Worker Insurance",
    "name": "Gig Worker and Freelancer Insurance Coverage",
    "description": "Comprehensive insurance coverage for gig workers, freelancers, and independent contractors including accident coverage, medical reimbursement, hospital cash benefits, and disability protection. Starting at ₹40/month.",
    "provider": {
      "@id": "https://gig-shield.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Insurance Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Accident Cover",
            "description": "Up to ₹5 lakhs coverage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Medical Expense Reimbursement",
            "description": "Up to ₹2 lakhs coverage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Hospital Cash Benefit",
            "description": "₹500-₹1000 per day"
          }
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://gig-shield.com",
      "priceCurrency": "INR",
      "lowPrice": "40",
      "highPrice": "60",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "offerCount": "3"
    },
    "brand": {
      "@type": "Brand",
      "name": "Gig Shield"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Gig Shield helped us insure over 800 workers with zero hassle. The onboarding was incredibly smooth and affordable."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Organization",
          "name": "Mumbai Logistics Pvt Ltd"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Best insurance partner for our delivery fleet. WhatsApp claims are game-changer!"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": "https://gig-shield.com/#business",
    "name": "Gig Shield Insurance Services",
    "image": "https://gig-shield.com/og-image.jpg",
    "url": "https://gig-shield.com",
    "email": "contact@gig-shield.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "priceRange": "₹40-₹60",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://gig-shield.com/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of gig worker insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gig Shield offers affordable insurance plans starting from just ₹40 per month per worker. The exact cost varies between ₹40-₹60 depending on the coverage type and add-ons selected. We provide transparent pricing with no hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "Who can benefit from Gig Shield insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gig Shield is designed for employers hiring gig workers, contract workers, temporary staff, and freelancers across industries like logistics, delivery, housekeeping, construction, manpower agencies, retail, and on-demand services. It helps businesses reduce attrition, improve compliance, and provide essential insurance benefits to their workforce."
        }
      },
      {
        "@type": "Question",
        "name": "What types of insurance coverage are included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gig Shield provides comprehensive coverage including Personal Accident Insurance (up to ₹5 lakhs for accidental death and disability), Medical Expense Reimbursement (up to ₹2 lakhs), Hospital Cash Benefits (₹500-₹1000 per day), Disability Coverage, and optional add-ons for enhanced protection. All claims are processed quickly through our WhatsApp-based system."
        }
      },
      {
        "@type": "Question",
        "name": "How does the WhatsApp claims process work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our claims process is simple and fast: 1) Worker reports incident via WhatsApp, 2) Submit required documents through chat, 3) Our team verifies the claim within 24 hours, 4) Claim approved and processed, 5) Receive payout directly. No paperwork hassles, no long waiting times - everything is handled digitally through WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly are claims settled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Claims are typically settled within 7-15 days after verification. Our WhatsApp-based digital process eliminates traditional paperwork delays, ensuring faster processing and payouts directly to the beneficiary."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://gig-shield.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://gig-shield.com/contact"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://gig-shield.com/#website",
    "url": "https://gig-shield.com",
    "name": "Gig Shield",
    "description": "Affordable insurance for gig workers in India",
    "publisher": {
      "@id": "https://gig-shield.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://gig-shield.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
