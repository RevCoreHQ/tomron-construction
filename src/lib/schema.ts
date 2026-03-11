import { siteConfig } from '@/data/site-config';

export function localBusinessSchema() {
  const sameAs = [
    siteConfig.url,
    siteConfig.social.google,
    siteConfig.social.facebook,
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
    logo: {
      '@type': 'ImageObject',
      url: 'https://storage.googleapis.com/msgsndr/VpxNeZuIvxjzZljfxNjd/media/6991e27365ad362154b97372.png',
    },
    image: siteConfig.ogImage,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street || undefined,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.3442899,
      longitude: -111.91013,
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
      areaServed: 'UT',
      availableLanguage: 'English',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Utah County', addressRegion: 'UT' },
      { '@type': 'AdministrativeArea', name: 'Salt Lake County', addressRegion: 'UT' },
      { '@type': 'AdministrativeArea', name: 'Davis County', addressRegion: 'UT' },
      { '@type': 'AdministrativeArea', name: 'Summit County', addressRegion: 'UT' },
      { '@type': 'AdministrativeArea', name: 'Tooele County', addressRegion: 'UT' },
      { '@type': 'AdministrativeArea', name: 'Box Elder County', addressRegion: 'UT' },
    ],
    sameAs,
    priceRange: '$$$$',
    knowsAbout: [
      'Swimming Pool Construction',
      'Pool Installation Utah',
      'Landscape Construction',
      'Concrete Services',
      'Outdoor Living Construction',
      'Retaining Walls',
      'Outdoor Kitchens',
      'Artificial Turf Installation',
    ],
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

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${siteConfig.url}/#business`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: {
      '@type': 'State',
      name: 'Utah',
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
