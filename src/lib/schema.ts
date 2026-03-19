import { siteConfig } from '@/data/site-config';
import { reviews } from '@/data/reviews';

export function localBusinessSchema() {
  const sameAs = [
    siteConfig.social.google,
    siteConfig.social.instagram,
  ].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street || undefined,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2193,
      longitude: -122.5984,
    },
    hasMap: siteConfig.social.google,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'BC',
      availableLanguage: 'English',
    },
    areaServed: [
      { '@type': 'City', name: 'Maple Ridge', addressRegion: 'BC' },
      { '@type': 'City', name: 'Coquitlam', addressRegion: 'BC' },
      { '@type': 'City', name: 'Port Coquitlam', addressRegion: 'BC' },
      { '@type': 'City', name: 'Pitt Meadows', addressRegion: 'BC' },
      { '@type': 'City', name: 'Burnaby', addressRegion: 'BC' },
      { '@type': 'City', name: 'Vancouver', addressRegion: 'BC' },
      { '@type': 'City', name: 'Surrey', addressRegion: 'BC' },
      { '@type': 'City', name: 'Langley', addressRegion: 'BC' },
      { '@type': 'City', name: 'Delta', addressRegion: 'BC' },
      { '@type': 'City', name: 'White Rock', addressRegion: 'BC' },
      { '@type': 'City', name: 'New Westminster', addressRegion: 'BC' },
      { '@type': 'City', name: 'Richmond', addressRegion: 'BC' },
      { '@type': 'City', name: 'Abbotsford', addressRegion: 'BC' },
      { '@type': 'City', name: 'Tsawwassen', addressRegion: 'BC' },
      { '@type': 'City', name: 'Mission', addressRegion: 'BC' },
      { '@type': 'City', name: 'Chilliwack', addressRegion: 'BC' },
      { '@type': 'AdministrativeArea', name: 'Lower Mainland', addressRegion: 'BC' },
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 49.2193,
          longitude: -122.5984,
        },
        geoRadius: '80000',
      },
    ],
    sameAs,
    priceRange: '$$$',
    knowsAbout: [
      'Siding Installation',
      'Exterior Cladding',
      'Metal Flashing',
      'Building Envelope',
      'Window Replacement',
      'Door Replacement',
      'Home Renovation',
    ],
    founder: {
      '@type': 'Person',
      name: 'Brendan Prendergast',
      jobTitle: 'Owner',
    },
    foundingDate: '2018',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 5,
      bestRating: 5,
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.quote,
    })),
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'CA',
    },
    sameAs: [
      siteConfig.social.google,
      siteConfig.social.instagram,
    ].filter(Boolean),
    founder: {
      '@type': 'Person',
      name: 'Brendan Prendergast',
      jobTitle: 'Owner',
    },
    foundingDate: '2018',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 2,
      maxValue: 10,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(
  name: string,
  description: string,
  url: string,
  options?: { image?: string; category?: string; areaName?: string }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    ...(options?.image && { image: options.image }),
    serviceType: options?.category || name,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#business`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 5,
        bestRating: 5,
        reviewCount: reviews.length,
      },
    },
    areaServed: options?.areaName
      ? { '@type': 'City', name: options.areaName, addressRegion: 'BC' }
      : { '@type': 'AdministrativeArea', name: 'Lower Mainland', addressRegion: 'BC' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        },
      ],
    },
  };
}

export function productSchema(brand: {
  name: string;
  description: string;
  category: string;
  website: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: brand.name,
    description: brand.description,
    category: brand.category,
    url: brand.website,
    brand: {
      '@type': 'Brand',
      name: brand.name,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Lower Mainland',
        addressRegion: 'BC',
      },
      seller: {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#business`,
        name: siteConfig.name,
      },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(title: string, description: string, url: string, datePublished: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
